<template>
  <div id="app">
    <Header id="header" />
    <main id="main">
      <router-view/>
    </main>
    <Footer id="footer" />
  </div>
</template>
<script>
  import Header from "./components/Header"
  import Footer from "./components/Footer"

  export default {
    name: 'App',
    components: {
      Header,
      Footer
    }
  }
</script>

<style lang="scss">
  @import "./assets/common";
#app{

  display:grid;
  grid-template-columns: 12vw auto 12vw;
  grid-template-rows:auto 1fr auto;
  grid-template-areas:'header header header'
                      '.      main   .'
                      'footer footer footer';

}
#header{

  grid-area:header;
  padding-left:12%;
  padding-right:12%;
}
  #main{
    grid-area:main
  }
  #footer{

    grid-area:footer;
    padding-left:12%;
  }

</style>
