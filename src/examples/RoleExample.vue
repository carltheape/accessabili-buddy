<template>
  <fieldset class="accordion-container">
    <legend class="accordion-trigger preventScroll" role="button" tabindex="0"><h2>{{legend}}</h2></legend>
    <div class="accordion">
      <p>
        <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles">Roles</a> are part of the <strong>ARIA</strong> (Accessible Rich Internet Application) specification from the <strong>W3C</strong> and were created to provide extra information to screen readers.
        <strong>ARIA</strong> , by design, has no effect on how elements are displayed or behave in browsers. It does not add new functionality and is meant to act only as an extra descriptive layer for screen readers.
        Some common examples of roles are:
      </p>
      <pre><code class="language-markup"><script type="prism-html-markup">
        --alert--
        <p role="alert" style="display: none;">The alert will trigger when the element becomes visible.</p>
        
        --button--
        <div class="red-button" role="button" tabindex="0">This div should look and act like a button</div>
        
        --dialog--
        <div role="dialog" aria-labelledby="dialog1Title" aria-describedby="dialog1Desc">
          <h2 id="dialog1Title">Your personal details were successfully updated</h2>
          <button>Close</button>
        </div>
      </script></code></pre>
      <p>
        There are many roles to be aware of and I highly reccommend looking over <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles">Mozilla's reference page</a> for more details!
      </p>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: 'RoleGroup',
  props:["legend"],
  mounted: function(){
      let self = this;
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