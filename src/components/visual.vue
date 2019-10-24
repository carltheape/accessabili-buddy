<template>
  <div class="form">
    <h1>{{title}}</h1>
    <AltTags :legend="'ALT TAGS'"/>
    <Descriptions :legend="'DESCRIPTIONS'"/>
    <Contrast :legend="'CONTRAST'"/>
  </div>
</template>

<script>
import AltTags from '../examples/AltTagExample.vue';
import Descriptions from '../examples/DescriptionsExample.vue';
import Contrast from '../examples/ContrastExample.vue';

export default {
  name: 'Visual',
  props:["title"],
  components: {
    AltTags,
    Descriptions,
    Contrast,
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
.no-focus{
  &:focus{
    outline:none;
    filter: brightness(100%);
  }
}
</style>