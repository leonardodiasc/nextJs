import Link from 'next/link'
import React from 'react';
import HomeScreen from '../src/screens/HomeScreen';

export default HomeScreen;
/* 
function GlobalStyle(){
    return (
        <style jsx global>{`
            body{
                font-family: sans-serif;
            }
        `}
        </style>
    )
}
function Title({children, as}){
    const Tag = as;
    return(
        <React.Fragment>
            <h1>{children}</h1>
            <style jsx>{`
            ${Tag}{
                    color: red;
            }
            `}</style>
        </React.Fragment>
    );
}
export default function HomePage(){
    return(
        <div>
            <GlobalStyle/>
                <Title as="h1">Alura Cases - Home</Title>
                <Link href="/faq">
                    Ir para o FAQ
                </Link>
        </div>

    )
}
 */