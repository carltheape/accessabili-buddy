<template>
  <fieldset class="accordion-container">
    <legend class="accordion-trigger preventScroll active" role="button" tabindex="0"><h2>{{legend}}</h2></legend>
    <div class="accordion active">
      <p>
        The web is visual by design, but how do you accommodate users that may have impaired vision?  How does a developer communicate the content and purpose of images to 
        a user that needs more context?  The <a href="https://www.w3schools.com/tags/att_img_alt.asp">ALT</a> attribute should be included with any and all images that serve
        a function of communicating something to the user.  This can also help a user to understand context of the img if it is unable to be rendered for some reason.
      </p>
      <section class="img-section">
        <img class="img-ex" src="https://picsum.photos/id/1074/300/300" alt="A lioness' face">
        <img class="img-ex" src="https://picsum.photos/id/292/300/300" alt="Chopped vegetables with peppercorns">
        <img class="img-ex" src="https://picsum.photos/id/551/300/300" alt="A van driving on a desert road">
      </section>
      <section class="img-section">
        <img class="img-ex" src="https://picsum.photos/id/1074q/300/300" alt="A lioness' face">
        <img class="img-ex" src="https://picsum.photos/id/292q/300/300" alt="Chopped vegetables and peppercorns on a cutting board">
        <img class="img-ex" src="https://picsum.photos/id/551q/300/300" alt="A van driving on a desert road">
      </section>
      <p>
        One exception to this rule is when the purpose of the image is implied or redundant, like an icon in a search field.
      </p>
      <section class="input-section">
        <label for="site-search">Site Search</label>
        <input id="site-search" type="text"/>
        <img src="/images/icon-search-blue.svg" alt="" tabindex="0" role="button" title="submit search">
      </section>
    </div>
  </fieldset>
</template>

<script>
export default {
    name: 'AltTags',
    props:["legend"],
    components: {
    },
}
</script>

<style lang="scss">
.img-section{
  display: flex;
  justify-content: space-around;  
  .img-ex{
    max-width: 25%;
  }
}
.input-section{
  img{
    vertical-align: middle;
    margin-right: -15px;
  }
}
</style>