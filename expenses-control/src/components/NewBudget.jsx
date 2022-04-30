import React from 'react'

function NewBudget() {
    return (
        <div className="contenedor-presupuesto contenedor sombra">
            <form className="formulario">
                <div className="campo">
                    <label htmlFor="">Define your Budget</label>
                    <input type="text" className="nuevo-presupuesto" placeholder="New Budget"/>
                </div>
            </form>
        </div>
    )
}

export default NewBudget