import { Link } from "react-router-dom";

const Navbar=()=> {
  return(
    
    <nav class="navbar navbar-expand-lg">
  <div class="container">
    <Link to="home" class="navbar-brand" href="#">ADESOJI</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
        <li class="nav-item">
          <Link to='home' class="nav-link" href="#">HOME</Link>
        </li>
        <li class="nav-item">
          <Link to='about' class="nav-link" href="#">ABOUT</Link>
        </li>      
        <li class="nav-item">
          <Link to='services' class="nav-link" href="#">SERVICES</Link>
        </li>
        <li class="nav-item">
          <Link to='portfolio' class="nav-link" href="#">PORTFOLIO</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar;