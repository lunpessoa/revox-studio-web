<template>
  <div class="profile-info">
    <div class="basic-info">
      <div class="card-header">
        <h2 class="mb-0">Meu Perfil</h2>
        <button class="btn-edit" @click="edit" v-if="!isEdit">
          <EditIcon color="#3B185F" />
          Editar
        </button>
        <button class="btn-close" @click="edit" v-else>
          <CloseIcon color="#3B185F" />
        </button>
      </div>
      <div class="card-body">
        <form @submit.prevent>
          <b-form-group label="Nome">
            <b-input type="text" v-model="form.name" :disabled="!isEdit"/>
          </b-form-group>
          <b-form-group label="CPF / CNPJ">
            <the-mask 
              class="form-control"
              name="cpfCnpj"
              placeholder="CPF / CNPJ"
              v-model="form.cpfCnpj"
              :mask="['###.###.###-##', '##.###.###/####-##']"
              :disabled="!isEdit" 
            />
          </b-form-group>
          <b-form-group label="Email">
            <b-input type="text" v-model="form.email" disabled/>
          </b-form-group>
          <b-form-group label="Data de Nascimento">
            <b-input type="text" v-model="form.dateBorn" :disabled="!isEdit"/>
          </b-form-group>
          <b-form-group label="Telefone 1">
            <the-mask
              class="form-control"
              name="tell1"
              placeholder="(XX) XXXXX-XXXX"
              :mask="['(##) ####-####', '(##) #####-####']"
              v-model="form.tell1"
              :disabled="!isEdit"
            />
          </b-form-group>
          <b-form-group label="Telefone 2">
            <the-mask
              class="form-control"
              name="tell2"
              placeholder="(XX) XXXXX-XXXX"
              :mask="['(##) ####-####', '(##) #####-####']"
              v-model="form.tell2"
              :disabled="!isEdit"
            />
          </b-form-group>
          <button class="btn btn-primary d-block" v-if="isEdit">Alterar Senha</button>
        </form>
      </div>
      <div class="card-footer">
        <button class="btn btn-primary btn-save" v-if="isEdit">Salvar</button>
      </div>
    </div>
  </div>
</template>

<script>
import EditIcon from "@/components/Shared/Icons/EditIcon";
import CloseIcon from "@/components/Shared/Icons/CloseIcon";

export default {
  name: 'ProfileInfo',
  components: {
    EditIcon,
    CloseIcon
  },
  data() {
    return {
      form: {
        name: 'Luan Pessoa',
        cpfCnpj: '00000000000',
        email: 'luan.pessoa.393@hotmail.com',
        dateBorn: '10/02/2002',
        tell1: '(11) 99999-9999',
        tell2: '(11) 99999-9999',
      },
      isEdit: false,
    }
  },
  methods: {
    edit() {
      this.isEdit = !this.isEdit;
    }
  }
};
</script>

<style lang='scss'>
@import 'ProfileInfo.scss';
</style>