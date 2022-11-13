import React from "react"
class Row extends React.Component{
  render(){
    return (
      <tr className="RowContainer">
        <td>{this.props.data.ISBN}</td>
        <td>{this.props.data.amount}</td>
        <td>{this.props.data.Totalprice}</td>
      </tr>
    )
  }
}
export default Row;