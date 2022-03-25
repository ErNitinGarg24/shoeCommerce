<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <Filter
          :filereProds="filereProds"
          :products="products"
          :search="search"
        />
      </div>
      <div class="col-md-9">
        <div class="row">
          <Card :products="products" />
        </div>
        <div class="col-md-12">
          <div
            class="
              pagination
              d-flex
              align-items-center
              justify-content-center
              mt-5
            "
          >
            <div class="previous buttoned">Previous</div>
            <div class="counts">
              <span
                v-for="count in products.pageCounts"
                :key="count"
                @click="() => updateFilters('page', count)"
                class="buttoned numbers"
              >
                {{ count }}
              </span>
            </div>
            <div class="next buttoned">Next</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/card.vue";
import Filter from "../components/filter.vue";
import FetchPosts from "../services/fetch";
export default {
  name: "Home",
  mixins: [FetchPosts],
  components: {
    Card,
    Filter,
  },
};
</script>

<style lang="scss" scoped>
@mixin dots() {
  position: relative;
  display: inline-block;
  color: transparent;
  border: transparent;
  padding: 0;
  &::after {
    content: ".";
    color: black;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.buttoned {
  padding: 5px 15px;
  line-height: 18px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 2px;
}
.numbers {
  &:nth-child(n + 4) {
    display: none;
  }
  &:nth-child(4) {
    @include dots();
  }
  &:nth-child(5) {
    @include dots();
  }
  &:nth-child(6) {
    @include dots();
  }
  &:nth-last-child(-n + 3) {
    display: inline-block;
  }
}
</style>