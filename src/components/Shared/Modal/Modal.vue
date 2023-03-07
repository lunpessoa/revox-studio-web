<template>
  <b-modal 
    class="modal" 
    :id="id" 
    :size="size" 
    :visible="visible"
    @hide="emitHide"
    @show="emitShow"
    hide-footer
    centered
  >
    <template #modal-header-close>
      <CloseIcon class="icon-close"/>
    </template>
    <template #modal-title>
        <slot name="title" class="title"></slot>
    </template>
    <slot name="center"></slot>
    <slot name="bottom"></slot>
  </b-modal>
</template>

<script>
import CloseIcon from '@/components/Shared/Icons/CloseIcon';

export default {
  name: 'modal',
  components: {
    CloseIcon
  },
	props: {
    id: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    visible: {
      type: Boolean,
      required: false,
    },
    hide: {
      required: false,
    },
  },
  methods: {
    emitHide() {
      this.$emit('hide')
    },
    emitShow() {
      this.$emit('show')
    }
  }
}
</script>
<style lang="scss">
@import "Modal.scss";
</style>