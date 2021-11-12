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
          v-model="form.nomeEstab"
        />
      </b-form-group>
      <b-form-group label="Responsável">
        <b-input
          class="base-input"
          name="name"
          type="text"
          placeholder="Nome do Responsável"
          v-model="form.donoEstab"
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
        <the-mask 
          class="form-control base-input"
          name="cpf"
          placeholder="CPF / CNPJ"
          v-model="form.cnpjEstab"
          :mask="['###.###.###-##', '##.###.###/####-##']" 
        />
      </b-form-group>
      <b-form-group label="Telefone 1">
        <the-mask
          class="form-control base-input"
          name="tell1"
          placeholder="(XX) XXXXX-XXXX"
          :mask="['(##) ####-####', '(##) #####-####']"
          v-model="form.telefoneEstab"
        />
      </b-form-group>
      <b-form-group label="Telefone 2">
        <the-mask
          class="form-control base-input"
          name="tell2"
          placeholder="(XX) XXXXX-XXXX"
          :mask="['(##) ####-####', '(##) #####-####']"
          v-model="form.telefoneDono"
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
      <b-form-group label="CEP">
        <the-mask
          class="form-control base-input"
          name="cep"
          placeholder="CEP"
          :mask="['#####-###']"
          v-model="form.cepEstab"
        />
      </b-form-group>
      <b-form-group label="Rua">
        <b-input
          class="base-input"
          name="rua"
          type="text"
          placeholder="Rua"
          v-model="form.endereçoEstab"
        />
      </b-form-group>
      <div class="input-double">
        <b-form-group label="Bairro">
          <b-input
            class="base-input"
            name="district"
            type="text"
            placeholder="Bairro"
            v-model="form.bairroEstab"
          />
        </b-form-group>
        <b-form-group label="Número">
          <b-input
            class="base-input"
            name="num"
            type="text"
            placeholder="Número"
            v-model="form.numeroEstab"
          />
        </b-form-group>
      </div>
      <div class="input-double">
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
      </div>
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
          v-model="form.emailDono"
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

import { REGISTER_ESTABLISHMENT } from '@/store/register/actions';

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
        // idCliente: 0,
        nomeEstab: '',
        cnpjEstab: '',
        telefoneEstab: '',
        endereçoEstab: '',
        bairroEstab: '',
        cepEstab: '',
        numeroEstab: '',
        donoEstab: '',
        cpfDono: '00000000000',
        dtNascimento: '2013-10-01T00:00:00.000Z',
        emailDono: '',
        telefoneDono: '',
        senhaEstab: '',
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
      this.form.senhaEstab = this.passwords.confirmPassword;
      console.log(this.form);
      this.$store
				.dispatch(REGISTER_ESTABLISHMENT, this.form)
				.then(() => {
					console.log("Cadastrou!");
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
