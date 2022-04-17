import './App.css';
import {Container, Button} from 'react-bootstrap';
import BudgetCard from './components/BudgetCard';


function App() {
  return (
    <div className="App bg-gray-800 h-screen text-white">
      <Container>
        <div className='flex flex-row mb-4 justify-around p-6' >
          <h1 className='text-4xl'>Expense Tracker</h1>
          <span>
            <Button variant='outline-light' className='mr-4' >Create Budget</Button>
            <Button variant='outline-light'>Add Expense</Button>
          </span>
        </div>
        <BudgetCard name='Weekly Expenses' amount={330} max={456}></BudgetCard>
      </Container>
    </div>
  );
}

export default App;
