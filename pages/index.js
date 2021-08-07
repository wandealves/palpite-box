import React from 'react';
import Link from 'next/link';

const Index = () =>{

  return (
    <div>
    <h1>Olá</h1>
    <Link href="/sobre">
        <a>Sobre</a>
    </Link>
    <Link href="/contato">
        <a>Contato</a>
    </Link>
    <Link href="/pesquisa">
        <a>Pesquisa</a>
    </Link>
    </div>
  );
}

export default Index;