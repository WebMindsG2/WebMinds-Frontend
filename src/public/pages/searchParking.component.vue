<template>
  <div class="searchParking">

    <div >
      <div
          v-for="host in hosts"
          :key="host.id"

      >
        <pv-card class="cards">
          <template #header>
            <img :src="host.image" alt="Host Image" class="images" />
          </template>
          <template #title> {{ host.first_name }} {{ host.last_name }} </template>
          <template #content>
            <p style="font-size: 20px;"><b>Tarifa por hora:</b>  S/{{ host.hourly_rate }}</p>
            <p style="font-size: 20px;"><b>Tarifa por dia:</b>   S/{{ host.daily_rate }}</p>
          </template>
          <template #footer>
            <pv-button label = "Ver mas"/>
          </template>
        </pv-card>
      </div>
    </div>
  </div>


</template>


<script>

import {HostsApiService} from "../../learning/services/hosts-api.service.js";
import {Host} from "../../learning/model/host.entity.js";

export default {
  name: "searchParking",


  title: "SearchParking",
  data(){
    return{
      hosts:[]
    };
  },
  created() {
    console.log('created');
    this.hostsService = new HostsApiService();
    this.hostsService.getAll()
        .then(response=>{
          console.log(response.data);
          this.hosts = response.data;
        })
        .catch(error => {
          console.error("Error al obtener los hosts:", error);
        });



  },



}
</script>

<style scoped>



.cards {
  background-color: rgba(3, 64, 126, 0.94); /* Cambia el color de fondo de la tarjeta */
  border: 2px solid #ccc; /* Añade un borde a la tarjeta */
  border-radius: 10px; /* Aplica esquinas redondeadas */
  padding: 20px; /* Ajusta el relleno interno de la tarjeta */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Añade una sombra */
  width: 400px; /* Ancho de la tarjeta */
  height: 650px; /* Alto de la tarjeta */
}


.images {
  width: 350px; /* Ancho de la imagen al 100% del contenedor */
  height: 350px; /* Altura automática para mantener la proporción */
}
</style>
