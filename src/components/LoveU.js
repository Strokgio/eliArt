import '../css/LoveU.css';
import React from 'react';
import image from '../assets/amor.jpg';

function LoveU(){
  return(
    <div className="container-fluid">
      <div className='box'>
        💙Nuestras canciones💜
        <br></br>
        <div>
        <a href="https://youtu.be/BCMNd1ZAMtA"> Big Time Rush - Invisible </a>
        <br></br>
        <a href="https://youtu.be/HLYFtf8xG4U"> The Cure - Just Like Heaven </a>
        <br></br>
        <a href="https://youtu.be/EN-rjBmpJkw"> Tipling Rock - Staring </a>
        <br></br>
        <a href="https://youtu.be/qbtwnqOmrRw"> Big Time Rush - Nothing Even Matters </a>
        <br></br>
        <a href="https://youtu.be/m-BHYIO3ovQ"> The Strokes - Red Light </a>
        </div>
        </div>
        <img className="container" src={image}/>
    </div>
);
}
export default LoveU;