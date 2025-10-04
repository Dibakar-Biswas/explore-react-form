import React from 'react';
import Cousin from './Cousin';

const Uncle = () => {
    return (
        <div>
           <h3>Uncle</h3> 
           <section style={{display: 'flex'}}>
            <Cousin name="Subrata"></Cousin>
            <Cousin name="Someresh"></Cousin>
           </section>
        </div>
    );
};

export default Uncle;