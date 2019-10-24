<template>
  <fieldset class="accordion-container">
    <legend class="accordion-trigger preventScroll" role="button" tabindex="0"><h2>{{legend}}</h2></legend>
    <div class="accordion">
      <p>
        Whenever possible you should use html elements as intended.  It may be tempting to style a <strong>DIV</strong> to look and act like a button when clicked,
        but the <strong>BUTTON</strong> element has built in functionality for keyboard users which might be overlooked. This is true for any html element the user could interact with.
        When in doubt, <strong><u>KEEP IT SIMPLE</u></strong>. Here you can see examples of some custom styling on html elements to resemble buttons, yet the user is still able to use standard 
        keyboard interactions to use them and their styles reflect this.  If you do need to style one element to look like another make sure to set its <strong>ROLE</strong>
        and <strong>TAB-INDEX</strong>!
      </p>
    <ul>
      <li>
        <button class="preventScroll">Button</button>
      </li>
      <li>
        <div class="button preventScroll" role="button" tabindex="0">Div</div>
      </li>
      <li>
        <span class="button preventScroll" role="button" tabindex="0">Span</span>
      </li>
    </ul> 
    </div>
  </fieldset>
</template>

<script>
export default {
  name: 'ButtonGroup',
  props:["legend"],
  mounted: function(){
    let self = this;
    self.spaceNav();
  },
  methods:{
    spaceNav: function(){
      let self = this;
      let buttons = Array.prototype.slice.call(document.querySelectorAll('.button'), 0);
      buttons.forEach(function(btn){
          btn.tabIndex = 0;
          btn.setAttribute("role", "button");
          btn.addEventListener("keydown", function(ev) {
              if ((ev.keyCode === 13) || (ev.keyCode === 32)) {
            btn.classList.add("key-active");
          }
            });
            btn.addEventListener("keyup", function(ev) {
              if ((ev.keyCode === 13) || (ev.keyCode === 32)) {
            btn.classList.remove("key-active");
          }
            });
      });
    },
  }
}
</script>

<style lang="scss">

</style>