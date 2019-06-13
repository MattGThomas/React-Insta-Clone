import React from 'react';
import './searchBar.css';

const SearchBar = () => {
    return (
        <div className='searchBar'>
            <div className='leftSearchBar'>
                <span className='fab fa-instagram fa-2x'></span>
                <div>Instagram</div>
            </div>
            <form className='search'>
                <input 
                placeholder = '🔍 Search'
                type = 'text'
                />
            </form>
            <div className='rightSearchBar'>
                <span className='far fa-star fa-2x'></span>
                <span className='far fa-heart fa-2x'></span>
                <span className='far fa-user fa-2x'></span>
            </div>
        </div>
    )
}

export default SearchBar;