import React, { Component } from 'react'



export default class Footer extends Component  {
   render(){
      return (
         

        
  <footer className="py-5">
    <div className="row">
      <div className="col-2">
        <h5 className="text-light">Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">About</a></li>
        </ul>
      </div>

      <div className="col-2">
        <h5 className="text-light">Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">About</a></li>
        </ul>
      </div>

      <div className="col-2">
        <h5 className="text-light">Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">About</a></li>
        </ul>
      </div>

      <div className="col-4 offset-1">
        <form>
          <h5 className="text-light">Subscribe to our newsletter</h5>
          <p className="text-light">Receive notifications of upcoming deals</p>
          <div className="d-flex w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    {/* <div className="d-flex justify-content-between py-4 my-4 border-top">
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-light" href="#"><svg className="bi" width="24" height="24"><use href="#twitter"></use></svg></a></li>
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use href="#instagram"></use></svg></a></li>
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use href="#facebook"></use></svg></a></li>
      </ul>
    </div> */}

    {/* <div className="d-flex justify-content-between py-4 my-4 border-top">
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-light" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter"></use></svg></a></li>
        <li className="ms-3"><a className="link-light" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"></use></svg></a></li>
        <li className="ms-3"><a className="link-light" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"></use></svg></a></li>
      </ul>
      <i className="fab fa-facebook-f"></i>
    </div> */}
  </footer>


      );
   }
}
