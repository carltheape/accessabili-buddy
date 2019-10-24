<template>
  <fieldset class="accordion-container">
    <legend class="accordion-trigger preventScroll" role="button" tabindex="0"><h2>{{legend}}</h2></legend>
    <div class="accordion">
      <p>
        Meta tags provide additional information about the html that can be used by browsers and search engines.  By including the correct metadata, we can tell the browser how to render the 
        content inside it and keep it more consistent across different devices.  Every web page should include the meta tag below for consistency.
      </p>
      <pre><code class="language-markup"><script type="prism-html-markup">
          <meta name="viewport" content="width=device-width,initial-scale=1.0">
      </script></code></pre>
      <p>
        <strong>width=device-width</strong> sets the width of the page to follow the screen-width of the device (which will vary depending on the device).
       <strong>initial-scale=1.0</strong> sets the initial zoom level when the page is first loaded by the browser.
      </p>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: 'MetaTag',
  props:["legend"],
  mounted: function(){
    
  },
  methods:{
    
  }
}
</script>

<style lang="scss">

</style>