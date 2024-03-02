import { Link } from 'react-router-dom';
import React, { useState } from "react";

export function Recreacao() {
    

    return (
        <div>
            <h3 className='text-4xl font-bold mb-6'>Recreação</h3>
            <p className='text-lg font-normal text-justify'>
                Nossos passeios abrangem o pedagócico, cultural e lazer desde a Educação Infantil ao Ensino Médio, mas também trabalhamos com saídas para terceira idade, comunidades, e condomínios. Nossas atividades contam com monitoria especializada equipada com rádios-comunicadores que oferecem precisão e aumenta a segurança dos seus alunos, pulseira de identificação, transpotes (vans, micros e ônibus) executivos, com vidro lacrado, ar-condicionado, cinto de segurança e toda documentação para percorrer as estradas brasileiras, primeiros-socorros, uniformes de identificação da monitoria e coordenação do evento. Todo nosso protocolo é feito para manter a segurança dos contratantes ao mesmo tempo que oferecemos uma experiência inesquecível.   
            </p>
            <button className='bg-[#F0CC2B] rounded-md text-sm font-bold py-2 px-6 mt-6'><Link href="/portfolio">Ver Mais!</Link></button>
                       
        </div>
    );
}

export function Assessoria() {
    

    return (
        <div className='mr-10'>
            <h3 className='text-4xl font-bold mb-6'>Assessoria</h3>
            <p className='text-lg font-normal text-justify'>A Assessoria de Imprensa é feita com jornalistas profissionais, com MTB. Há o atendimento personalizado da imagem de cada cliente, focando na história e conteúdo criado a partir dela e ativação de fatos, momentos e informações dentro da sua carreira. Além disso, há o material escrito, publicado e enviado aos meios de comunicação, sendo que, para estes veículos, sugerimos pautas, com direcionamento à imprensa especializada de cada área, e produção de conteúdos para as redes sociais. A Assessoria se fundamenta na credibilidade junto aos meios de comunicação, com honestidade de informação.</p>
            <button className='bg-[#F0CC2B] rounded-md text-sm font-bold py-2 px-6 mt-8'><Link href="/assessoria">Ver Mais!</Link></button>
        </div>
    );
}