/** @jsx jsx */
import { jsx, Link as A } from 'theme-ui';
import { Link as MenuLink } from 'react-scroll';
import { Link as GatsbyLink } from 'gatsby';
import { HiOutlineChevronRight } from 'react-icons/hi';

export function NavLink({ path, label, children, ...rest }) {
  return (
    <MenuLink
      to={path}
      spy={true}
      offset={-70}
      smooth={true}
      duration={500}
      className="nav-item"
      activeClass="active"
      {...rest}
    >
      {label}
    </MenuLink>
  );
}

export function Link({ path, label, children, ...rest }) {
  return (
    <A as={GatsbyLink} href={path} {...rest}>
      {children ? children : label}
    </A>
  );
}

export function LearnMore({ path, label, children, ...rest }) {
  return (
    <A href={path} sx={styles.learnMore} {...rest}>
      {label ?? 'Learn More'} <HiOutlineChevronRight />
    </A>
  );
}

const styles = {
  learnMore: {
    color: 'link',
    cursor: 'pointer',
    fontWeight: 500,
    display: 'inline-flex',
    alignItems: 'center',
    svg: {
      transition: 'margin-left 0.3s ease-in-out 0s',
      ml: '3px',
    },
    ':hover': {
      svg: {
        ml: '8px',
      },
    },
  },
};
