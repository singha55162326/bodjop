<template>
  <v-card id="print">
    <v-card-title  >
        ເອກະສານຈັດສົ່ງ
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" sm="12" md="12" lg="12" xl="12">
            <v-text-field
              v-model="search"
              label="ຄົ້ນຫາ"
              prepend-icon="mdi-magnify"
              color="primary"
            ></v-text-field>
          </v-col>
          <v-btn @click="print">
            <v-icon>mdi-printer</v-icon>
            <span style="font-family: Phetsarath ot">ປິນ</span>
          </v-btn>
        </v-row>
        <v-row>
          <v-col cols="12" sm="12" md="12" lg="12" xl="12">
            <v-data-table
              :headers="headers"
              :items="customers"
              :search="search"
          
              class="elevation-1"
            >
            </v-data-table>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
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
            text: "ເລກທີ",
            align: "left",
            sortable: false,
            value: "Delno",
            },
            {
            text: "ທີຢູ່",
            align: "left",
            sortable: false,
            value: "add",
            },
            {
            text: "ເລກຮັບອໍເດີ",
            align: "left",
            sortable: false,
            value: "orderno",
            },
            {
            text: "ຜູ້ຕິດຕໍ່",
         
            sortable: false,
            value: "coname",
            },
            {
            text: "ລະຫັດຂົນສົ່ງ",
          
            sortable: false,
            value: "traid",
            },
            {
            text: "ຂະໜາດລົດ",
            align: "left",
            sortable: false,
            value: "dimen",
            },
            {
            text: "ຊື່ບໍລິສັດ",
            align: "left",
            sortable: false,
            value: "companyname",
            },
             {
            text: "ເບີໂທ",
            align: "left",
            sortable: false,
            value: "tele",
            },
             {
            text: "ສະຖານທີໃຫ້ບໍລິການນ້ຳມັນ",
            align: "left",
            sortable: false,
            value: "addservice",
            },
             {
            text: "ລາຄາລວມ",
            align: "left",
            sortable: false,
            value: "price",
            },
           
        ],
        };
    },
    methods: {
        getCustomers() {
        axios.get("http://localhost:3000/api/v1/document").then((response) => {
            this.customers = response.data;
        });
        },
        print() {
        window.print();
        },
        editItem(item) {
        this.$router.push({ name: "EditCustomer", params: { id: item.id } });
        },
        deleteItem(item) {
        const dialog = this.$dialog.confirm("ທ່ານຕ້ອງການລົບຂໍ້ມູນນີ້ບໍ່?");
        dialog.then((dialog) => {
            if (dialog) {
            axios.delete("/api/customer/" + item.id).then((response) => {
                this.getCustomers();
            });
            }
        });
        },
    },
    created() {
        this.getCustomers();
    },
};
</script>



<style>
@font-face {
  font-family: "phetsarath ot";
  src: local("phetthai-regular"),
    url("/fonts/phetsarathot.ttf") format("truetype");
 
}
#print{
  font-family: phetsarath ot;
 
}

</style>