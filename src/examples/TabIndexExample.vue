<template>
  <fieldset class="accordion-container">
    <legend class="accordion-trigger preventScroll" role="button" tabindex="0"><h2>{{legend}}</h2></legend>
    <div class="accordion">
      <p>
        It might seem like common sense, but typically you want a user to be able to navigate a page the same way they would read.  For starters you always want to set the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang">language</a>
        of the page and each section that would differ from that language.  Then you want to make sure that things follow a proper flow for tab navigation.  For English sites you want
        a user to be able to navigate from left to right, top to bottom in a logical order.  This is where <strong>TAB INDEX</strong> can come in.  The <strong>TAB INDEX</strong> of an
        element determines the order in which it will be navigated to. Any html element can have a tab index applied, but you should only do so if you need a user to be able to 
        navigate to the element and they wouldn't normally be able to do so. A tabindex of greater than "0" will override the default flow in numerical order (this should be avoided unless used for
        a specific reason).
      </p>
<pre><code class="language-markup"><script type="prism-html-markup">
<button tabindex="-1">You will be unable to navigate to this</button>
<button tabindex="0">This will fall into the default order</button>
<button tabindex="1 or greater">these will come last in order</button>
</script></code></pre>

      <button tabindex="-1">tab index -1</button>
      <button tabindex="2">tab index 2</button>
      <button tabindex="1">tab index 1</button>
      <button tabindex="0">tab index 0</button>
    </div>
  </fieldset>
</template>

<script>
export default {
    name: 'TabGroup',
    props:["legend"],
    mounted: function(){
      let self = this;
      window.Prism.highlightAll();
    },
    components: {

    },
    data() {
      return {
          
      }
  },
}
</script>

<style lang="scss">

</style>