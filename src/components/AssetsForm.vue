<template>
  <div class="al2-assetsForm ">
    <!--NOTE: Asset icon-->
    <div class="al2-assetsForm__icon-container">
      <img src="~@/assets/images/icon.svg" alt="asset name">
    </div>

    <!--NOTE: Status-->
    <div class="al2-assetsForm__status">
      <div v-if="assets[currentSelectedAsset].status" class="al2-assetsForm__status--enabled">Enabled</div>
      <div v-else="" class="al2-assetsForm__status--disabled">Disabled</div>
    </div>

    <form v-on:submit.prevent="" class="al2-assetsForm__form" v-if="assets[currentSelectedAsset] !== undefined">
      <!-- NOTE: Term field-->
      <div class="al2-assetsForm__form-group">
        <label class="al2-assetsForm__label" for="">Term</label>
        <input class="al2-assetsForm__textinput" type="text" v-model="assets[currentSelectedAsset].term"/>
      </div>

      <!-- NOTE: Serial number -->
      <div class="al2-assetsForm__form-group">
        <label class="al2-assetsForm__label" for="">Serial number</label>
        <input class="al2-assetsForm__textinput" type="text" v-model="assets[currentSelectedAsset].serial_number"/>
      </div>

      <!-- NOTE: Description -->
      <div class="al2-assetsForm__form-group">
        <label class="al2-assetsForm__label" for="">Description</label>
        <textarea  class="al2-assetsForm__textarea" type="text" v-model="assets[currentSelectedAsset].description"/>
      </div>

      <!-- NOTE: Organisation -->
      <div class="al2-assetsForm__form-group">
        <label class="al2-assetsForm__label" for="">Organisation</label>
        <input class="al2-assetsForm__textinput" type="text" v-model="assets[currentSelectedAsset].organization" />
      </div>

      <!-- NOTE: Price -->
      <div class="al2-assetsForm__form-group">
        <label class="al2-assetsForm__label" for="">Price</label>
        <input class="al2-assetsForm__textinput" type="text" v-model="assets[currentSelectedAsset].price"/>
      </div>

      <!-- NOTE: Button -->
      <div class="al2-assetsForm__form-group">
        <input class="al2-assetsForm__button al2-button al2-button--rounded al2-button--blue" type="button" value="Save changes">
      </div>

    </form>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';

export default {
  name: 'AssetsForm',
  data() {
    return {
      currentSelectedRow: null
    }
  },
  props: {
    isAtRightSide: Boolean
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
  @import "../styles/components/AssetsForm";
</style>
