<template>
	<!-- Ignore vue errors about custom elements and x-invalid-namespace -->
	<g 
				xmlns="http://www.w3.org/2000/svg"
				:transform="move()">
	<template v-for="s in sectorAngles">
		<path
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				stroke="darkgray"
				:d="generateSectorPath(s)">
		</path>
	</template>
	<template v-for="r in rings">
		<circle 
		  xmlns="http://www.w3.org/2000/svg"
		  :r="r" 
		  stroke="black" 
		  fill="none">
		</circle>
	</template>
	<template v-for="(s, index) in sectors">
		<text
			xmlns="http://www.w3.org/2000/svg"
			text-anchor="middle"
			:transform="addSectorLabel(s, index)"
		>{{s}}</text>
	</template>
	</g>
</template>

<script setup>
	const props = defineProps(['sectors', 'width', 'height']);
	let width = inject('width');
	let height = inject('height');
	let sectors = inject('sectors');

	let minSize = Math.min(width, height);
	let rings = inject('rings').map(x => x / 200 * minSize);
	let sectorAngles = Array.from({length: sectors.length}, (x, i) => i)
		.map(x => x / sectors.length * (2 * Math.PI));

	function generateSectorPath(theta) {
		theta = theta + Math.PI / 2; // start from the top, not right
		let first_ring = rings[0];
		let last_ring = rings[rings.length - 1];
		let to_first_x = first_ring * Math.cos(theta);
		let to_first_y = first_ring * Math.sin(theta);
		let to_last_x = (last_ring - first_ring) * Math.cos(theta);
		let to_last_y = (last_ring - first_ring) * Math.sin(theta);
		return `m ${to_first_x} ${to_first_y} l ${to_last_x} ${to_last_y}`;
	}
	function move() {
		return `translate(${width / 2}, ${height / 2})`
	}

	function addSectorLabel(sectorName, sectorIndex) {
		let sectorCount = sectors.length;
		let r = rings[rings.length - 1] + 10; // distance from centre
		let sectorAngle = (1 / sectorCount) * 2 * Math.PI;
		let theta = sectorIndex * sectorAngle + sectorAngle / 2 + Math.PI / 2;// angle to put the text
		let thetaDegrees = theta * 180 / Math.PI;
		let x = r * Math.cos(theta);
		let y = r * Math.sin(theta);
		let translate = `translate(${x}, ${y})`;
		let rotate = `rotate(${thetaDegrees + 90})`
		return `${translate} ${rotate}`;
	}
</script>

<style>
</style>
