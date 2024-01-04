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
	provide('width', props.size);
	provide('height', props.size);
	provide('sectors', props.sectors);
</script>

<style>
</style>
