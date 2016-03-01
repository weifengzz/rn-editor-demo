import React from 'react'
import Mobile from './Mobile'

export default class AddMobile extends React.Component {
	render () {
		return (
			<div id="all" style={{float:"left", paddingTop:250,marginLeft: 30}}>
				<div id="imgDiv">
      		<img src="./imgs/add.png" style={{height: 80,width: 80}} onClick={this.addMobile} />
      	</div>
      	<div id="mobileDiv" style={{display:"none"}}>
      		<Mobile/>
      	</div>
      </div>
		)
	};
	addMobile() {
		document.getElementById("all").style.paddingTop = "0px";
		document.getElementById("imgDiv").style.display = "none";
		document.getElementById("mobileDiv").style.display = "block";
		var html = document.getElementById("center").innerHTML;
	}
}

