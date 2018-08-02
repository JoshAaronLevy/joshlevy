<template>
  <footer class="footer">
    <p class="footer-copy">
      Copyright &copy; 2018 - All Rights Reserved - Josh Levy
    </p>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  background-color: #222;
  padding-left: 100px;
  padding-right: 100px;
  align-items: stretch;
  height: 90px;
}

.footer-copy {
  display: inline-flex;
  align-items: stretch;
}

p.footer-copy {
  font-size: 16px;
  color: #fff;
  align-self: center;
  margin-bottom: 0px;
}
</style>
