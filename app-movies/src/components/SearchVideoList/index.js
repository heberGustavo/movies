import styles from "./SearchVideoList.module.css";
import VideoList from "../VideoList";
import { useState } from "react";

function findVideos(videos, input){
    if(!input) return videos;
    return videos.filter(v => v.title.includes(input) || v.category.includes(input));
}

function SearchVideoList({ videos }){
    
    const [inputValue, setInputValue] = useState();
    const currentVideos = findVideos(videos, inputValue);
    
    return(
        <>
            <section className={styles.searchVideoList}>
                <input 
                    type="search"
                    placeholder="Pesquisar..."
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                />

                <VideoList 
                    videos={currentVideos} 
                    emptyHeading={`Sem vídeos sobre "${inputValue}"`}
                    />
            </section>
        </>
    );
}

export default SearchVideoList;
