<template>
  <header :class="$style.header">

  </header>
</template>

<script>
export default {
  name: 'header'
};
</script>

<style lang="scss" module>
.header {
  grid-area: header;
  padding: 20px;
  background: var(--main-background);
}
</style>
