import React, { Component } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import {toast} from 'react-toastify';


//OrderHome class
export default class Datat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: []
    };
  }

  // Creating report 
 

  componentDidMount() {
    this.retrieveCustomers();
  }

  retrieveCustomers() {
    axios.get("http://localhost:8000/customers").then(res => {
      if (res.data.success) {
        this.setState({
          customers: res.data.existingCustomers
        });
        console.log(this.state.customers)
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`http://localhost:8000/order/delete/${id}`).then((res) => {
      toast(`Order Deleted `, {
        type: toast.TYPE.SUCCESS,
        autoClose: 4000
    });  
    
      this.retrieveCustomers();
    })
  }

  // filter methods
 


  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;
    axios.get("http://localhost:8000/customers").then(res => {
      if (res.data.success) {
        this.filterData(res.data.existingCustomers, searchKey)
      }
    });

  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h4>All Orders</h4>
          </div>
          <div>
              <div className="filter-size">
                  Filter{" "}  
                  <select value={this.props.size} onChange={this.props.filterProducts}>
                    <option value="">All</option>
                    <option value="Starters">Pending</option>
                    <option value="Mains">Accepted</option>
                    <option value="Deserts">Completed</option>
                    <option value="Beverages">Cancelled</option>
                </select></div>
          <div className="col-lg-3 mt-2 mb-2" style={{float:'right'}}>
            <input
              className="form-control"
              type="search"
              placeholder="search"
              name="searchQuery"
              onChange={this.handleSearchArea}></input>

          </div></div>

        </div>

        <table className="table border shadow  table table-striped border " style={{width:'115%',marginLeft:'-90px'}}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ID</th>
              <th scope="col">Marital_Status</th>
              <th scope="col">Income</th>
              <th scope="col">Kidhome</th>
              <th scope="col">Teenhome</th>
              <th scope="col">Recency</th>
              <th scope="col">MntWines</th>
              <th scope="col">MntFruits</th>
              <th scope="col">MntMeatProducts</th>
              <th scope="col">MntFishProducts</th>
              <th scope="col">MntSweetProducts</th>
              <th scope="col">NumDealsPurchases</th>
              <th scope="col">NumStorePurchases</th>
              <th scope="col">AcceptedCmp3</th>
              <th scope="col">AcceptedCmp4</th>
              <th scope="col">AcceptedCmp5</th>
              <th scope="col">AcceptedCmp1</th>
              <th scope="col">AcceptedCmp2</th>
              <th scope="col">Age</th>
              <th scope="col">Education1</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map((customers, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{customers._id}</td>
                <td>{customers.Marital_Status}</td>
                <td>{customers.Income}</td>
                <td>{customers.Kidhome}</td>
                <td>{customers.Teenhome}</td>
                <td>{customers.Recency}</td>
                <td>{customers.MntWines}</td>
                <td>{customers.MntFruits}</td>
                <td>{customers.MntMeatProducts}</td>
                <td>{customers.MntFishProducts}</td>
                <td>{customers.MntGoldProds}</td>
                <td>{customers.NumDealsPurchases}</td>
                <td>{customers.NumCatalogPurchases}</td>
                <td>{customers.NumStorePurchases}</td>
                <td>{customers.NumWebVisitsMonth}</td>
                <td>{customers.AcceptedCmp3}</td>
                <td>{customers.AcceptedCmp4}</td>
                <td>{customers.AcceptedCmp5}</td>
                <td>{customers.AcceptedCmp1}</td>
                <td>{customers.AcceptedCmp2}</td>
                <td>{customers.Age}</td>
                <td>{customers.Education1}</td>
                <td><Link className="btn btn-outline-primary" to={`/order/edit/${customers._id}`}>
                  <i className="fas fa-edit"></i>&nbsp;Edit
          </Link>
          &nbsp;
          <Link className="btn btn-danger" href="#" onClick={() => this.onDelete(customers._id)}>
                    <i className="fas fa-trash-alt"></i>&nbsp;Delete
          </Link>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/order/add" className="btn btn-warning"><i class="fas fa-user-plus"></i>&nbsp;Create New Order</Link>&nbsp;&nbsp;
        <Link onClick={()=>this.exportPDF()} to="#" className="btn btn-success"><i class="fas fa-download"></i>&nbsp;Download Report</Link>
      </div>
    )
  }
};