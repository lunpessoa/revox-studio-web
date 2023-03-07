<template>
  <div class="full-size">
    <img class="img-logo" src="@/assets/images/thumbnail.png" alt="Background Photo"/>
    <div class="login-form">
      <div class="logo-container">
        <RevoxIcon class="icon" color="#3B185F" opacity="0.5"/>
        <h1 class="title">ReVox Studios</h1>
      </div>
      <div class="enter-text my-3">
        <h2 class="mb-2">Entre para ReVox</h2>
        <span>Entre com seu email e senha abaixo</span>
      </div>
      <form class="mt-3" @submit.prevent>
        <b-form-group label="Email">
          <b-input
            class="base-input"
            name="email"
            type="email"
            placeholder="Email"
            v-model="form.email"
            @keyup.enter="submitLogin()"
          />
        </b-form-group>
        <b-form-group label="Senha">
          <PasswordInput 
            v-model="form.senha" 
            placeholder="Senha" 
            :min="'6'" 
            :max="'16'"
          />
        </b-form-group>
        <button class="btn btn-secondary text-light btn-login" @click="submitLogin()">Entrar</button>
        <div class="card-footer mt-4">
          <p class="mb-0">
            Ainda não possui conta?
            <router-link to="/register" class="register ml-1">Registre-se</router-link>
          </p>
        </div>
      </form>
    </div>
    <transition name="fade">
      <Loader v-if="!isLoaded" />
    </transition>
  </div>
</template>

<script>
import RevoxIcon from "@/components/Shared/Icons/Logo";
import PasswordInput from "@/components/Inputs/PasswordInput";
import Loader from "@/components/Shared/Loader/Loader";

import { 
  LOGIN_REQUEST,
  LOGOUT 
} from '@/store/auth/actions';

export default {
  name: "Login",
  components: {
    Loader,
    RevoxIcon,
    PasswordInput
  },
  data() {
    return {
      form: {
        email: null,
        senha: null
      },
    };
  },
  created() {
    this.$store.dispatch(LOGOUT);
  },
  computed: {
    isLoaded() {
      return this.$store.getters.isLoginLoaded;
    }
  },
  methods: {
    submitLogin() {
      this.$store
				.dispatch(LOGIN_REQUEST, this.form)
				.then((data) => {
          if(data.idStatus === 1) {
            this.$router.push({ name: 'ClientEstablishments' });
          }
          if(data.idStatus === 2) {
            this.$router.push({ name: 'EstablishmentSchedule' });
          }
				})
				.catch(e => {
          console.log(e);
					// this.$toastr.e(e.response.data.message);
				})
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
    
    .btn-login {
      width: 100%;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
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
