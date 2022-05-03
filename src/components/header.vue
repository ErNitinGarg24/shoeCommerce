<template>
  <div class="container-fluid">
    <div
      id="header"
      class="row d-flex align-items-center justify-content-between"
    >
      <div class="col-md-2">
        <router-link :to="{ name: 'Home' }">
          <h1 id="logo"><fa icon="shoe-prints" /> Shoes</h1>
        </router-link>
      </div>
      <div
        class="col-md-8 d-flex align-items-center justify-content-center"
      ></div>
      <div class="col-md-2 d-flex align-items-center justify-content-end">
        <div
          id="account"
          class="d-flex align-items-center justify-content-center"
        >
          <router-link :to="{ name: url }" class="d-flex align-items-center">
            <fa :icon="['fas', 'user']" />
            <div class="welcome">
              <p class="greet">Hello</p>
              <p class="name">{{ name }}</p>
            </div>
          </router-link>
        </div>
        <div v-if="active" id="logout">
          <a @click="() => logout()">Logout</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "../axios";
import userDetails from "../services/userDetails";

export default {
  name: "header",
  mixins: [userDetails],
  created() {
    this.getUserDetails(this.chkResponse);
  },
  methods: {
    chkResponse() {
      if (this.response != {}) {
        this.populateUserDetails(this.response);
      } else {
        this.removeUserDetails();
      }
    },
  },
  updated() {
    console.log("Header have been updated");
  },
};
</script>
<style scoped>
#header {
  position: fixed;
  top: 0;
  left: 12px;
  width: 100%;
  background-color: #131921;
  z-index: 100;
}
#logo {
  color: #fff;
  /* text-shadow: 0 0 4px #efefef; */
  margin: 15px 0;
  font-size: 22px;
}

svg {
  color: #f08804;
}
.searchBox {
  width: 400px;
  height: 35px;
  /* border-radius: 5px 0 0 5px; */
  border-radius: 5px;
  padding: 0 15px;
  border: 0;
}
.searchBtn {
  border: 0;
  border-radius: 0 5px 5px 0;
  height: 35px;
  width: 35px;
  background: #f4a43e;
}
.searchBtn svg {
  color: white;
  height: 15px;
  width: 15px;
}
.searchBtn:hover {
  background-color: #f08804;
}
.searchBtn:hover svg {
  background-color: #f08804;
}
.welcome {
  margin-left: 15px;
}
.welcome p {
  margin: 0;
}
#account {
  border: 1px solid rgba(255, 255, 255, 0.25);
  padding: 5px 15px;
  border-radius: 5px;
}
.greet {
  color: #fff;
  font-size: 12px;
}
.name {
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  line-height: 16px;
  height: 20px;
  line-height: 20px;
  text-transform: capitalize;
  min-width: 100px;
}
#logout {
  margin-left: 15px;
  color: #f08804;
}
</style>