<template>
  <div>
    <Preloader></Preloader>
    <Navbar></Navbar>
    <LeftSidebar></LeftSidebar>

    <div class="overlay"></div>
    <div class="search-bar">
        <div class="search-icon"> <i class="material-icons">search</i> </div>
        <input type="text" placeholder="Explore Nexa...">
        <div class="close-search"> <i class="material-icons">close</i> </div>
    </div>

    <section class="content">
      <ContentHeader></ContentHeader>
      <div class="row">
        <div class="col-sm-12">
          <div class="content-spa">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

  import Navbar from './navbar/Navbar';
  import LeftSidebar from './left_sidebar/LeftSidebar';
  import ContentHeader from './content_header/ContentHeader';
  import Preloader from "../preloader/Preloader";

  export default {
    name: "Dashboard",
    data: () => ({

    }),
    components: {
      Navbar, LeftSidebar, ContentHeader, Preloader
    }
  }
</script>

<style lang="scss" scoped>
  @import "./Dashboard.sass";
</style>
