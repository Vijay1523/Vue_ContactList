<template>
  <div>
    <b-container>
      <Loader v-if="loading" />
      <div v-else>
        <b-img
          :src="UserDetail.avatar"
          v-bind="mainProps"
          rounded="circle"
          alt="Circle image"
        ></b-img>
        <b-form>
          <b-form-group
            id="firstName"
            label="First Name:"
            label-for="firstName"
          >
            <b-form-input
              id="firstName"
              placeholder="Enter First Name"
              :value="UserDetail.first_name"
              disabled
            >
            </b-form-input>
          </b-form-group>
          <b-form-group id="lastName" label="Last Name:" label-for="lastName">
            <b-form-input
              id="lastName"
              placeholder="Enter Last Name"
              :value="UserDetail.last_name"
              disabled
            >
            </b-form-input>
          </b-form-group>
          <b-form-group id="email" label="Email " label-for="email">
            <b-form-input
              id="email"
              :value="UserDetail.email"
              type="email"
              disabled
            ></b-form-input>
          </b-form-group>
          <b-button variant="danger" @click="$router.go(-1)">Back</b-button>
        </b-form>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Loader from "./common/Loader";

export default {
  name: "UserDetail",
  data() {
    return {
      mainProps: {
        width: 200,
        height: 180,
        class: "m1"
      },
      loading: false
    };
  },
  async mounted() {
    if (this.$route.params.id) {
      this.loading = true;
      await this.getItemById(this.$route.params.id);
      this.loading = false;

      if (!this.UserDetail) {
        this.$router.push({ name: "user" });
      }
    }
  },
  computed: {
    ...mapGetters(["UserDetail"])
  },
  methods: {
    ...mapActions(["getItemById", "setUserLike"])
  },
  components: {
    Loader
  }
};
</script>

<style scoped>
form {
  margin-top: 50px;
}
.container {
  padding: 60px 100px 100px 100px;
}
img {
  margin-left: 370px;
}
</style>
