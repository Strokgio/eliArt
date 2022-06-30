import '../css/Principal.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

function Principal(){
  let navigate = useNavigate();
  function show(){
    
    Swal.fire({
      title: 'Siempre me venciste en todos los juegos que jugamos. ¿Podras hacerlo una vez más mi amor?💜',
      width: 600,
      padding: '1em',
      color: '#fff',
      background: '#201f20 ',
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://media.giphy.com/media/iqotJVKLfXsWiAZjbl/giphy.gif")
        left top
        no-repeat
      `
    }).then(respuesta=>{
      if(respuesta){
        navigate("/puzzle")
      }
    })
  };
  return(
    
    <div className="container-fluid">
        <div className='box'>
          You Are My Everything💜
        </div>
        
        <div> 
        </div>
        <script src="https://www.youtube.com/iframe_api"></script>
        <script src="https://cdn.rawgit.com/labnol/files/master/yt.js"></script>

        <button  className="button" value="" onClick={() => show()}>🖤¿Huyes Conmigo?💜</button>
    </div>
);
}
export default Principal;