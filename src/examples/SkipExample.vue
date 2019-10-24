<template>
  <fieldset class="accordion-container">
    <legend class="accordion-trigger preventScroll" role="button" tabindex="0"><h2>{{legend}}</h2></legend>
    <div class="accordion">
      <p>
        Flyout Menus, Mega Menus, Hamburger Menus...  There are many types of menus on the web and they consistently create problems for accessiblity.  With panels being shown,
        hidden, slid on and off screen it can quickly become a struggle to keep all of this organized so it still works correctly with keyboard navigation.  For starters, if you
        have a complicated menu with many links, you should have a <strong>Skip Content</strong> Button that is the first or second element on the page.  It can be hidden offscreen
        initially but if someone uses tab-navigation they will be met with an element that will skip them past all the links and get them to the main portion of content.
      </p>
      <header class="skipDemo">
        <a class="skipToMain" href="#mainContent">
          Skip to Main Content
        </a>
        <ul>
          <li><a href="#">Nav Item 1</a></li>
          <li><a href="#">Nav Item 2</a></li>
          <li><a href="#">Nav Item 3</a></li>
          <li><a href="#">Nav Item 4</a></li>
          <li><a href="#">Imagine if there were 50 of these... 😫</a></li>
          </ul>
      </header>
      <main id="mainContent">
        <img src="https://picsum.photos/id/1025/800/600" alt="A pug wrapped in a blanket, OMG so cute!">
        <a href="https://imgur.com/gallery/HPPVe9A">More awesome pictures of animals!</a>
      </main>
      <pre><code class="language-markup"><script type="prism-html-markup">
          --Hidden offscreen until it has focus--
          <a class="skipToMain" href="#main">Skip to Main Content</a>
          <nav>
            <ul>
              <li><a href="#">Nav Item 1</a></li>
              <li><a href="#">Nav Item 2</a></li>
              <li><a href="#">Nav Item 3</a></li>
              <li><a href="#">Nav Item 4</a></li>
              ...
            </ul>
          </nav>
          <main id="main"> --will recive focus when skip link is used--
            ...
          </main>
      </script></code></pre>
    </div>
  </fieldset>
</template>

<script>

export default {
    name: 'SkipNav',
    props:["legend"],
    components: {

    },
    methods:{
      
    }
}
</script>

<style lang="scss">
  .skipDemo{
    .skipToMain{
      position: absolute;
      left: 200vw;
      background-color: $base-red;
      color: $white;
      padding: 20px;
      margin: 20px;

      &:focus{
        position: relative;
        left: auto;
        display: inline-block;
      }
    }
    ul{
      display: flex;
      justify-content: center;
      li{
        border: solid 1px $base-red;
        padding: 15px;
        
      }
    }
  }
  #mainContent{
    display: flex;
    flex-direction: column;
    margin: auto;
    position: relative;
    margin-bottom: 50px;
    img{
      width: 100%;
    }
    a{
      margin: 50px;
      position: absolute;
      top: 50%;
      font-size: 4rem;
      color: $base-yellow;
      text-shadow: 5px 5px 12px $black;
    }
  }
</style>