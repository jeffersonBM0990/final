import React from 'react';
import './style.css';

function Usuario({ usuario, onEliminar, onActualizar }) {
  return (
    <div className="contenedor-usuario">
      <img src={usuario.photoUrl} alt="" />
      <h3>{`${usuario.name} ${usuario.lastName}`}</h3>
      <h4>{usuario.type}</h4>
      <button onClick={() => onEliminar(usuario.id)}>Eliminar</button>
      <button onClick={() => onActualizar(usuario)}>Actualizar</button>
    </div>
  );
}

export default Usuario;
