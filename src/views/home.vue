<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <Filter :filereProds="filereProds" :search="search" />
      </div>
      <div class="col-md-9">
        <div class="row">
          <Card :products="products" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/card.vue";
import Filter from "../components/filter.vue";
export default {
  name: "Home",
  components: {
    Card,
    Filter,
  },
  data() {
    return {
      products: [],
      prods: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/shoes")
      .then((res) => res.json())
      .then((data) => ((this.products = data), (this.prods = data)))
      .catch((err) => console.log(err.message));
  },
  methods: {
    search(term) {
      this.products = this.prods;
      this.products = this.products.filter((prod) => {
        return prod.title.includes(term);
      });
    },
    filereProds(filter) {
      // console.log("=============================");
      // console.log("parent Comp" + JSON.stringify(filter));
      // console.log("=============================");
      this.products = this.products.filter((prod = true) => {
        var rat = prod.ratings.rate;
        var rev = JSON.stringify(filter["review"]);
        var price = prod.price.final;
        var under = JSON.stringify(filter["under"]);
        var over = JSON.stringify(filter["over"]);
        if (over === null) {
          console.log("This is just a null value");
        }
        // var size = prod.available.length;
        // var siz = JSON.stringify(filter["size"]);
        var disc = prod.price.disc;
        var dis = JSON.stringify(filter["disc"]);
        // console.log("=============================");
        // console.log("Prod Rating" + rat);
        // console.log("Prod price" + price);
        // console.log("Prod Size" + size);
        // console.log("Prod disc" + disc);
        // console.log("=============================");
        // console.log("review rate" + rev);
        // console.log("under" + under);
        // console.log("over" + over);
        // console.log("obj size" + siz);
        // console.log("obj disc" + dis);
        if (rat >= rev && price >= under && price <= over && disc >= dis) {
          // console.log("inside if loop");
          // console.log("=============================");
          prod = true;
          // if (siz >= 1) {
          //   for (var i = 0; i < size; i++) {
          //     if (prod.available[i].size == siz) {
          //       for (var j in prod.available[i].color) {
          //         if (prod.available[i].color[j] != 0) {
          //           prod = true;
          //           break;
          //         } else {
          //           prod = false;
          //         }
          //       }
          //     } else {
          //       prod = false;
          //     }
          //   }
          // }
        } else {
          // console.log("outside if loop");
          // console.log("=============================");
          prod = false;
        }
        return prod;
      });
    },
  },
};
</script>

<style scoped>
</style>