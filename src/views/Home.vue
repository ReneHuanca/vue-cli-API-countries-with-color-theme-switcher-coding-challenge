<template>
  <div class="home container">
    <section class="row filter">
      <div class="col">
        <div class="filter__search-drawer">
          <input
            class="filter__search"
            :class="
              $store.state.darkTheme
                ? 'bg-dark'
                : 'bg-white filter__search-dark'
            "
            id="search"
            type="search"
            v-model="search"
            placeholder="Search for a country"
          />
          <i class="fa fa-search" 
            :class="
              $store.state.darkTheme
                ? 'text-white'
                : 'text-dark'
            "></i>
        </div>
      </div>

      <div class="col">
        <select
          class="filter__select"
          :class="
            $store.state.darkTheme
              ? 'bg-dark text-white'
              : 'bg-white text-dark'
          "
          name="selectFilter"
          id="selectFilter"
          v-model="region"
          @change="filterByRegion()"
        >
          <option value="all" selected>Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </section>
    <section class="grid_countries">
      <card
        class=""
        v-for="(country, index) in countries"
        :key="index"
        :country="country"
      />
    </section>
  </div>
</template>

<script>
import CountryService from "@/services/CountryService";
import Card from "@/components/Card.vue";

export default {
  name: "Home",

  components: {
    Card,
  },

  data() {
    return {
      search: "",
      loading: "",
      countries: [],
      region: "all",
    };
  },

  methods: {
    async loadCountries() {
      try {
        const response = await CountryService.getAll();
        this.countries = response.data;
      } catch (error) {
        console.log(error);
      }
    },

    async filterByRegion() {
      if (this.region == "all") {
        this.loadCountries();
        return null;
      }
      try {
        const response = await CountryService.filterByRegion(this.region);
        this.countries = response.data;
      } catch (error) {
        console.log(error);
      }
    },

    async searchCountry() {
      if (this.search.length == 0) {
        this.filterByRegion();
        return null;
      }
      if (this.region != 'all') {
        this.countries.filter(country => {
          return country.name.toLowerCase()
                .includes(this.search.toLowerCase())
        })
        return null;
      }
      try {
        const response = await CountryService.searchByName(this.search);
        console.log(this.region);
        this.countries = response.data;
      } catch (error) {
        this.loadCountries();
      }
    },
  },

  watch: {
    search: function(newValue, oldValue) {
      this.loading = "Buscando...";
      this.debounceSearch();
    },
  },

  created() {
    this.debounceSearch = _.debounce(this.searchCountry, 500);
  },

  mounted() {
    this.loadCountries();
  },
};
</script>

<style lang="scss">
.row {
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: column;
}
.col {
  width: 100%;
  @media (min-width: map-get($map: $breakPoints, $key: medium)) {
    width: 50%;
  }
}
.filter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  &__search,
  &__select {
    width: 100%;
    font-family: $font-text;
    font-size: 1.2em;
    border: none;
    box-shadow: 3px 4px 6px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    padding: 25px;
    outline: none;
    margin: auto;
    @media (min-width: map-get($map: $breakPoints, $key: medium)) {
      width: 300px;
    }
  }
  @media (min-width: map-get($map: $breakPoints, $key: medium)) {
    flex-direction: row;
  }

  &__search-drawer {
    position: relative;
    margin-bottom: 1.5em;
    @media (min-width: map-get($map: $breakPoints, $key: medium)) {
      margin-bottom: 0;
    }
  }
  &__search {
    padding-left: 70px;
  }
  &__search::-webkit-input-placeholder {
    color: $text-white;
  }
  &__search-dark::-webkit-input-placeholder {
    color: $text-dark;
  }
  .fa-search {
    position: absolute;
    top: 25px;
    left: 25px;
    font-size: 1.2em;
  }
  &__select {
    float: right;
    option {
      padding: 25px;
    }
  }
}

.grid_countries {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 5em;
}

</style>
