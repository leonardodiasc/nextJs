import Link from 'next/link'

export default function HomePage(){
    return(
        <div>
            <h1>Alura Cases - Home</h1>
            <Link href="/faq">
                <div>Ir para o FAQ</div>
            </Link>
        </div>

    )
}
