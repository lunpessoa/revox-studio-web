<template>
  <div class="profile-card">
    <div class="card-header">
      <ImageInput 
        :path="imageFile" 
        type="square"
        :edit-button="true"
        @input="onPhotoSelected"
        @delete="onErasePhoto"
      />
    </div>
    <div class="card-body">
      <h2 class="name">Luan Pessoa</h2>
      <p class="email">email@email.com.br</p>
      <div class="contact">
        <p>(11) 99999-9999</p>
        <p>(11) 99999-9999</p>
      </div>
    </div>
  </div>
</template>

<script>
import ImageInput from '@/components/Inputs/ImageInput';

export default {
  name: 'ProfileCard',
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
@import 'ProfileCard.scss';
</style>