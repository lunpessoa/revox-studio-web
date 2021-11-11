<template>
  <div class="profile-address">
    <div class="basic-info">
      <div class="card-header">
        <h2 class="mb-0">Endereço</h2>
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
          <div class="input-double">
            <b-form-group label="Rua">
              <b-input type="text" v-model="form.address" :disabled="!isEdit"/>
            </b-form-group>
            <b-form-group label="Número">
              <b-input type="text" v-model="form.number" :disabled="!isEdit"/>
            </b-form-group>
          </div>
          <b-form-group label="CEP">
            <the-mask
              class="form-control"
              name="cep"
              placeholder="CEP"
              :mask="['#####-###']"
              v-model="form.zip"
              :disabled="!isEdit"
            />
          </b-form-group>
          <b-form-group label="Bairro">
            <b-input type="text" v-model="form.district" :disabled="!isEdit"/>
          </b-form-group>
          <div class="input-double">
            <b-form-group label="Cidade">
              <b-input type="text" v-model="form.city" :disabled="!isEdit"/>
            </b-form-group>
            <b-form-group label="Estado">
              <b-input type="text" v-model="form.uf" :disabled="!isEdit"/>
            </b-form-group>
          </div>
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
  name: 'ProfileAddress',
  components: {
    EditIcon,
    CloseIcon
  },
  data() {
    return {
      form: {
        address: 'Rua Bela Cintra 71',
        number: '855',
        zip: '13578-970',
        district: 'Água Vermelha',
        city: 'Água Vermelha',
        uf: 'SP',
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
@import 'ProfileAddress.scss';
</style>