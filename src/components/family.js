import React from 'react'
import styled from 'styled-components'
import Card from './card'

const Wrapper = styled.div`
  display: flex;
  overflow-x: auto;
  flex-flow: row nowrap;
  `

const CardWrapper = styled.div`
  width: 400px;
  border: 2px solid #333;
  border-radius: 4px;
  margin: 2px;
  /* flex-shrink: 0; */
`

export const Family = ({ familyName, members }) => (
  <>
    <h3>{familyName}</h3>
    <Wrapper>
      {members.map((name, i) => (
        <CardWrapper key={i}><Card name={name} /></CardWrapper>
      ))}
    </Wrapper>
  </>
)
