import React, { useRef } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { useBudgets } from '../contexts/BudgetsContext'

const AddExpenseModal = ({show, handleClose, defaultBudgetId}) => {
    const descriptionRef = useRef()
    const amountRef = useRef()
    const budgetIdRef = useRef()
    const {addExpense, budgets} = useBudgets()

    function handleSubmit(e) {
        e.preventDefault()
        addExpense({
            description: descriptionRef.current.value,
            amount: parseFloat(amountRef.current.value),
            budgetId: budgetIdRef.current.value
        })
        handleClose()
    }
    return (
        <>
        <Modal 
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
            <div className='bg-gray-900 text-white'>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">New Expense</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form id='budget-form' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" required className='bg-gray-400 focus:bg-gray-300' ref={descriptionRef}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="max">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control 
                        type="number" 
                        required 
                        min={0} 
                        step={0.01} 
                        className='bg-gray-400 focus:bg-gray-300' 
                        ref={amountRef}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Budget</Form.Label>
                        <Form.Select defaultValue={defaultBudgetId} className='bg-gray-400 focus:bg-gray-300' ref={budgetIdRef}>
                            {budgets.map(budget => (
                                <option key={budget.id} value={budget.id}>{budget.name}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='outline-light' type='submit' form='budget-form'>Add</Button>
                </Modal.Footer>
            </div>
        </Modal>
        </>
    )
}

export default AddExpenseModal