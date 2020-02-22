import React , { Component} from 'react';
import './App.css';
import Person from './Person/Person';
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
    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index)=> {
            return < Person  
              click={() =>this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}

        </div>
      );
      style.backgroundColor = 'red';

    }

    //let classes = ['red', 'bold'].join(' ');
    
    const classes = [];
    if (this.state.persons.length <=2){
        classes.push('red');
    }
    
    if (this.state.persons.length <=1){
      classes.push('bold');
  }
    return (
     
    <div className="App">
      <h1>Hi, i am a react app</h1>
      <p className={classes.join(' ')}>This is working</p>
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
