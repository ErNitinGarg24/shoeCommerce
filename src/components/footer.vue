<template>
  <div id="footer" class="container-fluid">
    <div class="row">
      <div class="col-md-6">
        <p class="copyright">&#169; all right reserved</p>
      </div>
      <div class="col-md-6 d-flex align-items-center justify-content-end">
        <p class="social m-0">
          <fa :icon="['fab', 'facebook']" />
          <fa :icon="['fab', 'twitter']" />
          <fa :icon="['fab', 'youtube']" />
          <fa :icon="['fab', 'instagram']" />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer",
};
</script>
<style scoped>
#footer {
  background-color: #131921;
  color: #fff;
}
.copyright {
  padding: 10px 0;
  margin-bottom: 0;
}
.social svg {
  color: #f08804;
  margin: 0 5px;
}
</style>