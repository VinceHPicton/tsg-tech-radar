<template>
	<!-- Ignore vue errors about custom elements and x-invalid-namespace -->
	<g 
				xmlns="http://www.w3.org/2000/svg"
				:transform="generateTransformInstruction()">
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
	</g>
</template>

<script setup>
	const props = defineProps(['sectors', 'width', 'height']);
	let width = inject('width');
	let height = inject('height');
	let sectors = inject('sectors');

	let minSize = Math.min(width, height);
	let rings = [32, 54, 78, 99].map(x => x / 200 * minSize);
	let sectorAngles = Array.from({length: sectors.length}, (x, i) => i)
		.map(x => x / sectors.length * (2 * Math.PI));

	function generateSectorPath(theta) {
		let first_ring = rings[0];
		let last_ring = rings[rings.length - 1];
		let to_first_x = first_ring * Math.cos(theta);
		let to_first_y = first_ring * Math.sin(theta);
		let to_last_x = (last_ring - first_ring) * Math.cos(theta);
		let to_last_y = (last_ring - first_ring) * Math.sin(theta);
		return `m ${to_first_x} ${to_first_y} l ${to_last_x} ${to_last_y}`;

	}
	function generateTransformInstruction() {
		return `translate(${width / 2}, ${height / 2})`

	}
</script>

<style>
</style>
