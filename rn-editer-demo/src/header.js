import React from 'react'

export default class Header extends React.Component {
	render () {
		return (
			<nav className="navbar navbar-inverse navbar-fixed-top">
	      <div className="container-fluid">
	        <div className="navbar-header">
	          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
	            <span className="sr-only">Toggle navigation</span>
	            <span className="icon-bar"></span>
	            <span className="icon-bar"></span>
	            <span className="icon-bar"></span>
	          </button>
	          <a className="navbar-brand" href="#">工具</a>
	        </div>
	        <div id="navbar" className="navbar-collapse collapse">
	          <ul className="nav navbar-nav navbar-right">
	            <li><a href="#">视图</a></li>
	            <li><a href="#">设置</a></li>
	            <li><a href="#">文件</a></li>
	            <li><a href="#">帮助</a></li>
	          </ul>
	        </div>
	      </div>
		   </nav>
		)
	}
}
