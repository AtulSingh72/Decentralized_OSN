import React, { Component } from 'react'
import PostFactory from '../ethereum/factory'
import PostContract from '../ethereum/build/Post.json'
import ipfs from '../ethereum/ipfs'
import { web3, metamask_provider } from '../ethereum/web3'
import Head from 'next/head'
import TweetForm from '../componenets/TweetForm/TweetForm'
import TweetCard from '../componenets/TweetCard/TweetCard'
import LoadingCard from '../componenets/LoadingCard/LoadingCard'
import ZoomedImage from '../componenets/ZoomedImage/ZoomedImage'
import MetamaskCard from '../componenets/MetamaskCard/MetamaskCard'
import DonateCard from '../componenets/DonateCard/DonateCard'
import Navbar from '../componenets/Navbar/Navbar'

let accounts = []

class PostIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: this.props.posts,
      buffer: null,
      content: '',
      zoomed: null,
      loading: 0,
      uploading: false,
      matamask: true,
      is_donate: false,
      min_tip: 0,
      value: 0,
      tip_post_key: 0,
      donating: false,
      disable_transact_okay: true,
    }
  }

  async componentDidMount() {
    accounts = await web3.eth.getAccounts()
  }

  isLoaded = () => {
    this.setState((prevState, props) => ({
      loading: prevState.loading + 1,
    }))
  }

  static async getInitialProps() {
    const posts = await PostFactory.methods.getPosts().call()
    let new_posts = await (async function (posts) {
      let new_posts = []
      for (let i = 0; i < posts.length; i++) {
        const Post = new web3.eth.Contract(
          JSON.parse(PostContract.interface),
          posts[i],
        )
        const currentPost = {
          address: posts[i],
          imageUrl: await Post.methods.image_hash().call(),
          author: await Post.methods.author().call(),
          content: await Post.methods.content().call(),
          comments: [],
        }
        new_posts.push(currentPost)
      }
      return new_posts
    })(posts)
    return { posts: new_posts }
  }

  isdonatebuttonon = (event) => {
    event.preventDefault()
    let new_value = true
    if (event.target.value >= this.state.min_tip) {
      new_value = false
    }
    this.setState({
      value: event.target.value,
      disable_transact_okay: new_value,
    })
  }

  captureFile = (event) => {
    event.preventDefault()
    event.stopPropagation()
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      this.setState({ buffer: Buffer(reader.result) })
    }
  }

  takeback = (event) => {
    event.preventDefault()
    this.setState({ metamask: true, is_donate: false })
  }

  donate = async (event) => {
    event.persist()
    event.stopPropagation()
    event.preventDefault()
    let tip = await PostFactory.methods.min_contribution().call()
    tip = web3.utils.fromWei(tip, 'ether')
    this.setState({
      is_donate: true,
      min_tip: tip,
      tip_post_key: event.target.getAttribute('data-index'),
    })
  }

  transact = async (event) => {
    event.persist()
    event.preventDefault()
    accounts = await web3.eth.getAccounts()
    if (metamask_provider == false || accounts.length == 0) {
      this.setState({ metamask: false, is_donate: false })
    } else {
      this.setState({ metamask: true, donating: true })
      const index = this.state.tip_post_key
      const address = await PostFactory.methods.deployedPosts(index).call()
      const post = new web3.eth.Contract(
        JSON.parse(PostContract.interface),
        address,
      )
      await post.methods.receiveContribution().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, 'ether'),
      })
      this.setState({
        metamask: true,
        value: 0,
        is_donate: false,
        donating: false,
      })
    }
  }

  commentHide = async (event) => {
    event.preventDefault()
    event.stopPropagation()
    const index = event.target.getAttribute('data-index')
    var comments_div = document.getElementById('comments' + index)
    if (comments_div.style.display === 'none') {
      comments_div.style.display = 'block'
    } else {
      comments_div.style.display = 'none'
    }
    const posts = await PostFactory.methods.getPosts().call()
    const Post = new web3.eth.Contract(
      JSON.parse(PostContract.interface),
      posts[index],
    )
    const comments_address = await Post.methods.getComments().call()
    if (
      comments_address.length != 0 &&
      typeof comments_address[0] == 'string'
    ) {
      const comments = await (async function (comments_address) {
        let new_comments = []
        for (let i = 0; i < comments_address.length; i++) {
          const Comment = new web3.eth.Contract(
            JSON.parse(PostContract.interface),
            comments_address[i],
          )
          const currentComment = {
            address: comments_address[i],
            imageUrl: await Comment.methods.image_hash().call(),
            author: await Comment.methods.author().call(),
            content: await Comment.methods.content().call(),
          }
          new_comments.push(currentComment)
        }
        return new_comments
      })(comments_address)
      let new_posts = this.state.posts
      new_posts[index].comments = comments
      this.setState({ posts: new_posts })
    }
  }

  postComment = async (event) => {
    event.persist()
    event.preventDefault()
    event.stopPropagation()
    accounts = await web3.eth.getAccounts()
    const parent_index = event.target.getAttribute('data-index')
    if (metamask_provider == false || accounts.length == 0) {
      this.setState({ metamask: false })
    } else {
      this.setState({ metamask: true, uploading: true })
      ipfs.files.add(this.state.buffer, async (error, result) => {
        if (error) {
          console.error(error)
          return
        }
        const parent_address = await PostFactory.methods
          .deployedPosts(parent_index)
          .call()
        await PostFactory.methods
          .createComment(parent_address, result[0].hash, this.state.content)
          .send({ from: accounts[0] })
        const parent_post = new web3.eth.Contract(
          JSON.parse(PostContract.interface),
          parent_address,
        )
        const comments_address = await parent_post.methods.getComments().call()
        let new_posts = this.state.posts
        const comments = await (async function (comments_address) {
          let new_comments = []
          for (let i = 0; i < comments_address.length; i++) {
            const Comment = new web3.eth.Contract(
              JSON.parse(PostContract.interface),
              comments_address[i],
            )
            const currentComment = {
              imageUrl: await Comment.methods.image_hash().call(),
              author: await Comment.methods.author().call(),
              content: await Comment.methods.content().call(),
            }
            new_comments.push(currentComment)
          }
          return new_comments
        })(comments_address)
        new_posts[parent_index].comments = comments
        this.setState({
          posts: new_posts,
          content: '',
          uploading: false,
        })
        const file_uploader = document.getElementById('file_upload_2')
        file_uploader.value = ''
      })
    }
  }

  onSubmit = async (event) => {
    event.preventDefault()
    accounts = await web3.eth.getAccounts()
    if (metamask_provider == false || accounts.length == 0) {
      this.setState({ metamask: false })
    } else {
      this.setState({ metamask: true, uploading: true })
      ipfs.files.add(this.state.buffer, async (error, result) => {
        if (error) {
          console.error(error)
          return
        }
        await PostFactory.methods
          .createPost(result[0].hash, this.state.content)
          .send({ from: accounts[0] })
        const posts = await PostFactory.methods.getPosts().call()
        let new_posts = await (async function (posts) {
          let new_posts = []
          for (let i = 0; i < posts.length; i++) {
            const Post = new web3.eth.Contract(
              JSON.parse(PostContract.interface),
              posts[i],
            )
            const currentPost = {
              imageUrl: await Post.methods.image_hash().call(),
              author: await Post.methods.author().call(),
              content: await Post.methods.content().call(),
              comments: await Post.methods.getComments().call(),
            }
            new_posts.push(currentPost)
          }
          return new_posts
        })(posts)
        this.setState({
          posts: new_posts,
          content: '',
          uploading: false,
        })
        const file_uploader = document.getElementById('file_upload')
        file_uploader.value = ''
      })
    }
  }

  imageZoom = async (event) => {
    event.preventDefault()
    event.stopPropagation()
    if (this.state.zoomed !== null) {
      this.setState({ zoomed: null })
    } else {
      this.setState({ zoomed: event.target.getAttribute('src') })
    }
  }

  readContent = (event) => {
    event.preventDefault()
    event.stopPropagation()
    this.setState({ content: event.target.value })
  }

  render() {
    return (
      <div className="row" style={{}}>
        <Head>
          <title>DOSN</title>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
            crossorigin="anonymous"
          ></link>
          <script
            src="https://kit.fontawesome.com/2c322db396.js"
            crossorigin="anonymous"
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
            integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
            crossorigin="anonymous"
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
            integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
            crossorigin="anonymous"
          ></script>
          <script src="https://cdn.jsdelivr.net/npm/jdenticon@2.2.0"></script>
        </Head>
        <div
          className="col-lg-3"
          style={{
            position: 'relative',
            textAlign: 'right',
          }}
        >
          <Navbar />
        </div>
        <div className="container col-lg-9">
          {this.state.is_donate == true && (
            <DonateCard
              min_tip={this.state.min_tip}
              isdonatebuttonon={this.isdonatebuttonon}
              takeback={this.takeback}
              transact={this.transact}
              disable_transact_okay={this.state.disable_transact_okay}
              donating={this.state.donating}
            />
          )}
          {this.state.metamask == false && (
            <MetamaskCard takeback={this.takeback} />
          )}
          {this.state.loading != this.state.posts.length && <LoadingCard />}
          {this.state.zoomed !== null && (
            <ZoomedImage
              zoomed={this.state.zoomed}
              imageZoom={this.imageZoom}
            />
          )}
          <TweetForm
            content={this.state.content}
            uploading={this.state.uploading}
            submit={this.onSubmit}
            readContent={this.readContent}
            captureFile={this.captureFile}
          />
          <div>
            {this.state.posts
              .slice(0)
              .reverse()
              .map((post, index) => (
                <TweetCard
                  postLength={this.state.posts.length}
                  post={post}
                  index={index}
                  imageZoom={this.imageZoom}
                  donate={this.donate}
                  commentHide={this.commentHide}
                  postComment={this.postComment}
                  readContent={this.readContent}
                  content={this.state.content}
                  captureFile={this.captureFile}
                  uploading={this.state.uploading}
                  key={index}
                  imageLoaded={this.imageLoaded}
                  isLoaded={this.isLoaded}
                />
              ))}
          </div>
        </div>
      </div>
    )
  }
}

export default PostIndex
