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
        // search(term = "", page = 1, rating = 1, under = Infinity, over = 0, shoeSize = null, disc = 0, sortBy = null, sortType = "ascending") {
        search(filter = {
            term: "",
            page: 1,
            rating: 1,
            under: Infinity,
            over: 0,
            shoeSize: null,
            disc: 0,
            sortBy: null,
            sortType: "ascending",
        }) {

            var filt = JSON.stringify(filter);
            console.log(filt)
            console.log(JSON.stringify(filter['page']))
            console.log("srch " + JSON.stringify(filter['term']) +
                " , page " + JSON.stringify(filter['page']) +
                " , rating " + JSON.stringify(filter['rating']) +
                " , under " + JSON.stringify(filter['under']) +
                " , over " + JSON.stringify(filter['over']) +
                " , shoeSize " + JSON.stringify(filter['shoeSize']) +
                " , disc " + JSON.stringify(filter['disc']) +
                " , sortBy " + JSON.stringify(filter['sortBy']) +
                " , sortType " + JSON.stringify(filter['sortType']))
            axios
                .post("http://localhost:8080/prods/get", {
                    srch: JSON.stringify(filter['term']),
                    page: JSON.stringify(filter['page']),
                    rating: JSON.stringify(filter['rating']),
                    under: JSON.stringify(filter['under']),
                    over: JSON.stringify(filter['over']),
                    shoeSize: JSON.stringify(filter['shoeSize']),
                    disc: JSON.stringify(filter['disc']),
                    sortBy: JSON.stringify(filter['sortBy']),
                    sortType: JSON.stringify(filter['sortType'])
                })
                .then((res) => ((this.products = res.data), (console.log(res))));
        },




        updateFilters(filt, val, filt2, val2) {
            // console.log("=============================");
            // console.log("child Comp before" + JSON.stringify(this.filters));
            // console.log("=============================");
            console.log("this is filter name: " + filt + " , " + filt2);
            this.filters[filt] = val;
            if (filt2 && val2) {
                this.filters[filt2] = val2;
            }
            // console.log("=============================");
            // console.log("child Comp" + JSON.stringify(this.filters));
            // console.log("=============================");
            this.search(this.filters);
        },
    },
    mounted() {
        // fetch("http://localhost:8080/prods")
        //     .then((res) => res.json())
        //     .then(
        //         (data) => (
        //             (this.products = data.products), (this.prods = data.products), console.log("Actual Data is : " + data), console.log("Products : " + data.products), console.log("Page No. is : " + data.pageCount)
        //         )
        //     )
        //     .catch((err) => console.log(err.message));
        this.search();
    },
}