import Header from '../../components/Header';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import PageNotFound from '../../pages/PageNotFound';

import { useParams } from 'react-router-dom';
import videos from '../../json/videos.json';
import styles from './Watch.module.css';

function Watch(){

    const params = useParams();
    const video = videos.find(video => video.id === params.id);
    
    if(!video) { return <PageNotFound />}

    return(
        <>
            <Header />
            <Container>
            <div className={styles.watch}>
                <iframe 
                    width="854" height="480" 
                    src={`https://www.youtube.com/embed/${video.id}`} 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            </Container>
            <Footer />
        </>
         
    );
}

export default Watch;
