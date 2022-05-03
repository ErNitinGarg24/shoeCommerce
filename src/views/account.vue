<template>
  <h1>Here the account details can be shown</h1>
  <p>
    Name: <span class="text-capitalize">{{ acconutHolder }}</span>
  </p>
  <p>
    Email: <span class="text-capitalize">{{ email }}</span>
  </p>
</template>
<script>
import axios from "axios";
export default {
  name: "account",
  data() {
    return {
      name: "Sign In",
      url: "SignIn",
      acconutHolder: "",
      email: "",
    };
  },
  async created() {
    console.log(localStorage.getItem("token"));
    const response = await axios.get("prods/user");
    console.log(response);
    this.acconutHolder = response.data.name;
    this.email = response.data.email;
  },
};
</script>
<style lang="scss" scoped>
h1 {
  width: 100%;
  text-align: center;
}
</style>
