<template>
  <div class="row topMarginManage">
    <div class="col-md-2">
      <div v-for="(n, index) in 5" :key="index">
        <div class="square">
          <div class="content">
            <img
              src="https://freepngimg.com/thumb/shoes/27428-5-nike-shoes-transparent-background.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-10">
      <div class="square">
        <div class="content">
          <img
            src="https://freepngimg.com/thumb/shoes/27428-5-nike-shoes-transparent-background.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "imgCarousel",
};
</script>
<style lang="scss" scoped>
.topMarginManage {
  margin-top: calc(var(--bs-gutter-x) * -0.5);
}
.square {
  position: relative;
  width: 100%;
  margin: calc(var(--bs-gutter-x) * 0.5) 0;
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  .content {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 5%;
    border: 1px solid rgba(0, 0, 0, 0.125);
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    img {
      max-width: 100%;
      min-height: 100%;
    }
  }
}
</style>