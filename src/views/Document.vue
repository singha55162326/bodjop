<template >
  <v-container class="mamai" >
    <!--- table section -->

    <v-card>
      <v-data-table :search="search" :headers="headers" :items="customers">
        <template v-slot:top>
          <v-toolbar flat color="white">
            <v-toolbar-title style="font-family: Phetsarath ot"
              >ເອກະສານຈັດການຂົນສົ່ງ</v-toolbar-title
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
              @click="$router.push('/documentcreate')"
              color="primary"
              dark
              class="col-2 mb-2"
            >
              <v-icon left>add</v-icon>
              <span style="font-family: Phetsarath ot">ເພີ່ມເອກະສານ</span>
            </v-btn>&nbsp;
            <v-btn class="col-2 mb-2" @click="$router.push('/printdocument')">
              <v-icon left>print</v-icon>
              <span style="font-family: Phetsarath ot">ປິ້ນ</span>
            </v-btn>
          </v-toolbar>
        </template>

        <template v-slot:item="{ item }">
          <tr>
            <td>{{ item.Delno }}</td>
            <td>{{ item.add }}</td>
            <td>{{ item.orderno }}</td>
            <td>{{ item.coname }}</td>
            <td>{{ item.traid }}</td>
            <td>{{ item.oidate }}</td>
            <td>{{ item.companyid }}</td>
            <td>{{ item.dimen }}</td>
            <td>{{ item.companyname }}</td>
            <td>{{ item.tele }}</td>
            <td>{{ item.addservice }}</td>
            <td>{{ item.price }}</td>
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
       
        {text: "ເລກທີ", value: "delno", align: "left"},
        { text: "ທີຢູ່", value: "add" },
        { text: "ເລກທີຮັບອໍເດີ", value: "orderno" },
        { text: "ຜູ້ຕິດຕໍ່", value: "coname" },
        { text: "ລະຫັດຂົນສົ່ງ", value: "traid" },
        { text: "ຂໍ້ມູນນ້ຳມັນຂອງວັນທີ", value: "oidate" },
        { text: "ລະຫັດບໍລິສັດ", value: "companyid" },
        { text: "ຂະຫນາດລົດ", value: "dimen" },
        { text: "ຊື່ບໍລິສັດ", value: "companyname" },
        { text: "ເບີໂທ", value: "tele" },
        { text: "ສະຖານທີບໍລິການນ້ຳມັນ", value: "addservice" },
         { text: "ລາຄາລວມ", value: "price" },
        { text: "Action", value: "action" },
      ],
    };
  },

  mounted() {
    console.log("Customer is running");
    axios.get("http://localhost:3000/api/v1/document").then((result) => {
      console.log(JSON.stringify(result.data));
      this.customers = result.data;
    });
  },
  methods: {
    editItem(item) {
      this.$router.push({
        name: "documentedit",
        params: {
          id: item.id,
        },
      });
    },
    print() {
      window.print();
    },
    deleteItem(item) {
      axios
        .delete("http://localhost:3000/api/v2/customer/" + item.id)
        .then((result) => {
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
