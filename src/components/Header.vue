<template>
  <header class="al2-header">
    <h1 class="al2-header__title">
      <a href="https://www.minsait.com/es/productos/platform" target="_blank">
        <img src="../assets/images/onesait.svg" alt="onesait">
      </a>
    </h1>

<!--    <Login class="al2-header__login" :avatar-image="user.avatar"></Login>-->

  </header>
</template>

<script>

import Login from './Login';
import {mapState} from 'vuex';

export default {
  name: 'Header',
  components: {
    Login
  },
  data() {
    return {
      currentSelectedRow: null
    }
  },
  props: {
    tableName: String
  },
  computed: {
    ...mapState(['assets', 'user'])
  },
  methods: {
  },
  created() {
    //this.data.localAssets = this.computed.assets;
  }
}
</script>

<style scoped lang="scss">
  @import "../styles/components/Header";
</style>
