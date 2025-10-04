import React from 'react';
import useInputField from '../../hooks/useInputField';

const HookFrom = () => {
    const [name, nameOnChange] = useInputField('');
    const [email, emailOnChange] = useInputField('');
    const [password, passwordOnChange] = useInputField('')

    const handleHook = e => {
        e.preventDefault();
        console.log('submit', name, email, password);
    }

    return (
        <div>
            <form onSubmit={handleHook}>
                <input type="text" defaultValue={name} onChange={nameOnChange} />
                <br />
                
                <input type="email" defaultValue={email} onChange={emailOnChange} name=""/>
                <br />

                <input type="password" defaultValue={password} onChange={passwordOnChange} name=""/>
                <br />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookFrom;