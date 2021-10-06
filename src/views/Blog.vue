<template>
    <div class="my-container">
        <div class="card col-6" v-for="post in posts" :key="post.id">
            <h2 class="card-title">{{ post.title }}</h2>
            <p>
                <span>{{ post.date }}</span>
                <span>{{ post.category }}</span>
            </p>
            <p>
                {{ post.des }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        posts(){
            return this.$store.state.posts;
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles.scss";
.my-container{
    margin: 20px auto;
    padding: 0 100px 100px 100px;
    .card{
            display: flex;
            flex-flow: column wrap;
            background-color: #fff;
            padding: 10px;
            margin: 10px;
            border-radius: 4px;
            width: fit-content;
            border-bottom: 1px solid $light;
            span{
                color: $light;
            }
        }
}
</style>