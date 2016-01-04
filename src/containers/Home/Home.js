import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';
import { SimpleForm } from 'components';



class Member extends Component {
  render() {
    const { member } = this.props;
    const memberStyle = {
      display: 'flex',
      order: (member.statusInFamily === 'father') ? -1 : 1,
      flexFlow: 'column wrap',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: 150,
      width: 150,
      border: '1px solid #333',
      margin: 10,
    };
    return (
      <div style={memberStyle}>
        { member.name }
        { member.surname }
        { moment(member.bornDate).locale('it').format('LL') }
      </div>
    );
  }
}

class Family extends Component {
  render() {
    const { family, familyName } = this.props;
    const familyWrapper = {
      border: '5px solid #000',
      margin: 25,
      position: 'relative',
    };
    const row = {
      display: 'flex',
      flexFlow: 'row',
      justifyContent: 'center',
    };
    const familyNameStyle = {
      position: 'absolute',
      top: -35,
      left: -5,
      height: 30,
      lineHeight: '30px',
      fontSize: 23,
      color: '#777',
      background: '#fff',
      padding: '0 15px',
      borderTop: 5,
      borderLeft: 5,
      borderRight: 5,
      borderBottom: 0,
      borderStyle: 'solid',
      borderColor: '#000',
      zIndex: 1
    }
    let children = [];
    let parents = [];
    family.forEach((member, i) => {
      if (member.statusInFamily === 'child') {
        children.push(<Member member={member} key={i} />);
      } else {
        parents.push(<Member member={member} key={i} />);
      }
    });

    return (
      <div style={familyWrapper}>
        <div style={familyNameStyle}>{ familyName }</div>
        <div style={row}>
          { parents }
        </div>
        <div style={row}>
          { children }
        </div>
      </div>
    );
  }
}

class FamilyTree extends Component {

  render() {
    const { families } = this.props;
    const familyContainer = {
      display: 'flex',
      flexFlow: 'column',
    };
    const familyWrappers = Object.keys(families).map((familyName, i) => {
      return (
        <Family family={families[familyName]} familyName={familyName} key={i} />
      );
    });

    return(
      <div style={familyContainer}>
        { familyWrappers }
      </div>
    );

  }
}
class NextBirthday extends Component {
  render() {
    const { members } = this.props;
    const now = moment().format();
    const membersOrdered = _.sortBy(members, (member)=> {
      return moment(member.bornDate).format('MMDD');
    });
    members.forEach((el, i) => {

    });
    return (
    	<div>
	      <h1>Il prossimo compleanno sarà: </h1>
      </div>
    );
  }
}


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: {},
      families: {}
    }
  }
  componentDidMount() {
    fetch('/src/json/family.json')
    .then((res)=> res.json())
    .then((j)=> {
      let families = {};
      j.members.forEach(member => {
        // debugger;
        member.families.forEach(family => {
          if(!_.has(families, family.name)) {
            families[family.name] = [];
          }
          const memberInFAmily = Object.assign({}, member, {
            statusInFamily: family.status,
            familyName: family.name,
            bornDate: moment(member.bornDate),
          });
          families[family.name].push(memberInFAmily);
        });
      });
      console.log(families);
      this.setState({
        families: families,
        members: j.members
      });
    })
  }
  render() {
    return (
    	<div>
        <NextBirthday members={this.state.members} />
        <FamilyTree families={this.state.families} />
      </div>
    );
  }
}
export default Home;
