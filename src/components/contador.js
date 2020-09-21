import React from 'react';

const Contador = (props) => {
  return(
    <React.Fragment>
        <h2>Reservación</h2>
        <p>¿Cuantas personas?</p>
          <table>
            <tr>
              <td>
                <button 
                  onClick={
                    ()=>props.handleDelete()
                  }
                >
                  -
                </button>
              </td>
              <td>
                {props.value}
              </td>
              <td>
                <button 
                  onClick={
                    ()=>props.handleAdd()
                  }
                >
                  +
                </button>
              </td>
            </tr>
          </table>
    </React.Fragment>
  )
}

export default Contador;
