import Usuario from '../Usuario';
import './style.css'

function ListaUsuarios({ usuarios, onEliminar, onActualizar }) {
    return (
        <div className='lista-usuarios'>
            {
              usuarios.map((usuario, index) => <Usuario key={index} usuario={usuario} onEliminar={onEliminar} onActualizar={onActualizar}/>) 
            }
        </div>
    );
}

export default ListaUsuarios;