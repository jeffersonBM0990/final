import React, { useState, useEffect } from 'react';
import './style.css';
import UsuarioForm from '../../components/UsuarioForm';
import ListaUsuarios from '../../components/ListaUsuarios';
import { getUsuarios, eliminarPorId, crearUsuario, actualizarUsuario } from '../../services/UsuariosService';

function Home() {
  const [isAgregando, setIsAgregando] = useState(false);
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioActualizar, setUsuarioActualizar] = useState({});

  useEffect(() => {
    obtenerTodosLosUsuarios();
  }, []);

  function obtenerTodosLosUsuarios() {
    getUsuarios()
      .then(resultado => setUsuarios(resultado.data))
      .catch(error => console.log(error));
  }

  function eliminarUsuario(id) {
    eliminarPorId(id)
      .then(() => obtenerTodosLosUsuarios())
      .catch(error => console.log(error))
  }

  function crearOActualizarUsuarioEnForm(usuario) {
    if (usuario.id == null) {
      crearUsuario(usuario)
        .then(() => obtenerTodosLosUsuarios())
        .catch(error => console.log(error));
    } else {
      actualizarUsuario(usuario)
        .then(() => obtenerTodosLosUsuarios())
        .catch(error => console.log(error));
      setUsuarioActualizar({});
    }
  }

  function mostrarFormEnActualizar(usuarioASerActualizado) {
    setIsAgregando(true);
    setUsuarioActualizar(usuarioASerActualizado);
  }

  return (
    <div className="home">
      <button onClick={() => setIsAgregando(true)}>Agregar Usuario</button>
      {isAgregando && (
        <UsuarioForm
          usuarioActualizar={usuarioActualizar}
          onCerrar={() => setIsAgregando(false)}
          onCrear={crearOActualizarUsuarioEnForm}
        />
      )}
      <ListaUsuarios
        usuarios={usuarios}
        onEliminar={eliminarUsuario}
        onActualizar={mostrarFormEnActualizar}
      />
    </div>
  );
}

export default Home;
