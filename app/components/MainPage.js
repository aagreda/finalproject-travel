// Include React
var React = require("react");

var Search = require("./PG1/Search");


var Main = React.createClass({

 // Here we render the function
  render: function() {

   return (

<<<<<<< HEAD
     <div className="container">
    <nav>
    <div className ="nav-wrapper">
      <a href="#/" class="brand-logo">Vola</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a>Login</a></li>
        <li><a >Newsfeed</a></li>
      </ul>
      </div>
      </nav>
    
  
=======
     <div>
      <nav>
      <div className="nav-wrapper #eceff1 blue-grey lighten-5">
        <a href="#!" className="brand-logo">Vola</a>
        <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
        <ul className="right hide-on-med-and-down">
          <li><a href="#">Log In</a></li>
          <li><a href="#/newsfeed">Newsfeed</a></li> 
        </ul>
        <ul className="side-nav" id="mobile-demo">
          <li><a href="#">Log In</a></li>
          <li><a href="#">Newsfeed</a></li> 
        </ul>
      </div>

<<<<<<< HEAD
>>>>>>> dda38bcbf3a211e5b9475d2b1d8c5804ec9216d9
=======
  </nav>
    <Search/>
>>>>>>> 45265dc70033c484f82eed5f923a8bb62b7afbc9

     <div className="container">

          {this.props.children}
      </div>
<<<<<<< HEAD
    </div>


=======
    {/*footer begins*/}
      <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Footer Content</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                 
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2017 Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
    </div>



>>>>>>> dda38bcbf3a211e5b9475d2b1d8c5804ec9216d9
  );
}
});

module.exports = Main;


