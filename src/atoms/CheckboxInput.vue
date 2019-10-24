<template>
<label>
  <input type="checkbox">
  <span></span>
    {{labelText}}
</label>
</template>

<script>
export default {
    name: 'CheckInput',
    props:["labelText"],
}
</script>

<style lang="scss">
  

</style>