<template>
  <div id="Establishment">
    <b-row>
      <b-col cols="8">
        <div class="establishment">
          <div class="card-header p-0">
            <div class="img-container">
              <img src="../../../assets/images/establishment.jpg" alt="">
            </div>
          </div>
          <div class="card-body">
            <div class="card-title" style="gap: 40px;">
              <div class="img-container">
                <img src="../../../assets/images/user.png" alt="">
              </div>
              <div class="d-flex justify-content-between align-center w-100" style="gap: 40px;">
                <h2>Estabelecimento 1</h2>
                <div class="rate-stars">
                  <Rating :isDisable="true" :stars="4"/>
                  <p class="rate">4.7</p>
                </div>
              </div>
            </div>
            
            <div class="d-flex flex-column" style="gap: 40px;">
              <div>
                <label for="description">Descrição</label>
                <p id="description">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>

              <div class="comments">
                <VueSlickCarousel :arrows="true" :infinite="true">
                  <div class="slide" v-for="x in 4" :key="x">
                    <div class="slide-content">
                      <div class="comment-user mb-3">
                        <div class="d-flex">
                          <div class="user-picture mr-3">
                            <img src="../../../assets/images/user.png" alt="">
                          </div>
                          <h3 class="username mb-0">Luan Pessoa</h3>
                        </div>
                        <div class="rate-stars">
                          <Rating :isDisable="true" :stars="4"/>
                        </div>
                      </div>
                      <p id="comment">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                      </p>
                    </div>
                  </div>
                  <template #prevArrow>
                    <div class="custom-arrow">
                      <ArrowIcon rotate="270"/>
                    </div>
                  </template>
                  <template #nextArrow>
                    <div class="custom-arrow">
                      <ArrowIcon rotate="90"/>
                    </div>
                  </template>
                </VueSlickCarousel>
              </div>
            </div>
          </div>

          <div class="card-footer">
            <div class="address">
              <div class="contact">
                <p>(11) 99999-9999</p>
                <p>(11) 99999-9999</p>
              </div>
              <p>Av. Prefeito João Pires Filho, 22 - 13 de Maio / Santa Isabel - SP</p>
            </div>
            <div class="social">
              <div><FacebookIcon /></div>
              <div><InstagramIcon /></div>
              <div><WhatsappIcon /></div>
            </div>
          </div>
        </div>
      </b-col>

      <b-col cols="4">
        <div class="services">
          <div class="table-container mb-4">
            <table>
              <thead>
                <tr>
                  <th>Serviços</th>
                  <th>Preço</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="service, index in rows" :key="index">
                  <td>
                    <div class="d-flex">
                      <p>
                        {{service.name}}
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex">
                      <p>
                        {{service.price}}
                      </p>
                    </div>
                  </td>
                  <td>
                    <b-form-checkbox
                      :id="`checkbox-${index}`"
                      v-model="checkService"
                      :name="`checkbox-${index}`"
                      :value="index"
                      unchecked-value="not_accepted"
                      size="lg"
                    >
                    </b-form-checkbox>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button class="btn btn-primary w-100" @click="openScheduling">Agendar</button>
        </div>
      </b-col>
    </b-row>
    <SchedulingModal />
  </div>
</template>

<script>
import Rating from '@/components/Shared/Rating/Rating'
import FacebookIcon from '@/components/Shared/Icons/Facebook'
import InstagramIcon from '@/components/Shared/Icons/Instagram'
import WhatsappIcon from '@/components/Shared/Icons/Whatsapp'
import ArrowIcon from '@/components/Shared/Icons/ArrowIcon'
import SchedulingModal from "@/components/Establishments/SchedulingModal/SchedulingModal.vue";

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

import { 
  SELECT_ESTABLISHMENT_SCHEDULING,
} from "@/store/establishments/actions"

export default {
  name: 'Establishment',
  components: {
    Rating,
    FacebookIcon,
    InstagramIcon,
    WhatsappIcon,
    ArrowIcon,
    VueSlickCarousel,
    SchedulingModal
  },
  data() {
    return {
      checkService: [],
    }
  },
  methods: {
    openScheduling() {
      this.$store.dispatch(SELECT_ESTABLISHMENT_SCHEDULING, this.checkService)
    }
  },
  computed: {
    rows() {
      return [
        { 
          name: 'Corte de Cabelo Feminino',
          price: 'R$40,00'
        },
        { 
          name: 'Coloração',
          price: 'R$20,00'
        },
        { 
          name: 'Manicure comum',
          price: 'R$32,00'
        },
        { 
          name: 'Pedicure comum',
          price: 'R$25,00'
        },
        { 
          name: 'Depilação de axila',
          price: 'R$25,00'
        },
        { 
          name: 'Depilação de buço',
          price: 'R$25,00'
        },
        { 
          name: 'Depilação meia perna',
          price: 'R$25,00'
        }
      ]
    }
  }
};
</script>

<style scoped lang="scss">
@import "Establishment.scss";
</style>
