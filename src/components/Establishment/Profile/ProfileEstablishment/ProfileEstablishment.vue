<template>
  <div class="profile-establishment">
    <div class="basic-info">
      <div class="card-header">
        <h2 class="mb-0">Meu Estabelecimento</h2>
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
          <b-form-group label="Descrição">
            <b-textarea v-model="form.discription" :disabled="!isEdit" no-resize rows="4"/>
          </b-form-group>
          <b-form-group label="Facebook Link">
            <b-input type="text" v-model="form.facebook" :disabled="!isEdit"/>
          </b-form-group>
          <b-form-group label="Instagem Link">
            <b-input type="text" v-model="form.instagram" :disabled="!isEdit"/>
          </b-form-group>
          <b-form-group label="Whatsapp Link">
            <b-input type="text" v-model="form.whatsapp" :disabled="!isEdit"/>
          </b-form-group>
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
  name: 'ProfileEstablishment',
  components: {
    EditIcon,
    CloseIcon
  },
  data() {
    return {
      form: {
        discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        facebook: 'https://www.facebook.com/',
        instagram: 'https://www.instagram.com/',
        whatsapp: 'https://api.whatsapp.com/send?phone=5511940711175',
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
@import 'ProfileEstablishment.scss';
</style>