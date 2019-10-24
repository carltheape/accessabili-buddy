<template>
  <fieldset class="accordion-container">
    <legend class="accordion-trigger preventScroll active" role="button" tabindex="0">
      <h2>{{legend}}</h2>
    </legend>
    <div class="accordion active">
      <slot></slot>
      <ul>
        <li>
          <CheckInput :labelText="'check box 1'"></CheckInput>
        </li>
        <li>
          <CheckInput :labelText="'check box 2'"></CheckInput>
        </li>
        <li>
          <CheckInput :labelText="'check box 3'"></CheckInput>
        </li>
      </ul>
    </div>
  </fieldset>
</template>

<script>
import CheckInput from '../atoms/CheckboxInput.vue';
export default {
    name: 'CheckGroup',
    props:["legend"],
    components: {
        CheckInput,
    },
}
</script>

<style lang="scss">

</style>