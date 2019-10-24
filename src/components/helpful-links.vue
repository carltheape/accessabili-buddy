<template>
  <div class="form helpful-links">
    <h1>{{title}}</h1>
    <ul>
      <li class="read">
        <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">W3C</a>
        <span>
          - a complete overview of the WCAG standards and how to meet them.  Good resource for questions on specific standards.
        </span>
      </li>
      <li class="read">
        <a href="https://medium.com/@krisrivenburgh/the-ada-checklist-website-compliance-guidelines-for-2019-in-plain-english-123c1d58fad9">The ADA Checklist</a>
        <span>
          - a helpful article that covers the why and how on best practices for web accessibility.
        </span>
      </li>
      <li class="class">
        <a href="https://www.udacity.com/course/web-accessibility--ud891">Web Accessibility by Google</a>
        <span>
          - a free course that covers many of the common pitfalls developers run into.  You will need a Udacity account to access it.
        </span>
      </li>
      <li class="resource">
        <a href="https://a11yproject.com/">The A11y Project</a>
        <span>
          - a non-profit organization dedicated to making web accessibility easier to implement.  A great resource for examples on how to implement different strategies.
        </span>
      </li>
      <li class="resource">
        <a href="https://a11y-style-guide.com/style-guide/">The A11y Style Guide</a>
        <span>
          - a pattern library with great examples of how to successfully implement components for accessibility.
        </span>
      </li>
      <li class="tool">
        <a href="https://chrome.google.com/webstore/detail/siteimprove-accessibility/efcfolpjihicnikpmhnmphjhhpiclljc?hl=en-US">Site Improve</a>
        <span>
          - a Chrome extension that can help flag troublesome areas on a webpage as they pertain to accessibility.  They also offer a service for entire site scans.
        </span>
      </li>
      <li class="tool">
        <a href="https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh">WAVE Evaluation Tool</a>
        <span>
          - similar to Site Improve, a Chrome extension that can help find areas of concern when testing.
        </span>
      </li>
      <li class="tool">
        <a href="https://chrome.google.com/webstore/detail/chromevox-classic-extensi/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en">Chrome Vox</a>
        <span>
          - a simulated screen reader extension for the chrome browser.  A great way to simulate using a screen reader for testing purposes.
        </span>
      </li>
      <li class="tool">
        <a href="https://chrome.google.com/webstore/detail/nocoffee/jjeeggmbnhckmgdhmgdckeigabjfbddl?hl=en-US">NoCoffee</a>
        <span>
          - another Chrome extension that is able to simulate certain disabilities like color blindness and motor impairment.  Useful for testing and for presentations.
        </span>
      </li>
    </ul>
  </div>
</template>

<script>


export default {
  name: 'HelpfulLinks',
  props:["title"],
  components: {
    
  },
  data() {
      return {
          
      }
  },
  mounted() {
      
  }
}
</script>

<style lang="scss">
.helpful-links{
  ul{
        list-style: none;
        padding-inline-start: 60px;

        @include mobile-only{
          padding-inline-start: 40px;
        }
    li{
      padding-bottom: 40px;
      position: relative;
        &:before{
          content:"";
          height: 50px;
          width: 50px;
          top: 0px;
          right: 102%;
          position: absolute;
          background-size: contain;
      }
      &.read{
        &:before{
          background-image: url('/images/noun_Book.svg');
          top: -5px;
        }
      }
      &.tool{
        &:before{
          background-image: url('/images/noun_tools.svg');
          height: 40px;
          width: 40px;
        }
      }
      &.class{
        &:before{
          background-image: url('/images/noun_graduate.svg');
        }
      }
      &.resource{
        &:before{
          background-image: url('/images/noun_resource.svg');
          height: 40px;
          width: 40px;
        }
      }
    }
  }
}

</style>