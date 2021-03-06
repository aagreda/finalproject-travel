var React = require("react");
var infoHelper  = require("../utils/InfoApi_helpers.js");



console.log('in info');

var Info= React.createClass({
  getInitialState() {
    return {
      name: ''
    }
  },
  componentDidMount: function(){
    console.log('componentdidmount');
    console.log('this.props', this.props);
    infoHelper.getCitydata(this.props.city) 
    .then(function(response){
      console.log(response.data.name);
      this.setState({name: response.data.name, climateIndex: response.data.climate_index, best_months_to_visit_text: response.data.best_months_to_visit_text})
    }.bind(this));


  },

    render:function(){
      console.log(this.state);
        return(
                /*this will be for info on page2*/
                
                      <div style={styles} className="card blue-grey darken-1">
                        <div className="card-content white-text">
                          <span className="card-title">Information: {this.state.name}</span>
                          <p>{this.state.best_months_to_visit_text}</p>
                        </div>
                      
                      </div>
                   
            )
    }

    });

const styles = {
  marginBottom: '200px'

}


module.exports= Info;