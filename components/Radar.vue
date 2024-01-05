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
	provide('rings', [32, 54, 78, 99]); // Percentages of where the rings are. Don't touch this
</script>

<style>
</style>
