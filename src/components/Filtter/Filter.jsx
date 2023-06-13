import React from 'react';
// import PropTypes from 'prop-types';
import { Input } from '../styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/filterSlice';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);
    console.log(filter);

    const handleChangeFilter = (event) => {
        console.log(event.target.value)
        // const values = event.target.value;
        dispatch(setFilter(event.target.value));
        // console.log(values)
    }
    return <label>Find contacts by name
            <Input type='text'
                // value={filter}
                onChange={handleChangeFilter}
                name="filter"
                autoComplete="off">
            </Input>
        </label>
};




// Filter.propTypes = {
//     values: PropTypes.string,
//     onChange: PropTypes.func,
// }