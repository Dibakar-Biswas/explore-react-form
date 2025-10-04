import React, { use } from 'react';
import Cousin from './Cousin';
import { MoneyContext } from './FamilyTree';

const Aunt = ({asset}) => {
    const [money, setMoney] = use(MoneyContext)

    const handleAddMoney = () => {
        setMoney(money + 5000)
    }
    return (
        <div>
            <h3>Aunt</h3>
            <section style={{display: 'flex'}}>
                <Cousin asset={asset} name="Putul Di"></Cousin>
                <Cousin name="Samir Da"></Cousin>\
                <button onClick={handleAddMoney}>Add 5000 tk</button>
            </section>
        </div>
    );
};

export default Aunt;