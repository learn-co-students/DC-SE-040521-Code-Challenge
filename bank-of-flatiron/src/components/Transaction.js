import React from "react";

const Transaction = (props) => {
  
  const handleDelete = () => {
    props.deleteTransaction(props.accountData);
    
  }

  return (
    <tr onClick={handleDelete}>
      <td>{props.accountData.date}</td>
      <td>{props.accountData.description}</td>
      <td>{props.accountData.category}</td>
      <td>{props.accountData.amount}</td>
    </tr>
  );
};

export default Transaction;
