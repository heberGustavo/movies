import styles from "./Favorites.module.css";

import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import { useFavoriteContext } from "../../contexts/Favorites";
import VideoList from "../../components/VideoList";

function Favorites(){
    const { listFavorite } = useFavoriteContext();

    return(
        <>
            <Header />
            <Container>
                <section className={styles.favorites}>
                    <h2>Meus Favoritos</h2>
                    <VideoList videos={listFavorite} emptyHeading="Nenhum vídeo favoritado" />
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Favorites;
