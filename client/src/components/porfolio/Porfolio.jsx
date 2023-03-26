import "./porfolio.css";
import wines from "../../image/wines.png";
import game from "../../image/game.png";
import todo from "../../image/todo.gif";

export function Porfolio() {
    // <img src="http://orig06.deviantart.net/f139/f/2016/334/9/c/empty_thumb_by_trin003-daq3glb.png" alt="Coming soon"></img>

    return (
        <section class="folio" id="folio">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h2>Porfolio</h2>

                            <div class="row">
                            <div class="col-md-4 frame">
                                <a href="https://pi-videogames-pza6s3qw0-victorwake.vercel.app/" target="_blank" rel="noreferrer" class="thumbnail">
                                    <img
                                        src={game}
                                        alt="Projet Anima"
                                    ></img>
                                </a>
                                    <h3 class="vtitre">Project PI SoyHenry</h3>
                            </div>

                                <div class="col-md-4 frame">
                                    <a href="https://pg-wine.vercel.app/" target="_blank" rel="noreferrer" class="thumbnail">
                                        <img
                                            src={wines}
                                            alt="Projet Tribute Page"
                                        >
                                        </img>
                                    </a>
                                        <h3 class="vtitre">Project PF SoyHenry</h3>
                                </div>

                            <div class="col-md-4 frame">
                                <a href="https://victorpinto-todo.netlify.app/" target="_blank" rel="noreferrer" class="thumbnail">
                                    <img src={todo} alt="Coming soon"
                                    >
                                    </img>
                                    </a>
                                    <h3 class="vtitre">Project Todo</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
