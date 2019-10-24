<template>
  <fieldset class="accordion-container">
    <legend class="accordion-trigger preventScroll" role="button" tabindex="0">
      <h2>{{legend}}</h2>
    </legend>
    <div class="accordion">
      <slot></slot>
      <ul>
        <li>
          <RadioInput :name="groupName" :labelText="'radio 1'"></RadioInput>
        </li>
        <li>
          <RadioInput :name="groupName" :labelText="'radio 2'"></RadioInput>
        </li>
        <li>
          <RadioInput :name="groupName" :labelText="'radio 3'"></RadioInput>
        </li>
      </ul>
    </div>
  </fieldset>
</template>

<script>
import RadioInput from '../atoms/RadioInput.vue';
export default {
    name: 'RadioGroup',
    props:["groupName", "legend"],
    components: {
        RadioInput,
    },
    data() {
      return {
          
      }
  },
}
</script>

<style lang="scss">

</style>