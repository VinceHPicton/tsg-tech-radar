<template>
	<svg :width="props.size" :height="props.size" xmlns="http://www.w3.org/2000/svg">
	<RadarBackground />
	<template v-for="b in props.blips" :key="b.text"> 
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
	provide('width', props.size);       // width 
	provide('height', props.size);      // height
	provide('sectors', props.sectors);  // List of sectors, represented by their printed names
	provide('rings', [30, 48, 64, 82]); // Percentages of where the rings are. Don't touch this
	
	// Will be used to place blips properly
	function createBlipGroups() {
		let blipGroups = [
			Array.from({length: sectors.length}, () => []),
			Array.from({length: sectors.length}, () => []),
			Array.from({length: sectors.length}, () => []),
			Array.from({length: sectors.length}, () => []),
		]
		props.blips.forEach(b => {
			blipGroups[b.ring][b.sector].push(b);
		});

	}

	function addBlips() {

	}
</script>

<style>
</style>
