import React, {useState} from 'react'
import './SearchBar.css';
import {  Search as SearchIcon } from '@material-ui/icons';
import {useHistory} from 'react-router-dom';

const SearchBar = () => {

    const [listingFilter, setListingFilter] = useState('');
    const history = useHistory();


    const showListingPage = () => {
        history.push('/listing')
    }

    return (
        <div className={'search-bar-container'}>
            <h2 className={'search-barch-title'}>Lorem Lipsum</h2>
            <div className={'search-bar-input'}>
                <input type='text'  placeholder={'Lorem Lipsum'} onChange={ event => setListingFilter(event.target.value)}/>
                <div className={'search-icon'} onClick={showListingPage}>
                    <SearchIcon/>
                </div>
            </div>
        </div>
    )
}


export default SearchBar;
