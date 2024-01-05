<template>
	<Radar size="400", :sectors="sectors" :blips="blips" />
</template>

<script setup>
	let sectors = ["Programming languages", "Frameworks", "DevOps", "Cloud", "Extra"];
	let blips = [
	{
	x: '80',
	y: '70',
	ring: '0', // 0 = inner, increase = further out
	sector: '1', // Start at right, move counterclockwise
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
