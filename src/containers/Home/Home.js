import React, { Component } from 'react';
import _ from 'lodash';
import { SimpleForm } from 'components';

var memberStyle = {
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  height: 150,
  width: 150,
  border: '1px solid #333',
  margin: 10
};

class Member extends Component {
  render() {
    const { member } = this.props;
    return(
      <div data-id={member.id} style={memberStyle}>
        { member.name }
        { member.surname }
        { member.bornDate }
        { member.bornPlace }
      </div>
    );
  }
}
var familyStyle = {
  display: 'flex',
  flexFlow: 'row',
  justifyContent: 'center',
};
class Family extends Component {
  getMember(memberId) {
    const { members } = this.props.family;
    const member = _.find(members, {id: memberId});
    return member;
  }

  render() {
    const { family } = this.props.family;
    if (!family) {
      return <div>Loading...</div>
    }
    return(
      <div>
        <h2 style={{textAlign: 'center'}}>{family.name}</h2>
        <div style={familyStyle}>
          <Member member={this.getMember(family.husband.id)}
            wife={this.getMember(family.wife.id)} />
          <Member member={this.getMember(family.wife.id)} />
        </div>
        <div style={familyStyle}>
        {
          family.children.map(
            (child, i) => <Member
              member={this.getMember(child.id)}
              father={this.getMember(family.husband.id)}
              mother={this.getMember(family.wife.id)}
              key={i} />
          )
        }
        </div>
      </div>
    );
  }
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      family: {}
    }
  }
  componentDidMount() {
    fetch('/src/json/family.json')
    .then((res)=> res.json())
    .then((j)=> {
      this.setState({
        family: j
      });
    })
  }
  render() {
    return (
    	<div>
	      <h1>Home</h1>
        <Family family={this.state.family} />
      </div>
    );
  }
}
export default Home;
