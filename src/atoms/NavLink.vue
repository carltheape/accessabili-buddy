<template>
<a class="nav-link" href="" v-on:click="onClickButton">{{linkText}}</a>
</template>

<script>
export default {
  name: 'NavLink',
  props:["linkText"],
  methods:{
    onClickButton: function(e){
      let self = this;
      e.preventDefault();
       let nav = Array.prototype.slice.call(document.getElementsByClassName('side-nav')[0].childNodes, 0);
      // console.log(main);
       nav.forEach(function(el, i) {
         if(el === e.target){
            self.$emit('clicked', i)
          }
       });
    }
  }
}
</script>

<style lang="scss">
  .nav-link{
    display: block;
    padding: 15px;
    &:not(:last-child){
      border-bottom: solid 1px $grey-md;
    }
  }
</style>