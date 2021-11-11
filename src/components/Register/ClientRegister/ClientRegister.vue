<template>
  <form id="client-register" @submit.prevent>
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
      <b-form-group label="CPF ">
        <the-mask 
          class="form-control base-input"
          name="cpf"
          placeholder="CPF"
          v-model="form.cpf"
          :mask="['###.###.###-##', '##.###.###/####-##']" 
        />
      </b-form-group>
      <b-form-group label="Telefone 1">
        <the-mask
          class="form-control base-input"
          name="tell1"
          placeholder="(XX) XXXXX-XXXX"
          :mask="['(##) ####-####', '(##) #####-####']"
          v-model="form.tell1"
        />
      </b-form-group>
      <b-form-group label="Telefone 2">
        <the-mask
          class="form-control base-input"
          name="tell2"
          placeholder="(XX) XXXXX-XXXX"
          :mask="['(##) ####-####', '(##) #####-####']"
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
  </form>
</template>

<script>
import ArrowIcon from "@/components/Shared/Icons/ArrowIcon";
import ImageInput from "@/components/Inputs/ImageInput";
import PasswordInput from "@/components/Inputs/PasswordInput";

export default {
  name: "ClientRegister",
  components: {
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
@import 'ClientRegister.scss';
</style>
