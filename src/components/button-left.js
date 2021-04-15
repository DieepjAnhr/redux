import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeStateText } from '../redux/actions/changeValue';
 
const ButtonLeft = () => {
    const dispatch = useDispatch();
    const nowStateText = useSelector(state => state.getStateText);
    const handleClick = () => { 
        const action = changeStateText(!nowStateText);
        dispatch(action);
        console.log(action);
    }
    return (
        <div onClick={handleClick}>
            click
        </div>
    );
};
 
export default ButtonLeft;