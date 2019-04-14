<template>
  <div class="al2-sidePanel al2-sidePanel--at-right" :class="{'al2-sidePanel--active' : currentSelectedAsset !== null}">
    <slot></slot>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'SidePanel',
  data() {
    return {
      currentSelectedRow: null
    }
  },
  props: {
    isAtRightSide: Boolean
  },
  computed: {
    ...mapState(['currentSelectedAsset']),
  },
  methods: {
  },
  created() {
    //this.data.localAssets = this.computed.assets;
  }
}
</script>

<style scoped lang="scss">
  @import "../styles/components/SidePanel";
</style>
