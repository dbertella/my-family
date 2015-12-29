import React, { Component } from 'react';
import _ from 'lodash';
import { SimpleForm } from 'components';



class Member extends Component {
  render() {
    const { member } = this.props;
    let memberStyle = {
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: 150,
      width: 150,
      border: '1px solid #333',
      margin: 10
    };
    return (
      <div style={memberStyle}>
        { member.name }
        { member.surname }
        { member.bornDate }
      </div>
    );
  }
}

class Family extends Component {
  render() {
    const { family } = this.props;
    const familyStyle = {
      display: 'flex',
      flexFlow: 'row',
      justifyContent: 'center',
    };
    return (
      <div style={familyStyle}>
      {
        family.map((member, i) => <Member member={member} key={i} />)
      }
      </div>
    );
  }
}

class FamilyTree extends Component {
  // getMember(memberId) {
  //   const { members } = this.props.family;
  //   const member = _.find(members, {id: memberId});
  //   return member;
  // }

  render() {
    const { families } = this.props;
    const familyContainer = {
      display: 'flex',
      flexFlow: 'column',
    };

    return(
      <div>
        <h2 style={{textAlign: 'center'}}>aaa</h2>
        <div style={familyContainer}>
          { _.map(families, (family, i) => <Family family={family} key={i} />) }
        </div>
      </div>
    );

  }
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
            statusInFamily: family.status
          });
          families[family.name].push(memberInFAmily);
        });
      });
      console.log(families);
      this.setState({
        families: families
      });
    })
  }
  render() {
    return (
    	<div>
	      <h1>Home</h1>
        <FamilyTree families={this.state.families} />
      </div>
    );
  }
}
export default Home;
