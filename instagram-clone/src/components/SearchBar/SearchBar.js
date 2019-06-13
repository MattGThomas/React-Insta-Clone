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
                <i className='far fa-star fa-2x'></i>
                <i className='far fa-heart fa-2x'></i>
                <i className='far fa-user fa-2x'></i>
            </div>
        </div>
    )
}

export default SearchBar;