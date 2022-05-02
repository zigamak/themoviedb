import React, {useState, useEffect, useRef} from "react";

//Image
import searchIcon from '../../images/search-icon.svg';

//Styles
import {Wrapper, Content} from './SearchBar.styles';

const SearchBar = ({setSearchTerm})=>{
 
    useEffect(()=> {
        const timer =setTimeout(()=>{
            setSearchTerm(state);
        },500)
        return()=> clearTimeout(timer)
    },[setSearchTerm,state])

    const [state, setState]= useState('');
    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon' />
                <input 
                type='text' 
                placeholder="Search Movies" 
                onChange={event=>setState(event.currentTarget.value)}
                value={state}
                />
            </Content>
        </Wrapper>
    )
}

export default SearchBar;