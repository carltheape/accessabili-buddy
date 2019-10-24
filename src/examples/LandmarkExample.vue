<template>
  <fieldset class="accordion-container">
    <legend class="accordion-trigger preventScroll" role="button" tabindex="0"><h2>{{legend}}</h2></legend>
    <div class="accordion">
      <p>
        One example of a common <strong>ARIA</strong> role is the <a href="https://www.w3.org/TR/WCAG20-TECHS/ARIA11.html">landmark</a>.  Landmarks help to identify regions of
        a page and assist a user in their navigation and are important when discussing <a href="https://www.w3schools.com/html/html5_semantic_elements.asp">semantic markup</a>.  Everything that is visible that exists on a webpage should be inside some sort of landmark to help users of 
        screen readers know where on a page they are, and what functionality this area serves. Ideally we would use the intended semantic element to organize the page, but when using non-specific elements like &lt;div> and &lt;span> tags. Common landmarks include:
      </p>
      <pre><code class="language-markup"><script type="prism-html-markup">
          --banner--
          <div id="header" role="banner">A banner image and introductory title</div>

          --search--
          <div id="sitelookup" role="search"></div>

          --navigation--
          <div id="nav" role="navigation">...a list of links here ... </div>

          --main--
          <div id="content" role="main"> ... Ottawa is the capital of Canada ...</div>

          --complementary--
          <div id="rightsideadvert" role="complementary">....an advertisement here...</div>

          --contentinfo--
          <div id="footer" role="contentinfo">The Freedom Company, 123 Freedom Way, Helpville, USA</div>
      </script></code></pre>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: 'Landmark',
  props:["legend"],
  mounted: function(){
      
    },
  components: {
      
  },
  data() {
    return{
      
    }
  }
}
</script>

<style lang="scss">

</style>