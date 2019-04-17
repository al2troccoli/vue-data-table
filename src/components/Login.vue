<template>
  <section class="al2-login">
    <span class="al2-login__last-log">last login: 22/08/17 - 16:42</span>
    <div class="al2-login__profile">
      <picture>
        <source srcset="~@/assets/images/users/avatar-s.png ,
                        ~@/assets/images/users/avatar-m@2x.png 2x"
                        media="(max-width: 699px)">
        <source srcset="~@/assets/images/users/avatar-s.png,
                        ~@/assets/images/users/avatar-m@3x.png 2x">
        <img srcset="~@/assets/images/users/avatar-s.png" alt="My default image">
      </picture>
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
    ...mapMutations(['updateSelectedAsset']),
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
