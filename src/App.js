import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import medalsTableData from "./medalsData";

import TableComponent from "./components/TableComponent";
import * as actions from "./actions";

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <TableComponent props={this.props} />
        <button onClick={() => this.props.reset()}>Reset</button>
        <button onClick={() => this.props.deleteRows()}>Delete</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  medalsTableData: state.medalsTable.medalsTableData,
  data: state.medalsTable.data,
  dataOrderArray: state.medalsTable.dataOrderArray
});

const mapDispatchToProps = dispatch => ({
  sortDescending: medalType => dispatch(actions.sortDescending(medalType)),
  reset: () => dispatch(actions.reset()),
  deleteRows: () => dispatch(actions.deleteRows()),
  handleRowSelection: country => dispatch(actions.handleRowSelection(country))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
