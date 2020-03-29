// color the rectangle and move them randomlyi
// Today's goal :
//   - rectangles randomly are colored when the color button is clicked
//   - when the select is changed the number of rectangles changes to match it

// in the next class we will make the move function work

// here is a road map of the functions you need to implement.

(function() {
	"use strict";

	window.onload = function() {
		var numSelect = document.getElementById("count");
		numSelect.onchange = createRectangles;

		var colorButton = document.getElementById("color");
		colorButton.onclick = colorIt;

		var moveButton = document.getElementById("move");
		moveButton.onclick = moveIt;

		createRectangles();
		colorIt();
		moveIt();
	};

	// creates the number of rectangles specified in the select.
	function createRectangles() {
		document.getElementById("rectanglearea").innerHTML = "";
		var count = document.getElementById("count").value;

		for (var i = 0; i < count; i++) {
			var rect = document.createElement("div");
			rect.className = "rectangle";
			document.getElementById("rectanglearea").appendChild(rect);
		}
	}

  // Randomly color all of the rectangles
  function colorIt() {
		var count = document.getElementById("color").value;

		for (var i = 0; i < count; i++) {
			var r = Math.floor(Math.random() * 256).toString();
			var g = Math.floor(Math.random() * 256).toString();
			var b = Math.floor(Math.random() * 256).toString();
			var a = Math.random().toString();

			var color = "rgba(${r}, ${g}, ${b}, ${a})";
			var c = document.getElementById("rectanglearea").childNodes;
			document.getElementById("rectanglearea").appendChild(rect);

			c[i].style.backgroundColor = color;
		}
  }

	// Randomly position all the rectangles
	function moveIt() {
		var rects = document.querySelectorAll("#rectanglearea .rectangle");
		var area = document.getElementById("rectanglearea");
		for (var i = 0; i < rects.length; i++) {
			var maxHeight = parseInt(window.getComputedStyle(area).height) - parseInt(window.getComputedStyle(rects[i]).height);
			var maxWidth = parseInt(window.getComputedStyle(area).width) - parseInt(window.getComputedStyle(rects[i]).width);
			rects[i].classList.add("movable");
			rects[i].style.top = Math.floor(Math.random() * maxHeight + 1) + "px";
			rects[i].style.left = Math.floor(Math.random() * maxWidth + 1) + "px";
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
