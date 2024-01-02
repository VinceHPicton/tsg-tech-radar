<template>
    <h1>{{ ticketName }}</h1>
    <button @click="getJiraTicket">click</button>
</template>

<script>
import axios from 'axios';

export default {
  name: 'TestData',
  props: {
  },
  data() {
    return {
        ticketName: "Unset ticket name"
    }
  },
  methods: {
    getJiraTicket() {
        let apiUrl = 'https://click-app.atlassian.net/rest/api/3/issue/KAN-3'
        axios.AxiosHeaders = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET'
        }

        axios.get(apiUrl, {
            headers: { 
                'Authorization': 'Basic dmluY2UucGljdG9uQGdtYWlsLmNvbTpBVEFUVDN4RmZHRjB5NHZXYndUb0NTQU9na1dyRmwyTzI4UHdVd1pNRjRsYXVBOUdUT0xmbkxMd1hHZWtVLXBIWTZ3VmVmMHgzQzU4bEI3enZsTnBxTEdmTm8wQkFvdXJzZElWT1dmLS1tNlhOYWVER0pRN0VlTG1ZLTVRRWE0TWJOalVGVGhHcnpOLUFxbWd0NWZJXzVIVjJxYkJCNFpzTGxDalFMa0d0bm9wc3pubk1iR3g3X3M9RTgzMzYyQzQ=',
            }
        })
        .then(resp => {
            this.ticketName = resp;
        })
        .catch(e => {
            console.error(e)
        })
    }
  }
}
</script>

<style scoped></style>