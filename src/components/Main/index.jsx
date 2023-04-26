import React from 'react';

import { Historia } from '../Historia'
import { Nosotros } from '../Nosotros'
import { Contacto } from '../Contacto'


const Main = () => {
    return(
        <div>
            Estamos en el Main
            <Historia/>
            <Nosotros/>
            <Contacto/>

        </div>
    )
}

export { Main }