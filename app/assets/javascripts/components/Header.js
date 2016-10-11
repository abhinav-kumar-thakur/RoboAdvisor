var React = require('react');

var Header = React.createClass({

  render: function () {
    return (
      <header className="header">
        <div className="header__menu-icon">
          <img src="static/images/menu-icon.png"/>
        </div>
        <div className="header__list-container">
          <ul className="header__list">
            <li className="list__item">
              <a href="#" className="list__link">Performance</a>
            </li>
            <li className="list__item">
              <a href="#" className="list__link active">Predictions</a>
            </li>
          </ul>
        </div>
      </header>
    );
  }

});

module.exports = Header;