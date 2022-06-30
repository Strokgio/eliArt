import React, { Component } from 'react';
import './index.css';
import Principal from './components/Principal';
import Login from './components/Login';
import Puzzle from './components/Puzzle';
import LoveU from './components/LoveU';
import Hanged from './components/Hanged';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ReactPlayer from 'react-player/lazy';
import Swal from "sweetalert2";

class App extends Component {
  
  constructor(props){
    
    super(props);
    this.state = {
      play:false,
      mut:false
    };
  }


  componentDidMount(){
    
      Swal.fire({
        title: 'Espero que te guste mi amor 💜',
        width: 600,
        padding: '1em',
        color: '#fff',
        background: '#201f20 ',
      }).then(respuesta=>{
        if(respuesta){
        }
      })
  };



  

  render() {
    return (
      
      <Router>   
        <ReactPlayer
          url='https://youtu.be/9uWh-TlEQ4k'
          className='react-player'
          playing={true}
          width='0'
          height='0'
          volume='0.6'
          loop={true}
        />
        
      <Link to="/"></Link>
      <Link to="/login"></Link>
      <Link to="/puzzle"></Link>
      <Link to="/loveu"></Link>
      <Link to="/hanged"></Link>
        <Routes>
          <Route exact path="/" element={<Principal/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/puzzle" element={<Puzzle/>}/>
          <Route exact path="/loveu" element={<LoveU/>}/>
          <Route exact path="/hanged" element={<Hanged/>}/>
        </Routes>
      </Router>
    );
  }
}

export default App;
