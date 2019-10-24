 <template>
<div class="content" @click="accordionToggle">
  <nav class="side-nav" v-if="!ie">
    <!-- make sure that each nav link has the same index as the content you want to display -->
    <NavLink :linkText="'Introduction'" @clicked="navContent"/>
    <NavLink :linkText="'Basics'" @clicked="navContent"/> 
    <NavLink :linkText="'Visualization'" @clicked="navContent"/> 
    <NavLink :linkText="'Forms'" @clicked="navContent"/>
    <NavLink :linkText="'Components'" @clicked="navContent"/>
    <NavLink :linkText="'Todo Mobile'" @clicked="navContent"/>
    <NavLink :linkText="'Todo Live Examples'" @clicked="navContent"/>
    <NavLink :linkText="'Helpful Links'" @clicked="navContent"/>
  </nav>
  <main v-if="!ie">
    <Intro v-if="currentPage === 0" :title="'Introduction'"/>
    <Basics v-if="currentPage === 1" :title="'Basic Overview'"/>
    <Visual v-if="currentPage === 2" :title="'Visualization'"/>
    <Form v-if="currentPage === 3" :title="'Forms'"/>
    <Comp v-if="currentPage === 4" :title="'Components'"/>
    <HelpfulLinks v-if="currentPage === 7" :title="'Helpful Links'"/>
  </main>
  <main v-if="ie">
    <p>
      This is built on modern web technology.  Please use a modern browser like chrome or firefox.
    </p>
  </main>
</div>
</template>

<script>
import Intro from './components/intro.vue'
import Basics from './components/basics.vue'
import Visual from './components/visual.vue'
import Form from './components/form.vue'
import NavLink from './atoms/NavLink.vue'
import Comp from './components/components.vue'
import HelpfulLinks from './components/helpful-links.vue'




export default {
  name: 'app',
  components: {
    Form,
    NavLink,
    Basics,
    Intro,
    Visual,
    HelpfulLinks,
    Comp
  },
  data() {
      return {
          currentPage: 0,
          ie: false,
      }
  },
  methods:{
    /* eslint-disable */
    ieTest(){
      console.log("test for ie");
      var ua = window.navigator.userAgent;
      var isIE = /MSIE|Trident/.test(ua);

      if ( isIE ) {
        this.ie = true;
      }
    },
    navContent (value) {
      let self = this;
      self.currentPage = value;
    },
    accordionToggle(e){
      if (e.target.closest('.accordion-trigger')) { //if element has a parent with trigger
        let trigger = (e.target.closest('.accordion-trigger'));
        let activeBtn = document.querySelectorAll('.accordion-container:not(.keep-open) .accordion-trigger.active');
        let activeAcc = document.querySelectorAll('.accordion-container:not(.keep-open) .accordion.active');
        if (trigger.classList.contains('active')) {//if accordion is active, close it and hide children from tab navigation
            trigger.classList.remove("active");
            trigger.nextElementSibling.style.height = "0px";
            trigger.nextElementSibling.classList.remove("active");
            let kids = trigger.nextElementSibling.children;
            for (var i = 0; i < kids.length; i++) {
              kids[i].classList.add("hidden");
            } 
        }
        else {
            if (activeBtn.length > 0) { //deacticate all other open accordion triggers
                activeBtn[0].classList.remove("active");
            }
            if (activeAcc.length > 0) {//and accordions
                activeAcc[0].style.height = "0px";
                activeAcc[0].classList.remove("active");
            }
            let kids = trigger.nextElementSibling.children;//and children
            for (var i = 0; i < kids.length; i++) {
              kids[i].classList.remove("hidden");
            } 
            trigger.classList.add("active");//and activate the one that was clicked
            let ht = trigger.nextElementSibling.scrollHeight;
            trigger.nextElementSibling.style.height = `${ht}px`;
            trigger.nextElementSibling.classList.add("active");
        }
      }
    }
  },
  updated: function () {
    window.Prism.highlightAll();
  },
  mounted:function() {
    this.ieTest();
    //event listener for keyboard interaction on accordions
    document.body.onkeyup = function (e) {
      //if in a link group when pressing space or enter
      if ((e.keyCode === 32 || e.keyCode === 13) && (document.activeElement.classList.contains("accordion-trigger"))) {
        let group = document.activeElement.closest('.accordion-group');
        let activeBtn = document.querySelectorAll('.accordion-container:not(.keep-open) .accordion-trigger.active');
        let activeAcc = document.querySelectorAll('.accordion-container:not(.keep-open) .accordion.active');

        if (document.activeElement.classList.contains('active')) {
            document.activeElement.classList.remove("active");
            document.activeElement.nextElementSibling.style.height = "0px";
            document.activeElement.nextElementSibling.classList.remove("active");
            let kids = document.activeElement.nextElementSibling.children;
            for (var i = 0; i < kids.length; i++) {
              kids[i].classList.add("hidden");
            }
        }
        else {
            if (activeBtn.length > 0) {
                activeBtn[0].classList.remove("active");
            }
            if (activeAcc.length > 0) {
                activeAcc[0].style.height = "0px";
                activeAcc[0].classList.remove("active");
                let kids = activeAcc[0].children;
                for (var i = 0; i < kids.length; i++) {
                  kids[i].classList.add("hidden");
                }
            }
            let kids = document.activeElement.nextElementSibling.children;
            for (var i = 0; i < kids.length; i++) {
              kids[i].classList.remove("hidden");
            }
            document.activeElement.classList.add("active");
            let ht = document.activeElement.nextElementSibling.scrollHeight;
            document.activeElement.nextElementSibling.style.height = `${ht}px`;
            document.activeElement.nextElementSibling.classList.add("active");
        }
      }
    }
  }
}
</script>
<style lang="scss">
h1{
  // display: inline-block;
  // border-bottom: 5px solid $base-red;
  // padding-bottom: 5px;
  position: relative;
  &:after{
    content: "";
    position: absolute;
    top: 125%;
    left: 50%;
    transform: translateX(-50%);
    height:auto;
    width: 150px;
    border-bottom: 3px solid $base-red;
  }
}
.content{
  padding: 50px 0;
  display: flex;
  flex-direction: row;
  @include small-screen{
    flex-direction: column;
    padding-top: 15px;
  }

  nav{
    flex: 1;
    align-self: flex-start;
    margin: 0 50px;
    padding: 0 15px;
    border: solid 3px $base-red;
    text-align: center;
    background-color: $white;
    @include small-screen{
      align-self:inherit;
      margin: 0 25px;
    }
    a{

    }
  }
  main{
    flex: 6;
    margin: 0 100px 0 0;
    padding: 0 15px;
    border: solid 3px $base-red;
    background-color: $white;
    @include small-screen{
      flex: 1;
      margin: 0 25px;
    }
    main{
      border: none;
    }
    nav{
      border: none;
    }
  }
}

</style>