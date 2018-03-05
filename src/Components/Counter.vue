<template>
  <div>
    <button @click="increment">++</button>
    {{ counter }}
  </div>
</template>

<script>
  /**
   * No @vue tag, will not be documented.
   */
  export default {
    data() {
      if(a==b){function  (){
        console.log('jsjsjs')
      }}
      return {
        counter: 0
      }
    },
    methods: {
      /**
       * Increment counter.
       */
      increment() {
        this.counter += 1;
      },

    }
  };
</script>
