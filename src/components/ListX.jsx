var React = require('react');
var ListItemX = require('./ListItemX.jsx');

var ListX = React.createClass({
  render: function() {
    return (
      <div className="row">
          <ListItemX dataNum="20" dataDescription="new penquins added this month" key="20" />
          <ListItemX dataNum="$1250" dataDescription="monthly average spent on candles" key="1250" />
          <ListItemX dataNum="$50000000000" dataDescription="yearly income goal" key="500000000000" />
          <ListItemX dataNum="15080" dataDescription="otters seen" key="15080" />
          <ListItemX dataNum="12000" dataDescription="WoW quests finished" key="12000" />
          <ListItemX dataNum="5100" dataDescription="puppies" key="5100" />
      </div>
      );
  }
});

module.exports = ListX;
