import ExpenseItem from "./ExpenseItem";

function Expenses(props) {

    const title = props.item.title;
    const amount = props.item.amount;
    const date = props.item.date;

    return (

        <ExpenseItem title={title} date={date} amount={amount} />

    );
}

export default Expenses;