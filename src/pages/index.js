import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import { Family } from '../components/family'
import { setConfig } from 'react-hot-loader'
import { members } from '../members'

setConfig({ pureSFC: true })

const Title = styled.div`
  display: flex;
  justify-content: space-between;
`

const lookupMemberInTime = (name, year) => {
  const [lookupKey] = name.split('2')
  const memberInfo = members[lookupKey]
  console.log(memberInfo)
  const [memberYear] = memberInfo
    ? memberInfo.bornDate.split('-')
    : '2020'
  return memberYear <= year ? name : 'backcard'
}
const IndexPage = () => {
  const [year, setYear] = React.useState('2018')
  const lookupMember = name => lookupMemberInTime(name, year)
  return (
    <Layout>
      <Title>
        <h1>Anno {year}</h1>
        <input
          type="range"
          value={year}
          onChange={e => setYear(e.target.value)}
          min="1940"
          max="2020"
        />
      </Title>
      <Family
        familyName="Western"
        members={[
          lookupMember('nonno'),
          lookupMember('nonna'),
          lookupMember('silvana2'),
          lookupMember('franco2'),
          lookupMember('matteo2'),
          lookupMember('flavia2'),
          lookupMember('daniele'),
        ]}
      />
      <Family
        familyName="Circo"
        members={[
          lookupMember('vittorio'),
          lookupMember('silvana'),
          lookupMember('tommaso'),
          lookupMember('samuele'),
          lookupMember('lorenzo'),
          lookupMember('valerio'),
        ]}
      />
      <Family
        familyName="Hapache"
        members={[
          lookupMember('franco'),
          lookupMember('tiziana'),
          lookupMember('bianca'),
          lookupMember('angelica'),
          lookupMember('backcard'),
          lookupMember('backcard'),
        ]}
      />
      <Family
        familyName="Badabum"
        members={[
          lookupMember('matteo'),
          lookupMember('emma'),
          lookupMember('edoardo'),
          lookupMember('matilde'),
          lookupMember('arianna'),
        ]}
      />
      <Family
        familyName="Ercole"
        members={[
          lookupMember('andrea'),
          lookupMember('flavia'),
          lookupMember('marco'),
          lookupMember('sofia'),
          lookupMember('elisa'),
        ]}
      />
      <Family
        familyName="???"
        members={[
          lookupMember('backcard'),
          lookupMember('backcard'),
          lookupMember('backcard'),
        ]}
      />
      <Family
        familyName="Principi"
        members={[
          lookupMember('tommaso2'),
          lookupMember('samuele2'),
          lookupMember('lorenzo2'),
          lookupMember('edoardo2'),
          lookupMember('marco2'),
          lookupMember('valerio2'),
          lookupMember('backcard'),
          lookupMember('backcard'),
        ]}
      />
      <Family
        familyName="Principesse"
        members={[
          lookupMember('matilde2'),
          lookupMember('sofia2'),
          lookupMember('bianca2'),
          lookupMember('arianna2'),
          lookupMember('angelica2'),
          lookupMember('elisa2'),
          lookupMember('backcard'),
        ]}
      />
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
