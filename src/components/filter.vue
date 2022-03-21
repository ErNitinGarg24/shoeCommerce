<template>
  <div class="search">
    <input
      type="text"
      class="searchBox"
      placeholder="Search Products ..."
      v-model="term"
      @keyup="search(term)"
    />
    <!-- <button class="searchBtn">
      <fa icon="magnifying-glass" class="searchBtn" />
    </button> -->
  </div>
  <div class="review">
    <h3 class="revHead">Customer Review</h3>
    <p @click="() => updateFilters('review', 4)">
      <fa icon="star" />
      <fa icon="star" />
      <fa icon="star" />
      <fa icon="star" />
      <fa :icon="['far', 'star']" />
      & Up
    </p>
    <p @click="() => updateFilters('review', 3)">
      <fa icon="star" />
      <fa icon="star" />
      <fa icon="star" />
      <fa :icon="['far', 'star']" />
      <fa :icon="['far', 'star']" />
      & Up
    </p>
    <p @click="() => updateFilters('review', 2)">
      <fa icon="star" />
      <fa icon="star" />
      <fa :icon="['far', 'star']" />
      <fa :icon="['far', 'star']" />
      <fa :icon="['far', 'star']" />
      & Up
    </p>
    <p @click="() => updateFilters('review', 1)">
      <fa icon="star" />
      <fa :icon="['far', 'star']" />
      <fa :icon="['far', 'star']" />
      <fa :icon="['far', 'star']" />
      <fa :icon="['far', 'star']" />
      & Up
    </p>
  </div>
  <div class="review">
    <h3 class="revHead">Price</h3>
    <p @click="() => updateFilters('under', 0, 'over', 500)">Under $500</p>
    <p @click="() => updateFilters('under', 500, 'over', 1000)">$500 - $1000</p>
    <p @click="() => updateFilters('under', 1000, 'over', 1500)">
      $1000 - $1500
    </p>
    <p @click="() => updateFilters('under', 1500, 'over', 2000)">
      $1500 - $2000
    </p>
    <p @click="() => updateFilters('under', 2000, 'over', 2500)">
      $2000 - $2500
    </p>
    <p @click="() => updateFilters('under', 2500, 'over', 9999999999999999)">
      Over $2500
    </p>
  </div>
  <div class="review">
    <h3 class="revHead">Shoe Size (UK/India)</h3>
    <div class="row">
      <div class="col-md-3">
        <button @click="() => updateFilters('size', 3)" class="size">
          <p>3</p>
        </button>
      </div>
      <div class="col-md-3">
        <button @click="() => updateFilters('size', 3.5)" class="size">
          <p>3.5</p>
        </button>
      </div>
      <div class="col-md-3">
        <button @click="() => updateFilters('size', 4)" class="size">
          <p>4</p>
        </button>
      </div>
      <div class="col-md-3">
        <button @click="() => updateFilters('size', 4.5)" class="size">
          <p>4.5</p>
        </button>
      </div>
      <div class="col-md-3">
        <button @click="() => updateFilters('size', 5)" class="size">
          <p>5</p>
        </button>
      </div>
      <div class="col-md-3">
        <button @click="() => updateFilters('size', 5.5)" class="size">
          <p>5.5</p>
        </button>
      </div>
      <div class="col-md-3">
        <button @click="() => updateFilters('size', 6)" class="size">
          <p>6</p>
        </button>
      </div>
      <div class="col-md-3">
        <button @click="() => updateFilters('size', 6.5)" class="size">
          <p>6.5</p>
        </button>
      </div>
      <div class="col-md-3">
        <button @click="() => updateFilters('size', 7)" class="size">
          <p>7</p>
        </button>
      </div>
      <div class="col-md-3">
        <button @click="() => updateFilters('size', 7.5)" class="size">
          <p>7.5</p>
        </button>
      </div>
      <div class="col-md-3">
        <button @click="() => updateFilters('size', 8)" class="size">
          <p>8</p>
        </button>
      </div>
      <div class="col-md-3">
        <button @click="() => updateFilters('size', 8.5)" class="size">
          <p>8.5</p>
        </button>
      </div>
      <div class="col-md-3">
        <button @click="() => updateFilters('size', 9)" class="size">
          <p>9</p>
        </button>
      </div>
      <div class="col-md-3">
        <button @click="() => updateFilters('size', 9.5)" class="size">
          <p>9.5</p>
        </button>
      </div>
      <div class="col-md-3">
        <button @click="() => updateFilters('size', 10)" class="size">
          <p>10</p>
        </button>
      </div>
      <div class="col-md-3">
        <button @click="() => updateFilters('size', 10.5)" class="size">
          <p>10.5</p>
        </button>
      </div>
      <div class="col-md-3">
        <button @click="() => updateFilters('size', 11)" class="size">
          <p>11</p>
        </button>
      </div>
      <div class="col-md-3">
        <button @click="() => updateFilters('size', 11.5)" class="size">
          <p>11.5</p>
        </button>
      </div>
      <div class="col-md-3">
        <button @click="() => updateFilters('size', 12)" class="size">
          <p>12</p>
        </button>
      </div>
    </div>
  </div>
  <div class="review">
    <h3 class="revHead">Discount</h3>
    <p @click="() => updateFilters('disc', 10)">10% Off or more</p>
    <p @click="() => updateFilters('disc', 25)">25% Off or more</p>
    <p @click="() => updateFilters('disc', 35)">35% Off or more</p>
    <p @click="() => updateFilters('disc', 50)">50% Off or more</p>
    <p @click="() => updateFilters('disc', 60)">60% Off or more</p>
    <p @click="() => updateFilters('disc', 70)">70% Off or more</p>
  </div>
</template>
<script>
export default {
  name: "filter",
  props: ["search"],
  data() {
    return {
      filters: {
        review: 0,
        under: 0,
        over: 9999999999999999,
        size: 0,
        disc: 0,
      },
      term: "",
    };
  },
  methods: {
    updateFilters(filt, val, filt2, val2) {
      // console.log("=============================");
      // console.log("child Comp before" + JSON.stringify(this.filters));
      // console.log("=============================");
      this.filters[filt] = val;
      if (filt2 && val2) {
        this.filters[filt2] = val2;
      }
      // console.log("=============================");
      // console.log("child Comp" + JSON.stringify(this.filters));
      // console.log("=============================");
      this.$parent.filereProds(this.filters);
    },
  },
};
</script>

<style scoped>
svg {
  color: #f08804;
}
p {
  margin-bottom: 5px;
  font-size: 14px;
}
p:hover {
  color: #f08804;
}
.review {
  margin: calc(var(--bs-gutter-x) * 0.5) 0;
}
.revHead {
  font-size: 18px;
  font-weight: bold;
}
button.size {
  border: 1px solid rgba(0, 0, 0, 0.125);
  width: 100%;
  border-radius: 5px;
  margin: 5px 0;
}
button.size p {
  margin-bottom: 0;
}
.searchBox {
  width: 100%;
  margin-top: 10px;
}
</style>