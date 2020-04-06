<template>
  <div class="form-page">
    <h1 class="page-title">Add Course</h1>
    <form @submit.prevent="addCourseHandler()">
      <div class="field-holder">
        <label for="title" class="grey-color">Title</label>
        <input type="text" v-model="title" name="title" id="title" @input="$v.title.$touch()" />
        <template v-if="$v.title.$error">
          <div v-if="!$v.title.required" class="input-error">Please enter a title</div>
          <div v-if="!$v.title.minLength" class="input-error">Title should be at least 6
            chars long</div>
        </template>
      </div>
      <div class="field-holder">
        <label for="description" class="grey-color">Description</label>
        <textarea v-model="description" name="description" id="description" @input="$v.description.$touch()"></textarea>
        <template v-if="$v.description.$error">
          <div v-if="!$v.description.required" class="input-error">Please enter a
            description</div>
          <div v-if="!$v.description.minLength" class="input-error">description
            should be at least 10 chars long</div>
        </template>
      </div>
      <div class="field-holder">
        <label for="image" class="grey-color">Image</label>
        <img :src="image" class="uploaded-image" />
        <uploadcare :publicKey="publicKey" @success="onSuccess($event)" @error="onError">
          <button>Upload Image</button>
        </uploadcare>
      </div>
      <div class="submit-btn-holder">
        <button :disabled="$v.$invalid">Add Course</button>
      </div>
    </form>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength } from 'vuelidate/lib/validators'
import axios from 'axios'
import Uploadcare from 'uploadcare-vue'

export default {
  mixins: [validationMixin],
  components: {
    Uploadcare
  },
  data: function() {
    return {
      title: null,
      description: null,
      image: null,
      publicKey: '64de00b7bda06691c47a'
    }
  },
  methods: {
    addCourseHandler() {
      let course = {
        title: this.title,
        description: this.description,
        image: this.image
      }
      axios('http://localhost:3000/api/course/create', {
        method: "post",
        data: course,
        withCredentials: true
      })
        .then(res => {
          this.$router.push('/');
          console.log(res);
        });
    },
    onSuccess(event) {
      this.image = event.cdnUrl;
    },
    onError() {
      console.log('Error!');
    }
  },
  validations: {
    title: {
      required,
      minLength: minLength(6)
    },
    description: {
      required,
      minLength: minLength(10)
    }
  },
}
</script>

<style scoped>
  .uploaded-image {
    max-width: 100%;
  }
</style>