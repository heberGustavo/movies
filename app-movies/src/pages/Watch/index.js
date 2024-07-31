import Header from '../../components/Header';
import Container from '../../components/Container';
import Footer from '../../components/Footer';

import styles from './Watch.module.css';

function Watch(){
    return(
        <>
            <Header />
            <Container>
            <div className={styles.watch}>
                <iframe width="854" height="480" src="https://www.youtube.com/embed/2y1qW_aH0gQ?si=h6hKfXdWhw353I8Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            </Container>
            <Footer />
        </>
         
    );
}

export default Watch;
