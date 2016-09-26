var React = require('react'),
  Header = require('./../app/header'),
  { Link } = require('react-router');

module.exports = React.createClass({
  render: function(){
    return (
      <div className="main-panel">
        <Header menu="about" />
        <div className="page">
          <div className="block">
            <h1>Jobs</h1>
            <p>GitHub: <Link to="https://github.com/adcpm/bus">https://github.com/adcpm/busy</Link></p>
            <p>Roadmap: <Link to="https://github.com/adcpm/busy#roadmap">https://github.com/adcpm/busy#roadmap</Link></p>
            <p>Issues: <Link to="https://github.com/adcpm/busy/issues">https://github.com/adcpm/busy/issues</Link></p>
            <p><Link to="/trending/busy-jobs">#busy-jobs</Link></p>
            <br /><br />
            <h1>Stack</h1>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>React.js</li>
              <li>Redux</li>
              <li>Webpack</li>
              <li>ES7</li>
              <li>ESLint</li>
              <li>Draft.js</li>
              <li>Steem.js</li>
              <li>React Native</li>
              <li>Electron</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});