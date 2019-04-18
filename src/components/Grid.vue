<template>
  <div class="al2-grid" :class="[removeFooter, applyRighttCol]" >

    <!-- NOTE: Header-->
    <header class="al2-grid__header al2-grid__header--fixed">
      <slot name="header"></slot>
    </header>

    <!-- NOTE: Main Container -->
    <main class="al2-grid__main" :class="[removeOverflow]" >
      <slot name="main"></slot>
    </main>

    <!-- NOTE: Rigth Column -->
    <!-- NOTE: This is an optional container -->
    <div v-if="hasRightCol"
         class="al2-grid__right-col"
         :class="[]
     ">
      <slot name="right-col"></slot>
    </div>

    <!-- NOTE: Footer -->
    <!-- NOTE: This is an optional container -->
    <footer v-if="hasFooter" class="al2-grid__footer" >
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'Grid',
  data() {
    return {
      currentSelectedRow: null,
    }
  },
  props: {
    hasFooter: Boolean,
    hasRightCol: Boolean,
    rightColHasSlide:Boolean,
    headerIsFixed: Boolean
  },
  computed: {
    ...mapState(['currentSelectedAssetIndex']),
    applyRighttCol() {
      return { 'al2-grid--right-col-layout': this.hasRightCol }
    },
    removeFooter() {
      return { 'al2-grid--footerless' : !(this.hasFooter)}
    },
    removeOverflow() {
      return {'al2-overflow-hidden-mobile-and-tablet-portrait ' : this.currentSelectedAssetIndex !== null}
    }
  },
  methods: {
    preventScroll(event) {
      event.preventDefault();
      event.stopPropagation();
    }
  },
  created() {

  }
}
</script>

<style scoped lang="scss">
  @import "../styles/components/Grid";
</style>
