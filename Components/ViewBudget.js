import React from 'react';

export const ViewBudget=(props)=>{
    return(
        <div>
            <span>Budget: Rs{props.budget}</span>
            <button type='button' className='btn btn-primary' onclick={props.handleEditClick}>Edit</button>
        </div>
    );
};