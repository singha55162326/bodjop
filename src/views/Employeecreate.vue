<template>
  <v-container>
    <v-card class="mx-auto" outlined>
      <v-form @submit.prevent="submit" style="font-family: Phetsarath ot">
        <v-text-field v-model="customer.id" label="ລະຫັດພະນັກງານ" required></v-text-field>
        <v-text-field v-model="customer.name" label="ຊື່ພະນັກງານ" required></v-text-field>
        <v-text-field v-model="customer.address" label="ທີ່ຢູ່" required></v-text-field>
        <v-text-field
          v-model="customer.contact"
          label="ຕຳແຫນ່ງ"
          required
        ></v-text-field>
        <v-text-field v-model="customer.phone" label="ເບີໂທ" required></v-text-field>

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
