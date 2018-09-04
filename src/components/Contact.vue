<template>
  <div>
    <b-modal id="modallg" centered size="lg" title="" ok-only>
      <b-container fluid>
        <div class="mb-1 text-center w-100">
          <h3 class="name">Josh Levy</h3>
        </div>
        <div class="mb-1 text-center w-100">
          <div class="social">
            <a href="https://linkedin.com/in/JoshAaronLevy" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a href="https://github.com/JoshAaronLevy" target="_blank"><i class="fab fa-github"></i></a>
          </div>
        </div>
        <div class="mb-1 text-center w-100">
          <div class="contact">
            <a href="mailto:joshaaronlevy@gmail.com"><i class="fas fa-envelope"></i><h4>joshaaronlevy@gmail.com</h4></a>
          </div>
        </div>
        <div class="mb-1 text-center w-100">
          <div class="contact">
            <a href="tel:7208834980"><i class="fas fa-mobile"></i><h4>(720) 883-4980</h4></a>
          </div>
        </div>
        <div class="mb-1 text-center w-100">
          <div class="contact">
            <a href="https://goo.gl/maps/bpZCa8oQx1v" target="_blank"><i class="fas fa-map-marked-alt"></i><h4>Denver, CO<sup>*</sup></h4></a>
          </div>
        </div>
        <div class="mb-1 text-center w-100">
          <div class="footnote">
            <h6><sup>*</sup>Currently in Denver, yet able to easily relocate, and seeking such opportunities as well.</h6>
          </div>
        </div>
      </b-container>
      <div slot="modal-footer" class="w-100">
        <b-btn class="float-right" variant="danger" @click="closeModal">
          Close
        </b-btn>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    closeModal() {
      this.$root.$emit('bv::hide::modal', 'modallg');
    }
  }
}
</script>

<style scoped>
.inline {
  display: inline;
}
.name {
  font-weight: 700;
}
.social-button {
  font-weight: 700 !important;
}
.social {
  display: inline-flex;
  align-items: center;
}
.fa-linkedin {
  color: #0077b5;
  margin-right: 10px;
  margin-left: 10px;
  font-size: 32px;
}
.fa-linkedin:hover {
  color: #ae0001;
}
.fa-github {
  color: #222;
  margin-right: 10px;
  margin-left: 10px;
  font-size: 32px;
}
.fa-github:hover {
  color: #ae0001;
}
.contact {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 15px;
}
.contact h4 {
  margin-bottom: 0px !important;
}
.contact a {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #222;
}
.contact a:hover {
  color: #ae0001;
  text-decoration: none;
}
.contact i {
  margin-right: 10px;
  font-size: 24px;
  color: #ae0001;
}
.contact sup {
  color: #ae0001;
}
.footnote {
  text-align: left;
  margin-top: 50px;
}
.footnote sup {
  color: #ae0001;
}
</style>
