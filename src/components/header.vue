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
      <div class="col-md-8 d-flex align-items-center justify-content-center">
        <!-- <div class="search">
          <input
            type="text"
            class="searchBox"
            placeholder="Search Products ..."
          />
          <button class="searchBtn">
            <fa icon="magnifying-glass" class="searchBtn" />
          </button>
        </div> -->
      </div>
      <div class="col-md-2 d-flex align-items-center justify-content-end">
        <div
          id="account"
          class="d-flex align-items-center justify-content-center"
        >
          <fa :icon="['fas', 'user']" />
          <router-link :to="{ name: 'SignIn' }">
            <div class="welcome">
              <p class="greet">Hello</p>
              <p class="name">Sign in</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "header",
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
}
</style>