<template>
  <v-navigation-drawer app permanent>
    <router-link to="/" exact>
      <v-img src="@/assets/ptt.jpg" alt="" width="100%" />
    </router-link>
    <v-list id="hello" shaped>
      <v-list-item-group v-model="selectedMenu" mandatory color="primary">
        <v-list-item v-for="([icon, title,route], index) in menus" :key="index" @click="onClickMenu(route)">
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>


export default {
  data() {
    return {
      selectedMenu: 0,
      menus: [
        ["mdi-human-male-male", "ລູກຄ້າ", "/delivery"],
        ["mdi-truck-delivery", "ການຂົນສົ່ງ", "/delivery"],
        ["mdi-human-male-male", "ພະນັກງານ", "/employee"],
        ["mdi-file-document-outline", "ເອກະສານຈັດການຂົນສົ່ງ", "/document"],
        ["mdi-cart", "ການສັ່ງຊື້", "/order"],
        ["mdi-cash", "ລາຄາ", "/price"],
      ],
    };
  },
  methods: {
    onClickMenu(link) {
      this.$router.push(link).catch(err=>{
        console.log(err);
      });
    },
  },
  watch: {
    $route(to,) {
      this.selectedMenu = this.menus.findIndex(menu => menu[2] === to.path);
    },
  },
};
</script>

<style>
#hello{
  font-family: phetsarath Ot;


  font-size: 20px;
  font-weight: bold;
  color: #fff;
  text-shadow: 0px 0px 5px #fff;
  display: block;
}
</style>
