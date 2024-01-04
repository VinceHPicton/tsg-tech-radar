// README
// For this to work in your HTML, you need the following:
// <svg id="svg-polar" xmlns="http://www.w3.org/2000/svg" width="400" height="400"> </svg>
// The ID should be whatever is bound to "svgName" below
// The "xmlns" value has to be as written, because SVG isn't part of the HTML spec and needs to be manually instanced
// Width and height can be changed, and don't have to be the same value (though the radar is a circle so it makes the most sense for them to be the same)


// SVG is not HTML, and needs it's own namespace
// This is a constant
let svgns = "http://www.w3.org/2000/svg";

// The SVG element with this HTML id is the one we'll draw to
let svgName = 'svg-polar';
let svg = document.querySelector(`#${svgName}`);

// SVG dimensions
// These are taken from the HTML
let width = svg.getAttribute('width');
let height = svg.getAttribute('height');
function getMinSize() { return Math.min(width, height) } // Returns the smaller dimension

// Clear the SVG canvas of all lines
function clearSvg() { 
	while (svg.firstChild) {
		svg.removeChild(svg.lastChild);
	}
}

// Assumed test data
// Not used yet, just a basic idea of what we could do
let sectors = 5;
let blips = [
	{
		name: "rust",
		color: "orange",
		sector: 2, // counts from 0 (start right, go counterclockwise)
		ring: 1, //  counts from 0 (innermost)
	}

];

/* RADAR DRAWING CODE */

// Each entry here is a %age for where a ring should be drawn, inside to outside
// Change the numbers in the array to change the overall shape of the radar
// The code assumes there are 4 entries here
let rings = [32, 54, 78, 100].map(x => x / 200 * getMinSize());

function createRingPath(radius) {
	// Creates a <circle> element, drawn around the centre of the div
	let path = document.createElementNS(svgns, "circle");
	path.setAttribute("cx", width / 2);
	path.setAttribute("cy", height / 2);
	path.setAttribute("r", radius);
	path.setAttribute("stroke", "black");
	path.setAttribute("fill", "none");
	return path;
}

function drawRings() {
	// Draw all background rings
	let r = rings.map(createRingPath);
	r.forEach(x => svg.appendChild(x));
}

function createSectorPath(theta) {
	// Creates a <path> element, from the centre outwards
	// Argument is the angle, in radians, starting from east and going counterclockwise
	let path = document.createElementNS(svgns, "path");
	let first_ring = rings[0];
	let last_ring = rings[rings.length - 1];
	let to_first_x = first_ring * Math.cos(theta);
	let to_first_y = first_ring * Math.sin(theta);
	let to_last_x = (last_ring - first_ring) * Math.cos(theta);
	let to_last_y = (last_ring - first_ring) * Math.sin(theta);
	path.setAttribute("d", 
		// 1: move to centre
		// 2: move out a bit to the innermost ring
		// 3: draw a line to the outermost ring
		`M ${width / 2} ${height / 2}
		m ${to_first_x} ${to_first_y}
		l ${to_last_x} ${to_last_y}`);
	path.setAttribute("fill", "none");
	path.setAttribute("stroke", "darkgray");
	return path;
}

function drawSectors(n) {
	// Draws n sectors on the svg
	let sectors = Array.from({length: n}, (x, i) => i)
		.map(x => x / n * (Math.PI * 2))
		.map(createSectorPath);
	sectors.forEach(x => svg.appendChild(x));
}

/* BLIP CODE */
// Draws dots on the radar


// Scaled to be about the same size as in the Zalando demo
let blip_radius = getMinSize() / 50; // size of a blip
let blip_gap = 3; // space between blips

function makeBlip() {
	// Creates a blip. Doesn't draw it or fill in data
	// A blip is a <g>                 <- container
	// 	        <circle> </circle> <- blip shape
	// 	        <text> </text>     <- tooltip
	// 	       </g>

	let container = document.createElementNS(svgns, 'g');

	// Make the circle
	let circle = document.createElementNS(svgns, 'circle');
	circle.setAttribute("r", blip_radius);
	circle.setAttribute("stroke", "black");
	
	// Make the tooltip
	let tooltip = document.createElementNS(svgns, 'text');
	tooltip.setAttribute("text-anchor", "middle");
	tooltip.setAttribute("y", "-1em");
	tooltip.style = "fill: black; font-family: Arial; font-size: 0.8em; visibility: hidden"

	// Make the tooltip visible on mouseover
	container.onmouseover = () => tooltip.style.visibility = "visible";
	container.onmouseout = () => tooltip.style.visibility = "hidden";

	container.circle = circle;
	container.tooltip = tooltip;
	container.appendChild(circle);
	container.appendChild(tooltip);
	
	return container;
}

/* DEMO CODE */
// Only used to show off and test functionality

function demo_drawRadar(n) {
	// Draws the radar
	clearSvg();
	drawSectors(n ? n : 4);
	drawRings();
}

function demo_placeBlip(x, y, color, text) {
	let b = makeBlip();
	b.setAttribute("transform", `translate(${!isNaN(x) ? x : 80}, ${!isNaN(y) ? y : 50})`);
	b.circle.setAttribute('fill', color ? color : 'orange');
	b.tooltip.innerHTML = text ? text : "insert text here";
	svg.appendChild(b);
}
