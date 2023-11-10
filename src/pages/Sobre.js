import React, { useState, useEffect } from 'react';
import '../App.css';
import profile from '../profile.jpeg'
import back from '../back.svg';


function Sobre() {

    const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


    return (
        <div>
            <main>
                <div id="headertexto">
                    <h1 id="sombra">Minha jornada, até então 🚀</h1>
                </div>
                <div id="apresentacaomain">
                    <img src={profile} alt="Perfil" />
                    <p>Sou pernambucano, designer e desenvolvedor front-end em formação.
                        Durante minha carreira, foquei minha produção em design gráfico,
                        no desenvolvimento de marcas e peças para publicidade.
                        Atualmente venho me desenvolvendo na área de UX/UI e encontrei no front-end
                        mais uma oportunidade de ir além. Pretendo poder entregar a melhor e mais acessível experiência em interfaces digitais.
                    </p>
                </div>

                <div id="apresentacaocomplemento">
                <h2>Experiência Profissional</h2>
                <p>Desde 2014 venho trabalhando enquanto freelancer em design gráfico, com uma passagem no mercado publicitário até 2017.</p>
                <p>Desde então produzi, sinalizações, (muitos) manuais de identidade visual e desenvolvimento de artes para mídias online e offline.
                Durante este tempo também tive contato com construção de layout para web e aplicativos.</p>
                <h2>Formação</h2>
                <p>Sou bacharel em Design pela UFPE, onde tive a oportunidade de caminhar por várias das áreas de conhecimento desse universo.
                Minha formação teve um forte direcionamento para o design gráfico, com alguns complementos em design de produto, pois achei importante ter uma base no físico além do digital.</p>
                <p>Atualmente estou concluindo uma formação em design de interação no CESAR e dando início a minha jornada no front-end através da Softex Recife.</p>    
                <h2>Offline</h2>
                <p>Quando não estou trabalhando ou estudando grudado em uma tela, estou grudado em uma tela me divertindo.
                Sou um entusiasta dos games e do mundo dos heróis, com uma paixão desde novo por Final Fantasy e Mario.</p>
                </div>
            </main>
            {showBackToTop && (
                <img
                  id="voltar-ao-topo"
                  src={back}
                  alt="Voltar ao Topo"
                  onClick={scrollToTop}
                />
              )}
        </div>

    );
}

export default Sobre;

  