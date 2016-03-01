import React from 'react'

export default class Drag extends React.Component {
	render () {
		return (
			<div>
				<div id="div1" onDrop={this.drop} onDragOver={this.allowDrop}></div>
				<br />
				<img id="drag1" style={{width:200,height: 30}} src={"./img.png"} draggable={true} onDragStart={this.drag} />
			</div>
		)
	};
	allowDrop(event)
	{
		event.preventDefault();
	};

	drag(event)
	{
		event.dataTransfer.setData("Text",event.target.id);
	};

	drop(event)
	{
		alert("dsf");	
		event.preventDefault();
		var data=event.dataTransfer.getData("Text");
		event.target.appendChild(document.getElementById(data));	
	}
}

