<template>
  <div>
    <h1 class="name text-capitalize">{{ products.title }}</h1>
    <p class="ratings">
      <fa icon="star" />
      <fa icon="star" />
      <fa icon="star" />
      <fa icon="star" />
      <fa :icon="['far', 'star']" />
      <span v-if="products.ratings"> {{ products.ratings.cnt }} ratings </span>
    </p>
  </div>
  <div class="price" v-if="products.price">
    <h3 class="finalPrice">
      <span class="disc">-{{ products.price.disc }}%</span>
      {{ products.price.final }}
    </h3>
    <p class="origPrice">
      M.R.P.: <span class="strike">{{ products.price.mrp }}</span>
    </p>
    <p class="incl">Inclusive of all taxes</p>
    <AddBtn />
  </div>
  <div class="row" v-if="products">
    <div class="size">
      <label for="size">Size:</label>
      <select name="size" id="sizes" v-if="products.available">
        <option disabled value="">Please select one</option>
        <option
          v-for="(value, index) in products.available"
          :key="index"
          :id="index"
          v-on:change="onChange($event)"
        >
          {{ value.size }}
        </option>
      </select>
    </div>
    <!-- <div class="color" v-if="products.available">
      <label for="color">Color: {{ sizeAvailable.key() }} : "{{}}"</label>
      <select name="color" id="colors" v-if="products.available.sizeAvailable">
        <option
          v-for="(value, name, index) in products.available.sizeAvailable"
          :key="index"
          value="{{name}}"
        >
          {{ name }}
        </option>
      </select>
      <p v-else>{{ products.available.sizeAvailable }}</p>
    </div> -->
  </div>
  <!-- <div class="color">
    <label for="color">Color:</label>
    <div class="row">
      <div v-for="(n, index) in 12" :key="index" class="col-md-2">
        <div class="square">
          <div class="content outStock">
            <img
              src="https://freepngimg.com/thumb/shoes/27428-5-nike-shoes-transparent-background.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <div class="details">
    <h3>Product details :</h3>
    {{ products.desc }}
  </div>
</template>

<script>
import AddBtn from "./addCartBtn.vue";
export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    onChange: (e) => {
      var id = e.target.id;
      console.log("this is test");
      console.log(id);
    },
  },
  props: ["slug"],
  mounted() {
    fetch(" http://localhost:3000/shoes/" + this.slug)
      .then((res) => res.json())
      .then((data) => (this.products = data))
      .catch((err) => console.log(err));
  },
  name: "productDetails",
  components: {
    AddBtn,
  },
};
</script>

<style lang="scss" scoped>
p {
  margin: 0;
}
select {
  width: 100px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 5px;
  padding: 0 5px;
}
label {
  font-size: 16px;
  font-weight: bold;
  display: block;
}
.name {
  font-size: 22px;
  font-weight: bold;
  color: #131921;
}
.ratings {
  svg {
    color: #f08804;
  }
  span {
    margin-left: 15px;
    &:hover {
      color: #f08804;
    }
  }
}
.price {
  .finalPrice {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 0;
    margin-top: 15px;
    .disc {
      color: red;
      font-size: 22px;
      font-weight: normal;
    }
  }
  .origPrice {
    font-size: 12px;
    .strike {
      text-decoration: line-through;
      margin-left: 5px;
    }
  }
  .incl {
    font-size: 14px;
    font-weight: bold;
    color: #131921;
  }
}
.size,
.color {
  margin-bottom: 10px;
}
.square {
  position: relative;
  width: 100%;
  margin: calc(var(--bs-gutter-x) * 0.5) 0;
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  .content {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 5%;
    border: 1px solid rgba(0, 0, 0, 0.125);
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    img {
      max-width: 100%;
      min-height: 100%;
    }
  }
}
.outStock {
  border: 1px dashed rgba(0, 0, 0, 0.125) !important;
  &:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.5);
  }
}
.details {
  h3 {
    font-size: 16px;
    font-weight: bold;
    display: block;
  }
  p {
    font-size: 14px;
  }
}
</style>