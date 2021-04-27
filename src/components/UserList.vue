<template>
  <div>
    <div class="list-width">
      <b-row class="title-container">
        <div class="title-content">No. of Records : {{ userData.length }}</div>
        <div>
          <b-dropdown
            id="sorting"
            name="sorting"
            v-model="sorting"
            :text="sorting"
            variant="primary"
            class="m-md-2"
          >
            <b-dropdown-item disabled value="0">Select an Item</b-dropdown-item>
            <b-dropdown-item
              v-for="option in sortingOptions"
              :key="option.name"
              :value="option.name"
              @click="setSorting(option.name)"
            >
              {{ option.name }}
            </b-dropdown-item>
          </b-dropdown>
        </div>
      </b-row>
      <div v-if="!loading">
        <b-card v-for="item in userData" :key="item.id">
          <b-row no-gutters>
            <b-col md="2">
              <b-img
                v-bind="imgProps"
                :src="item.avatar"
                rounded="circle"
                alt="Circle image"
              ></b-img>
            </b-col>
            <b-col md="10">
              <b-card-body>
                <b-card-text>
                  <b-row>
                    <div>
                      <strong
                        >{{ item.first_name }} {{ item.last_name }}</strong
                      >
                    </div>
                    <div>
                      <b-button
                        size="sm"
                        class="btn-like"
                        title="Favorite"
                        pill
                        :pressed.sync="item.isLiked"
                        variant="link"
                      >
                        <b-icon
                          font-scale="1"
                          icon="bookmark-heart-fill"
                          aria-hidden="true"
                          v-if="item.isLiked"
                        ></b-icon>
                        <b-icon
                          font-scale="1"
                          icon="bookmark-heart"
                          aria-hidden="true"
                          v-else
                        ></b-icon>
                      </b-button>
                      <b-button
                        size="sm"
                        title="Detail Page"
                        variant="link"
                        @click="selectedRecord(item.id)"
                      >
                        <b-icon
                          font-scale="1"
                          icon="arrow-right-circle"
                          aria-hidden="true"
                        ></b-icon>
                      </b-button>
                    </div>
                  </b-row>
                  <b-row>{{ item.email }}</b-row>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
      <Loader v-else />
      <b-pagination
        v-if="isPagination"
        v-model="currentIndex"
        :per-page="perPage"
        :total-rows="rows"
        @input="changePageSelection"
        :disabled="loading"
        size="sm"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
import Loader from "./common/Loader";
export default {
  name: "UserList",
  props: {
    items: {
      type: Array,
      default: () => []
    },
    loading: Boolean,
    isPagination: {
      type: Boolean,
      default: false
    },
    rows: {
      type: Number,
      default: 1
    },
    perPage: {
      type: Number,
      default: 6
    },
    currentPage: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      imgProps: { width: 60, height: 60, class: "m1" },
      myToggle: false,
      sorting: "A-Z",
      sortingOptions: [
        {
          name: "A-Z"
        },
        {
          name: "Z-A"
        }
      ],
      userData: [],
      currentIndex: this.currentPage
    };
  },
  methods: {
    selectedRecord(id) {
      this.$emit("selected", id);
    },
    changePageSelection() {
      this.$emit("loadData", this.currentIndex);
    },
    setSorting(option) {
      this.sorting = option;
      if (option === "Z-A") {
        this.userData = this.items.sort((a, b) =>
          b.first_name.localeCompare(a.first_name)
        );
      } else {
        this.userData = this.items.sort((a, b) =>
          a.first_name.localeCompare(b.first_name)
        );
      }
    }
  },
  components: {
    Loader
  },
  watch: {
    items: {
      immediate: true,
      handler(val, oldVal) {
        this.userData = val;
      }
    }
  }
};
</script>

<style scoped>
.list-width {
  padding-left: 400px;
  padding-right: 400px;
}
.row {
  margin-left: 0px;
}
.rounded-0 {
  width: 40px;
  height: 40px;
}
.card-body {
  padding: 0.3rem;
}
.title-container {
  justify-content: space-between;
}
.title-content {
  margin-top: 20px;
}
.card:hover {
  cursor: pointer;
  background-color: #d2e6f7;
}
</style>
