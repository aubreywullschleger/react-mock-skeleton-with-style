var React = require('react');

var ListItemX = React.createClass({
  render: function() {
    return (
      <div className="col-xs-8 col-md-4 col-lg-4">
        <div className="panel panel-default">
          <div className="panel-body">
            <h2>{this.props.dataNum}</h2>
            <p>{this.props.dataDescription}</p>
          </div>
        </div>
      </div>
      );
  }
});

module.exports = ListItemX;
