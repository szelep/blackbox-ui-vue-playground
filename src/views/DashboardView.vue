<template>
  <div class="dashboard-root">
    <HeaderLogo />
    <el-collapse class="accordion">
      <el-collapse-item title="About" name="1">
        <p>Blackbox is a simple tool that allows scheduled publication of text content.</p>
        <p>Content that you provide will be readable only after publication date.</p>
      </el-collapse-item>
    </el-collapse>
    <CapsuleForm />
  </div>
  <AuthorFooter />
</template>

<script setup>
import HeaderLogo from "../components/HeaderLogo.vue";
import CapsuleForm from "../components/CapsuleForm.vue";
import AuthorFooter from "../components/AuthorFooter.vue";
</script>

<style scoped>
  .dashboard-root{
    background-color: #FFF;
    max-width: 60vh;
    border-radius: 5px;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 5px 8px 0px, rgba(0, 0, 0, 0.12) 0px 1px 14px 0px;
  }
  .accordion {
    margin-bottom: 20px;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 5px 8px 0px, rgba(0, 0, 0, 0.12) 0px 1px 14px 0px;
  }
  .el-collapse-item__wrap {
    display: none;
  }
</style>
