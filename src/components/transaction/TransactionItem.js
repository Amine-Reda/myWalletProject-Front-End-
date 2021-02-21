import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTransaction } from "../../actions/projectActions";

class TransactionItem extends Component {
  deleteBtnClick = () => {

    
    if (window.confirm("Are you sur, you wan to delete this Transaction")) {
      this.props.deleteTransaction(
        this.props.transaction.id,
        this.props.walletid
      );
    }
  };
  render() {
    const transaction = this.props.transaction;
    const walletid = this.props.walletid;
    return (
      <tr className="table-danger">
        <td>2020-04-15</td>
        <td>{transaction.description}</td>
        <td>{transaction.amount}</td>
        <td className="text-danger"></td>
        <td>
          <a className="text-info" href="updatetransactionForm.html">
            <i className="fas fa-edit fa-2x"></i>
          </a>
          <Link
            onClick={() => {
              this.deleteBtnClick();
            }}
            className="text-danger"
            to={`/transaction/${walletid}`}
          >
            <i className="fas fa-trash fa-2x"></i>
          </Link>
        </td>
      </tr>
    );
  }
}
export default connect(null, { deleteTransaction })(TransactionItem);
