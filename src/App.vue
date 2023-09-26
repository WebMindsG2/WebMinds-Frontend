
<template>
  <pv-toast></pv-toast>
  <header>
    <pv-toolbar class="custom-toolbar  bg-primary" fixed>
      <template #start>
        <h3>ParkEasy</h3>
        <div class="flex-column">

          <router-link v-for="item in items" :key="item.label" v-slot="{ navigate, href}" :to="item.to" custom>
            <pv-button :href="href" class="p-button-text text-white" @click="navigate">{{ item.label }}</pv-button>
          </router-link>


        </div>
      </template>
    </pv-toolbar>
  </header>
  <div class="content">
    <pv-sidebar v-model:visible="drawer"/>
    <router-view />
  </div>

</template>

<script>
export default {
  name: 'App',
  title: 'ParkEasy',
  data() {
    return {
      drawer: false,
      items: [

        { label: 'Inicio', to: '/start' },
        { label: 'Buscar un estacionamineto', to: '/searchParking' },
        { label: 'Preguntas frecuentes', to: '/frequentQuestions' }

      ]
    };
  },

  methods: {


  }
};
</script>
<style>
.custom-toolbar {
  background-color: #99aa4e;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

.custom-toolbar h3 {
  color: #eeeeee;
  font-size: 20px;

}

.content {
  margin-top: 64px;
  padding: 16px;
}


</style>

