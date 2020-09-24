<template>
  <div class="grey darken-1 empty-layout">
    <router-view/>
  </div>
</template>

<script>

  import messages from "@/utils/messages";

  export default {
    computed: {
        error() {
          return this.$store.getters.error
        }
    },
    watch: {
      error(fbError) {
        console.log(fbError)
        this.$error(messages['auth/user-not-found'] || 'Что-то пошло не так')
      }
    }
  }
</script>
