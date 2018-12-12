import { Link } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import React from 'react'
import { media } from '../utils'

const Placeholder = styled.div`
  padding-top: calc(2.25rem + 1.15rem * 2);
`

const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rebeccapurple;
  z-index: 9;
`

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.15rem 1.0875rem;
`

const Title = styled.h1`
  margin: 0;
  font-size: 1rem;
  ${media.desktop`
    font-size: 2.5rem;
  `}
`

const currentYear = new Date().getFullYear()

const Header = ({ siteTitle, year, setYear }) => (
  <Placeholder>
    <Nav>
      <Wrap>
        <Title>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            {siteTitle} - Anno {year}
          </Link>
        </Title>
        <input
          type="range"
          value={year}
          onChange={e => setYear(e.target.value)}
          min="1930"
          max={currentYear}
        />
      </Wrap>
    </Nav>
  </Placeholder>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
