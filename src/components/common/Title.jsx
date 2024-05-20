import React from 'react'
import styles from '../../styles/common/title.module.css'

function Title({title,desc}) {
  return (
    <div className={styles.container}>
        <h2>{title}</h2>
        <p>{desc}</p>
    </div>
  )
}

export default Title