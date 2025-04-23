import { createContext, useContext, useRef, useState } from "react";


export const SearchContext = createContext({});

const SearchContextProvider = ({children})=>{
    const [isLoading, setIsLoading] = useState(false);
    const [isSearchPage, setIsSearchPage] = useState(false);

    return (
        <SearchContext.Provider value={{isLoading, setIsLoading, isSearchPage, setIsSearchPage}}>
            {children}
        </SearchContext.Provider>
    )
}

export const useSearchContext = () => useContext(SearchContext);

export default SearchContextProvider;