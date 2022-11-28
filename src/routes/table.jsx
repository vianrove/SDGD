import React from "react"
import Navbar from "../components/navbar";
import Footer from "../components/footer"
import Row2 from "../components/row2";
import "../components/styles/table.css";
class Table extends React.Component{

  render(){
    return (
      <div className="tableConexions">
        <Navbar/>
        <div className="table-conexion">
        <table>
          <tr>
            <th>#</th>
            <th>id user</th>
            <th>date</th>
          </tr>
          {this.props.data.map(user =><Row2 key={user.id} data={user}/>)}
        </table>
        </div>       
        <Footer/>        
      </div>
    )
  }
}
export default Table;