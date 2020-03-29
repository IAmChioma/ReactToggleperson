import React, {Component} from 'react';
import classes from './Person.css';

class Person extends Component{
    constructor(props){
        super(props);
        console.log('Person.js From Constructor', props);
  //      this.inputElement = React.createRef();
    }
    
      componentWillMount(){
        console.log('Person.js Inside componentwillmount')
      }
    
      componentDidMount(){
        console.log('Person.js componentdidmount');
        this.inputElement.focus();
        
      }
    render(){
        console.log('Person.js render');
        return (
            // <div className={classes.Person} >
            <div className="Person" >
                <p onClick={this.props.click} > I am a {this.props.name} and i am { this.props.age } years old</p>
                <p>{this.props.children}</p>
                <input ref={(inp)=>{this.inputElement = inp}}
                type="text" 
                onChange= {this.props.changed}  
                value={this.props.name}/>
            </div>
            )
    }
}

export default Person;

//Functional component
// const person = (props) => {
//     // const rnd = Math.random();
//     // if(rnd>0.7){
//     //     throw new "Something went wrong"
//     // }
//     return (
//     // <div className={classes.Person} >
//     <div className="Person" >
//         <p onClick={props.click} > I am a {props.name} and i am { props.age } years old</p>
//         <p>{props.children}</p>
//         <input type="text" onChange= {props.changed}  value={props.name}/>
//     </div>
//     )
// };
