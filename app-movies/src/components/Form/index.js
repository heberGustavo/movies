import styles from "./Form.module.css";
import { categories } from "../Category";
import { useEffect, useState } from "react";

function Form() {
    const [url, setUrl] = useState('');
    const [category, setCategory] = useState('');
    const [listVideos, setVideos] = useState([]);
    const [errors, setErrors] = useState('');

    function onSave(e) {
        e.preventDefault();
        
        if(!validateForm())
            return;

        const newVideo = { url, category };
        setVideos([...listVideos, newVideo]);        
        
        saveInLocalStorage(newVideo);
        clearForm();
    }
    
    function validateForm(){
        if(!validateUrl(url))
            return false;

        if(!category){
            setErrors("ERRO: Selecione uma categoria!");
            return false;
        }

        setErrors("");

        return true;
    }

    function validateUrl(url){
        const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/

        if(!regex.test(url) || url.length < 43){
            setErrors("ERRO: URL inválida!");
            return false;
        }
        return url.substring(32, 43);
    }

    function saveInLocalStorage(newVideo){
        localStorage.setItem("listVideos", JSON.stringify([...listVideos, newVideo]));
    }

    function clearForm(){
        setUrl("");
        setCategory("");
    }

    return (
        <section className={styles.container}>
            <h2>Cadastro de vídeo</h2>
            <form onSubmit={onSave}>
                <div>
                    <label>URL do vídeo</label>
                    <input
                        type="text" placeholder="Digite a URL do vídeo"
                        required="required" minLength="43" maxLength="43"
                        value={url} onChange={(e) => setUrl(e.target.value)}
                    />
                </div>
                <div>
                    <label>Categoria</label>
                    <select 
                        //required
                        value={category} onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="" selected disabled>Selecione uma categoria</option>
                        {categories.map(categoria => <option value={categoria}>{categoria}</option>)}
                    </select>
                </div>
                <div>
                    <button>Cadastrar</button>
                </div>
                <div>
                    { errors }
                </div>
            </form>
        </section>
    );
}

export default Form;
