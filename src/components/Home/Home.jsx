import React from 'react';
import pacientesImage from '../../assets/images/paciente.jpg';
import medicosImage from '../../assets/images/medicos.jpg';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <div className="titulo">
      <p>Ingrese como Medico o Paciente</p>
    </div>
      <div className='cardContainer'>
        <Link to='medicos' className='cardLink'>
          <div className='card'>
            <img src={medicosImage} alt='Médicos' className='cardImage' />
            <div className='cardText'>Médicos</div>
          </div>
        </Link>
        <Link to='/pacientes' className='cardLink'>
          <div className='card'>
            <img src={pacientesImage} alt='Pacientes' className='cardImage' />
            <div className='cardText'>Pacientes</div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;
