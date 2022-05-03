import axios from "axios";

export default {
  data() {
    return {
      name: "Sign In",
      url: "SignIn",
      active: false,
      response: {},
      email: "",
      password: "",
    };
  },

  methods: {
    async getUserDetails(func) {
      const response = await axios.get("prods/user");
      this.response = response.data;
      // here I am using callback function
      func();
    },

    // Populate details
    populateUserDetails(response) {
      this.name = response.name;
      this.url = "Account";
      this.active = true;
      console.log(
        "I am in this.populateUserDetails: ",
        this.name,
        this.url,
        this.active
      );
    },

    // Remove Detials
    removeUserDetails() {
      this.name = "Sign In";
      this.url = "SignIn";
      this.active = false;
      localStorage.setItem("token", "");
    },

    // Logout
    async logout() {
      await axios.get("prods/logout");
      this.removeUserDetails();
      this.$notify({
        title: "Logout Successful",
        text: `You have been successfully Logged out`,
        type: "error",
      });
    },

    handleSubmit() {
      const data = {
        email: this.email,
        password: this.password,
      };
      console.log("Submitted data", data);
      axios.post("prods/login", data).then((res) => {
        console.log("Name", res.data);
        const nameAcc = res.data.name;
        localStorage.setItem("token", res.data.token);
        this.populateUserDetails(res.data);
        this.$notify({
          title: "Login Successful",
          text: `Welcome ${nameAcc}`,
        });
        this.$router.push({ name: "Home" });
      });
    },
  },
};
