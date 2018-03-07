<template>
  <nav class="navbar">
    <div class="col-12">

      <div class="navbar-header">
        <a href="javascript:void(0);" class="bars"></a>
        <a class="navbar-brand" href="javascript:void(0)">
          <img src="/assets/images/logos/logo_horizontal.png" class="img-fluid">
        </a>
      </div>

      <ul class="nav navbar-nav navbar-left">
        <li>
          <a href="javascript:void(0);" class="ls-toggle-btn" data-close="true"><i class="zmdi zmdi-swap"></i></a>
        </li>
        <li class="dropdown menu-app hidden-sm-down">
          <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button"><i class="zmdi zmdi-apps"></i></a>
          <ul class="dropdown-menu slideDown">
            <li class="body">
              <ul class="menu">
                <li><a href="blog-dashboard.html"><i class="zmdi zmdi-blogger"></i><span>Blog</span></a></li>
                <li><a href="contact.html"><i class="zmdi zmdi-accounts-list"></i><span>Contacts</span></a></li>
                <li><a href="chat.html"><i class="zmdi zmdi-comment-text"></i><span>Chat</span></a></li>
                <li><a href="javascript:void(0)"><i class="zmdi zmdi-arrows"></i><span>Notes</span></a></li>
                <li><a href="javascript:void(0)"><i class="zmdi zmdi-view-column"></i><span>Taskboard</span></a></li>
                <li><a href="events.html"><i class="zmdi zmdi-calendar-note"></i><span>Calendar</span></a></li>
              </ul>
            </li>
          </ul>
        </li>

      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li>
          <a href="javascript:void(0);" class="js-search" data-close="true"><i class="zmdi zmdi-search"></i></a>
        </li>
        <li class="dropdown">
          <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button"><i class="zmdi zmdi-notifications"></i>
            <div class="notify"><span class="heartbit"></span><span class="point"></span></div>
          </a>
          <ul class="dropdown-menu slideDown">
            <li class="header">NOTIFICATIONS</li>
            <li class="body">
              <ul class="menu list-unstyled">
                <li> <a href="javascript:void(0);">
                  <div class="icon-circle l-coral"> <i class="material-icons">person_add</i> </div>
                  <div class="menu-info">
                    <h4>12 new members joined</h4>
                    <p> <i class="material-icons">access_time</i> 14 mins ago </p>
                  </div>
                </a> </li>
                <li> <a href="javascript:void(0);">
                  <div class="icon-circle l-turquoise"> <i class="material-icons">add_shopping_cart</i> </div>
                  <div class="menu-info">
                    <h4>4 sales made</h4>
                    <p> <i class="material-icons">access_time</i> 22 mins ago </p>
                  </div>
                </a> </li>
              </ul>
            </li>
            <li class="footer"> <a href="javascript:void(0);">View All Notifications</a> </li>
          </ul>
        </li>
        <li>
          <a href="javascript:void(0);" class="fullscreen hidden-sm-down" data-provide="fullscreen" data-close="true">
            <i class="zmdi zmdi-fullscreen"></i>
          </a>
        </li>
        <li><a href="javascript:void(0);" class="mega-menu" data-close="true"><i class="zmdi zmdi-power"></i></a></li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navbar",
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
  @import "./Navbar.sass";
</style>
