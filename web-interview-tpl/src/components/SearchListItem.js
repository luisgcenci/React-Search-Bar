import React from 'react';
import '../css/SearchListItem.css'

const SearchListItem = ({title, subtitle, image}) => {
    return (
        <div className='SearchListItem'>
            <img src={image} alt="" />
            <div className="Text">
                <p><strong>{title}</strong></p>
                <p>{subtitle}</p>
            </div>
        </div>
    );
}

export default SearchListItem;
