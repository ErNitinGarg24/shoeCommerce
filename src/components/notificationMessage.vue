<template>
  <div>
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <strong>Holy guacamole!</strong>
    </div>
  </div>
</template>
<script>
export default {
  name: "notificationMessage",
};
</script>

<style lang="scss" scoped>
.alert {
  position: relative;
  .close {
    position: absolute;
    right: 5px;
    top: 2px;
    background: transparent;
    border: none;
    font-size: 22px;
    padding: 0;
    line-height: 22px;
  }
}
</style>