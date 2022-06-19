<template>
  <v-container class="mamai">
 

    <!--- table section -->

    <v-card>
      <v-data-table :search="search" :headers="headers" :items="customers">
        <template v-slot:top>
          <v-toolbar flat color="white">
            <v-toolbar-title style="font-family: Phetsarath ot"
              >ຂໍ້ມູນການສັ່ງຊື້ຈາກລູກຄ້າ</v-toolbar-title
            >
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              style="font-family: Phetsarath ot"
              label="ຄົ້ນຫາ"
              single-line
              hide-details
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-btn
              @click="$router.push('/ordercreate')"
              color="primary"
              dark
              class="col-2 mb-2"
            >
              <v-icon left>add</v-icon>
              <span style="font-family: Phetsarath ot">ເພີ່ມການສັ່ງຊື້</span>
            </v-btn>&nbsp;
            <v-btn class="col-2 mb-2" @click="$router.push('/printorder')">
              <v-icon left>print</v-icon>
              <span style="font-family: Phetsarath ot">ປິ້ນ</span>
            </v-btn>
          </v-toolbar>
        </template>

        <template v-slot:item="{ item }">
          <tr>
            <td>{{ item.id }}</td>
            <td>{{ item.cos }}</td>
            <td>{{ item.employeeid }}</td>
            <td>{{ item.category }}</td>
            <td>{{ item.companyid }}</td>
            <td>{{ item.date }}</td>
            <td>{{ item.companyname }}</td>
   
            <td>
              <v-icon class="mr-2" @click="editItem(item)">edit</v-icon>
              <span class="ma-1"></span>
              <v-icon @click="deleteItem(item)">delete</v-icon>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import CustomerCard from "@/components/cards/CustomerCard.vue";
import axios from "axios";
export default {
  name: "Customer",
  data() {
    return {
      search: "",
      customers: [],
      headers: [
        {
          text: "ເລກທີຮັບອໍເດີ",
          alignItems: "left",
          sortable: false,
          value: "id",
        },
        { text: "ສະຖານທີບໍລິການນ້ຳມັນ", value: "cos" },
        { text: "ລະຫັດພະນັກງານ", value: "employeeid" },
        { text: "ລາຍການນ້ຳມັນ", value: "category" },
        { text: "ລະຫັດບໍລິສັດ", value: "companyid" },
        { text: "ວັນທີ", value: "date" },
        { text: "ຊື່ບໍລິສັດ", value: "companyname" },
        
        { text: "Action", value: "action" },
      ],
    };
  },
  components: {
   
  },
  mounted() {
    console.log("Customer is running");
    axios.get("http://localhost:3000/api/v1/order").then((result) => {
      console.log(JSON.stringify(result.data));
      this.customers = result.data;
    });
  },
  methods: {
    editItem(item) {
      this.$router.push({
        name: "orderedit",
        params: {
          id: item.id,
        },
      });
    },
    deleteItem(item) {
      axios.delete("http://localhost:3000/api/v2/customer/" + item.id).then((result) => {
        console.log(result);
        this.customers = this.customers.filter((i) => i.id !== item.id);
      });
    },
  },
};
</script>

<style>
.mamai{
   font-family: phetsarath ot;
}
</style>
