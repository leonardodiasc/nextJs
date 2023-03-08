import Link from 'next/link'
import React from 'react';

function Title({children}){
    return(
        <React.Fragment>
            <h1>{children}</h1>
            <style jsx>{`
            h1{
                    color: red;
            }
            `}</style>
        </React.Fragment>
    );
}
export default function HomePage(){
    return(
        <div>
            <Title>Alura Cases - Home</Title>
            <Link href="/faq">
                Ir para o FAQ
            </Link>
        </div>

    )
}
