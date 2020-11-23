<template>
    <article 
        class="card" 
        :class=" 
            $store.state.darkTheme 
                ? 'bg-dark' 
                : 'bg-white'
        "
    >
        <img 
            class="card__img"
            :src="country.flag" 
            :alt="`countries - ${ country.name }`"
        >
        <div class="card__body">
            <h2 class="card__title">{{ country.name }}</h2>
            <ul class="card__content">
                <li><b>Population:</b> {{ country.population }}</li>
                <li><b>Region:</b> {{ country.region }}</li>
                <li><b>Capital:</b> {{ country.capital }}</li>
            </ul>
        </div>
    </article>
</template>

<script>
export default {
    props: {
        country: Object
    }
}
</script>

<style lang="scss">
    .card {
        // max-width: 250px;
        width: 100%;
        box-shadow: 3px 4px 6px rgba(0,0,0,0.05);
        border-radius: 5px;
        // margin-bottom: 2rem;
        margin: 0 auto;
        &__img {
            object-fit: cover;
            width: 100%;
            height: 150px;
            border-radius: 5px 5px 0px 0px;
            display: block;
        }
        &__body {
            padding: 25px;
        }
        &__title, &__content {
            margin-bottom: 15px;
        }
        &__title {
            font-size: 20px;
        }
        &__content {
            list-style-type: none;
        }
    }
</style>