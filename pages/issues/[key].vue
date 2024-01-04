<template>
<!-- <h2>Issue Name: {{ issue.fields.summary }}</h2>
<h2>Epic Name: {{ issue.fields.parent.fields.summary }}</h2>
<h2>Column Name: {{ issue.fields.status.name }}</h2> -->
</template>
    
<script setup>
const { key } = useRoute().params
const uri = 'https://click-app.atlassian.net/rest/api/3/issue/' +key

const { data: issue } = await useFetch(uri, {
    key: key,
    headers: { 
            'Authorization': 'Basic dmluY2UucGljdG9uQGdtYWlsLmNvbTpBVEFUVDN4RmZHRjB5NHZXYndUb0NTQU9na1dyRmwyTzI4UHdVd1pNRjRsYXVBOUdUT0xmbkxMd1hHZWtVLXBIWTZ3VmVmMHgzQzU4bEI3enZsTnBxTEdmTm8wQkFvdXJzZElWT1dmLS1tNlhOYWVER0pRN0VlTG1ZLTVRRWE0TWJOalVGVGhHcnpOLUFxbWd0NWZJXzVIVjJxYkJCNFpzTGxDalFMa0d0bm9wc3pubk1iR3g3X3M9RTgzMzYyQzQ=',
        }
    })
</script>
    
<style scoped>

</style>