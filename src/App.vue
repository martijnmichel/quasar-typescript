<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  mounted() {
    interface Greet {
      msg: string;
      name?: string;
    }

    class Greeter {
      greeting: string;
      name: string;
      constructor(event: Greet) {
        this.greeting = event.msg;
        this.name = event.name ? event.name : 'anon';
      }
      greet() {
        return 'Hello, ' + this.greeting;
      },
      bla() { return this.name }
    }

    let greeter = new Greeter({ msg: 'World' });

    console.log(greeter.bla());
  }
});
</script>
