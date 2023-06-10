import React from 'react'

//desectructuracion (props)

const TituloPrincipal = ({titulo,dia}) => {
    return (
    <>
        <h1> {titulo} </h1>
        <h2> Hoy es dia {dia} </h2>

    </>
    )
}

export default TituloPrincipal