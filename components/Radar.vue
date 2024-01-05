<template>
	<svg :width="props.size" :height="props.size" xmlns="http://www.w3.org/2000/svg">
	<RadarBackground />
	<template v-for="b in processedBlips" :key="b.text"> 
		<RadarBlip 
		:x="b.x" 
		:y="b.y" 
		:color="b.color" 
		:text="b.text" />
	</template>
	</svg>
</template>

<script setup>
	let props = defineProps(['size', 'sectors', 'blips']);
	let rings = [30, 48, 64, 82]; // Percentages of where the rings are. Don't touch this
	let minSize = props.size / 2;
	provide('width', props.size);       // width 
	provide('height', props.size);      // height
	provide('sectors', props.sectors);  // List of sectors, represented by their printed names
	provide('rings', rings);
	
	// Will be used to place blips properly
	function processBlips() {
		return props.blips.map((b, index) => {
			let r_floor = b.ring == 0 ? 0 : rings[b.ring - 1];
			let r_ciel = rings[b.ring];
			let r = (r_floor + r_ciel) / 200 * minSize ;
			let theta_sectorLength = 1 / props.sectors.length * (2 * Math.PI);
			let theta_sectorStart = theta_sectorLength * b.sector;
			let theta_subsector = theta_sectorLength; //+ (Math.random() * (theta_sectorLength)); // Not best way to do this
			let theta = theta_sectorStart + theta_subsector;
			let x = r * Math.cos(theta) + minSize;
			let y = r * Math.sin(theta) + minSize;
			console.log(r);
			return {
				sector: b.sector,
				ring: b.ring,
				color: b.color,
				text: b.text,
				x: x,
				y: y,
			}
		});
	}
	let processedBlips = processBlips();

	function addBlips() {

	}
</script>

<style>
</style>
