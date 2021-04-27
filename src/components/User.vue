<template>
  <div>
    <UserList
      :items="Items || []"
      :loading="Loading"
      :rows="TotalItems"
      :perPage="perPageRecord"
      @loadData="loadData"
      @selected="selectedRecord"
      is-pagination
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import UserList from "./UserList";

export default {
  name: "User",
  data() {
    return {
      perPageRecord: 6
    };
  },
  computed: {
    ...mapGetters(["Items", "Loading", "TotalItems"])
  },
  components: {
    UserList
  },
  mounted() {
    if (!this.Items.length) {
      this.getItems(this.currentPage);
    }
  },
  methods: {
    ...mapActions(["getItems"]),
    loadData(currentPage) {
      if (this.Items.length === this.TotalItems) return;
      this.getItems(currentPage);
    },
    selectedRecord(id) {
      this.$router.push({ name: "userDetail", params: { id } });
    }
  }
};
</script>
