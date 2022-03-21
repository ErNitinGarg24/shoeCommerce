<template>
  <Header />
  <div id="shiftTop">
    <!-- <ProductsList /> -->
    <router-view />
  </div>
  <Footer />
</template>

<script>
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
#shiftTop {
  margin-top: 70px;
  margin-bottom: 15px;
  min-height: 100vh;
}
a {
  text-decoration: none;
}
</style>
