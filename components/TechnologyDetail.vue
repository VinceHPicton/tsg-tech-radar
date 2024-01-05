<template>
  <v-dialog class="popup" v-on="$listeners" v-bind="$attrs">
    <v-card>
        <v-fade-transition mode="out-in">
            <v-container v-if="!submitClicked" key="slot">
                <v-card-title class="d-flex align-center justify-center dialog-headings pb-1" v-if="title">{{ title }}</v-card-title>
                <slot></slot>
            </v-container>

            <v-container v-else key="spinnerWheel" style="overflow-y:hidden; text-align: center;">
                <v-progress-circular
                    :size="80"
                    color="primary"
                    indeterminate
                ></v-progress-circular>
            </v-container>
        </v-fade-transition>
        </v-card>
  </v-dialog>
</template>
  

<script>
  export default {
    data () {
      return {

      }
    },
    props: {
        submitClicked: {
            type: Boolean,
            required: false,
            default: false
        },
        maxWidth: {
            type: Number,
            required: false,
            default: 600
        },
        title: {
            type: String,
            required: false
        }
    }
  }
</script>

<style lang="scss" scoped>

</style>