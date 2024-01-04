<template>
    <h1>List of technologies</h1>
    <TechnologyDetail
        v-model="showDialog"
    ></TechnologyDetail>

    <div v-for="i in issuesResp.issues">
        <NuxtLink :to="`/issues/${i.key}`">{{ i.fields.summary }}</NuxtLink>
        <p>Jira task name/Technology name: {{ i.fields.summary }}</p>
        <p>Jira epic/Segment: {{ i.fields.parent.fields.summary }}</p>
        <p>Jira status/ring name: {{ i.fields.status.name }}</p>
        <hr>
    </div>
    <hr>
    <hr>
    <div v-for="e in epics.issues">
        <p>{{ e.fields.summary }}</p>
        <!-- <NuxtLink :to="`/issues/${e.summary}`">{{ e.fields.summary }}</NuxtLink> -->
        <hr>
    </div>
</template>
    
<script setup>
const { data: issuesResp } = await useFetch('https://click-app.atlassian.net/rest/api/3/search?jql=project=TTR AND issuetype=Task&fields=summary,status,parent', {headers: { 
                'Authorization': 'Basic dmluY2UucGljdG9uQGdtYWlsLmNvbTpBVEFUVDN4RmZHRjB5NHZXYndUb0NTQU9na1dyRmwyTzI4UHdVd1pNRjRsYXVBOUdUT0xmbkxMd1hHZWtVLXBIWTZ3VmVmMHgzQzU4bEI3enZsTnBxTEdmTm8wQkFvdXJzZElWT1dmLS1tNlhOYWVER0pRN0VlTG1ZLTVRRWE0TWJOalVGVGhHcnpOLUFxbWd0NWZJXzVIVjJxYkJCNFpzTGxDalFMa0d0bm9wc3pubk1iR3g3X3M9RTgzMzYyQzQ=',
            }})

const { data: epics } = await useFetch('https://click-app.atlassian.net/rest/api/3/search?jql=project=TTR AND issuetype=Epic&fields=summary', {headers: { 
                'Authorization': 'Basic dmluY2UucGljdG9uQGdtYWlsLmNvbTpBVEFUVDN4RmZHRjB5NHZXYndUb0NTQU9na1dyRmwyTzI4UHdVd1pNRjRsYXVBOUdUT0xmbkxMd1hHZWtVLXBIWTZ3VmVmMHgzQzU4bEI3enZsTnBxTEdmTm8wQkFvdXJzZElWT1dmLS1tNlhOYWVER0pRN0VlTG1ZLTVRRWE0TWJOalVGVGhHcnpOLUFxbWd0NWZJXzVIVjJxYkJCNFpzTGxDalFMa0d0bm9wc3pubk1iR3g3X3M9RTgzMzYyQzQ=',
            }})

let showDialog = true

const closeDialog = () => {
    showDialog = false
}
</script>
    
<style scoped>

</style>
      