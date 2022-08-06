<template>
  <div class="footer-container">
    <p class="footer-text">Made by <GithubIcon />
      <el-link href="https://github.com/szelep" style="color: #FFF; font-size: 0.8rem;" target="_blank">github.com/szelep</el-link>
    </p>
  </div>
</template>

<style scoped>
  .footer-text {
    color: #FFFFFF;
    font-size: 0.8rem;
  }
  .footer-container {
    display: flex;
    justify-content: center;
  }
</style>
<script>
import GithubIcon from "./icons/GithubIcon.vue";
export default {
  components: {GithubIcon}
}
</script>
