import React from 'react';

const SimpleForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Enter your name' />
                <br />
                <input type="text" name='email' placeholder='Enter your email' />
                <br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SimpleForm;