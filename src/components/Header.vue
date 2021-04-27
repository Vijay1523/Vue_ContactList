<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Contacts</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'user' }" :active="$route.name == 'user'">Contact List</b-nav-item>
        <b-nav-item :to="{ name: 'favoriteuser' }" :active="$route.name == 'favoriteuser'">Favorite contacts</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
    el: 'Header',
    data() {
        return {
        }
    }
}