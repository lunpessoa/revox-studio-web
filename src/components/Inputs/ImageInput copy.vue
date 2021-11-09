<template>
  <div id="image-input" :class="[circle && 'btn-circle', square && 'btn-square']">
    <div class="close-icon" @click="() => $emit('delete')" v-if="isSelected">
      <CloseIcon color="#FFFFFF" />
    </div>
    <div class="img-container" v-if="isSelected"> 
      <img :src="filePath" class="button-img" @dragstart.prevent>
    </div>
    <div class="button-container" v-else>
      <button 
        variant="primary" 
        @click="$refs.fileInput.click()"
        class="btn-picture"
      > 
        <ProfileIcon color="#3B185F" class="icon"/>
      </button>
      <input type="file" @change="handleInput" class="d-none" ref="fileInput">
    </div>
  </div>
</template>

<script>
import CloseIcon from "@/components/Shared/Icons/CloseIcon";
import ProfileIcon from "@/components/Shared/Icons/ProfileIcon";

export default {
	name: "ImageInput",
	components: { 
    CloseIcon,
    ProfileIcon
  },
	props: {
		type: {
      type: String,
      default: 'circle',
    },
		isSelected: {
      required: true,
    },
  },
  methods: {
	  handleInput(event) {
      this.$emit('input', event)
    }
  },
  computed: {
    filePath() {
      if(typeof this.isSelected == 'object'){
        return URL.createObjectURL(this.isSelected)
      }
      return this.isSelected;
    },
    circle() {
      return this.type === 'circle';
    },
    square() {
      return this.type === 'square';
    }
  }
}
</script>

<style lang="scss">
#image-input {
    display: flex;
    align-items: center;
    justify-content: center;
    background: $white;
    transition: .2s ease-out;
    position: relative;

    &.btn-square {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        .button-container {
            border-radius: 10px;
        }
        .img-container {
            border-radius: 10px;
        }
        .close-icon {
            width: 35px;
            height: 35px;
            bottom: -5px;
            right: -5px;
        }
    }
    &.btn-circle {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        .button-container {
            border-radius: 50%;
        }
        .img-container {
            border-radius: 50%;
        }
        .close-icon {
            width: 35px;
            height: 35px;
            bottom: 15px;
            right: 15px;
        }
    }

    .button-container {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 5px;
        border: solid 1px $primary;
        overflow: hidden;
        .btn-picture {
            display: flex;
            border-radius: inherit;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: none;
            width: inherit;
            height: inherit;
            background: #c4abde;
            transition: .2s ease-out;
            &:hover {
                background: $light-primary;
            }

            .icon {
              width: 80px;
              height: auto;
            }
        }
    }
    .img-container {
        width: 100%;
        height: 100%;
        padding: 5px;
        border: solid 1px $primary;
        & > img {
            width: 100%;
            height: 100%;
            border-radius: inherit;
            object-fit: cover;
        }
    }
    .close-icon {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      background: $primary;
      border-radius: 50%;
      border: 4px solid $white;
      z-index: 10;
      cursor: pointer;
      transition: .2s ease-out;
      &:hover {
          background: #c4abde;
      }
      svg {
        width: 12px;
        height: auto;
      }
    }
}
</style>