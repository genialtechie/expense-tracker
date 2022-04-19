import { useBudgets } from "../contexts/BudgetsContext"
import BudgetCard from "./BudgetCard"

function TotalBudgetCard() {
    const {budgets, expenses} = useBudgets()
    const amount = expenses.reduce((total, expense) => total + expense.amount, 0 )
    const max = budgets.reduce((total, budget) => total + budget.max, 0)
    if (max === 0) return null

  return <BudgetCard gray hideButtons name='Total' amount={amount} max={max}/>
}

export default TotalBudgetCard