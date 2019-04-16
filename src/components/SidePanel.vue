<template>
  <div class="al2-sidePanel"
       :class="[showPanel, setUpPanel]"
  >
    <div class="al2-sidePanel__close-btn" @click="resetSelectedItem">
      X
    </div>

    <slot></slot>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';

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
    showPanel() {
      return {'al2-sidePanel--active' : this.currentSelectedAsset !== null }
    },
    setUpPanel() {
      return {
        'al2-sidePanel--at-right' : this.isAtRightSide
      }
    }
  },
  methods: {
    ...mapMutations(['resetSelectedItem']),
  },
  created() {
    //this.data.localAssets = this.computed.assets;
  }
}
</script>

<style scoped lang="scss">
  @import "../styles/components/SidePanel";
</style>
