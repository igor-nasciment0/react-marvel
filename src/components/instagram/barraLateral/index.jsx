import './index.scss';

export default function BarraLateral() {
    return(
        <section className="instagram-barra-lateral">
            <div className="logo">
                <img src="/logo.png" alt="" />
                <h1>Portfolio.me</h1>
            </div>

            <nav>
                <div>
                    <img src="/assets/images/icons/home.png" alt="" />
                    <h2>Página Inicial</h2>
                </div>

                <div>
                    <img src="/assets/images/icons/search.png" alt="" />
                    <h2>Pesquisa</h2>
                </div>

                <div>
                    <img src="/assets/images/icons/video.png" alt="" />
                    <h2>Reels</h2>
                </div>

                <div>
                    <img src="/assets/images/icons/message.png" alt="" />
                    <h2>Mensagens</h2>
                </div>

                <div>
                    <img src="/assets/images/icons/like.png" alt="" />
                    <h2>Notificações</h2>
                </div>

                <div>
                    <img src="/assets/images/icons/circle.png" alt="" />
                    <h2>Criar</h2>
                </div>
            </nav>
        </section>
    )
}