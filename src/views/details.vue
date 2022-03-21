<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-5">
        <ImgCarousel :slug="id" />
      </div>
      <div class="col-md-7">
        <!-- <p>id is {{ id }}</p> -->
        <ProductDetails :slug="id" />
      </div>
    </div>
  </div>
</template>

<script>
import ImgCarousel from "../components/imagesCarousel.vue";
import ProductDetails from "../components/productDetails.vue";
export default {
  props: ["id"],
  // data() {
  //   return {
  //     id: this.$route.params.id,
  //   };
  // },
  name: "Details",
  components: {
    ProductDetails,
    ImgCarousel,
  },
};
</script>