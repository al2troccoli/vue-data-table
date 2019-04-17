<template>
  <div class="al2-assetsForm ">
    <!--NOTE: Asset icon-->
    <div class="al2-assetsForm__icon-container">
      <img src="~@/assets/images/icon.svg" alt="asset name">
    </div>

    <!--NOTE: Status-->
    <div class="al2-assetsForm__status" v-if="assetsFiltered[currentSelectedAsset] !== undefined" @click="toggleState">
      <div v-if="assetsFiltered[currentSelectedAsset].status" class="al2-assetsForm__status--enabled">Enabled</div>
      <div v-else="" class="al2-assetsForm__status--disabled">Disabled</div>
    </div>

    <form v-on:submit.prevent="" class="al2-assetsForm__form" v-if="assetsFiltered[currentSelectedAsset] !== undefined">
      <!-- NOTE: Term field-->
      <div class="al2-assetsForm__form-group">
        <label class="al2-assetsForm__label" for="term">Term</label>
        <input class="al2-assetsForm__textinput" type="text" v-model="assetsFiltered[currentSelectedAsset].term" id="term"/>
      </div>

      <!-- NOTE: Serial number -->
      <div class="al2-assetsForm__form-group">
        <label class="al2-assetsForm__label" for="serial_number">Serial number</label>
        <input class="al2-assetsForm__textinput" type="text" v-model="assetsFiltered[currentSelectedAsset].serial_number" id="serial_number"/>
      </div>

      <!-- NOTE: Description -->
      <div class="al2-assetsForm__form-group">
        <label class="al2-assetsForm__label" for="description">Description</label>
        <textarea  class="al2-assetsForm__textarea" type="text" v-model="assetsFiltered[currentSelectedAsset].description" id="description"/>
      </div>

      <!-- NOTE: Organisation -->
      <div class="al2-assetsForm__form-group">
        <label class="al2-assetsForm__label" for="organisation">Organisation</label>
        <input class="al2-assetsForm__textinput" type="text" v-model="assetsFiltered[currentSelectedAsset].organization" id="organisation"/>
      </div>

      <!-- NOTE: Price -->
      <div class="al2-assetsForm__form-group">
        <label class="al2-assetsForm__label" for="price">Price in {{getCurrency()}}</label>
        <input class="al2-assetsForm__textinput" type="number" v-model="assetsFiltered[currentSelectedAsset].price" id="price"/>
      </div>

      <!-- NOTE: Button -->
      <div class="al2-assetsForm__form-group al2-assetsForm__form-group--sticky">
        <input class="al2-assetsForm__button al2-button al2-button--rounded al2-button--red" type="button" value="Delete Asset">
        <input class="al2-assetsForm__button al2-button al2-button--rounded al2-button--blue" type="button" value="Save changes">
      </div>

    </form>
  </div>
</template>

<script>
import {mapState, mapMutations, mapGetters} from 'vuex';

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
    ...mapState(['assetsFiltered', 'currentSelectedAsset'])
  },
  methods: {
    ...mapMutations(['updateSelectedAsset']),
    ...mapGetters(['getCurrency']),
    sortPrice() {
      //return this.assets.sort((a, b) => b.price - a.price);
    },
    toggleState() {
      this.assetsFiltered[this.currentSelectedAsset].status = !this.assetsFiltered[this.currentSelectedAsset].status;
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
