<template>
  <div class="hello">
    <div id="square" v-on="{mousedown: beSmall, mouseup: beBig}" v-bind:style="sizeObj"></div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  computed: {
    sizeObj () {
      return this.$store.state.sizeObj
    }
  },
  methods: {
    beSmall () {
      this.$store.dispatch('beSmall')
    },
    beBig () {
      this.$store.dispatch('beBig')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #square {
    background-color: bisque;
    box-shadow: 2px 2px 2px #ddd;
  }

  #square:hover {
    cursor: pointer;
  }
</style>
