<template>
    <div class="theme">
        <label class="theme__label" for="themeCheckbox">
            <i class="fa fa-moon"></i>
            {{ textDarkTheme }}
        </label>
        <input 
            type="checkbox"
            id="themeCheckbox"
            class="theme__checkbox"
            v-model="darkTheme"
        />
    </div>
</template>

<script>
export default {
    computed: {
        darkTheme: {
            get() {
                return this.$store.state.darkTheme;
            },
            set(value) {
                this.$store.commit('SET_DARK_THEME', value);
            }
        },
        textDarkTheme() {
            return this.darkTheme ? 'Light mode' : 'Dark mode';
        }
    },
}
</script>

<style lang="scss">
    .theme {
        &__label {
            cursor: pointer;
        }
        &__checkbox {
            display: none;
        }
    }
</style>