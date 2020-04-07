<template>
  <div>
    <Header />
    <keep-alive><router-view></router-view></keep-alive>
    <Footer />
  </div>
</template>

<script>
import Header from "./header";
import Footer from "./footer";
export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped>
</style>