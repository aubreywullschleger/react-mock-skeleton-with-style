var React = require('react');
var ListX = require('./ListX.jsx');

var PanelListXManager = React.createClass({
  render: function() {
    return (
      <ul>
          <ListX />
      </ul>
    );
  }
});

module.exports = PanelListXManager;
