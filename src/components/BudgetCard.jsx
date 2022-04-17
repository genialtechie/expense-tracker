import React from 'react'
import { Card, ProgressBar } from 'react-bootstrap'
import { currencyFormatter } from '../utils'

const BudgetCard = ({name, amount, max}) => {
  return (
    <>
      <Card className='bg-gray-900 shadow-xl shadow-black'>
        <Card.Body>
            <Card.Title className='flex justify-between mb-6'>
                <div>{name}</div>
                <div className='font-normal'>{currencyFormatter.format(amount)} / {currencyFormatter.format(max)} </div>
            </Card.Title>
            <ProgressBar></ProgressBar>
        </Card.Body>
      </Card>
    </>
    
  )
}

export default BudgetCard