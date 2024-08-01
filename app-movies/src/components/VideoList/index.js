import styles from "./VideoList.module.css";

import Card from "../Card";

function VideoList({ videos, emptyHeading }){
    
    const count = videos.length;
    let heading = emptyHeading;
    
    if(count > 0){
        const helperHeading = count > 1 ? "vídeos" : "vídeo";
        heading = `${count} ${helperHeading}`;
    }

    return(
        <>
            <h2>{heading}</h2>
            <section className={styles.videoList}>
                <div>
                    { videos.map(video => <Card id={video.id} key={video.id} />) }
                </div>
            </section>
        </>
    );
}

export default VideoList;
