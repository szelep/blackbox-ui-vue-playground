<template>
  <el-form
      :rules="rules"
      :model="form"
      status-icon
      ref="ruleFormRef"
      label-position="top"
  >
    <el-form-item label="Content" prop="content">
      <el-input
          v-model="form.content"
          :rows="2"
          type="textarea"
      />
    </el-form-item>
    <el-form-item label="Publication date" prop="publishAt">
      <el-date-picker
          v-model="form.publishAt"
          type="datetime"
          placeholder="Select date and time"
      />
      <span class="form-helper-text">
        May be changed any time before publication.
      </span>
    </el-form-item>
    <el-form-item label="Password" prop="rawPassword">
      <el-input
          v-model="form.rawPassword"
          :type="inputType"
          :suffix-icon="Icon"
      >
      </el-input>
      <span class="form-helper-text">
        It will be used for modifications such as unpublishing or publication date change.
      </span>
    </el-form-item>
    <el-form-item>
      <el-button
          @click="submitForm(ruleFormRef)"
          type="primary"
          class="fullwidth-element"
          :loading="state.loading"
      >
        Submit
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import {h, reactive, ref, shallowRef, watch} from "vue";
import {isFuture} from "date-fns";
import HideIcon from "./icons/HideIcon.vue";
import ViewIcon from "./icons/ViewIcon.vue";
import {requestService} from "../services/requestService";
import {API_ROUTES} from "../constants/apiRoutes";
import { ElNotification } from 'element-plus'

const inputType = ref('password');
const state = reactive({
  passwordFieldShow: false,
  loading: false,
});
const togglePasswordView = () => state.passwordFieldShow = !state.passwordFieldShow;
const Icon = shallowRef(h(ViewIcon, {onClick: togglePasswordView}));
const iconProps = {onClick: togglePasswordView};
watch(state, () => {
  inputType.value = state.passwordFieldShow ? 'text' : 'password';
  Icon.value = state.passwordFieldShow ?
      h(HideIcon, iconProps) :
      h(ViewIcon, iconProps)
  ;
});

const form = reactive({
  content: '',
  publishAt: null,
  rawPassword: '',
});

const submitForm = async (formEl) => {
  if (!formEl) return
  await formEl.validate(async (valid) => {
    if (valid) {
      state.loading = true;
      try {
        await requestService.post(API_ROUTES.collection, form);

        ElNotification({
          title: 'Success!',
          message: 'Your capsule has been created successfully!',
          type: 'success',
        });
        form.content = '';
        form.publishAt = null;
        form.rawPassword = '';
      } catch (requestError) {
        ElNotification({
          title: 'Error',
          message: 'An error occured.',
          type: 'error',
        });
      }
    }

    state.loading = false;
  })
}

const dateValidator = (rule, value, callback) => {
  if (!isFuture(value)) {
    callback(new Error('Publication date must be greater than now!'))
  }
  callback();
}

const rules = {
  content: [
    {required: true, message: 'This field must not be blank.', trigger: 'blur'},
  ],
  rawPassword: [
    {
      required: true,
      message: 'This field must not be blank.',
      trigger: 'blur',
    },
  ],
  publishAt: [
    {
      required: true,
      message: 'This field must not be blank.',
      trigger: 'blur',
    },
    {
      validator: dateValidator,
      message: 'Publication date must be greater than now!',
      trigger: 'blur',
    },
  ],
};

const ruleFormRef = ref();
</script>

<style scoped>
.form-helper-text {
  display: block;
  width: 100%;
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.6);
}
.fullwidth-element {
  width: 100%;
}
</style>
