<template>
  <div class="form-page">
    <h1 class="page-title">Edit Course</h1>
    <form @submit.prevent="editCourseHandler()">
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
        <button :disabled="$v.$invalid">Edit Course</button>
      </div>
    </form>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength } from 'vuelidate/lib/validators'
import axios from 'axios'

export default {
  mixins: [validationMixin],
  data: function() {
    return {
      courseId: this.$route.params.id,
      title: null,
      description: null,
      image: null
    }
  },
  methods: {
    editCourseHandler() {
      let course = {
        title: this.title,
        description: this.description,
        image: this.image
      }
      axios(`http://localhost:3000/api/course/edit/${this.courseId}`, {
        method: "put",
        data: course,
        withCredentials: true
      })
        .then(() => {
          this.$router.push('/my-courses');
        });
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
  created() {
    axios(`http://localhost:3000/api/course/${this.courseId}`, {
      method: "get",
      withCredentials: true
    })
      .then(res => {
        this.title = res.data.title,
        this.description = res.data.description,
        this.image = res.data.image
      })
  }
}
</script>

<style scoped>

</style>