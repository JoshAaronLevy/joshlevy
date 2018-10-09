<template>
  <div class="resume">
    <div class="d-lg-none">
      <a class="btn btn-primary btn-lg" href="https://drive.google.com/file/d/1pRCW6wa4TvApHjhYqgIwsLvfPHUAhUOc/view" target="_blank">View/Download Resume</a>
    </div>
    <div class="d-none d-lg-block">
      <iframe src="https://drive.google.com/file/d/1pRCW6wa4TvApHjhYqgIwsLvfPHUAhUOc/preview"></iframe>
    </div>
  </div>
</template>

<style scoped>
.resume {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

iframe {
  width: 840px;
  height: 1070px;
}

.btn-primary {
  background-color: #ae0001;
  border: none;
}

.btn-primary:hover {
  background-color: #222222;
}
</style>
