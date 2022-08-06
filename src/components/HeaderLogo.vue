<template>
  <span class="logo-text">
    <span class="left-part text-part">
      Blackb
    </span>
    <el-icon :size="35">
      <IconLock />
    </el-icon>
    <span class="right-part text-part">
      x
    </span>
  </span>
  <el-divider class="separator"/>
</template>

<script setup>
import IconLock from "./icons/IconLock.vue";
</script>

<style scoped>
.text-part {
  font-size: 3.37rem;
  font-weight: 700;
}
.left-part {
  margin-right: -15px;
}
.right-part {
  margin-left: -15px;
}
.separator {
  margin-top: 0;
}
</style>
