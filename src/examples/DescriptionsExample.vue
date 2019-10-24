<template>
  <fieldset class="accordion-container">
    <legend class="accordion-trigger preventScroll" role="button" tabindex="0"><h2>{{legend}}</h2></legend>
    <div class="accordion">
      <img src="/images/graph.png" alt="a graph showing chicken over chicken">
      <br>
      <a href="https://isotropic.org/papers/chicken.pdf">More Chicken</a>
      <p>
        Sometimes there may be an image that is coveying a lot of information that would be difficult to summarize in an <strong>ALT</strong> tag.  In this case you have
        several options.  The most straight forward is including a link next to the image that describes it in more detail.
      </p>
      <p>
        You could create a link that is associated with the img using <a href="https://www.w3.org/TR/WCAG20-TECHS/ARIA1.html">ARIA-DESCRIBEDBY</a>
      </p>
      <pre><code class="language-markup"><script type="prism-html-markup">
        <img src="example.jpg" alt="a graph showing chicken in chicken. See description for more information" aria-describedby="desc">
        <a href="details.html" id="desc">Click here for more details</a>  
      </script></code></pre>
      <p>
        You can use the <a href="https://www.w3.org/TR/WCAG20-TECHS/H45.html">LONGDESC</a> attribute to similarly associate the image with it's text.  The <strong>LONGDESC</strong> should refer to the website or
        element that contains the description.
      </p>
      <pre><code class="language-markup"><script type="prism-html-markup">
        <img src="example.jpg" longdesc="details.html" alt="a graph showing chicken in chicken. See description for more information">
        <a href="details.html" id="desc">Click here for more details</a>    
      </script></code></pre>
      <p>
        These methods can be useful when wanting to hide a more information link visually, but still have it accessible for users that rely on keyboard navigation.
      </p>
    </div>
  </fieldset>
</template>

<script>
export default {
    name: 'Descriptions',
    props:["legend"],
    components: {
        
    },
    methods: {
      
    }
}
</script>

<style lang="scss">

</style>