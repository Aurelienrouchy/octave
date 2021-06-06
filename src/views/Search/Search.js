import React from 'react';

import './Search.css';

import Filters from '../../components/Filters/Filters';
import { useStore } from '../../utils/store';

const Search = () => {
    const store = useStore('auth')
    return (
        <div className="search">
            <div className="title-main">Qui cherchez-vous ?</div>
            <div className="title-main">{store?.userInfos?.email}</div>
            <div className="title-main">{store?.userInfos?.lname}</div>
            <Filters />
        </div>
    );
}

export default Search