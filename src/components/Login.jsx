import React, { useState } from 'react';
import '@fontsource/playfair-display';

const SignUpForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [hover , SetHover] = useState(false)
    const handelHover = ()=>{
        SetHover(!hover)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <section style={{
            paddingTop: '128px',
            paddingBottom: '128px',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div style={{height : "200px" ,width: "100%" , background : "#f2f3f5" , position : 'absolute', top : "70px" , display : 'flex' , justifyContent : "center" , alignItems : "center" , fontFamily : "Playfair Display" , fontSize : "60px" , fontWeight :"500"} }>
                <span style={{color : "goldenrod"}}>A</span>ccount
            </div>
            <div style={{
                maxWidth: '400px',
                width: '100%',
                paddingLeft: '16px',
                paddingRight: '16px',
                marginTop :"200px",
                backgroundColor: '#f9f9f9',
                borderRadius: '8px',
                boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                padding: '32px'
            }}>
                <h2 style={{
                    fontSize: '28px',
                    fontWeight: 600,
                    marginBottom: '24px',
                    textAlign: 'center',
                    fontFamily : "Playfair Display"
                }}>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '16px' }}>
                        <label htmlFor="name" style={{ display: 'block', marginBottom: '8px' }}>Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            style={{
                                width: '100%',
                                padding: '12px',
                                borderRadius: '4px',
                                border: '1px solid #ccc',
                                boxSizing: 'border-box'
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: '16px' }}>
                        <label htmlFor="email" style={{ display: 'block', marginBottom: '8px' }}>Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{
                                width: '100%',
                                padding: '12px',
                                borderRadius: '4px',
                                border: '1px solid #ccc',
                                boxSizing: 'border-box'
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: '16px' }}>
                        <label htmlFor="password" style={{ display: 'block', marginBottom: '8px' }}>Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{
                                width: '100%',
                                padding: '12px',
                                borderRadius: '4px',
                                border: '1px solid #ccc',
                                boxSizing: 'border-box'
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: '24px' }}>
                        <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: '8px' }}>Confirm Password:</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            style={{
                                width: '100%',
                                padding: '12px',
                                borderRadius: '4px',
                                border: '1px solid #ccc',
                                boxSizing: 'border-box'
                            }}
                        />
                    </div>
                    <button
                        type="submit"
                        style={{
                            width: '100%',
                            padding: '14px',
                            backgroundColor: hover ?'white':'black',
                            color: hover ?'black':'white',
                            border: hover ?'black solid 3px':'black solid 3px',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '20px',
                            fontWeight: 500, 
                            transition :"ease 0.5s", 
                        }}
                        onMouseEnter={handelHover} onMouseLeave={handelHover}
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </section>
    );
};

export default SignUpForm;
