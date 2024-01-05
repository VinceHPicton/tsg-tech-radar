<template>
	<Radar size="600", :sectors="sectors" :blips="blips" />
</template>

<script setup>
	let sectors = ["Programming languages", "Frameworks", "DevOps", "Cloud", "Extra"];
	//let sectors = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"];
	let blips = [
	{
	x: '80',
	y: '70',
	ring: '0', // 0 = inner, increase = further out
	sector: '1', // Start at bottom, move counterclockwise
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
