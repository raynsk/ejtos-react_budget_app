
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch,remaining, currency} = useContext(AppContext);

    const [newBudget, setNewBudget] = useState(budget);
    
    const handleBudgetChange = (event) => {
        if(event.target.value > 20000)
        {
            alert("The value cannot exceed 20,000");
            return;
        }
        // B - E = R, B-R=E
        if(event.target.value < budget - remaining)
        {
            alert("You cannot reduce the budget value lower than the spending");
            return;
        }
        setNewBudget(event.target.value);
        dispatch(
            {
                type: "SET_BUDGET",
                payload: event.target.value
            }
        );
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;