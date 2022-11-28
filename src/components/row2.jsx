import React from 'react';
class Row2 extends React.Component{
  render(){
    return (
      <tr>
        {/*console.log(this.props.data)*/}
        <td>{this.props.data.id}</td>
        <td>{this.props.data.id_fk}</td>
        <td>{this.props.data.fecha}</td>
      </tr>
    )
  }
}
export default Row2;