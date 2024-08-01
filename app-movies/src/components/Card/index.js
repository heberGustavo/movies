import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import iconFavorite from "./images/favorite.png";
import iconUnFavorite from "./images/unfavorite.png";

function Card({ id }){
    return(
        <section className={styles.card}>
            <Link to={`/watch/${id}`}>
                <img 
                    src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} 
                    alt='Capa'
                    className={styles.capa}/>
            </Link>
            <figure className={styles.icon}>
                <img src={iconFavorite} alt="Favoritar Vídeo" />
            </figure>
        </section>
    );
}

export default Card;
