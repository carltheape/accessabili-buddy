<template>
  <div class="form">
    <h1>{{title}}</h1>
    <FocusGroup :legend="'FOCUS'"/>
    <ButtonGroup :legend="'HTML ELEMENTS'"/>
    <MetaTag :legend="'META TAGS'" />
    <RoleGroup :legend="'ROLES'"/>
    <Landmark :legend="'LANDMARKS'"/>
    <TabGroup :legend="'TAB INDEX'"/>
  </div>
</template>

<script>
import ButtonGroup from '../examples/ButtonExample.vue';
import FocusGroup from '../examples/FocusExample.vue';
import RoleGroup from '../examples/RoleExample.vue';
import TabGroup from '../examples/TabIndexExample.vue';
import MetaTag from '../examples/MetatagExample.vue';
import Landmark from '../examples/LandmarkExample.vue';


export default {
  name: 'Basics',
  props:["title"],
  components: {
    ButtonGroup,
    FocusGroup,
    RoleGroup,
    TabGroup,
    MetaTag,
    Landmark
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