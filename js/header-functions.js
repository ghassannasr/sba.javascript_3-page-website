
loadCDNs();


function writeNavbarHtml() {

  document.write(`
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="./index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./register.html">Register</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              Visit
                </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="./parks.html">Parks</a>
              <a class="dropdown-item" href="./restaurants.html">Restaurants</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Lodging</a>
            </div>
          </li>

        </ul>
        
      </div>
        </nav>
  `);
}

function writeFooterHTML() {
  document.write(`
    <div class="gn-footer">
      I'm a footer, but I'm proud -- Ghassan Nasr 
    </div>
  
  `);
}

function loadCDNs() {
  document.write(`
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
      integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">  
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Cutive+Mono&family=Roboto:wght@300&display=swap"
      rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap" rel="stylesheet">
`);
}






