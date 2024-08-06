import React from 'react';
import { useState,useEffect } from 'react';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.css';

const Pop = (props) => {

    return (
        <div className="popup1">
            <div className={`popup ${props.popup ? 'show' : 'hide'}`}>
                <div className="popup">
                    <i className="fa fa-times" aria-hidden="true" onClick={() => props.setpopup(false)}></i>
                    {props.popup && props.selectedValue === 'JavaScript XML' ? (
                        <>
                            <h1>You did Correct</h1>
                        </>
                    ) : (
                        <>
                            <h2>Hopeful! You Select Wrong</h2>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Pop;
