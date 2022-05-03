<template>
  <div class="containerSign">
    <div class="card">
      <form @submit.prevent="handleSubmit">
        <div class="title">
          <!-- <h1>Sign In:</h1> -->
          <h1>Create Account:</h1>
        </div>
        <div class="name">
          <label for="name">Name:</label>
          <input type="text" v-model="name" />
        </div>
        <div class="email">
          <label for="email">Email:</label>
          <input type="text" v-model="email" />
        </div>
        <div class="pwd">
          <label for="password">Password:</label>
          <input type="password" v-model="password" />
        </div>
        <div class="confirmPwd">
          <label for="confirm-password">Confirm password:</label>
          <input type="password" v-model="checkPwd" />
        </div>
        <button class="add">Continue</button>
        <div class="alternate">
          <span>
            Already have an account
            <router-link to="/sign-in"> Sign In </router-link>
          </span>
          <!-- <span>
            Don't have an account
            <router-link to="/sign-in"> Create Account </router-link>
          </span> -->
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "signUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      checkPwd: "",
    };
  },
  methods: {
    async handleSubmit() {
      var data = {};
      if (this.password == this.checkPwd) {
        data = {
          name: this.name,
          email: this.email,
          password: this.password,
        };
        console.log("Submitted data", data);
        await axios
          .post("http://localhost:8080/prods/signup", data)
          .then((res) => {
            console.log(res);
            localStorage.setItem("token", res.data.token);
            // this.$router.push({ name: "Account" });
          })
          .catch((err) => console.log("Error is: ", err));
      } else {
        console.log("Passwords didn't match");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.containerSign {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card {
  padding: 15px;
  .title {
    h1 {
      font-size: 25px;
      font-weight: bold;
      border-bottom: 2px solid;
      display: inline-block;
    }
  }
  div {
    margin-bottom: 15px;
    label {
      font-size: 16px;
      font-weight: bold;
      display: block;
    }
    input {
      min-width: 35vw;
      border: 1px solid rgba(0, 0, 0, 0.125);
      border-radius: 5px;
      padding: 5px 15px;
    }
  }
  .alternate {
    text-align: right;
    margin-top: 10px;
    font-size: 12px;
    a {
      font-size: 14px;
    }
  }
  .add {
    border-radius: 5px;
    background: #f4a43e;
    color: white;
    padding: 5px 25px;
    font-weight: bold;
    border: 1px solid rgba(0, 0, 0, 0.125);
    box-shadow: 0 0 10px rgb(0 0 0 / 13%);
    min-width: 35vw;
  }
}
</style>