<template>
  <div class="course-list-page">
    <h1 class="page-title">Courses</h1>
    <div class="courses-list">
      <div class="course-item">
        <img src="https://i.morioh.com/ba23cdfe71.png">
        <div class="course-info">
          <h4 class="green-color">JS Course</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <a class="green-border green-color">Details</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
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