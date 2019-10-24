<template>
  <fieldset id="color-contrast" class="accordion-container">
    <legend class="accordion-trigger preventScroll" role="button" tabindex="0"><h2>{{legend}}</h2></legend>
    <div class="accordion">
      <p>
        <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html">Color contrast</a> and visual indicators are also important things to 
        consider when building for the web.  Users with limited vision may rely on screen magnifiers or other tools to help them percieve content on a page.  
        Color contrast is the relative brightness between a lighter color and darker color within one element.  The <strong>W3C</strong>'s minimum standard
        is <strong>3:1</strong> ratio for large text and <strong>4.5:1</strong> ratio for small text.  Color blindness is a very common 
        disorder and should be considered when planning color palettes and designs.
      </p>
      <section>
        <button class="no-contrast">not enough contrast</button>
        <button class="lg-contrast">good enough for AA</button>
        <button class="sm-contrast">good enough for AAA</button>
      </section>
      <img class="img-ex" src="https://picsum.photos/id/488/300/300" alt="">
      <img class="img-ex" src="https://picsum.photos/id/1020/300/300" alt="">
      <img class="img-ex" src="https://picsum.photos/id/525/300/300" alt="">
      <p>
         <span class="desktop-only">🡄</span><span class="mobile-only">🡇</span> Use the buttons to simulate how these elements would look to someone with color blindness.
      </p>
      <section class="color-simulate">
        <button class="rg" v-on:click="color('protanopia')">Protanopia - Red/Green</button>
          <button class="rg" v-on:click="color('protanomaly')">Protanomaly - Red/Green</button>
          <button class="de" v-on:click="color('deuteranopia')">Deuteranopia - Red/Green</button>
          <button class="de" v-on:click="color('deuteranomaly')">Deuteranomaly - Red/Green</button>
          <button class="by" v-on:click="color('tritanopia')">Tritanopia - Blue/Yellow</button>
          <button class="by" v-on:click="color('tritanomaly')">Tritanomaly - Blue/Yellow</button>
          <button class="all" v-on:click="color('achromatopsia')">Achromatopsia - Color</button>
          <button class="all" v-on:click="color('achromatomaly')">Achromatomaly - Color</button>
          <button v-on:click="color()">Normal</button>
      </section>
    </div>
  </fieldset>
</template>

<script>

export default {
    name: 'Contrast',
    props:["legend"],
    components: {
        
    },
    methods: {
      color: function(color){
        let page = document.getElementById("color-contrast");
        page.classList = "accordion-container";
        document.getElementById("color-contrast").classList.add(color);
      }
    }
}
</script>

<style lang="scss">
#color-contrast{
  position: relative;
}
button{
  &.no-contrast{
    background-color: salmon;
    color: #07ff07;
  }
  &.lg-contrast{
    background-color: salmon;
    color: #196019;
  }
  &.sm-contrast{
    background-color: salmon;
    color: #013801;
  }
  &.rg{
    background-color: red;
    color: #39f839;
  }
  &.de{
    background-color: red;
    color: #8de78d;
  }
  &.by{
    color: #ebff00;
    background-color: #003dff;
  }
  &.all{
    background-color: #ff00f2;
    color: #337a75;
  }
}

input{
  height: 2rem;
  border: solid 3px black;
}
.active{
  .color-simulate{
    position: absolute;
    top: 15px;
    right: 102%;

    @include small-screen{
      position: initial;
    }
  }
}
</style>