import React from 'react'
import ReactDOM from 'react-dom'
//import Primeiro from './componentes/Primeiro'
//import Bomdia from './componentes/Bomdia'
//import Timer from './componentes/Time'
//import {BomDia, BoaTarde} from './componentes/Multiplos'
import Saudacao from './componentes/Saudacao'

//ReactDOM.render(<Bomdia nome='Pedro' saudacao=' Boa noite'/>, document.getElementById('root'))
/*ReactDOM.render(
    <div>
    <BomDia nome = "Fernanda"/>
    <BoaTarde nome = "Fê"/>
    </div>, 
    document.getElementById('root'))*/

    ReactDOM.render(
        <div>
            <Saudacao tipo="Bom dia" nome="João"/>
        </div>,
        document.getElementById('root')
    )
