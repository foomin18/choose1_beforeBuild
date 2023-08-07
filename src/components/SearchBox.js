import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='search friend' 
                onChange={searchChange} //input内容が変わるたびに{}の関数実行
            />
        </div>
    );
}

export default SearchBox;