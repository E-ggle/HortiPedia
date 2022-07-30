import React from 'react'
import { useRouter } from 'next/router'

import NavItem from './nav-item'
import { GiLindenLeaf } from 'react-icons/gi'
import { FaHashtag, FaUserAlt } from 'react-icons/fa'

import styles from './navigation.module.css'

const Navigation = () => {
  const router = useRouter()

  return (
    <nav className={styles.nav}>
      <NavItem
        href="/QA"
        selected={
          router.pathname == '/question' ||
          router.pathname.split('/')[1] == 'questions'
        }
      >
        <GiLindenLeaf />
        <span>HortiPedia</span>
      </NavItem>

      <NavItem href="/tags" selected={router.pathname == '/tags'}>
        <FaHashtag />
        <span>Tags</span>
      </NavItem>

      <NavItem
        href="/users"
        selected={router.pathname.split('/')[1] == 'users'}
      >
        <FaUserAlt />
        <span>Users</span>
      </NavItem>
    </nav>
  )
}

export default Navigation
