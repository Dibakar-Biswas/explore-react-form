import React from 'react';
import Cousin from './Cousin';

const Aunt = ({asset}) => {
    return (
        <div>
            <h3>Aunt</h3>
            <section style={{display: 'flex'}}>
                <Cousin asset={asset} name="Putul Di"></Cousin>
                <Cousin name="Samir Da"></Cousin>
            </section>
        </div>
    );
};

export default Aunt;