import React from 'react'
import AdminPageCards from './AdminPageCards/AdminPageCards'
import styles from './AdminPage.module.css'

const AdminPage = (props) => {
  return (
    <div className={styles.adminPage}>
      <AdminPageCards
        onClick={props.changeMinContribution}
        min_contribution={props.min_contribution}
      >
        <h1>Change Minimum Contribution Amount</h1>
      </AdminPageCards>
      <AdminPageCards onClick={props.seeAdminsList}>
        <h1>View All DAO Admins</h1>
      </AdminPageCards>
      <AdminPageCards onClick={props.deletePost}>
        <h1>Delete a post</h1>
        <h1>(Take a post down)</h1>
      </AdminPageCards>
    </div>
  )
}

export default AdminPage
