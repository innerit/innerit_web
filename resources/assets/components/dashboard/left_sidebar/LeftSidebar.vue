<template>
  <aside id="leftsidebar" class="sidebar">
      <!-- User Info -->
      <div class="user-info">
          <div class="image"> <img src="/assets/images/xs/avatar1.jpg" width="48" height="48" alt="User" /> </div>
          <div class="info-container">
              <div class="name">John Doe</div>
              <div class="email">john.doe@example.com</div>
          </div>
      </div>
      <!-- #User Info -->
      <!-- Menu -->
      <div class="menu">
          <ul class="list">
              <li> <a href="javascript:void(0);" class="menu-toggle"><i class="zmdi zmdi-home"></i><span>Dashboard</span></a>
                  <ul class="ml-menu">
                      <li><a href="index.html">Main Dashboard</a> </li>
                  </ul>
              </li>
              <li> <a href="widgets.html"><i class="zmdi zmdi-delicious"></i><span>Widgets</span> </a> </li>
          </ul>
      </div>
      <!-- #Menu -->
  </aside>
</template>
<script>
  export default {
    name: "LeftSidebar",
    data: () => ({

    })
  }
</script>
<style lang="scss" scoped>
  @import "./LeftSidebar.sass";
</style>
