import React , { Component} from 'react';
import classes from './App.css';
//import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Cockpit from '../components/Cockpit/Cockpit';
//import WithClass from '../components/hoc/WithClass';
import withClass from '../components/hoc/WithClass';
import Aux from '../components/hoc/_Aux';

class  App extends Component {
  constructor(props){
    super(props);
    console.log('App.js From Constructor', props);
    this.state = {
      persons : [
        {id:1, name: 'Chy', age: 9},
        {id:2, name: 'Chioma', age: 19},
        {id:3, name: 'Ada', age: 29}
      ],
      otherState : 'some other value',
      showPersons: false,
      toggledClicked: 0
    };
  
  }

  componentWillMount(){
    console.log('App.js Inside componentwillmount');
  }

  componentDidMount(){
    console.log('App.js componentdidmount');
  }
  // state = {
  //   persons : [
  //     {id:1, name: 'Chy', age: 9},
  //     {id:2, name: 'Chioma', age: 19},
  //     {id:3, name: 'Ada', age: 29}
  //   ],
  //   otherState : 'some other value',
  //   showPersons: false
  // };


  shouldComponentUpdate(nextProps, nextState){
    console.log('App.js  shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState){
    console.log('App.js componentWillUpdate', nextProps, nextState);
  }
  
  componentDidUpdate(){
    console.log('App.js componentDidUpdate');
  }

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
    this.setState((prevState, props)=> {
      return {
      showPersons : !doesShow,
      toggledClicked:  prevState.toggledClicked +1 
      }
    });
  
  }

  deletePersonHandler = (personIndex) => {
   //   const persons = this.state.persons.slice(); //used to create a copy of the person's array or use the spread operator
      const persons = [...this.state.persons]
      persons.splice(personIndex,1);
      this.setState({persons:persons})
     }
   
  render (){
    console.log('App.js render');
    let persons = null;
    if (this.state.showPersons){
      persons =  <Persons persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />

    }
    return (
      <Aux classes='App'>
    {/*  <WithClass  classes='App' > */}
    {/*  <div className='App'> */}
    <button onClick={() => {this.setState({showPersons: true})}}> Show Persons</button>
    <Cockpit 
      appTitle= {this.props.title}
      showPersons = {this.state.showPersons}
      persons = {this.state.persons}
      clicked = {this.togglePersonsHandler}
    />
       {persons}
    {/*  </div> */}
    {/* </WithClass> */}
    </Aux>

  );
 }
}
export default withClass(App,'App');
