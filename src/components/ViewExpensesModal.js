import React from 'react'
import { Modal, Button, Container } from 'react-bootstrap'
import { useBudgets } from '../contexts/BudgetsContext'
import { currencyFormatter } from '../utils'

const ViewExpensesModal = ({budgetId, handleClose, onAddExpenseClick}) => {
    const {getBudgetExpenses, budgets, deleteBudget, deleteExpense} = useBudgets()
    const budget = budgets.find(budget => budget.id === budgetId)
    
    return (
        <>
        <Modal 
        show={budgetId != null}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
            <div className='bg-gray-900 text-white'>
                <Modal.Header closeButton >
                    <Modal.Title id="contained-modal-title-vcenter" className='mr-4'>Expenses - {budget?.name}</Modal.Title>
                        <Button variant='outline-light mr-2' onClick={onAddExpenseClick}>Add</Button>
                        <Button variant='outline-light mr-2' onClick={() => {
                            deleteBudget(budget)
                            handleClose()
                        }}>Delete Budget</Button>
                </Modal.Header>
                <Modal.Body>
                    {getBudgetExpenses(budgetId).map(expense => (
                        <Container key={expense.id} className='flex justify-between'>
                            <div>{expense.description}</div>
                            <div className='flex items-center'>
                                <span className='mr-2'>{currencyFormatter.format(expense.amount)}</span>
                                <Button variant='outline-light'className='mr-2' onClick={() => deleteExpense(expense)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                    </svg>
                                </Button>
                            </div>
                        </Container>
                    ))}
                </Modal.Body>
            </div>
        </Modal>
        </>
    )
}

export default ViewExpensesModal