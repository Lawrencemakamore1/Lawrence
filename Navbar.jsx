import React from 'react';

const Navbar = () => {
  return (
    <div>
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand fw-bold fs-4" href="#"><h6>Shotime</h6></a>
    
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">men</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">women</a>
        </li>
        <li>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">cart (0)</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">menu</a>
        </li>
      </ul>    
    </div>
  </div>
</nav> 
    </div>
    
  )
}

export default  Navbar;