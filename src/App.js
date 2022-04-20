import './App.css';
import {Container, Button} from 'react-bootstrap';
import BudgetCard from './components/BudgetCard';
import AddBudgetModal from './components/AddBudgetModal';
import AddExpenseModal from './components/AddExpenseModal';
import TotalBudgetCard from './components/TotalBudgetCard';
import ViewExpensesModal from './components/ViewExpensesModal';
import { useState } from 'react';
import { useBudgets } from './contexts/BudgetsContext';


function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false)
  const [showViewExpenseModalBudgetId, setShowViewExpenseModalBudgetId] = useState()
  const {budgets, getBudgetExpenses} = useBudgets();

  return (
    <div className="App bg-gray-800 overflow-scroll h-screen text-white">
      <Container>
        <div className='flex flex-row mb-4 justify-around p-6 shrink' >
          <h1 className='text-4xl'>Expense Tracker</h1>
          <span>
            <Button variant='outline-light' className='mr-4 mb-2' onClick={() => setShowAddBudgetModal(true)}>Create Budget</Button>
            <Button variant='outline-light'className='mr-4 mb-2' onClick={() => setShowAddExpenseModal(true)}>Add Expense</Button>
          </span>
        </div>
        <div>
          {
            budgets.map(budget => {
              const amount = getBudgetExpenses(budget.id).reduce(
                (total, expense) => total + expense.amount,
                0
              )
              return (
              <BudgetCard 
              key={budget.id} 
              name={budget.name} 
              amount={amount} 
              max={budget.max} 
              onViewExpenseClick={() => setShowViewExpenseModalBudgetId(budget.id)}/>
              )})
          }
          <TotalBudgetCard />
        </div>
      </Container>
      <AddBudgetModal show={showAddBudgetModal} handleClose={() => setShowAddBudgetModal(false)}/>
      <AddExpenseModal show={showAddExpenseModal} handleClose={() => setShowAddExpenseModal(false)}/>
      <ViewExpensesModal onAddExpenseClick={() => setShowAddExpenseModal(true)} budgetId={showViewExpenseModalBudgetId} handleClose={() => setShowViewExpenseModalBudgetId()}/>
    </div>
  );
}

export default App;
