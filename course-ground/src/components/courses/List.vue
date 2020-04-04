<template>
  <div class="course-list-page">
    <h1 class="page-title">Courses</h1>
    <loader v-if="!courses"/>
    <div class="courses-list" v-if="courses">
      <div class="course-item" v-for="course in courses" :key="course._id">
        <img :src="course.image">
        <div class="course-info">
          <h4 class="green-color">{{course.title}}</h4>
          <p>
            {{course.description}}
          </p>
          <router-link class="green-border green-color" :to="`/course/${course._id}`">Details</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Loader from '../core/Loader'

export default {
  data() {
    return {
      courses: null
    }
  },
  components: {
    Loader
  },
  methods: {
    loadCourses() {
      axios.get('http://localhost:3000/api/course').then(res => {
        this.courses = res.data;
        console.log(res.data);
      })
    }
  },
  created() {
    this.loadCourses()
  }
}
</script>

<style scoped>
  .course-item {
    width: calc(33.33% - 30px);
    display: inline-block;
    margin: 15px;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    border-radius: 10px;
    overflow: hidden;
  }
  .course-item img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
  .course-info {
    padding: 20px;
    position: relative;
  }
  .course-info h4 {
    font-size: 24px;
    margin: 0;
    color: #333;
  }
  .course-info p {
    font-size: 18px;
    margin-bottom: 0;
  }
  .course-info a {
    display: block;
    width: 35%;
    margin: 40px auto 0 auto;
    padding: 10px 0;
    border-width: 3px;
    border-style: solid;
    border-radius: 10px;
    font-family: 'Russo One';
    font-size: 22px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
  }
  .course-info a:hover {
    background-color: #00cd8c;
    color: #FFF;
  }
  .course-info button {
    background: transparent;
    border: 0;
    font-size: 30px;
    position: absolute;
    bottom: 30px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    outline: none;
  }
  .course-info .delete-btn {
    color: #ff3838;
    left: 15px;
  }
  .course-info .edit-btn {
    color: #3888ff;
    right: 15px;
  }
  .course-info button:hover {
    transform: scale(1.3);
  }
  h3 {
    text-align: center;
    font-size: 30px;
    margin: 0;
  }
</style>