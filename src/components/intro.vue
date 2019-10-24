<template>
  <div class="form">
    <h1>{{title}}</h1>
    <section>
      <p>
        This is a collection of examples and use cases for developers that want to learn more about WCAG compliance and Web Accessibility.  Included are examples that reflect
        some best practices and common mistakes that I have found during my career in web development and implementations I have used for our clients.
      </p>
      <h2>What is Web Accessibility?</h2>
      <p>
        <strong>WCAG</strong> stands for <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">Web Content Accessibility Guidelines</a> and are an important part of web development.
        These standards are managed by the <strong>World Wide Web Consortium</strong> (or <strong>W3C</strong> for short). Their guidelines cover the best practices to follow to make sure that web content is accessible 
        to the greatest number of people.  The <strong>W3C</strong> have literally set the standard for the web accessibility.  Their website is the best place to learn the current standards! 
        All WCAG standards can fall into one of four categories:
      </p>
    </section>
    <section class="tabular">
    <ul class="ul-center">
      <li>
        <img src="/images/noun_Eye.svg" alt="">
        <span>
          <a href="https://www.w3.org/TR/2008/REC-WCAG20-20081211/#perceivable">Percievable</a>
        </span>
        <span>
          Users must be able to perceive the information being presented (it can't be invisible to all of their senses)
        </span>
      </li>
      <li>
        <img src="/images/noun_Operating Device.svg" alt="">
        <span>
          <a href="https://www.w3.org/TR/2008/REC-WCAG20-20081211/#operable">Operable</a>
        </span>
        <span>
          Users must be able to operate the interface (the interface cannot require interaction that a user cannot perform)
        </span>
      </li>
      <li>
        <img src="/images/noun_intelligence.svg" alt="">
        <span>
          <a href="https://www.w3.org/TR/2008/REC-WCAG20-20081211/#understandable">Understandable</a>
        </span>
        <span>
          Users must be able to understand the information as well as the operation of the user interface (the content or operation cannot be beyond their understanding)
        </span>
      </li>
      <li>
        <img src="/images/noun_devices.svg" alt="">
        <span>
          <a href="https://www.w3.org/TR/2008/REC-WCAG20-20081211/#robust">Robust</a>
        </span>
        <span>
          Users must be able to access the content as technologies advance (as technologies and user agents evolve, the content should remain accessible)
        </span>
      </li>
    </ul>
    </section>
    <section>
      <p>
        There are 3 levels of compliance for each of these categories: <strong>A, AA, AAA</strong>. Each of these levels has its own success criteria on how to meet each tier's
        minimum standard.  Each tier builds on the one below to make websites more accessible, but the higher the level the more restraining it becomes on design.
      </p>
      <p>
        While it can be difficult or impossible to meet the strictest criteria, one should always aim to make their site as accessible as possible so the greatest number of 
        people are able to use and access the content and information that is presented.  This is especially important for sites that cater to users with disabilities (healthcare), 
        or those that contain needed services (government, banking).
      </p>
    </section>
  </div>
</template>

<script>

export default {
  name: 'Intro',
  props:["title"],
  components: {

  },
  data() {
      return {
          
      }
  },
  mounted() {
    let inactive = document.querySelectorAll('.accordion:not(.active)');
      if(inactive){
        for (var i = 0; i < inactive.length; i++) {
          let kids = inactive[i].children;
          for (let j = 0; j < kids.length; j++) {
            kids[j].classList.add("hidden");
          }
        }
      }
  }
}
</script>

<style lang="scss">
section.tabular{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.ul-center{
  list-style-type:none;
  flex-direction: column;
  padding: 0;
  li{
    display: flex;
    @include small-screen{
      flex-direction: column;
    }
    &:not(:last-child){
      margin-bottom: 15px;
    }
    img{
      height: 3.5rem;
      margin-right: 1rem;
      flex: 0.5;
      @include small-screen{
        max-height: 4rem;
      }
    }
    span{
      text-align: left;
      margin: auto 15px auto 0;
      font-size: 1rem;
      flex: 1;
      @include small-screen{
        text-align: center;
      }
      & + span{
        text-align: left;
        flex: 6;
        @include small-screen{
          max-width: 100%;
          
        }
      }
    }
  }
}
</style>