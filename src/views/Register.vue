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
        <span>Deixe que nós tomamos conta da sua beleza</span>
      </div>
      <form class="mt-3" @submit.prevent>
        <div id="step-1" v-if="step == 1">
          <div class="profile-image">
            <ImageInput 
              :path="form.imageFile" 
              type="circle"
              @input="onPhotoSelected"
              @delete="onErasePhoto"
            />
          </div>
          <b-form-group label="Nome">
            <b-input
              class="base-input"
              name="name"
              type="text"
              placeholder="Nome"
              v-model="form.nome"
            />
          </b-form-group>
          <b-form-group label="Data de Nascimento">
            <b-input
              class="base-input"
              name="dateNasc"
              type="text"
              placeholder="DD/MM/YYYY"
              v-model="form.dateNasc"
            />
          </b-form-group>
          <div class="actions">
            <button class="btn btn-primary btn-login" @click="nextStep">
              <ArrowIcon color="#FFFFFF" rotate="90"/>
            </button>
          </div>
        </div>

        <div id="step-2" v-if="step == 2">
          <b-form-group label="CPF">
            <b-input
              class="base-input"
              name="cpf"
              type="text"
              placeholder="CPF"
              v-model="form.cpf"
            />
          </b-form-group>
          <b-form-group label="Telefone 1">
            <b-input
              class="base-input"
              name="tell1"
              type="text"
              placeholder="(XX) XXXXX-XXXX"
              v-model="form.tell1"
            />
          </b-form-group>
          <b-form-group label="Telefone 2">
            <b-input
              class="base-input"
              name="tell2"
              type="text"
              placeholder="(XX) XXXXX-XXXX"
              v-model="form.tell2"
            />
          </b-form-group>
          <div class="actions">
            <button class="btn btn-primary btn-login" @click="backStep">
              <ArrowIcon color="#FFFFFF" rotate="270"/>
            </button>
            <button class="btn btn-primary btn-login" @click="nextStep">
              <ArrowIcon color="#FFFFFF" rotate="90"/>
            </button>
          </div>
        </div>

        <div id="step-3" v-if="step == 3">
          <b-form-group label="Email">
            <b-input
              class="base-input"
              name="email"
              type="email"
              placeholder="Email"
              v-model="form.email"
            />
          </b-form-group>
          <b-form-group label="Senha">
            <PasswordInput 
              v-model="form.password" 
              placeholder="Senha" 
              :min="'6'" 
              :max="'16'"
            />
          </b-form-group>
          <b-form-group label="Confirmar Senha">
            <PasswordInput 
              id="confirmPassword"
              v-model="form.confirmPassword" 
              placeholder="Confirmar Senha" 
              :min="'6'" 
              :max="'16'"
            />
          </b-form-group>
          <div class="actions">
            <button class="btn btn-primary text-light btn-login" @click="backStep">
              <ArrowIcon color="#FFFFFF" rotate="270"/>
            </button>
          </div>
          <button class="btn btn-secondary text-light btn-login mt-3" @click="submitLogin()">Cadastrar</button>
        </div>
        
        <div class="card-footer mt-4">
          <p class="mb-0">
            Já possui conta?
            <router-link to="/login" class="register ml-1">Entrar</router-link>
          </p>
        </div>
      </form>
    </div>
    <transition name="fade">
      <Loader v-if="loading" />
    </transition>
  </div>
</template>

<script>
import RevoxIcon from "@/components/Shared/Icons/Logo";
import ArrowIcon from "@/components/Shared/Icons/ArrowIcon";
import ImageInput from "@/components/Inputs/ImageInput";
import PasswordInput from "@/components/Inputs/PasswordInput";
import Loader from "@/components/Shared/Loader/Loader";

export default {
  name: "Login",
  components: {
    Loader,
    RevoxIcon,
    ArrowIcon,
    ImageInput,
    PasswordInput
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

    .profile-image {
      width: 100px;
      height: 100px;
      margin: 0 auto;
    }

    .actions {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;

      .btn-login {
        width: 100%;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
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
