import React from 'react';
import { useState,useEffect } from 'react';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.css';

const Pop3 = (props) => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        if (props.popup) {
            setIsVisible(true);

            const timer = setTimeout(() => {
                props.setpopup(false);
                setIsVisible(false);
            }, 2000);

            return () => clearTimeout(timer);
        } else {
            setIsVisible(false);
        }
    }, [props.popup, props.setpopup]);
    return (
        <div className="popup1">
            <div className={`popup ${isVisible ? 'show' : 'hide'}`}>
                <div className="popup">
                    <i className="fa fa-times" aria-hidden="true" onClick={() => props.setpopup(false)}></i>
                    {props.popup && props.selectedValue === 'Inside curly braces' ? (
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

export default Pop3;
