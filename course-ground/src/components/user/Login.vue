<template>
  <div class="form-page">
    <h1 class="page-title">Login</h1>
    <form @submit.prevent="loginHandler()">
      <div class="field-holder">
        <label for="username" class="grey-color">Username</label>
        <input type="text" v-model="username" name="username" id="username" @input="$v.username.$touch()" />
        <template v-if="$v.username.$error">
          <div v-if="!$v.username.required" class="input-error">Please enter an username</div>
          <div v-if="!$v.username.minLength" class="input-error">Username should be at least 6 chars long</div>
        </template>
      </div>
      <div class="field-holder">
        <label for="password" class="grey-color">Password</label>
        <input type="password" v-model="password" name="password" id="password" @input="$v.password.$touch()" />
        <template v-if="$v.password.$error">
          <div v-if="!$v.password.required" class="input-error">Please enter a password</div>
          <div v-if="!$v.password.minLength" class="input-error">Password should be at least 6 chars long</div>
        </template>
      </div>
      <div class="submit-btn-holder">
        <button :disabled="$v.$invalid">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  data: function() {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    loginHandler() {
      console.log(`Username: ${this.username}`);
      console.log(`Password: ${this.password}`);
    }
  },
  validations: {
    username: {
      required,
      minLength: minLength(6)
    },
    password: {
      required,
      minLength: minLength(6)
    }
  }
}
</script>

<style scoped>

</style>