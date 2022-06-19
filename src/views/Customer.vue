<template>
  <v-container class="haa">
    <v-row >
      <v-col lg="3" md="6" sm="12" cols="12">
        <CustomerCard 
          title="ລວມ"
          subtitle="500"
          avatar_bg="#00a65a"
          avatar_ic="mdi-human-male-male"
        />
      </v-col>

      <v-col lg="3" md="6" sm="12" cols="12">
        <CustomerCard
          title="ບໍລິສັດ"
          subtitle="25"
          avatar_bg="#f39c12"
          avatar_ic=" mdi-office-building"
        />
      </v-col>

      <v-col lg="3" md="6" sm="12" cols="12">
        <CustomerCard
          title="ພະນັກງານ"
          subtitle="15"
          avatar_bg="#dd4b39"
          avatar_ic="mdi-account-tie"
        />
      </v-col>

      <v-col lg="3" md="6" sm="12" cols="12">
        <CustomerCard
          style="font-family: Phetsarath ot"
          title="ບ່ອນບໍລິການ"
          subtitle="25"
          avatar_bg="#3c8dbc"
          avatar_ic="mdi-gas-station"
        />
      </v-col>
    </v-row>

    <!--- table section -->

    <v-card id="print" >
      <v-data-table :search="search" :headers="headers" :items="customers" disable-pagination
      hide-default-footer>
        <template v-slot:top>
          <v-toolbar id="hid" flat color="white">
            <v-toolbar-title style="font-family: Phetsarath ot"
              >ລາຍຊື່ລູກຄ້າ</v-toolbar-title
            >
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-text-field id="hid"
              v-model="search"
              append-icon="mdi-magnify"
              style="font-family: Phetsarath ot"
              label="ຄົ້ນຫາ"
              single-line
              hide-details
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-btn
              @click="$router.push('/customercreate')"
              color="primary"
              dark
              class="mb-2"
            >
              <v-icon left>add</v-icon>
              <span style="font-family: Phetsarath ot">ເພີ່ມລູກຄ້າ</span>
            </v-btn>
            <v-btn class="mb-2" @click="$router.push('/printcustomer')">
              <v-icon left>print</v-icon>
              <span style="font-family: Phetsarath ot">ປິ້ນ</span>
            </v-btn>
          </v-toolbar>
        </template>

        <template  v-slot:item="{ item }">
          <tr id="print" >
            <td >{{ item.id }}</td>
            <td>{{ item.companyname }}</td>
            <td>{{ item.address }}</td>
            <td>{{ item.contact }}</td>
            <td>{{ item.service }}</td>
            <td>{{ item.phone }}</td>
            <td>{{ item.employeeid }}</td>
            <td>{{ item.employeename }}</td>
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
          text: "ລະຫັດບໍລິສັດ",
          alignItems: "left",
          sortable: false,
          value: "id",
        },
        { text: "ຊື່ບໍລິສັດ", value: "companyname" },
        { text: "ທີ່ຢູ່", value: "address" },
        { text: "ຜູ້ຕິດຕໍ່", value: "contact" },
        { text: "ສະຖານທີໃຫ້ບໍລິການນ້ຳມັນ", value: "service" },
        { text: "ເບີໂທ", value: "phone" },
        { text: "ລະຫັດພະນັກງານ", value: "employeeid" },
        { text: "ຊື່ພະນັກງານ", value: "employeename" },
        { text: "Action", value: "action" },
      ],
    };
  },
  components: {
    CustomerCard,
  },
  mounted() {
    console.log("Customer is running");
    axios.get("http://localhost:3000/api/v1/customer").then((result) => {
      console.log(JSON.stringify(result.data));
      this.customers = result.data;
    });
   
  },
  
  
  methods: {
    editItem(item) {
      this.$router.push({
        name: "CustomerEdit",
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
  print(){
    window.print();
  }
  },
};
</script>

<style>
  .haa {
   font-family: phetsarath ot;
  }


 

  
</style>
