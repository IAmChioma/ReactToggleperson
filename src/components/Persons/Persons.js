import React, {Component} from 'react';
import classes from './Person/Person.css';
import Person from './Person/Person';

class Persons extends Component{
  constructor(props){
    super(props);
    console.log('Persons.js From Constructor', props);
  }

  componentWillMount(){
    console.log('Persons.js Inside componentwillmount')
  }

  componentDidMount(){
    console.log('Persons.js componentdidmount');
  }
  componentWillReceiveProps(nextProps){
    console.log('Persons.js componentWillReceiveProps', nextProps);
  }
  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('Persons.js  shouldComponentUpdate', nextProps, nextState);
  //   // return nextProps.persons !== this.props.persons;
  //   return true;
  // }

  componentWillUpdate(nextProps, nextState){
    console.log('Persons.js componentWillUpdate', nextProps, nextState);
  }
  
  componentDidUpdate(){
    console.log('Persons.js componentDidUpdate');
  }
  render(){
    console.log('Persons.js render');
    return this.props.persons.map((person, index)=> {
      return <Person  
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => this.props.changed(event, person.id)}
      />
    })
  }
}


export default Persons;


// Functional component
// const persons = (props) => props.persons.map((person, index)=> {
//     return <Person  
//       click={() =>props.clicked(index)}
//       name={person.name}
//       age={person.age}
//       key={person.id}
//       changed={(event) => props.changed(event, person.id)}
//     />
//   })

