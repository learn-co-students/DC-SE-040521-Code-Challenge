import React from "react";

const Transaction = (props) => {
  return (
    <tr>
      <td>{props.accountData.date}</td>
      <td>{props.accountData.description}</td>
      <td>{props.accountData.category}</td>
      <td>{props.accountData.amount}</td>
    </tr>
  );
};

export default Transaction;
