import React, { useEffect, useContext } from 'react'
import Link from 'next/link'
import cn from 'classnames'

import useComponentVisible from '../../../hooks/useComponentVisible'
import useWindowSize from '../../../hooks/useWindowSize'
import CONST from '../../../constants'
import ModalContext from '../../../store/modal'
import { AuthContext } from '../../../store/auth'

import Button from '../../button'
import NavigationDropdown from '../../navigation-dropdown'
import { Menu, Close } from '../../icons'

import styles from './header.module.css'

const Header = ({ className, ...props }) => {
  const { handleComponentVisible } = useContext(ModalContext)
  const { isAuthenticated, authState, logout } = useContext(AuthContext)

  const {
    ref,
    toggleRef,
    isComponentVisible,
    setIsComponentVisible
  } = useComponentVisible(false)
  const size = useWindowSize()

  useEffect(() => {
    if (size.width > CONST.MOBILE_SIZE) {
      setIsComponentVisible(false)
    }
  }, [size])

  return (
    <header className={cn(styles.header, className)} {...props}>
      <div className={styles.container}>
        <div ref={toggleRef} className={styles.menuContainer}>
          <Button
            className={styles.menu}
            onClick={() => setIsComponentVisible((isOpen) => !isOpen)}
          >
            {isComponentVisible ? <Close /> : <Menu />}
          </Button>
        </div>
        <Button className={styles.logo} href="/">
          <img
            src="https://img.freepik.com/premium-vector/eco-green-leaf-icon-bio-nature-green-eco-symbol-web-business-simple-flat-illustration_599062-3487.jpg?w=30"
            id="horti_logo"
          />
          <p>
            <span>HortiPedia</span>
          </p>
        </Button>
        <div style={{ flex: 1 }}></div>

        {isAuthenticated() ? (
          <div className={styles.userInfo}>
            <p>
              Welcome{' '}
              <Link
                href="/users/[user]"
                as={`/users/${authState.userInfo.username}`}
              >
                <a>{authState.userInfo.username}!</a>
              </Link>
            </p>
            <a href="http://localhost:3000/">
              <button>Chat! Forum</button>
            </a>
            <a className="btn-logout" onClick={() => logout()}>
              logOut
            </a>
          </div>
        ) : (
          <>
            <Button
              className={styles.auth}
              secondary
              onClick={() => handleComponentVisible(true, 'login')}
            >
              Log in
            </Button>
            <Button
              className={styles.auth}
              primary
              onClick={() => handleComponentVisible(true, 'signup')}
            >
              Sign up
            </Button>
          </>
        )}
      </div>

      <div ref={ref}>{isComponentVisible && <NavigationDropdown />}</div>
    </header>
  )
}

export default Header
