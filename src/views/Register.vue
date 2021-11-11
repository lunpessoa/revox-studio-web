<template>
  <div class="full-size">
    <img class="img-logo" src="@/assets/images/thumbnail.png" alt="Background Photo"/>
    <div class="login-form">
      <div class="logo-container">
        <RevoxIcon class="icon" color="#3B185F" opacity="0.5"/>
        <h1 class="title">ReVox Studios</h1>
      </div>
      <Tabs 
        :titles="['Cliente', 'Estabelecimento']" 
        :components="tabsComponents" 
        class="my-3"
        :stretch="true"
      />
      <div class="card-footer mt-4">
        <p class="mb-0">
          Já possui conta?
          <router-link to="/login" class="register ml-1">Entrar</router-link>
        </p>
      </div>
    </div>
    <transition name="fade">
      <Loader v-if="loading" />
    </transition>
  </div>
</template>

<script>
import ClientRegister from "@/components/Register/ClientRegister/ClientRegister";
import EstablishmentRegister from "@/components/Register/EstablishmentRegister/EstablishmentRegister";
import RevoxIcon from "@/components/Shared/Icons/Logo";
import Tabs from "@/components/Shared/Tabs/Tabs";
import Loader from "@/components/Shared/Loader/Loader";

export default {
  name: "Login",
  components: {
    Loader,
    Tabs,
    RevoxIcon,
    ClientRegister,
    EstablishmentRegister
  },
  data() {
    return {
      form: {
        imageFile: null,
        email: null,
        password: null
      },
      step: 1,
      loading: false,
    };
  },
  computed: {
    tabsComponents() {
      return [ClientRegister, EstablishmentRegister]
    }
  },
  methods: {
    submitLogin() {
      this.loading = true;
    },
    onPhotoSelected(event) {
      this.form.imageFile = event.target.files[0];
		},
    onErasePhoto() {
      this.form.imageFile = null;
    },
    nextStep() {
      if (this.step > 0) {
        this.step++;
      }
    },
    backStep() {
      if (this.step < 4) {
        this.step--;
      }
    }
  }
};
</script>

<style lang="scss">
.full-size {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #363740;
  overflow: hidden;

  .turn-control {
    position: absolute;
    top: 15px;
    left: 15px;
    width: 190px;
  }

  .img-logo {
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    height: inherit;
    width: inherit;
    opacity: 0.4;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 5;
    padding: 40px;
    min-width: 300px;
    max-width: 380px;
    width: 380px;
    border-radius: 10px;
    background-color: $white;
    box-shadow: 1px 0 0 0 rgba(255, 255, 255, 0.6);
    animation-name: goUpAndFadeIn;
    animation-duration: 1s;
    animation-fill-mode: forwards;

    .logo-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      .icon {
        width: 100px;
        height: auto;
      }

      .title {
        color: $gray-600;
        font-weight: 600;
        font-size: 18px;
      }
    }

    .enter-text {
      padding: 10px;
      background: $primary-gray;
      border-radius: 10px;
      text-align: center;

      h2 {
        font-size: 26px;
        font-weight: 700;
        color: $dark-primary;
      }

      span {
        font-size: 14px;
        font-weight: 500;
        color: $gray-600;
      }
    }

    .card-footer {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      background: $primary-gray;
      border-radius: 10px;
      border: none;

      p {
        font-size: 14px;
        font-weight: 500;
        color: $gray-600;
      }

      a {
        font-weight: 600;
        color: $primary;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}

@keyframes goUpAndFadeIn {
  0% {
    opacity: 0;
    transform: translateY(150%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes goUpAndFadeInIcon {
  0% {
    opacity: 0;
    transform: translate(-50%, 150%);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
