import React from "react";

const Contact = (props) => {
    return (
        <div>
            <div><h3>{props.greeting}</h3>
            <button>{props.callToAction}</button>
            </div>
        </div>
    );
};

export default Contact;