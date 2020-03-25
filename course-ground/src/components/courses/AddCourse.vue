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
        <input type="text" v-model="image" name="image" id="image" required />
        <!-- <ngx-uploadcare-widget (on-upload-complete)="imageUploadHandler($event)" images-only="true"
          public-key="2b9cee02e41f4b7b23fa">
        </ngx-uploadcare-widget> -->
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

export default {
  mixins: [validationMixin],
  data: function() {
    return {
      title: null,
      description: null,
      image: null
    }
  },
  methods: {
    addCourseHandler() {
      console.log(`Title: ${this.title}`);
      console.log(`Desc: ${this.description}`);
      console.log(`Image: ${this.image}`);
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
  }
}
</script>

<style scoped>

</style>