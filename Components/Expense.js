import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

export const Expense =()=>{

  const {expenses} = useContext(AppContext);

  const totalExpenses = expenses.reduce((total,item)=>{
    return (total=total+item.cost);
  },0)

  return (
    <div className='alert alert-primary'>
      <span>Spent so far: Rs{totalExpenses}</span>
    </div>
  );
}