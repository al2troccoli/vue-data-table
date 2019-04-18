<template>
  <div class="al2-error">
      <div class="al2-error__img-container">
        <img class="al2-error__img" src="../assets/images/monkey.png" alt="loading...">
      </div>
      <hr>
      <div class="al2-error__message">
          <p>Sorry, it seems like we couldn't find any database ! </p>
          <p>Start json-server in order to get some data. Run the following command in your temrinal:</p>
          <code class="al2-error__code"> json-server --watch data/collections.json</code>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'ErrorMessage'
  }
</script>

<style scoped lang="scss">
  @import "../styles/components/Error";
</style>
