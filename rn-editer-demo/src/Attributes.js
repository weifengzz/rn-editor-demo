import React from 'react';

export default class Attributes extends React.Component {
	render () {
		return (
			<div>
				<div className="panel panel-default" style={{margin:0}}>
				  <div className="panel-heading">
				    <h3 className="panel-title">attribute</h3>
				  </div>
				  <div className="panel-body">
				    <span>height:<input type='text' style={{width:30}}/></span>&nbsp;
				    <span>width:<input type='text' style={{width:30}}/></span>
				  </div>
				</div>
				<div className="panel panel-default" style={{margin:0}}>
				  <div className="panel-heading">
				    <h3 className="panel-title">FlexBox</h3>
				  </div>
				  <div className="panel-body">
				    <div>
				    	alignItems:
				    	<select name="select" >
					    	<option vlaue="flex-start">flex-start</option>
					    	<option vlaue="flex-end">flex-end</option>
					    	<option vlaue="center">center</option>
					    	<option vlaue="stretch">stretch</option>
				    	</select>
				    </div>
				    <div>
				    	flex:
				    	<input type='text' style={{width:30}}/>
				    </div>
				  </div>
				</div>
				<div className="panel panel-default" style={{margin:0}}>
				  <div className="panel-heading">
				    <h3 className="panel-title">Color</h3>
				  </div>
				  <div className="panel-body">
				    backgroundColor:
				    <input type='text' style={{width:30}}/>
				  </div>
				</div>
				<div className="panel panel-default" style={{margin:0}}>
				  <div className="panel-heading">
				    <h3 className="panel-title">attribute</h3>
				  </div>
				  <div className="panel-body">
				    <span>height:<input type='text' style={{width:30}}/></span>&nbsp;
				    <span>width:<input type='text' style={{width:30}}/></span>
				  </div>
				</div>
				<div className="panel panel-default" style={{margin:0}}>
				  <div className="panel-heading">
				    <h3 className="panel-title">FlexBox</h3>
				  </div>
				  <div className="panel-body">
				    <div>
				    	alignItems:
				    	<select name="select" >
					    	<option vlaue="flex-start">flex-start</option>
					    	<option vlaue="flex-end">flex-end</option>
					    	<option vlaue="center">center</option>
					    	<option vlaue="stretch">stretch</option>
				    	</select>
				    </div>
				    <div>
				    	flex:
				    	<input type='text' style={{width:30}}/>
				    </div>
				  </div>
				</div>
				<div className="panel panel-default" style={{margin:0}}>
				  <div className="panel-heading">
				    <h3 className="panel-title">Color</h3>
				  </div>
				  <div className="panel-body">
				    backgroundColor:
				    <input type='text' style={{width:30}}/>
				  </div>
				</div>
			</div>
		)
	}
}