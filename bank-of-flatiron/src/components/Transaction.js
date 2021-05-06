import React from "react";

const Transaction = (props) => {
  
  const handleDelete = () => {
    props.deleteTransaction(props.accountData);
    
  }

  return (
    <tr>
      <td>{props.accountData.date}</td>
      <td>{props.accountData.description}</td>
      <td>{props.accountData.category}</td>
      <td>{props.accountData.amount}</td>
      {/* <button className="bnt" onClick={handleDelete} style={{}}>Delete</td> */}
      <td>
        <button onClick={handleDelete} variant="primary" size="sm" style={{backgroundColor: "maroon", color:"white", padding: "3px"}}>
          delete
      </button>{' '}
    </td>
      
    </tr>
  );
};

export default Transaction;
