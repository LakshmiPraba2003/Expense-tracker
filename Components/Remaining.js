import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

export const Remaining= ()=>{

const {expenses,budget}=useContext(AppContext);

const totalExpenses = expenses.reduce((total,item)=>{
    return (total=total+item.cost);
},0);

const alertType = totalExpenses>budget ? 'alert-danger':'alert-success'

    return (
        <div className={`alert ${alertType}`}>
            <span>remaining: Rs {budget-totalExpenses}</span>
        </div>

    );
}