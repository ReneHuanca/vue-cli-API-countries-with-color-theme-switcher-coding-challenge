<template>
    <div 
        class="nav" 
        :class="bgTheme"
    >
        <div class="nav__content container">
            <h1 :class="darkTheme ? 'text-white' : 'text-dark'">
                <router-link to="/" class="nav__tittle"
                :class="
                    darkTheme ? 'text-white' : 'text-dark'
                ">Where in the world?</router-link>
            </h1>
            <ToggleTheme />
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import ToggleTheme from "@/components/ToggleTheme";

export default {
  components: {
    ToggleTheme,
  },
  computed: {
    ...mapState(["darkTheme"]),
    bgTheme() {
        return this.darkTheme ? 'bg-dark' : 'bg-white';
    }
  },
};
</script>

<style lang="scss">
.nav {
    width: 100%;
    box-shadow: 3px 4px 6px rgba($color: #000000, $alpha: 0.05);
    margin-bottom: 2rem;

    &__content {
        height: 80px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__tittle {
        font-size: .9em;
        text-decoration: none;
    }
}
</style>
