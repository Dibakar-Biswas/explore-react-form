import React from 'react';
import Special from './Special';
import Friend from './Friend';

const Cousin = ({name, asset}) => {
    return (
        <div>
            <h3>{name}</h3>
            {
                name === 'Putul Di' && <Special asset={asset}></Special>
            }
            {
                name === 'Samir Da' && <Friend></Friend>
            }
        </div>
    );
};

export default Cousin;