import React from "react";
import "../../src/index.css"; 
import portada from "../assets/portada-mendoza.jpg";
import descubri from "../assets/fotoDscubri.jpg";
import excursion from "../assets/fotoExcursion.jpg";
import avatar1 from "../assets/avatar1.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";
import avatar4 from "../assets/avatar4.jpg";
import avatar5 from "../assets/avatar5.jpg";
import avatar6 from "../assets/avatar6.jpg"; 
import Comentario from "../components/comentario";
import imagenContacto from "../assets/imagen-contacto.jpg";
import valijaContacto from "../assets/valija-contacto.jpg";
import { Link } from 'react-router-dom';


const Inicio = () => {
    return (
     <body className="body">
        <div className="portada">
            <a href="/"> 
                <img src= {portada} alt= "Pagina portada"></img>
            </a>
            <p>Tierra del buen vino</p>       
        </div>
        <div className="Descubri">
            <div className="fotoDescubri">
                <a href="/"> 
                    <img src= {descubri} alt= "Descubri Seccion"></img>
                </a>
            </div>
            <div className="texto-descubri">
                <p>Explora la espectacular belleza natural de Mendoza, donde la tranquilidad de sus paisajes te invita a disfrutar de momentos de serenidad y conexión con la naturaleza.</p>
                <Link to="/descubri">
                    <button>Conoce Más</button>
                </Link>
            </div>
        </div>
        <div className="excursiones">
            <div className="texto-excursion">
                <p>Descubre las impresionantes excursiones que revelan la belleza natural de Mendoza, donde cada ruta invita a la conexión íntima con la naturaleza.</p>
                <Link to="/excursiones">
                    <button>Explorar la aventura</button>
                </Link>
            </div>
            <div className="fotoExcursion">
                <a href="/"> 
                    <img src= {excursion} alt= "Descubri Seccion"></img>
                </a>
            </div>
        </div>
        <div className="testimonio">
        <h2>Testimonios</h2>
        </div>
        <div className="comentarios">
            <Comentario avatar={avatar1} nombre="Maria Lopez" texto="¡Mendoza es un lugar increíble! Los paisajes son impresionantes y la gente es muy amigable." />
            <Comentario avatar={avatar2} nombre="Juan Perez" texto="Disfrutar de la naturaleza y los viñedos en Mendoza ha sido una experiencia maravillosa." />
            <Comentario avatar={avatar3} nombre="Carlos Martínez" texto="¡El Spa Termas Cacheuta es un lugar perfecto para relajarse!" />
            <Comentario avatar={avatar4} nombre="Carolina Smith" texto="Pasear por Mendoza me ha enseñado a apreciar la tranquilidad y la belleza de la naturaleza." />
            <Comentario avatar={avatar5} nombre="Nadia Martinez" texto="Recomiendo visitar el dique potrerillos y probar el famoso MATE, de las experiencias más hermosas!" />
            <Comentario avatar={avatar6} nombre="Gaston Poul" texto="Una aventura increíble hacer rafting en el Río Mendoza!! Lo recomiendo" />
        </div>
        <div className="tituloContacto">
        <h2>Contacto</h2>
        </div>
        <div className="Contacto-texto">
                <div className="fotocontacto">
                    <a href="/"> 
                        <img src= {imagenContacto} alt= "deco Contacto"></img>
                    </a>
                </div>
                <div className="texto-contacto">
                    <p>Descubre destinos únicos, vive experiencias memorables y conecta con la verdadera esencia de cada lugar. Déjanos ser tu guía en esta travesía.</p>
                    <p>¡Contáctanos hoy y comienza a planificar tu próxima aventura con nosotros!</p>
                    <Link to="/Contacto">
                        <button>Contactanos</button>
                    </Link>
                </div>
                <div className="valijacontacto">
                    <a href="/"> 
                        <img src= {valijaContacto} alt= "valija contacto"></img>
                    </a>
                </div>
        </div>
    
    </body>
    );
}

export default Inicio;
