import React from 'react';
import './searchBar.css';

const SearchBar = () => {
    return (
        <div>
            <span className='fab fa-instagram'></span>
            Instagram
            <input 
            placeholder = '🔍Search'
            type = 'text'
            />
            <div className='rightSearchBar'>
                <span className='far fa-star'></span>
                <span className='fas fa-heart'></span>
                <span className='fas fa-user'></span>
            </div>
        </div>
    )
}

export default SearchBar;