<template>
  <v-container>
    <v-card class="mx-auto" outlined>
      <v-form @submit.prevent="submit" style="font-family: Phetsarath ot">
        <v-text-field
          v-model="customer.id"
          label="ເລກທີ່ຮັບອໍເດີ"
          required
        ></v-text-field>
        <v-text-field
          v-model="customer.name"
          label="ສະຖານທີ່ບໍລິການນ້ຳມັນ"
          required
        ></v-text-field>
        <v-text-field
          v-model="customer.address"
          label="ລະຫັດພະນັກງານ"
          required
        ></v-text-field>
        <v-text-field
          v-model="customer.contact"
          label="ລາຍກາนນ້ຳມັນ"
          required
        ></v-text-field>
        <v-text-field
          v-model="customer.service"
          label="ລະຫັດບໍລິສັດ"
          required
        ></v-text-field>
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="date"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="ວັນທີ"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(date)">
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
        <v-text-field
          v-model="customer.employeeid"
          label="ຊື່ບໍລິສັດ"
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
      employeename: "",

      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu: false,
    },
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
