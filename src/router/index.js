import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue";
import Details from "../views/details.vue";
import SignIn from "../views/signIn.vue";
import SignUp from "../views/signUp.vue";
import PageNotFound from "../components/404.vue";
import Account from "../views/account";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/details/:id",
    name: "Details",
    component: Details,
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    name: "PageNotFound",
    component: PageNotFound,
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/account",
    name: "Account",
    component: Account,
  },
  //   {
  //     path: "/logout",
  //     name: "Logout",
  //     component: Logout,
  //   },
];

const router = createRouter({
  history: createWebHistory(process.env.Base_Url),
  routes,
});

export default router;
