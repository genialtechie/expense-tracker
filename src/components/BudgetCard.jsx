import React from 'react'
import { Card, ProgressBar, Button } from 'react-bootstrap'
import { currencyFormatter } from '../utils'

const BudgetCard = ({name, amount, max, hideButtons}) => {
  const percent = (amount / max) * 100;
  const variantColor = (amount > max) ? 'danger' : 'primary';
  return (
    <>
      <Card className='bg-gray-900 shadow-xl shadow-black lg:flex-basis-1/3 m-2 mb-5'>
        <Card.Body>
            <Card.Title className='flex justify-between mb-6'>
                <div>{name}</div>
                <div className='font-normal'>{currencyFormatter.format(amount)} / {currencyFormatter.format(max)} </div>
            </Card.Title>
            <ProgressBar now={percent} variant={variantColor} ></ProgressBar>
            {!hideButtons && <div className="flex p-3 justify-end mt-2">
              <Button variant='outline-light'>View Expenses</Button>
            </div>}
        </Card.Body>
      </Card>
    </>
    
  )
}

export default BudgetCard