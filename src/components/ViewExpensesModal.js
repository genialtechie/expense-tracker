import React from 'react'

const ViewExpensesModal = ({budgetId, handleClose}) => {
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
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">New Budget</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='outline-light' >Add</Button>
                </Modal.Footer>
            </div>
        </Modal>
        </>
    )
}

export default ViewExpensesModal