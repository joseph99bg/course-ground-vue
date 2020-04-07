<template>
  <div>
    <loader v-if="!course && !error" />
    <div class="course-details" v-if="course">
      <img :src="course.image" alt="">
      <div class="course-text">
        <h1>{{course.title}}</h1>
        <p>{{course.description}}</p>
        <a class="enroll-course" v-if="!courseEnrolled && !myCourse && isLogged" @click="enrollCourse(course._id)">Enroll</a>
        <span class="already-enrolled" v-if="courseEnrolled">You are enrolled to this course</span>
        <span class="already-enrolled" v-if="!isLogged">Please log in to enroll a course!</span>
      </div>
    </div>
    <div class="course-error" v-if="error">
      <h2 class="course-error purple-color">No such course!</h2>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Loader from '../core/Loader'
import authStore from '../../store/auth.js'

export default {
  data() {
    return {
      courseId: this.$route.params.id,
      course: null,
      courseEnrolled: false,
      myCourse: false,
      error: null,
      isLogged: !!authStore.user
    }
  },
  components: {
    Loader
  },
  methods: {
    loadCourse() {
      axios.get(`http://localhost:3000/api/course/${this.courseId}`)
        .then(res => {
          this.course = res.data;
          if (localStorage.getItem('current-user-id')) {
            const userId = localStorage.getItem('current-user-id');
            if (res.data.users.find(x => x === userId)) {
              this.courseEnrolled = true;
            }
            if (res.data.author === userId) {
              this.myCourse = true;
            }
          }
        })
        .catch(err => {
          this.error = err
        })
    },
    enrollCourse(courseId) {
      axios(`http://localhost:3000/api/course/enroll/${courseId}`, {
        method: "put",
        data: null,
        withCredentials: true
      })
        .then(() => {
          this.$router.push('/courses-enrolled')
        })
    }
  },
  created() {
    this.loadCourse()
  }
}
</script>

<style scoped>
  .course-details {
    display: flex;
  }

  .course-details img {
    width: 33.33%;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
    margin-right: 20px;
  }

  .course-text {
    width: 66.66%;
    background-color: rgb(113, 110, 249);
    padding: 30px;
    border-radius: 10px;
    margin-left: 20px;
    position: relative;
  }

  .course-text h1 {
    color: #FFF;
    margin: 0;
    letter-spacing: 2px;
  }

  .course-text p {
    font-size: 20px;
    color: #FFF;
    margin-bottom: 0;
  }

  .enroll-course {
    border: 2px solid #FFF;
    color: #FFF;
    font-size: 25px;
    position: absolute;
    bottom: 30px;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
  }

  .enroll-course:hover {
    background: #FFF;
    color: #716EF9;
    ;
  }

  .already-enrolled {
    color: #FFF;
    position: absolute;
    bottom: 30px;
    font-size: 20px;
  }

  .course-error {
    text-align: center;
    font-size: 50px;
    margin: 0;
  }
</style>