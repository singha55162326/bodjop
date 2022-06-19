import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login.vue";


import Home from "../views/Home.vue";
import Register from "@/views/Register.vue";
import Customer from "../views/Customer.vue";
import Delivery from "../views/Delivery.vue";
import Order from "../views/Order.vue";
import Document from "../views/Document.vue";
import Employee from "../views/Employee.vue";
import Price from "../views/Price.vue";
import Customercreate from "../views/Customercreate.vue";
import Customeredit from "../views/Customeredit.vue";
import Deliverycreate from "../views/Deliverycreate.vue";
import Deliveryedit from "../views/Deliveryedit.vue";
import Ordercreate from "../views/Ordercreate.vue";
import Orderedit from "../views/Orderedit.vue";
import Documentcreate from "../views/Documentcreate.vue";
import Documentedit from "../views/Documentedit.vue";
import Employeecreate from "../views/Employeecreate.vue";
import Employeeedit from "../views/Employeeedit.vue";
import Priceedit from "../views/Priceedit.vue";
import Pricecreate from "../views/Pricecreate.vue";
import Printcustomer from "../views/Printcustomer.vue";
import Printdelivery from "../views/Printdelivery.vue";
import Printorder from "../views/Printorder.vue";
import Printdocument from "../views/Printdocument.vue";
import Printemployee from "../views/Printemployee.vue";
import Printprice from "../views/Printprice.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/customer",
    name: "customer",
    component: Customer,
  },
  {
    path: "/delivery",
    name: "delivery",
    component: Delivery,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/order",
    name: "order",
    component: Order,
  },
  {
    path:"/printcustomer",
    name:"printcustomer",
    component:Printcustomer,
  },
  {
    path:"/printdelivery",
    name:"printdelivery",
    component:Printdelivery,
  },
  {
    path:"/printorder",
    name:"printorder",
    component:Printorder,
  },
  {
    path:"/printdocument",
    name:"printdocument",
    component:Printdocument,
  },
  {
    path:"/printemployee",
    name:"printemployee",
    component:Printemployee,
  },
  {
    path:"/printprice",
    name:"printprice",
    component:Printprice,
  },
  {
    path: "/document",
    name: "document",
    component: Document,
  },
  {
    path: "/employee",
    name: "employee",
    component: Employee,
  },
  {
    path: "/customercreate",
    name: "customercreate",
    component: Customercreate,
  },
  {
    path: "/documentedit/",
    name: "documentedit",
    component: Documentedit,
  },
  {
    path:"/deliverycreate",
    name:"deliverycreate",
    component:Deliverycreate,
  },
  {
    path:"/deliveryedit",
    name:"deliveryedit",
    component:Deliveryedit,
  },
  {
    path:"/ordercreate",
    name:"ordercreate",
    component:Ordercreate,
  },
  {
    path:"/orderedit",
    name:"orderedit",
    component:Orderedit,
  },
  {
    path:"employeecreate",
    name:"employeecreate",
    component:Employeecreate,
  },
  {
    path:"employeeedit",
    name:"employeeedit",
    component:Employeeedit,
  },
  {
    path:"pricecreate",
    name:"pricecreate",
    component:Pricecreate,
  },
  {
    path:"priceedit",
    name:"priceedit",
    component:Priceedit,
  },
  {
    path:"/documentcreate",
    name:"documentcreate",
    component:Documentcreate,
  },
  {
    path: "/customedit:id",
    name: "CustomerEdit",
    component: Customeredit,
  },
  {
    path: "/price",
    name: "price",
    component: Price,
  },
 
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "*",
    redirect: "/login",
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
