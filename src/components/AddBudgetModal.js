import React, { useRef } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { useBudgets } from '../contexts/BudgetsContext'

const AddBudgetModal = ({ show, handleClose}) => {
    const nameRef = useRef()
    const maxRef = useRef()
    const {addBudget} = useBudgets()

    function handleSubmit(e) {
        e.preventDefault()
        addBudget({
            name: nameRef.current.value,
            max: parseFloat(maxRef.current.value),
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
                    <Modal.Title id="contained-modal-title-vcenter">New Budget</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form id='budget-form' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="" required className='bg-gray-400 focus:bg-gray-300' ref={nameRef}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="max">
                        <Form.Label>Maximum Spending</Form.Label>
                        <Form.Control type="number" placeholder="" required min={0} step={0.01} className='bg-gray-400 focus:bg-gray-300' ref={maxRef}/>
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

export default AddBudgetModal