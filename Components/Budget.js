import React,{ useContext, useState } from 'react';
import { AppContext} from '../Context/AppContext';
import { EditBudget } from './EditBudget';
import { ViewBudget } from './ViewBudget';

export const Budget = () =>{
    const { budget ,dispatch}=useContext(AppContext);
    const [isEditing,setIsEditing]=useState(false);

    const handldeEditClick=()=>{
        setIsEditing(true);
    }
    const handleSaveClick=(value)=>{
        dispatch({
            type:'SET_BUDGET',
            payload:value,
        });
        setIsEditing(false);
    }
    return (
        <div className='alert alert-secondary'>
            {isEditing ? (
                <EditBudget handleSaveClick={handleSaveClick} budget={budget}/>
    ):(
        <ViewBudget handldeEditClick={handldeEditClick} budget={budget}/>
    )}
        </div>
    )
}