<template>
	<Radar size="400", sectors="5" :blips="blips" />
</template>

<script setup>
	let blips = [
	{
	x: '80',
	y: '70',
	color: 'lightblue',
	text: 'Something'
	},
	{
	x: '100',
	y: '100',
	color: 'lightblue',
	text: 'Something'
	},
	{
	x: '250',
	y: '70',
	color: 'lightblue',
	text: 'Something'
	},
	];
</script>

<style>
</style>
