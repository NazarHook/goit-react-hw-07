import { useDispatch, useSelector } from 'react-redux'
import { changeFilter, selectFilterName } from '../../redux/filtersSlice'
import css from './SearchBox.module.css'
import { useState } from 'react'
export default function SearchBox() {
    const dispatch = useDispatch()
    const name = useSelector(selectFilterName)
    const [value, setValue] = useState()
        return (
        <div className={css.searchBox}>
            <p>Find contacts by name</p>
            <input type="text" 
            className={css.searchInput}
            value={value}
            onChange={event => dispatch(changeFilter(event.target.value))}
            />
        </div>
    )    
}