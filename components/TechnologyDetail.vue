<template>
    <v-dialog
        width="auto"
        v-model="show"
    >
        <v-card>
        <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>
        <v-card-actions>
            <v-btn color="primary" block @click.stop="show = false">Close Dialog</v-btn>
        </v-card-actions>
        </v-card>
    </v-dialog>
  </template>
  

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
    props: {
      value: Boolean
    },
    computed: {
      show: {
        get () {
          return this.value
        },
        set (value) {
          this.$emit('input', value)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>