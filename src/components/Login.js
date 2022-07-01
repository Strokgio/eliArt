import React,{useState} from 'react';
import  '../css/Login.css';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

import Swal from "sweetalert2";

function Login(){
    let navigate = useNavigate();
    const[datos,setDatos] = useState({
		username: '',
		password: ''
	});

    const changeDatos = (event) =>{
        setDatos({
			...datos,
            [event.target.name] : event.target.value
        })
    }

	const[state,setState] = useState({loading: false, error:false})

	const sendDates = (event) => {
		setState({loading:true, error:false})
		event.preventDefault();
		console.log(datos.username + " - "+ datos.password)
		Axios.post("https://eartbakend.herokuapp.com/api/login",{
			username : datos.username,
			password : datos.password,
		}).then(({ data }) =>{
			setState({loading:false, error:false})
			Swal.fire({
				title: 'You have my whole heart 💙',
				width: 600,
				padding: '1em',
				color: '#fff',
				background: '#201f20 ',
				backdrop: `
        		rgba(0,0,123,0.4)
        		url("https://media.giphy.com/media/T7LVr4MTblBwJhOl3D/giphy.gif")
        		left top
        		no-repeat
      			`
			  }).then(respuesta=>{
				if(respuesta){
				}
			  })
			navigate("/loveu")
		})
		.catch(({response}) =>{
			setState({loading:false, error:true})
			console.log(response.data)
		})
	};

    return (
		<>
		
        <div className='container-fluid'>
            <div className="box">Dos Pueden Complementarse Sin El Resto Del Mundo</div> 
            <div className="container">
	            <div className="d-flex justify-content-center h-100">
		            <div className="card">
			            <div className="card-header">
				            <div>Mi Amor🖤</div>
			            </div>
						{!state.loading && <div className="card-body">
				        <form >
					        <div className="input-group">
						        <div className="input-group-prepend">
							        <div className="input-group-text">💜</div>
						        </div>
						        <input type="text"  className="form-control" name="username"  placeholder="Te dare una pista: ahorcados" onChange={changeDatos} />	
					        </div>
					        <div className="input-group">
						        <div className="input-group-prepend">
							        <div className="input-group-text">📅</div>
						        </div>
						        <input type="password"  className="form-control" name="password" autoComplete="on" placeholder="????????" onChange={changeDatos}/>
					        </div>
					        <div className="form-group">
						        <button  className="btn float-right login_btn" type="submit" onClick={sendDates} >Ingresar</button>
					        </div>
				        </form>
					
			        </div>}
					{state.error && <div className= "card-footer">
						<div>Vuelve a Intentarlo Mi Amor</div>
					</div>}
		        </div>
	        </div>
            </div>
        </div>
			
		</>
    );

}
export default Login;