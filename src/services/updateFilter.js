export default {

    data() {
        return {
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
    },
}