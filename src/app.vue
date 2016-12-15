<style lang="less">
  @red: red;
  @blue: blue;
  .message {
    color: @blue;
  }
</style>
<template lang="jade">
.message
  h2 {{msg}}
</template>
<script>
  export default {
    data() {
      return {
        msg: 'this\'s vue app!'
      }
    }
  }
</script>
