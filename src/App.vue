<template>
  <div 
    id="app" 
    :class="darkTheme ? 'bg-very-dark text-white' : 'bg-light text-dark'"
  >
    <MainNavigation />
    
    <router-view/>

    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MainNavigation from '@/components/MainNavigation'
import Footer from '@/components/Footer'

export default {
  components: { MainNavigation, Footer },
  computed: {
    ...mapState(['darkTheme']),
  },
}
</script>
