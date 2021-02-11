import React from 'react';

const Contador = (props) => {
  const { handleAdd, handleDelete } = props;

  return(
    <React.Fragment>
        <h2>Reservación</h2>
        <p>¿Cuantas personas?</p>
          <table>
            <tr>
              <td>
                <button onClick={ handleDelete }>
                  -
                </button>
              </td>
              <td>
                <button onClick={ handleAdd }>
                  +
                </button>
              </td>
            </tr>
          </table>
    </React.Fragment>
  )
}

export default Contador;
