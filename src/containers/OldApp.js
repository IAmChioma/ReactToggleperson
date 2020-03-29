import React , { Component} from 'react';
import classes from './App.css';
//import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Cockpit from '../components/Cockpit/Cockpit';

class  App extends Component {
  state = {
    persons : [
      {id:1, name: 'Chy', age: 9},
      {id:2, name: 'Chioma', age: 19},
      {id:3, name: 'Ada', age: 29}
    ],
    otherState : 'some other value',
    showPersons: false
  };


  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    
    const person = { 
      ...this.state.persons[personIndex]
    }; //or use const person = Object.assign({}, this.state.persons[personIndex])
    
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person

    this.setState({
      persons : persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons : !doesShow
    });
  }

  deletePersonHandler = (personIndex) => {
   //   const persons = this.state.persons.slice(); //used to create a copy of the person's array or use the spread operator
      const persons = [...this.state.persons]
      persons.splice(personIndex,1);
      this.setState({persons:persons})
     }
   
  render (){
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font : 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',

    }
    let persons = null;
    let btnClass = '';
    if (this.state.showPersons){
      persons =  <Persons persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
          {/* {this.state.persons.map((person, index)=> {
            return < Person  
              click={() =>this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })} */}


      
      style.backgroundColor = 'red';

    }

    let classes = ['red', 'bold'].join(' ');
    
    const aclasses = [];
    if (this.state.persons.length <=2){
        aclasses.push(classes.red);
    }
    
    if (this.state.persons.length <=1){
      aclasses.push(classes.bold);
  }
    return (
     
    // <div className={classes.App}> This didn't work because of the webpack file error
    <div className='App'>
    <Cockpit 
      showPersons = {this.state.showPersons}
      persons = {this.state.persons}
      clicked = {this.togglePersonsHandler}
    />
      <h1>Hi, i am a react app</h1>
      <p className={aclasses.join(' ')}>This is working</p>
      <button 
        style={style}
        onClick={this.togglePersonsHandler}> Toggle Persons</button> 
      {persons}
    </div>
  );
 // return  React.createElement('div', {className: 'App'}, React.createElement('h1', null,  'Hi,I \'m a react app'));
}
}
export default App;
