<template>
  <form id="establishment-register" @submit.prevent>
    <div id="step-1" v-if="step == 1">
      <div class="profile-image mb-3">
        <ImageInput 
          :path="form.imageFile" 
          type="circle"
          @input="onPhotoSelected"
          @delete="onErasePhoto"
        />
      </div>
      <b-form-group label="Estabelecimento">
        <b-input
          class="base-input"
          name="name"
          type="text"
          placeholder="Nome do Estabelecimento"
          v-model="form.nameEstablishment"
        />
      </b-form-group>
      <b-form-group label="Responsável">
        <b-input
          class="base-input"
          name="name"
          type="text"
          placeholder="Nome do Responsável"
          v-model="form.nameOwner"
        />
      </b-form-group>
      <div class="actions">
        <button class="btn btn-primary btn-login" @click="nextStep">
          <ArrowIcon color="#FFFFFF" rotate="90"/>
        </button>
      </div>
    </div>
    
    <div id="step-2" v-if="step == 2">
      <b-form-group label="CPF / CNPJ">
        <b-input
          class="base-input"
          name="cpf"
          type="text"
          placeholder="CPF / CNPJ"
          v-model="form.CpfCnpj"
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
      <b-form-group label="Rua">
        <b-input
          class="base-input"
          name="rua"
          type="text"
          placeholder="Rua"
          v-model="form.streat"
        />
      </b-form-group>
      <b-form-group label="Número">
        <b-input
          class="base-input"
          name="num"
          type="text"
          placeholder="Número"
          v-model="form.tell2"
        />
      </b-form-group>
      <b-form-group label="Bairro">
        <b-input
          class="base-input"
          name="district"
          type="text"
          placeholder="Bairro"
          v-model="form.district"
        />
      </b-form-group>
      <b-form-group label="Cidade">
        <b-input
          class="base-input"
          name="city"
          type="text"
          placeholder="Cidade"
          v-model="form.city"
        />
      </b-form-group>
      <b-form-group label="Estado">
        <b-input
          class="base-input"
          name="uf"
          type="text"
          placeholder="UF"
          v-model="form.uf"
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

    <div id="step-4" v-if="step == 4">
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
  name: "EstablishmentRegister",
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
      if (this.step < 5) {
        this.step--;
      }
    }
  }
};
</script>

<style lang="scss">
@import 'EstablishmentRegister.scss';
</style>
