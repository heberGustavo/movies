import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();
FavoritesContext.displayName = "MyFavorites";

export default function FavoritesProvider({ children }){
    const [listFavorite, setFavorites] = useState([]);
    
    return(
        <FavoritesContext.Provider value={{listFavorite, setFavorites}}>
            {children}
        </FavoritesContext.Provider>
    );
}

// Hook personalizado
export function useFavoriteContext(){
    const { listFavorite, setFavorites } = useContext(FavoritesContext);

    function addFavorite(newFavorite){
        let newList = [...listFavorite];

        const existItem = listFavorite.some(item => item.id === newFavorite.id);
        if(!existItem){
            newList.push(newFavorite);
            return setFavorites(newList);
        } 
        
        //Use to unfavorite
        newList = listFavorite.filter(item => item.id !== newFavorite.id);
        return setFavorites(newList);
    }

    return{
        listFavorite,
        addFavorite
    }
}