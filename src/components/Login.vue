<template>
  <section class="al2-login">
    <span class="al2-login__last-log">last login: 22/08/17 - 16:42</span>
    <div class="al2-login__profile">
      <img src="~@/assets/images/users/avatar-m.png" alt="">
    </div>
  </section>
</template>

<script>
import {mapState, mapMutations} from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      currentSelectedRow: null
    }
  },
  props: {
    tableName: String
  },
  computed: {
    ...mapState(['assets', 'currentSelectedAsset'])
  },
  methods: {
    ...mapMutations(['selectItem']),
    sortPrice() {
      //return this.assets.sort((a, b) => b.price - a.price);
    }
  },
  created() {
    //this.data.localAssets = this.computed.assets;
  }
}
</script>

<style scoped lang="scss">
  @import "../styles/components/Login";
</style>
