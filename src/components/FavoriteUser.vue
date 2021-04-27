<template>
  <div>
    <br />
    <UserList :items="LikedItems || []" @selected="selectedRecord" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import UserList from "./UserList";
export default {
  el: "FavoriteUser",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["LikedItems"])
  },
  components: {
    UserList
  },
  mounted() {},
  methods: {
    selectedRecord(id) {
      this.$router.push({ name: "userDetail", params: { id } });
    }
  }
};
</script>
<style scoped>
.unclickable {
  opacity: 0.5;
}
.btn-div {
  display: flex;
  justify-content: space-between;
  padding-left: 100px;
  padding-right: 100px;
}
</style>
