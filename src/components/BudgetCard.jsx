import React from 'react'
import { Card, ProgressBar, Button } from 'react-bootstrap'
import { currencyFormatter } from '../utils'

const BudgetCard = ({name, amount, max, hideButtons, onViewExpenseClick}) => {
  const percent = (amount / max) * 100;
  const variantColor = (amount > max) ? 'danger' : 'primary';
  return (
    <>
      <Card className='bg-gray-900 shadow-xl shadow-black mx-auto m-2 mb-5 max-w-3xl'>
        <Card.Body>
            <Card.Title className='flex justify-between mb-6'>
                <div>{name}</div>
                <div className='font-normal'>{currencyFormatter.format(amount)} / {currencyFormatter.format(max)} </div>
            </Card.Title>
            <ProgressBar now={percent} variant={variantColor} ></ProgressBar>
            {!hideButtons && <div className="flex p-3 justify-end mt-2">
              <Button variant='outline-light' onClick={onViewExpenseClick}>View Expenses</Button>
            </div>}
        </Card.Body>
      </Card>
    </>
    
  )
}

export default BudgetCard