import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import iconFavorite from "./images/favorite.png";
import iconUnFavorite from "./images/unfavorite.png";
import { useFavoriteContext } from '../../contexts/Favorites';

function Card({ id }){
    const { listFavorite, addFavorite } = useFavoriteContext()
    const isFavorite = listFavorite.some(item => item.id === id);
    const currenteIcon = isFavorite ? iconUnFavorite : iconFavorite;
    
    return(
        <section className={styles.card}>
            <Link to={`/watch/${id}`}>
                <img 
                    src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} 
                    alt='Capa'
                    className={styles.capa}/>
            </Link>
            <figure className={styles.icon}>
                <img 
                    src={currenteIcon} 
                    alt="Favoritar Vídeo" 
                    onClick={() => addFavorite({id})}
                    />
            </figure>
        </section>
    );
}

export default Card;
