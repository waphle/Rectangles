// color the rectangle and move them randomlyi
// Today's goal :
//   - rectangles randomly are colored when the color button is clicked
//   - when the select is changed the number of rectangles changes to match it

// in the next class we will make the move function work

// here is a road map of the functions you need to implement.

(function() {
	"use strict";

	window.onload = function() {
		var colorButton = document.getElementById("color");
		colorButton.onclick = colorIt;

		var moveButton = document.getElementById("move");
		moveButton.onclick = moveIt;

		var numSelect = document.getElementById("count");
		numSelect.onchange = createRectangles;

		createRectangles();
		colorIt();
		moveIt();
	};

	// creates the number of rectangles specified in the select.
	function createRectangles() {
		document.getElementById("rectanglearea").innerHTML = "";
		var count = document.getElementById("count").value;
		// finish the functions here

	}

   	// Randomly color all of the rectangles
    function colorIt() {
    	// your code goes here
    	//you might find the following code snippts useful
    	//var r = Math.floor(Math.random() * 256);
    }

    // // WARNING: incomplete
	// Randomly position all the rectangles
	function moveIt() {
		var rects = document.querySelectorAll("#rectanglearea .rectangle");
		var area = document.getElementById("rectanglearea");
		for(var i = 0; i < rects.length; i++) {

		}
	}

	function init() {
			id("animate-btn").addEventListener("click", animateText);
			id("reset-btn").addEventListener("click", reset);
	}

	function animateText() {
		if (timeId === null) {
			id("input-text").disabled = true;
			timerId = setInterval(nextCharacter, 500);
		}
		else {
			clearInterval(timerID);
			timerId = null;
		}
	}

	// Resets the animation, which clears the input and output, along with the timer
	function reset() {
		clearInterval(timerId);
		timeId = null;
		index = 0;
		id("output").textContent = "";
		id("input-text").value = "";
		id("input-text").disabled = false;
	}


})();
