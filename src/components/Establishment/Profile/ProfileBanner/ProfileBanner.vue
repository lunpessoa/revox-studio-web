<template>
  <div class="profile-banner">
    <ImageInput 
      :path="imageFile" 
      type="square"
      :edit-button="true"
      @input="onPhotoSelected"
      @delete="onErasePhoto"
    />
  </div>
</template>

<script>
import ImageInput from '@/components/Inputs/ImageInput';

export default {
  name: 'ProfileBanner',
  components: {
    ImageInput,
  },
  data() {
    return {
      imageFile: null,
    }
  },
  methods: {
    onPhotoSelected(event) {
      this.imageFile = event.target.files[0];
		},
    onErasePhoto() {
      this.imageFile = null;
    },
  }
};
</script>

<style lang='scss'>
@import 'ProfileBanner.scss';
</style>