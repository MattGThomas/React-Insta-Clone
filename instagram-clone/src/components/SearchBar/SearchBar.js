import React from 'react';
import './searchBar.css';

const SearchBar = () => {
    return (
        <div>
            <span className='fab fa-instagram'></span>
            Instagram
            <form>
                <input 
                placeholder = '🔍Search'
                type = 'text'
                />
            </form>
            <div className='rightSearchBar'>
                <span className='far fa-star'></span>
                <span className='far fa-heart'></span>
                <span className='far fa-user'></span>
            </div>
        </div>
    )
}

export default SearchBar;