import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


const AddTransaction = () => {

    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }


    return (
        <div className="add-trans">
            <h3>Add new transaction</h3>
            <form id="form" onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Transaction details</label>
                    <input type="text" id="text" placeholder="Enter text...." value={text} onChange={(e) => setText(e.target.value)} />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount<br />
                        (negative - expense, positive - income)
                    </label>
                    <input type="number" id="amount" placeholder="Enter amount...." value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction
