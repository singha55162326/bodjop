<template>
  <v-container>
    <v-card class="mx-auto" outlined>
      <v-form @submit.prevent="submit" style="font-family: Phetsarath ot">
        <v-text-field
          v-model="customer.id"
          label="ລະຫັດການສົ່ງ"
          required
        ></v-text-field>

        <v-menu
          v-model="menu2"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="ວັນທີສົ່ງ"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
        </v-menu>
        <v-select :items="items" label="ຂະໜາດລົດ" dense></v-select>
        <v-text-field
          v-model="customer.contact"
          label="ເລກທີຮັບອໍເດີ"
          required
        ></v-text-field>
        <v-text-field
          v-model="customer.service"
          label="ລາຍການນ້ຳມັນ"
          required
        ></v-text-field>
        <v-text-field
          v-model="customer.phone"
          label="ຊື່ບໍລິສັດ"
          required
        ></v-text-field>
        <v-text-field
          v-model="customer.employeeid"
          label="ສະຖານທີໃຫ້ບໍລິການນ້ຳມັນ"
          required
        ></v-text-field>
        <br />
        <br />
        <v-row style="font-family: Phetsarath ot">
          <v-spacer></v-spacer>
          <v-btn @click="cancel" class="mr-4" color="">ຍົກເລີກ</v-btn>
          <v-btn type="submit" color="success">ບັນທຶກ</v-btn>
        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Customercreate",
  data: () => ({
    customer: {
      id: "",
      name: "",
      address: "",
      contact: "",
      service: "",
      phone: "",
      employeeid: "",
      items: "",
     
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu2: false,
     
    },
     items: ["10ລໍ້", "24ລໍ້", "12ລໍ້", "6ລໍ້"],
  }),
  methods: {
    cancel() {
      this.$router.back();
    },
    submit() {
      alert(JSON.stringify(this.customer));
    },
  },
};
</script>

<style></style>
