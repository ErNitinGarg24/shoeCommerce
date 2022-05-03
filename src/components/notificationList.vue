<template>
  <div class="notifications-list">
    <!-- <NotificationMessage />
    <NotificationMessage />
    <NotificationMessage />
    <NotificationMessage />
    <NotificationMessage />
    <NotificationMessage /> -->
  </div>
</template>

<script>
// import NotificationMessage from "./notificationMessage.vue";
export default {
  name: "notificationsList",
  components: {
    // NotificationMessage,
  },
};
</script>

<style lang="scss" scoped>
.notifications-list {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 320px;
  margin-right: 15px;
}
</style>
