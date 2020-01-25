import React from 'react';
import * as constant from '../../helper/constant'

export const SearchField = () => {
    return (
        <input type="text" className="search-field" placeholder={constant.SEARCH_PLACEHOLDER}></input>
    )
}