import React from 'react'
import Header from './header'
import Tools from './tools'
import Drag from './drag'
import Attributes from './Attributes'
import Mobile from './mobile'
import AddMobile from './AddMobile'

export default React.createClass({
  render() {
    return <div>
    	<div>
      	<Header/>
      </div>
      <div id="left-all">
	      <div id="left-top" className="list-group" style={{marginBottom:0,width:150}}>
				 	<a href="#" className="list-group-item active">
	    			工具栏
	  			</a>
			  </div>
	      <div>
		      <div id="left-bottom">
		      	<Tools/>
		      </div>
	      </div>
      </div>
      <div id="center">
      	<div style={{float:"left"}}>
      		<Mobile/>
      	</div>
      	<AddMobile/>
      </div>
      <div id="right">
      	<div id="right-all">
		      <div id="right-top" className="list-group" style={{marginBottom:0,width:200}}>
					 	<a href="#" className="list-group-item active">
		    			View属性
		  			</a>
				  </div>
		      <div>
			      <div id="right-bottom">
			      	<Attributes/>
			      </div>
		      </div>
	      </div>
      </div>
    </div>
  }
})
