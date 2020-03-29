import React from 'react';
import classes from './Cockpit.css';
import Aux from '../hoc/_Aux';

const cockpit = (props) => {
    const aclasses = [];
    let btnClass = '';
    if (props.showPersons){
        btnClass = classes.Red;
    }

    if (props.persons.length <=2){
        aclasses.push(classes.red);
    }
    
    if (props.persons.length <=1){
      aclasses.push(classes.bold);
  }
  const style = {
    backgroundColor: 'green',
    color: 'white',
    font : 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',

  }

    return (
        <Aux>
       {/* <div className = 'Cockpit'> */}
        <h1>{props.appTitle}</h1>
        <p className={aclasses.join(' ')}>This is working</p>
        <button  className={btnClass}
        //   style={style}
          onClick={props.clicked}> Toggle Persons</button> 
        {/* </div>   */}
   </Aux>
   
     ) }

export default cockpit;