<template>
<label>
  <input type="radio" :name="name">
  <span></span>
    {{labelText}}
</label>
</template>

<script>
export default {
  name: 'RadioInput',
  props:["labelText", "name"],
}
</script>

<style lang="scss">

</style>