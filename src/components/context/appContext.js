import { createContext,useContext } from "react";
import { useState } from "react";
const AppContext=createContext(null);


export const useAppContext=()=>{
    const context = useContext(AppContext);
    if(context === undefined){
        throw new Error('Appcontext should be in Provider')
    }
    return context;
}
const AppContextProvider=({children})=>{
    const [favorites, setFavorites] = useState([]);
    const AddTOFavorites=(music)=>{
        const oldFavorites={...favorites};
        const newFavorites=oldFavorites.concat(music);
        setFavorites(newFavorites);
    }
    const RemoveFromFavorites=(id)=>{
        const oldFavorites={...favorites};
        const newFavorites=oldFavorites.filter((music)=>music.id !== id);
        setFavorites(newFavorites);
    }
    return(
        <AppContext.Provider value={{favorites,AddTOFavorites,RemoveFromFavorites}}>
            {children}
        </AppContext.Provider>
    );
}
export default AppContextProvider;