<template>
  <div class="profile">
    <UserProfile />
  </div>
</template>

<script>
import UserProfile from '@/components/Client/Profile/UserProfile/UserProfile';

export default {
  name: 'profile',
  components: {
    UserProfile,
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
