import axios from "axios";
export default {
  data() {
    return {
      products: [],
      prods: [],
      filters: {
        term: "",
        page: 1,
        rating: 1,
        under: Infinity,
        over: 0,
        shoeSize: null,
        disc: 0,
        sortBy: null,
        sortType: "ascending",
        // review: 0,
        // under: 0,
        // over: 9999999999999999,
        // size: 0,
        // disc: 0,
      },
    };
  },

  methods: {
    search(
      filter = {
        term: "",
        page: 1,
        rating: 1,
        under: Infinity,
        over: 0,
        shoeSize: null,
        disc: 0,
        sortBy: null,
        sortType: "ascending",
      }
    ) {
      axios
        .post("http://localhost:8080/prods/get", {
          srch: JSON.stringify(filter["term"]),
          page: JSON.stringify(filter["page"]),
          rating: JSON.stringify(filter["rating"]),
          under: JSON.stringify(filter["under"]),
          over: JSON.stringify(filter["over"]),
          shoeSize: JSON.stringify(filter["shoeSize"]),
          disc: JSON.stringify(filter["disc"]),
          sortBy: JSON.stringify(filter["sortBy"]),
          sortType: JSON.stringify(filter["sortType"]),
        })
        .then((res) => ((this.products = res.data), console.log(res)));
    },

    updateFilters(filt, val, filt2, val2) {
      console.log("this is filter name: " + filt + " , " + filt2);
      this.filters[filt] = val;
      if (filt2 && val2) {
        this.filters[filt2] = val2;
      }
      this.search(this.filters);
    },
  },
  mounted() {
    this.search();
  },
};
