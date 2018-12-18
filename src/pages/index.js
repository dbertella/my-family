import React from 'react'
import { Link } from 'gatsby'
import {
  closestTo,
  format,
  setYear,
  isBefore,
  startOfDay,
  addYears,
  distanceInWords,
} from 'date-fns'
import itLocale from 'date-fns/locale/it'
import Layout from '../components/layout'
import { Family } from '../components/family'
import { setConfig } from 'react-hot-loader'
import { members } from '../members'

setConfig({ pureSFC: true })

const lookupMemberInTime = (name, year) => {
  const [lookupKey] = name.split('2')
  const memberInfo = members[lookupKey]
  const [memberYear] = memberInfo.bornDate.split('-')
  return memberYear <= year ? name : 'backcard'
}
const today = startOfDay(new Date())
const currentYear = today.getFullYear()
const memebersByDate = Object.keys(members).reduce((acc, key) => {
  const birthday = setYear(members[key].bornDate, currentYear)
  const nextBirthday = format(
    isBefore(birthday, today) ? addYears(birthday, 1) : birthday,
    'YYYY-MM-DD'
  )
  if (acc.hasOwnProperty(nextBirthday)) {
    acc[nextBirthday].push({
      ...members[key],
      picture: key,
    })
  } else {
    acc[nextBirthday] = [
      {
        ...members[key],
        picture: key,
      },
    ]
  }
  return acc
}, {})
const nextBirthday = format(
  closestTo(
    today,
    Object.keys(memebersByDate).map(date => {
      const birthday = setYear(date, currentYear)
      return isBefore(birthday, today) ? (birthday, 1) : birthday
    })
  ),
  'YYYY-MM-DD'
)

const IndexPage = () => {
  const [year, setYear] = React.useState('2018')
  const lookupMember = name => lookupMemberInTime(name, year)
  return (
    <Layout year={year} setYear={setYear}>
      <div>
        <h2>
          Il prossimo compleanno è di{' '}
          {memebersByDate[nextBirthday].map(member => member.name).join(' e ')}{' '}
          {distanceInWords(today, nextBirthday, { locale: itLocale, addSuffix: true })}{' '}
          🎉🎉🎉
        </h2>
      </div>
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
          'backcard',
          'backcard',
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
      <Family familyName="???" members={['backcard', 'backcard', 'backcard']} />
      <Family
        familyName="Principi"
        members={[
          lookupMember('tommaso2'),
          lookupMember('samuele2'),
          lookupMember('lorenzo2'),
          lookupMember('edoardo2'),
          lookupMember('marco2'),
          lookupMember('valerio2'),
          'backcard',
          'backcard',
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
          'backcard',
        ]}
      />
    </Layout>
  )
}

export default IndexPage
