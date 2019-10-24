<template>
  <fieldset class="accordion-container">
    <legend class="accordion-trigger preventScroll" role="button" tabindex="0">
      <h2>{{legend}}</h2>
    </legend>
    <div class="accordion">
      <slot></slot>
      <div class="search-group">
          <input id="site-search" type="search" required :placeholder="placeholder"/>
          <label for="site-search">
              search the site
          </label>
          <input type="submit" value=" " class="button" aria-label="site-search" />
      </div>
      <p>
        Visual indicators are often used when needing to alert a user to something.  Luckily many browsers
        have built in functionality to help communicate to the user when using standard HTML form elements.  It is still important that
        we don't just rely on color to communicate this, as some users are not able to percieve color the same way we do.
      </p>
      <section class="input-ex">
        <h3>BAD</h3>
        <input class="bad-err"  type="text">
        <button class="throw-error" v-on:click="throwErr">Submit</button>
      </section>
      <section class="input-ex">
        <h3>GOOD</h3>
        <img class="err-icon" src="/images/noun_Error.svg" alt="">
        <input class="good-err" type="text">
        <button class="throw-error" v-on:click="throwErr">Submit</button>
      </section>
    </div>
  </fieldset>
</template>

<script>

export default {
    name: 'SearchGroup',
    props:["legend", "placeholder"],
    components: {
        
    },
    methods:{
            throwErr: function(e){
        e.target.parentNode.classList.toggle("error");
      },
    },
    data() {
      return {
          
      }
  },
}
</script>

<style lang="scss">
section.input-ex{
  width: 50%;
  display: inline-block;
  position: relative;

  .err-icon{
    opacity: 0;
    max-height: 2rem;
    vertical-align: middle;
    
  }
  &.error{
    .err-icon{
      display: inline-block;
      opacity: 1;
    }
    input{
    border: solid 3px red;
    }
  }
}
</style>