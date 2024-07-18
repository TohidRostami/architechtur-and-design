import Link from 'next/link';
import React from 'react';
import classes from './button.module.css'

const Button:React.FC<{text:string, to:string }> = (props) => {
    return (
        <Link href={props.to}>
        <button className={classes.button}>{props.text}</button>
        </Link>
    );
};

export default Button;