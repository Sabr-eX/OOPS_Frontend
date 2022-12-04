import React, { Component } from 'react'
import './Pagination.css'


export default class Pagination extends Component  {
   render(){
      return (
        <nav>
  <ul className="pagination justify-content-center pagination">
    <li className="page-item disabled">
      <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
    </li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item active" aria-current="page">
      <a className="page-link" href="#">2</a>
    </li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item">
      <a className="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>

      );
   }
}
         
