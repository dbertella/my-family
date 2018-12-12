import React from 'react'
import styled from 'styled-components'
import Card from './card'
import { media } from '../utils'

const Title = styled.h3``

const Wrapper = styled.div`
  display: flex;
  overflow-x: auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${media.desktop`
    flex-flow: row nowrap;
  `}
`

const CardWrapper = styled.div`
  width: 400px;
  border: 2px solid #333;
  border-radius: 4px;
  margin: 2px;
  flex-shrink: 0;
  max-width: 100%;
  ${media.desktop`
    flex-shrink: 1;
  `}
`

export const Family = ({ familyName, members }) => (
  <>
    <Title>{familyName}</Title>
    <Wrapper>
      {members.map((name, i) => (
        <CardWrapper key={i}>
          <Card name={name} />
        </CardWrapper>
      ))}
    </Wrapper>
  </>
)
