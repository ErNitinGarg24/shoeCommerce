<template>
  <div class="search">
    <input
      type="text"
      class="searchBox"
      placeholder="Search Products ..."
      v-model="term"
      @keyup="updateFilters('term', term)"
    />
    <!-- <button class="searchBtn">
      <fa icon="magnifying-glass" class="searchBtn" />
    </button> -->
  </div>
  <div class="review">
    <h3 class="revHead">Customer Review</h3>
    <p @click="() => updateFilters('rating', 4)">
      <fa icon="star" />
      <fa icon="star" />
      <fa icon="star" />
      <fa icon="star" />
      <fa :icon="['far', 'star']" />
      & Up
    </p>
    <p @click="() => updateFilters('rating', 3)">
      <fa icon="star" />
      <fa icon="star" />
      <fa icon="star" />
      <fa :icon="['far', 'star']" />
      <fa :icon="['far', 'star']" />
      & Up
    </p>
    <p @click="() => updateFilters('rating', 2)">
      <fa icon="star" />
      <fa icon="star" />
      <fa :icon="['far', 'star']" />
      <fa :icon="['far', 'star']" />
      <fa :icon="['far', 'star']" />
      & Up
    </p>
    <p @click="() => updateFilters('rating', 1)">
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
    <p @click="() => updateFilters('over', 0, 'under', 500)">Under $500</p>
    <p @click="() => updateFilters('over', 500, 'under', 1000)">$500 - $1000</p>
    <p @click="() => updateFilters('over', 1000, 'under', 1500)">
      $1000 - $1500
    </p>
    <p @click="() => updateFilters('over', 1500, 'under', 2000)">
      $1500 - $2000
    </p>
    <p @click="() => updateFilters('over', 2000, 'under', 2500)">
      $2000 - $2500
    </p>
    <p @click="() => updateFilters('over', 2500, 'under', 'Infinity')">
      Over $2500
    </p>
  </div>
  <div class="review">
    <h3 class="revHead">Shoe Size (UK/India)</h3>
    <div class="row">
      <!-- {{ products }} -->
      <div v-for="size in products.arr" :key="size" class="col-md-3">
        <button @click="() => updateFilters('shoeSize', size)" class="size">
          <p>{{ size }}</p>
        </button>
      </div>
      <!-- <div class="col-md-3">
        <button @click="() => updateFilters('shoeSize', 3.5)" class="size">
          <p>3.5</p>
        </button>
      </div>
      <div class="col-md-3">
        <button @click="() => updateFilters('shoeSize', 4)" class="size">
          <p>4</p>
        </button>
      </div>
      <div class="col-md-3">
        <button @click="() => updateFilters('shoeSize', 4.5)" class="size">
          <p>4.5</p>
        </button>
      </div>
      <div class="col-md-3">
        <button @click="() => updateFilters('shoeSize', 5)" class="size">
          <p>5</p>
        </button>
      </div>
      <div class="col-md-3">
        <button @click="() => updateFilters('shoeSize', 5.5)" class="size">
          <p>5.5</p>
        </button>
      </div>
      <div class="col-md-3">
        <button @click="() => updateFilters('shoeSize', 6)" class="size">
          <p>6</p>
        </button>
      </div>
      <div class="col-md-3">
        <button @click="() => updateFilters('shoeSize', 6.5)" class="size">
          <p>6.5</p>
        </button>
      </div>
      <div class="col-md-3">
        <button @click="() => updateFilters('shoeSize', 7)" class="size">
          <p>7</p>
        </button>
      </div>
      <div class="col-md-3">
        <button @click="() => updateFilters('shoeSize', 7.5)" class="size">
          <p>7.5</p>
        </button>
      </div>
      <div class="col-md-3">
        <button @click="() => updateFilters('shoeSize', 8)" class="size">
          <p>8</p>
        </button>
      </div>
      <div class="col-md-3">
        <button @click="() => updateFilters('shoeSize', 8.5)" class="size">
          <p>8.5</p>
        </button>
      </div>
      <div class="col-md-3">
        <button @click="() => updateFilters('shoeSize', 9)" class="size">
          <p>9</p>
        </button>
      </div>
      <div class="col-md-3">
        <button @click="() => updateFilters('shoeSize', 9.5)" class="size">
          <p>9.5</p>
        </button>
      </div>
      <div class="col-md-3">
        <button @click="() => updateFilters('shoeSize', 10)" class="size">
          <p>10</p>
        </button>
      </div>
      <div class="col-md-3">
        <button @click="() => updateFilters('shoeSize', 10.5)" class="size">
          <p>10.5</p>
        </button>
      </div>
      <div class="col-md-3">
        <button @click="() => updateFilters('shoeSize', 11)" class="size">
          <p>11</p>
        </button>
      </div>
      <div class="col-md-3">
        <button @click="() => updateFilters('shoeSize', 11.5)" class="size">
          <p>11.5</p>
        </button>
      </div>
      <div class="col-md-3">
        <button @click="() => updateFilters('shoeSize', 12)" class="size">
          <p>12</p>
        </button>
      </div> -->
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
import FetchPosts from "../services/fetch";
export default {
  name: "filter",
  props: ["search", "products"],
  mixins: [FetchPosts],
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