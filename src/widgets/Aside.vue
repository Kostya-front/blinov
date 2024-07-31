<template>
  <ul :class="$style.Aside">
    <li>
      <router-link :class="$style.link" to="/">Занятия</router-link>
    </li>
    <li>
      <router-link :class="$style.link" to="/wiki">Wiki</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Aside'
};
</script>

<style lang="scss" module>
.Aside {
  background: var(--main-background);
  grid-area: aside;
  padding: 5px 0px;
  color: #fff;
  display: flex;
  flex-direction: column;
}
.link {
  color: inherit;
  text-decoration: none;
  display: flex;
  padding: 10px;
  background: #36455c;
}
</style>
