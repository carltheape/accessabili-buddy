<template>
  <fieldset class="accordion-container">
    <legend class="accordion-trigger preventScroll active" role="button" tabindex="0"><h2>{{legend}}</h2></legend>
    <div class="accordion active">
      <p>
        Focus styling is a must!  It may be tempting to remove the outline from elements when they are focused because it can conflict with designs.  It is generally reccommended
        that developers keep the default focus styling but if it is removed it is <strong><u>IMPERATIVE</u></strong> that a replacement style be setup in its place!  It would be impossible
        for keyboard users to otherwise know where on the page they are navigating. Use the <strong>TAB</strong> key to navigate the elements below. Without focus styling you have
        no way to know which element you are on.
      </p>
      <button class="no-focus">no focus here</button>
      <button class="no-focus">how bout here?</button>
      <button class="no-focus">none here</button>
      <button class="no-focus">nope</button>
      <button class="no-focus">frustrating isn't it?</button>
    </div>
  </fieldset>
</template>

<script>

export default {
    name: 'FocusGroup',
    props:["legend"],
    components: {
        
    },
}
</script>

<style lang="scss">

</style>