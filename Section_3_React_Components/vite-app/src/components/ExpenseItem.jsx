// The file name should be each subword starting with capital.
// A component in react is just a JS /JSX function.
import './ExpenseItem.css'
function ExpenseItem(){
    const expenseDate = new Date(2023, 2,28); // date object, regular JS.
    const expenseAmount = 300;
    const expenseTitle = "Some Title of Expense"
    return(
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">{expenseAmount}</div>
            </div>
        </div>
    )
}

// exporting it as a default.
export default ExpenseItem;