<template>
  <div id="app">
    <header><div id="site-title">note-taker</div></header>
    <main><router-view /></main>
    <footer><div id="site-credits">&copy; George Pickering 2021</div></footer>
  </div>
</template>

<style lang="scss">
#app {
  align-items: start;
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;

  header,
  footer {
    background-color: $header-footer-bgcolor;
    padding: 15px 0;
    text-align: center;
  }

  header {
    border-bottom: 3px solid transparent;
    font-size: 24px;

    &:hover {
      border-bottom-color: #682600;
    }
  }

  main {
    background-color: #ffffa8;
    height: 100%;
  }

  footer {
    border-top: 3px solid transparent;

    &:hover {
      border-top-color: #682600;
    }
  }
}
</style>
