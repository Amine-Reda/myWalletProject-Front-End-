import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getTransactions } from "../../actions/projectActions";
import TransactionItem from "./TransactionItem";

class Transaction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalTransaction: 0.0,
    };
  }

  componentWillReceiveProps(nexProps) {
    let totalTran = 0.0;
    if (nexProps.transactions) {
      for (let i = 0; i < nexProps.transactions.length; i++) {
        if (nexProps.transactions[i].type === 1) {
          totalTran = totalTran + nexProps.transactions[i].amount;
        } else {
          totalTran = totalTran - nexProps.transactions[i].amount;
        }
      }

      this.setState({ totalTransaction: totalTran });
    }
  }

  componentDidMount() {
    this.props.getTransactions(this.props.match.params.id);
  }
  render() {
    const walletid = this.props.match.params.id;
    const transactions = this.props.transactions;
    const transactionComponent = transactions.map((transaction) => (
      <TransactionItem
        key={transaction.id}
        transaction={transaction}
        walletid={walletid}
      />
    ));
    let id = this.props.match.params.id;
    return (
      <div className="container">
        <Link to="/dashboard" className="btn btn-default btn-lg mb-3">
          Back
        </Link>
        <Link to={`/trans/add/${id}`} className="btn btn-info btn-lg mb-3">
          <i className="fas fa-plus-circle"> Record new Transaction</i>
        </Link>
        <br />
        <div className="card text-center">
          <div className="card-header bg-success text-white">
            <h4>UBL Account Balance</h4>
            <h1>Rs. {this.state.totalTransaction}</h1>
          </div>
        </div>
        <hr />

        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Description</th>
              <th scope="col">Amount</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>{transactionComponent}</tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  transactions: state.transaction.transactions,
});
export default connect(mapStateToProps, {
  getTransactions,
})(Transaction);
