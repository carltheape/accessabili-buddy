<template>
  <fieldset class="accordion-container">
    <div id="modal-1" class="modal">
      <div class="modal-bg">
      </div>
      <div class="modal-dialog">
        <h2>Try tab navigation</h2>
        <a href="">I'm a link </a>
        <button>click</button>
        <a href="">I'm another link </a>
        <button>clack</button>
        <a href="">I'm a third </a>
        <p>
          Looks like focus can leave the modal which can make it difficult for a vision impaired user to know where on the page they should be.
        </p>
        <button v-on:click="openClose($event,'modal-2')">close</button>
      </div>
    </div>
    <div id="modal-2" class="modal">
      <div class="modal-bg">
      </div>
      <div class="modal-dialog">
        <h2>Focus Trap</h2>
        <p>Here we have a similar modal, but we have activated a focus trap to prevent the user from escaping into the rest of the page while this modal is active.
          I am using a small library called <a href="https://github.com/theKashey/dom-focus-lock">dom-focus-lock</a> to correctly trap focus where needed.
        </p>
        <a href="">I'm a link </a>
        <button>click</button>
        <a href="">I'm another link </a>
        <button>clack</button>
        <a href="">I'm a third </a>
        <button v-on:click="closeModal">close</button>
      </div>
    </div>
    <legend class="accordion-trigger preventScroll active" role="button" tabindex="0"><h2>{{legend}}</h2></legend>
    <div class="accordion active">
      <p>
        Modals are often used to communicate new or important pieces of information for a user.  When building modals we should include additional logic to make them useable
        for keyboard users.  Just because a modal is at the forefront of the screen doesn't mean a user can't tab to another part of the page.  This is an instance where using
        a <a href="https://hackernoon.com/its-a-focus-trap-699a04d66fb5">Focus Trap</a> can be helpful.
      </p>
      <button v-on:click="openModal('modal-1')">Open Modal</button>
    </div>
  </fieldset>
</template>

<script>
import focusLock from 'dom-focus-lock' //https://www.npmjs.com/package/dom-focus-lock useful library for trapping focus (also available for react and vue)
export default {
    name: 'Modals',
    props:["legend"],
    components: {

    },
    methods:{
      openModal: function(id){
        let modal = document.getElementById(id);
        modal.classList.add("active");
      },
      closeModal: function(e){
        let modal = e.target.closest(".modal");
        modal.classList.remove("active");
        focusLock.off(modal);
      },
      openClose: function(e, id){
        this.openModal(id);
        this.closeModal(e);
        this.focusTrap(document.getElementById(id));
      },
      focusTrap: function(el){
        focusLock.on(el);
      }
    }
}
</script>

<style lang="scss">
  .modal{
    position: absolute;
    z-index: -1;
    display: none;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    justify-content: center;

    &.active{
      display: flex;
      z-index: 9999;
    }

    .modal-bg{
      background-color: $grey-dk;
      opacity: 0.8;
      width:  100%;
      height: 100%;
    }
    .modal-dialog{
      position: absolute;
      background-color: white;
      align-self: center;
      margin: auto;
      padding: 25px;
      border-radius: 5px;
      max-width: 800px;
    }
  }


</style>