<template>
  <div class="my-container">
    <div class="content col-8 col-s-12">
      <h1>Hi, I'm John, <br>
          Creative Technologist
      </h1>
      <p class="col-10">Lorem, ipsum dolor sit amet consectetur
        Repellat natus numquam ipsa voluptates pariatur
        Repellat natus numquam ipsa voluptates
        sapiente expedita consequatur Blanditiis.</p>
      <span class="primary-btn">Download Resume</span>
    </div>
    <div class="picture col-4 col-s-12">
      <img src="@/assets/Pics/avatar.png" alt="">
    </div>
  </div>
  <!-- Should route to /blog -->
  <div>
    <blog-preview></blog-preview>
  </div>
  <!-- should route to /works -->
  <div>
    <works-preview></works-preview>
  </div>
</template>

<script>
import WorksPreview from '../components/Preview/WorksPreview.vue'
import BlogPreview from '../components/Preview/BlogPreview.vue'
export default {
  components: {
    WorksPreview,
    BlogPreview
  }
  
}
</script>


<style lang="scss" scoped>
@import "@/assets/styles.scss";
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h1{
  font-size: 40px;
  margin-bottom: 30px;
}
.my-container{
  margin: 20px auto;
  padding: 100px 100px 0 100px;
  display: flex;
  flex-flow: row wrap;
  .content{
    display: flex;
    flex-flow: column wrap;
    margin-bottom: 50px;
    .primary-btn{
      background-color: $primary;
      color: #fff;
      width: fit-content;
      padding: 10px 20px;
      margin-top: 50px;
      cursor: pointer;
    }
  }
  .picture{
    img{
      float: right;
    }
  }
}
</style>


