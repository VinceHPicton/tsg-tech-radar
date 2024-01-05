<template>
	<g
		xmlns="http://www.w3.org/2000/svg"
		@mouseover="showTooltip()"
		@mouseout="hideTooltip()"
		:transform="move()"
			>
	<circle
		xmlns="http://www.w3.org/2000/svg"
		:r="blipRadius"
		:fill="props.color" 
		stroke="black"
	>
	</circle>
	<text
		xmlns="http://www.w3.org/2000/svg"
		text-anchor="middle"
		y="-1em">{{props.text}}</text>
	</g>
</template>

<script setup>
	let props = defineProps(['x', 'y',  'color', 'text']);
	let width = inject('width');
	let height = inject('height');
	let minSize = Math.min(width, height);
	let blipRadius = minSize / 50;
	let isVisible = ref("hidden");

	function move() {
		return `translate(${props.x}, ${props.y})`
	}

	function showTooltip() {
		isVisible.value = "visible";
	}

	function hideTooltip() {
		isVisible.value = "hidden";
	}

</script>

<style scoped>
text {
	fill: black;
	font-family: Arial;
	font-size: 0.8em;
	visibility: v-bind(isVisible);
}
</style>
