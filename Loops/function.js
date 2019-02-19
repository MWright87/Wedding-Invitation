// Returns a random color prefixed by a #
function getRandomColor()
{ 
return '#' + Math.round( Math.random() * 0xffffff ).toString(16);
}

//Create a new div with the class 'box' and adds it to the body
function createBox()
{
	var box =document.createElement('div');
	box.className = 'box';
	box.style.backgroundColor = getRandomColor();
	box.onmouseenter = changeBoxColor;
	document.body.appendChild( box );

	return box;
}

// This makes the box change color when clicked
function changeBoxColor()
{
	this.style.backgroundColor = getRandomColor();
}