<template>
  <div v-for="prod in products" :key="prod.id" class="col-md-3">
    <div class="card">
      <router-link :to="{ name: 'Details', params: { id: prod.id } }">
        <div class="imgSec">
          <img :src="prod.images[0]" :alt="prod.title" />
        </div>
        <div class="prodInfo text-center">
          <div class="prodName text-capitalize">{{ prod.title }}</div>
          <div
            class="prodPrice align-items-center d-flex justify-content-center"
          >
            <span class="finalPrice"> {{ prod.price.final }} </span>
            <span class="originalPrice"> {{ prod.price.mrp }} </span>
            <span class="disc"> ( {{ prod.price.disc }}% off) </span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "card",
  props: ["products"],
};
</script>
<style lang="scss" scoped>
.card {
  margin: calc(var(--bs-gutter-x) * 0.5) 0;
}
.card:hover {
  box-shadow: 0 0 15px rgb(0 0 0 / 15%);
}
.imgSec {
  height: 250px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
}
.imgSec img {
  max-width: 100%;
  max-height: 100%;
}
.prodInfo {
  padding: 5px;
  margin: 15px 0;
  .prodName {
    font-size: 18px;
    font-weight: bold;
    color: #131921;
    overflow: hidden;
    height: 60px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
.finalPrice {
  font-size: 20px;
  color: #f08804;
}
.originalPrice {
  font-size: 12px !important;
  text-decoration: line-through;
  color: rgba(0, 0, 0, 0.5);
  margin: 0 10px 0 5px;
}
.disc {
  color: #131921;
}
</style>