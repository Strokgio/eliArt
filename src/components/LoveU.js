import '../css/LoveU.css';
import React from 'react';
import image from '../assets/amor.jpg';
import ReactPlayer from 'react-player/lazy';


function LoveU(){
  return(
    <>
    <ReactPlayer
          url='https://youtu.be/9uWh-TlEQ4k'
          className='react-player'
          playing={true}
          width='0'
          height='0'
          volume='1'
        />
    <div className="container-fluid">
      
      <div className='box'>
        💙Nuestras canciones💜
        <br></br>
        <a href="https://youtu.be/BCMNd1ZAMtA"> Big Time Rush - Invisible </a>
        <br></br>
        <a href="https://youtu.be/HLYFtf8xG4U"> The Cure - Just Like Heaven </a>
        <br></br>
        <a href="https://youtu.be/EN-rjBmpJkw"> Tipling Rock - Staring </a>
        <br></br>
        <a href="https://youtu.be/qbtwnqOmrRw"> Big Time Rush - Nothing Even Matters </a>
        <br></br>
        <a href="https://youtu.be/m-BHYIO3ovQ"> The Strokes - Red Light </a>
        <br></br>
        <a href="https://youtu.be/nr1zKwLDwJQ"> Angus and Julia Stone - For you </a>
        </div>
        <img className="container" src={image}/>
    </div>
    </>
);
}
export default LoveU;