<template>
  <div>
  <b-navbar type="light" variant="light" toggleable class="sticky-top">
    <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_dropdown_collapse">
      <b-navbar-nav>
        <div class="logo">
          <a href="/"><img src="../assets/logo.png"></a>
        </div>
        <div class="main-nav">
          <b-nav-item href="#aboutMe">About Me</b-nav-item>
          <b-nav-item href="#skills">Skills</b-nav-item>
          <b-nav-item href="#projects">Projects</b-nav-item>
          <b-nav-item href="#workHistory">Work History</b-nav-item>
          <b-nav-item href="#education">Education</b-nav-item>
          <b-nav-item href="#resume">Resume</b-nav-item>
        </div>
      <a
          href="https://github.com/JoshAaronLevy/portfolio"
          target="_blank"
          class="github-corner"
          aria-label="View source on Github"
        >
          <svg viewBox="0 0 250 250" aria-hidden="true">
            <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
            <path
              d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
              fill="currentColor"
              class="octo-arm"
            />
            <path
              d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
              fill="currentColor"
              class="octo-body"
            />
          </svg>
        </a>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<style scoped>
.bg-light {
  background-color: #fff !important;
}

.navbar {
  display: flex;
  width: 100%;
  min-height: 100px;
  background-color: #ffffff;
  box-shadow: 2px 2px 1px #333;
  padding: 0px;
}

.navbar-nav {
  width: 100%;
  padding-right: 75px;
}

a.nav-link {
  height: 100px;
  padding-left: 15px !important;
  padding-right: 15px !important;
  color: #222 !important;
}

.logo {
  display: flex;
  align-items: stretch;
  padding-left: 75px;
  min-width: 30%;
}

.fa-less-than {
  display: inline-flex !important;
  align-items: center;
  font-size: 28px;
  margin-right: 7px;
  padding-top: 13px;
}

.fa-greater-than {
  display: inline-flex !important;
  align-items: center;
  font-size: 28px;
  margin-left: 7px;
  padding-top: 13px;
}

.logo a {
  font-size: 58px;
  font-family: "Yellowtail", cursive;
  color: #ae0001;
  padding-bottom: 7px;
}

.logo .h1:hover {
  color: #444;
  text-decoration: none;
}

.logo a:hover {
  color: #444;
  text-decoration: none;
}

.main-nav {
  display: flex;
  min-width: 70%;
  justify-content: flex-end;
  align-items: center;
}

.navbar-list {
  justify-content: space-around;
}

.main-nav ul {
  display: flex;
  align-items: stretch;
  margin-right: 100px;
  margin-bottom: 0px;
  margin-top: 0px;
  height: 100px;
}

.main-nav li {
  display: flex;
  font-size: 18px !important;
  list-style-type: none;
  align-items: stretch;
}

.main-nav li a {
  display: flex;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  color: #222;
  text-decoration: none;
  font-weight: 700;
  -webkit-transition: color, background-color, 500ms;
  transition: color, background-color, 500ms;
}

.main-nav li a:hover {
  background-color: #ae0001;
  color: #fff !important;
  text-decoration: none;
}

.main-nav li a:active {
  background-color: #ae0001;
  color: #fff !important;
  text-decoration: none;
}

.main-nav li a.active {
  background-color: #ae0001;
  color: #fff !important;
  text-decoration: none;
}

.main-nav li a:focus {
  background-color: #ae0001;
  color: #fff !important;
  text-decoration: none;
}

/* .navbar {
  height: 80px;
} */

/* .fa-less-than {
  display: inline-flex !important;
  align-items: center;
  font-size: 28px;
  margin-right: 7px;
  padding-top: 13px;
}

.fa-greater-than {
  display: inline-flex !important;
  align-items: center;
  font-size: 28px;
  margin-left: 7px;
  padding-top: 13px;
} */

.logo a {
  font-size: 42px;
  font-family: "Lato", sans-serif;
  color: #ae0001;
  padding-bottom: 7px;
}

.logo .h1:hover {
  color: #444;
  text-decoration: none;
}

.logo a:hover {
  color: #444;
  text-decoration: none;
}

.github-corner {
  width: 75px;
  height: 75px;
  fill: #151513;
  color: #fff;
  position: absolute;
  top: 0;
  right: 0;
  border: 0;
}

.github-corner:hover {
  color: #fff;
}

.octo-arm {
  transform-origin: 130px 106px;
}

.github-corner:hover .octo-arm {
  animation: octocat-wave 560ms ease-in-out;
}

@keyframes octocat-wave {
  0%,
  100% {
    transform: rotate(0);
  }
  20%,
  60% {
    transform: rotate(-25deg);
  }
  40%,
  80% {
    transform: rotate(10deg);
  }
}

@media (max-width: 500px) {
  .github-corner:hover .octo-arm {
    animation: none;
  }
  .github-corner .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
}
</style>