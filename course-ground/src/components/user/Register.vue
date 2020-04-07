<template>
  <div class="form-page">
    <h1 class="page-title">Register</h1>
    <form @submit.prevent="registerHandler()">
      <div class="field-holder">
        <label for="username" class="grey-color">Username</label>
        <input type="text" v-model="username" name="username" id="username" @input="$v.username.$touch()" />
        <template v-if="$v.username.$error">
          <div v-if="!$v.username.required" class="input-error">Please enter an username</div>
          <div v-if="!$v.username.minLength" class="input-error">Username should be at least 6 chars long</div>
        </template>
      </div>
      <div class="field-holder">
        <label for="email" class="grey-color">Email</label>
        <input type="email" v-model="email" name="email" id="email" @input="$v.email.$touch()" />
        <template v-if="$v.email.$error">
          <div v-if="!$v.email.required" class="input-error">Please enter an email</div>
          <div v-if="!$v.email.email" class="input-error">Please enter a valid email</div>
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
      <div class="field-holder">
        <label for="confirmPassword" class="grey-color">Confirm Password</label>
        <input type="password" v-model="confirmPassword" name="confirmPassword" id="confirmPassword" @input="$v.confirmPassword.$touch()" />
        <template v-if="$v.confirmPassword.$error">
          <div v-if="!$v.confirmPassword.required" class="input-error">Please enter a confirm password</div>
          <div v-if="!$v.confirmPassword.sameAs" class="input-error">Passwords must match!</div>
        </template>
      </div>
      <div class="submit-btn-holder">
        <button :disabled="$v.$invalid">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
import axios from 'axios'

export default {
  mixins: [validationMixin],
  data: function() {
    return {
      username: null,
      email: null,
      password: null,
      confirmPassword: null
    }
  },
  methods: {
    registerHandler() {
      const user = {
        username: this.username,
        email: this.email,
        password: this.password
      }
      axios.post('http://localhost:3000/api/user/register', user)
        .then(() => {
          this.$router.push('/login')
        })
    }
  },
  validations: {
    username: {
      required,
      minLength: minLength(6)
    },
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    },
    confirmPassword: {
      required,
      sameAs: sameAs('password')
    }
  }
}
</script>

<style scoped>

</style>