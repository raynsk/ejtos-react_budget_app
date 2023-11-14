import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import ExpenseList from './components/ExpenseList';
import Location from './components/Location';
import AllocationForm from './components/AllocationForm';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';

// Add code to import the other components here under
import { AppProvider } from './context/AppContext';


const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {
                            /* Add Budget component here */
                        }        
<div className='col-sm'>
                        <Budget />
                    </div>
                        {
                            /* Add Remaining component here*/
                        }        
<div className='col-sm'>
                        <Remaining />
                    </div>
                        {
                            /* Add ExpenseTotal component here */
                        }        
                       <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                    <div className='col-sm'>
                        <Location />
                    </div>
                        {
                            /* Add ExpenseList component here */
                        }         

                        {
                            /* Add ExpenseItem component here */
                        }        

                        {
                            /* Add AllocationForm component here under */
                        }        

                </div>
                <div className="row mt-3">
                    <ExpenseList></ExpenseList>
                    <AllocationForm></AllocationForm>
                    </div> 
            </div>
        </AppProvider>
    );
};
export default App;
