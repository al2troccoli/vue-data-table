<template>
    <div class="al2-assetsForm" v-if="assetsFiltered[currentSelectedAssetIndex] !== undefined">
        <!--NOTE: Asset icon-->
        <div class="al2-assetsForm__icon-container">
            <img src="~@/assets/images/icon.svg" alt="asset name">
        </div>

        <!--NOTE: Status-->
        <div class="al2-assetsForm__status" @click="toggleState">
            <div v-if="assetsFiltered[currentSelectedAssetIndex].status" class="al2-assetsForm__status--enabled">
                Enabled
            </div>
            <div v-else="" class="al2-assetsForm__status--disabled">Disabled</div>
        </div>

        <form v-on:submit.prevent="" class="al2-assetsForm__form">
            <!-- NOTE: Term field-->
            <div class="al2-assetsForm__form-group">
                <label class="al2-assetsForm__label" for="term">Term</label>
                <input class="al2-assetsForm__textinput" type="text"
                       v-model="assetsFiltered[currentSelectedAssetIndex].term" id="term"/>
            </div>

            <!-- NOTE: Serial number -->
            <div class="al2-assetsForm__form-group">
                <label class="al2-assetsForm__label" for="serial_number">Serial number</label>
                <input class="al2-assetsForm__textinput" type="text"
                       v-model="assetsFiltered[currentSelectedAssetIndex].serial_number" id="serial_number"/>
            </div>

            <!-- NOTE: Description -->
            <div class="al2-assetsForm__form-group">
                <label class="al2-assetsForm__label" for="description">Description</label>
                <textarea class="al2-assetsForm__textarea"
                          type="text"
                          v-model="assetsFiltered[currentSelectedAssetIndex].description"
                          id="description"/>
            </div>

            <!-- NOTE: Organisation -->
            <div class="al2-assetsForm__form-group">
                <label class="al2-assetsForm__label" for="organisation">Organisation</label>
                <input class="al2-assetsForm__textinput" type="text"
                       v-model="assetsFiltered[currentSelectedAssetIndex].organization" id="organisation"/>
            </div>

            <!-- NOTE: Price -->
            <div class="al2-assetsForm__form-group">
                <label class="al2-assetsForm__label" for="price">Price in {{getCurrency()}}</label>
                <input class="al2-assetsForm__textinput" type="number"
                       v-model="assetsFiltered[currentSelectedAssetIndex].price" id="price"/>
            </div>

            <!-- NOTE: Buttons container -->
            <div class="al2-assetsForm__form-group al2-assetsForm__form-group--sticky">
                <input class="al2-assetsForm__button al2-button al2-button--rounded al2-button--red"
                       type="button"
                       value="Delete Asset"
                       @click="deleteCurrentAsset">
                <input class="al2-assetsForm__button al2-button al2-button--rounded al2-button--blue"
                       type="button"
                       value="Save changes"
                       @click="updateAsset">
            </div>
        </form>
    </div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex';

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
            ...mapState(['assetsFiltered', 'currentSelectedAssetIndex'])
        },
        methods: {
            ...mapGetters(['getCurrency']),
            toggleState() {
                this.assetsFiltered[this.currentSelectedAssetIndex].status = !this.assetsFiltered[this.currentSelectedAssetIndex].status;
            },
            deleteCurrentAsset() {
                this.$store.dispatch('deleteAsset', this.assetsFiltered[this.currentSelectedAssetIndex]);
            },
            updateAsset() {
                this.$store.dispatch('updateAsset', this.assetsFiltered[this.currentSelectedAssetIndex]);
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../styles/components/AssetsForm";
</style>
