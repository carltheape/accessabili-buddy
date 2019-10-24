<template>
  <div class="form">
    <h1>{{title}}</h1>
    <CheckGroup :legend="'CHECK BOXES'">
      <p>
        It is important that when applying custom styles or using html elements to look like others, that any expected behavior remains intact. Typically the <strong>SPACEBAR</strong> and/or <strong>ENTER</strong>
        keys are the main way a keyboard user will interact with elements on a page.
      </p>
    </CheckGroup>
    <RadioGroup :legend="'RADIO BUTTONS'" :groupName="'group 1'">
    <p>Here we can use the arrow keys to switch between options.  This is a default behaviour and should be mimicked if not using standard <strong>RADIO INPUTS</strong></p>
    </RadioGroup>
    <SearchGroup :legend="'INPUT FIELDS'" :placeholder="'placeholder is not enough'">
      <p>
        When using input fields, a label of some kind should be visible at all times.  Users need to be able to know what information is needed in an input, even if text is in the field.
      </p>
    </SearchGroup>
  </div>
</template>

<script>
import CheckGroup from '../examples/CheckGroupExample.vue';
import RadioGroup from '../examples/RadioGroupExample.vue';
import SearchGroup from '../examples/SearchExample.vue';

export default {
  name: 'Form',
  props:["title"],
  components: {
    CheckGroup,
    RadioGroup,
    SearchGroup
  },
  methods: {

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