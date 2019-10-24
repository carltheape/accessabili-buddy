<template>
  <div class="form">
    <h1>{{title}}</h1>
    <Modals :legend="'Modals'"/>
    <SkipNav :legend="'Skip Navigation'"/>
  </div>
</template>

<script>
import Modals from '../examples/ModalsExample.vue'
import SkipNav from '../examples/SkipExample.vue'

export default {
  name: 'Components-Example',
  props:["title"],
  components: {
    Modals,
    SkipNav,
  },
  data() {
      return {
          
      }
  },
  mounted() {
      let inactive = document.querySelectorAll('.accordion:not(.active)');
      if(inactive){
        for (var i = 0; i < inactive.length; i++) {
          let kids = inactive[i].children;
          for (let j = 0; j < kids.length; j++) {
            kids[j].classList.add("hidden");
          }
        }
      }
  }
}
</script>

<style lang="scss">

</style>