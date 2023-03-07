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
          v-model="form.nomeCliente"
        />
      </b-form-group>
      <b-form-group label="Data de Nascimento">
        <v-datepicker v-model="form.dtNascimento" :masks="{input: 'DD/MM/YYYY'}" color="purple">
          <template v-slot="{ inputValue, inputEvents }">
            <b-input 
              class="form-control base-input"
              name="dateBorn"
              placeholder="DD/MM/YYYY"
              :value="inputValue"
              v-on="inputEvents"
            />
          </template>
        </v-datepicker>
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
          v-model="form.cpfCliente"
          :mask="['###.###.###-##', '##.###.###/####-##']" 
        />
      </b-form-group>
      <b-form-group label="Telefone 1">
        <the-mask
          class="form-control base-input"
          name="tell1"
          placeholder="(XX) XXXXX-XXXX"
          :mask="['(##) ####-####', '(##) #####-####']"
          v-model="form.telefoneCliente"
        />
      </b-form-group>
      <b-form-group label="Telefone 2">
        <the-mask
          class="form-control base-input"
          name="tell2"
          placeholder="(XX) XXXXX-XXXX"
          :mask="['(##) ####-####', '(##) #####-####']"
          v-model="form.telefoneCliente2"
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
          v-model="form.emailCliente"
        />
      </b-form-group>
      <b-form-group label="Senha">
        <PasswordInput 
          v-model="passwords.password" 
          placeholder="Senha" 
          :min="'6'" 
          :max="'16'"
        />
      </b-form-group>
      <b-form-group label="Confirmar Senha">
        <PasswordInput 
          id="confirmPassword"
          v-model="passwords.confirmPassword" 
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

import { REGISTER_CLIENT } from '@/store/register/actions';

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
        // idCliente: 0,
        nomeCliente: '',
        cpfCliente: '',
        dtNascimento: '',
        telefoneCliente: '',
        emailCliente: '',
        senhaCliente: '',
        telefoneCliente2: '',
      },
      passwords: {
        password: '',
        confirmPassword: '',
      },
      step: 1,
    };
  },
  methods: {
    submitLogin() {
      if(this.passwords.password !== this.passwords.confirmPassword) {
        console.log('senhas não batem!');
        return
      }
      this.form.senhaCliente = this.passwords.confirmPassword;
      console.log(this.form);
      this.$store
				.dispatch(REGISTER_CLIENT, this.form)
				.then(() => {
					this.$router.push({ name: 'Login' });
				})
				.catch(e => {
          console.log(e);
					// this.$toastr.e(e.response.data.message);
				})
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
