<template>
  <div class="profile">
    <ProfileBanner style="grid-area: banner;"/>
    <ProfileCard style="grid-area: profile;"/>
    <div class="content-info">
      <ProfileEstablishment />
      <ProfileInfo />
      <ProfileAddress />
    </div>
  </div>
</template>

<script>
import ProfileBanner from '@/components/Establishment/Profile/ProfileBanner/ProfileBanner';
import ProfileCard from '@/components/Establishment/Profile/ProfileCard/ProfileCard';
import ProfileInfo from '@/components/Establishment/Profile/ProfileInfo/ProfileInfo';
import ProfileAddress from '@/components/Establishment/Profile/ProfileAddress/ProfileAddress';
import ProfileEstablishment from '@/components/Establishment/Profile/ProfileEstablishment/ProfileEstablishment';

export default {
  name: 'profile',
  components: {
    ProfileBanner,
    ProfileCard,
    ProfileInfo,
    ProfileAddress,
    ProfileEstablishment
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

<style lang="scss" scoped>
.profile {
    display: grid;
    grid-template-areas:
		  "banner banner"
		  "profile info"
		;
    align-items: flex-start;
    gap: 20px;

    .content-info {
      display: flex;
      flex-direction: column;
      gap: 20px;
      grid-area: "info"
    }
}
</style>
