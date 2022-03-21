<template>
  <div>
    <button class="add">Add to Cart</button>
  </div>
</template>

<script>
export default {
  name: "addBtn",
};
</script>
<style lang="scss" scoped>
.add {
  border-radius: 5px;
  background: #f4a43e;
  color: white;
  padding: 5px 25px;
  font-weight: bold;
  border: 1px solid rgba(0, 0, 0, 0.125);
  box-shadow: 0 0 10px rgb(0 0 0 / 13%);
  margin: 15px 0;
}
</style>