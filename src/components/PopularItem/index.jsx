import React, { useEffect } from 'react'
import styles from './PopularItem.module.scss'
import Link from 'next/link'

export const PopularItem = ({ image = '', header = '', title = '', item }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgFirm}>
        <Link href={`/xem-phim/${item.id}`}>
          <img src={`${image}`} alt="sieu anh hung" />
        </Link>
      </div>
      <Link href={`/xem-phim/${item.id}`}>
        <h5>{header}</h5>
      </Link>
      <p>{title}</p>
    </div>
  )
}
