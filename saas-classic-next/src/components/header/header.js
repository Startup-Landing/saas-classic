/** @jsx jsx */
import { jsx, Box, Container, MenuButton, Flex, Button } from 'theme-ui';
import { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import Sticky from 'react-stickynode';
import Logo from 'components/logo';
import { NavLink } from 'components/link';
import menuItems from './header.data';

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const openMobileMenu = () => {
    setMobileMenu(true);
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  return (
    <Box sx={styles.headerWrapper}>
      <Sticky enabled={true} top={0} activeClass="is-sticky" innerZ={10}>
        <Box
          as="header"
          variant="layout.header"
          className={mobileMenu ? 'is-mobile-menu' : ''}
        >
          <Container>
            <Box sx={styles.headerInner}>
              <Logo isWhite={mobileMenu} />

              <Flex
                as="nav"
                sx={styles.navbar}
                className={mobileMenu ? 'navbar active' : 'navbar'}
              >
                <Box
                  as="ul"
                  sx={styles.navList}
                  className={mobileMenu ? 'active' : ''}
                >
                  {menuItems.map(({ path, label }, i) => (
                    <li key={i}>
                      <NavLink
                        path={path}
                        label={label}
                        onClick={closeMobileMenu}
                      />
                    </li>
                  ))}
                </Box>
                <Button variant="primaryMd" sx={styles.explore}>
                  Explore Now
                </Button>
              </Flex>

              {mobileMenu ? (
                <Button variant="text" sx={styles.closeButton}>
                  <GrClose
                    onClick={closeMobileMenu}
                    color="white"
                    size="20px"
                  />
                </Button>
              ) : (
                <MenuButton aria-label="Toggle Menu" onClick={openMobileMenu} />
              )}
            </Box>
          </Container>
        </Box>
      </Sticky>
    </Box>
  );
}

const styles = {
  headerWrapper: {
    backgroundColor: 'transparent',
    transition: '0.3s ease-in-out 0s',
    '.is-sticky': {
      header: {
        backgroundColor: '#fff',
        boxShadow: '0 6px 13px rgba(38, 78, 118, 0.1)',
        py: [12],
        '&.is-mobile-menu': {
          backgroundColor: 'text',
        },
      },
    },
  },
  headerInner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '@media only screen and (max-width: 768px)': {
      '.navbar': {
        position: 'absolute',
        top: '100%',
        backgroundColor: 'text',
        width: '100%',
        left: 0,
        p: '20px 30px',
        display: 'block',
        boxShadow: '0 6px 13px rgba(38,78,118,0.1)',
        opacity: 0,
        visibility: 'hidden',
        minHeight: 'calc(100vh - 77px)',
        transition: 'all 0.3s ease-in-out 0s',
        '&.active': {
          opacity: 1,
          visibility: 'visible',
        },
        ul: {
          display: 'block',
          'li + li': {
            marginTop: 5,
          },
          a: {
            color: 'white',
          },
        },
      },
    },
  },
  navbar: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  navList: {
    display: ['flex'],
    listStyle: 'none',
    marginLeft: 'auto',
    p: 0,
    '.nav-item': {
      cursor: 'pointer',
      fontWeight: 400,
      padding: 0,
      margin: '0 20px',
    },
    '.active': {
      color: 'primary',
    },
  },
  explore: {
    display: ['block', 'block', 'block', 'block', 'none'],
    position: 'absolute',
    bottom: 40,
    left: '50%',
    transform: 'translateX(-50%)',
  },
  closeButton: {
    height: '32px',
    padding: '4px',
    minHeight: 'auto',
    width: '32px',
    ml: '3px',
    path: {
      stroke: '#fff',
    },
  },
};
