<template>
	<Radar size="600", :sectors="sectors" :blips="blips" />
</template>

<script setup>
	let sectors = ["Programming languages", "Frameworks", "DevOps", "Cloud", "Extra"];
	//let sectors = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"];
	let blips = [
	{
	ring: 0, // 0 = inner, increase = further out
	sector: 0, // Start at bottom, move counterclockwise
	color: 'lightblue',
	text: 'Something'
	},
	{
	ring: 1, // 0 = inner, increase = further out
	sector: 0, // Start at bottom, move counterclockwise
	color: 'lightblue',
	text: 'Something'
	},
	{
	ring: 2, // 0 = inner, increase = further out
	sector: 0, // Start at bottom, move counterclockwise
	color: 'lightblue',
	text: 'Something'
	},
	{
	ring: 3, // 0 = inner, increase = further out
	sector: 0, // Start at bottom, move counterclockwise
	color: 'lightblue',
	text: 'Something'
	},
	{
	ring: 0, // 0 = inner, increase = further out
	sector: 0, // Start at bottom, move counterclockwise
	color: 'lightblue',
	text: 'Something'
	},
	{
	ring: 0, // 0 = inner, increase = further out
	sector: 0, // Start at bottom, move counterclockwise
	color: 'lightblue',
	text: 'Something'
	},
	{
	ring: 0, // 0 = inner, increase = further out
	sector: 0, // Start at bottom, move counterclockwise
	color: 'lightblue',
	text: 'Something'
	},
	];
</script>

<style>
</style>
