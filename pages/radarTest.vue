<template>
	<svg width="400" height="400">
		<RadarBackground />
		<RadarBlip x="80" y="70" color="lightblue" text="Something" />
		<RadarBlip x="100" y="100" color="lightgreen" text="Something else" />
		<RadarBlip x="250" y="70" color="lavender" text="Vue?" />
		<RadarBlip x="50" y="300" color="aquamarine" text="Nuxt?" />
	</svg>
</template>

<script setup>
	provide('width', 400);
	provide('height', 400);
	provide('sectors', 4);
</script>

<style>
</style>
