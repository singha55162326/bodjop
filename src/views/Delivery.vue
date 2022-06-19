<template>
  <v-container class="mamai">
   

    <!--- table section -->

    <v-card >
      <v-data-table :search="search" :headers="headers" :items="customers">
        <template v-slot:top>
          <v-toolbar  flat color="white">
            <v-toolbar-title style="font-family: Phetsarath ot"
              >ຂໍ້ມູນການສົ່ງ</v-toolbar-title
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
              @click="$router.push('/deliverycreate')"
              color="primary"
              dark
              class="col-2 mb-2"
            >
              <v-icon left>add</v-icon>
              <span style="font-family: Phetsarath ot">ເພີ່ມຂໍ້ມູນການສົ່ງ</span>
            </v-btn>&nbsp;
            <v-btn class="col-2 mb-2" @click="$router.push('/printdelivery')">
              <v-icon left>print</v-icon>
              <span style="font-family: Phetsarath ot">ປິ້ນ</span>
            </v-btn>
          </v-toolbar>
        </template>

        <template v-slot:item="{ item }">
          <tr>
            
            <td>{{ item.id }}</td>
            <td>{{ item.date }}</td>
            <td>{{ item.dimension }}</td>
            <td>{{ item.orderid }}</td>
            <td>{{ item.category }}</td>
            <td>{{ item.companyname }}</td>
            <td>{{ item.service }}</td>
        
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

import axios from "axios";
export default {
  name: "Customer",
  data() {
    return {
      search: "",
      customers: [],
      headers: [
        {
          text: "ລະຫັດການຂົນສົ່ງ",
          alignItems: "left",
          sortable: false,
          value: "id",
        },
        { text: "ວັນທີສົ່ງ", value: "date" },
        { text: "ຂະຫນາດລົດ", value: "dimension" },
        { text: "ເລກທີຮັບອໍເດີ", value: "orderid" },
        { text: "ລາຍການນ້ຳມັນ", value: "category" },
        { text: "ຊື່ບໍລິສັດ", value: "companyname" },
        { text: "ສະຖານທີໃຫ້ບໍລິການນ້ຳມັນ", value: "service" },
    
        { text: "Action", value: "action" },
      ],
    };
  },
  
  mounted() {
    console.log("Customer is running");
    axios.get("http://localhost:3000/api/v1/delivery").then((result) => {
      console.log(JSON.stringify(result.data));
      this.customers = result.data;
    });
  },
  methods: {
    editItem(item) {
      this.$router.push({
        name: "deliveryedit",
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
.mamai{
   font-family: phetsarath ot;
}
 @media print {
    body * {
        overflow: hidden;
        font-size: smaller;
        visibility: hidden;
    }
    #hid{
      display: none;
    }
    #print, #print * {
        visibility: visible;
        border-bottom: none;
    }

    #title {
        visibility: hidden;
    }

    #print {
       
        position: fixed;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
    }
}

</style>
