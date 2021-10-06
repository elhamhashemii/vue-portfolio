<template>
    <div class="blog">
        <div class="my-container">
            <div class="b-row">
                <div>Recent Posts</div>
                <div><router-link to="/blog">View All</router-link></div>
            </div>
            <div class="b-row">
                <!-- <div class="card col-6">
                    <h2 class="card-title">Title</h2>
                    <p>
                        <span>12 Feb 2020</span>
                        <span>Design, Pattern</span>
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, error
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, error
                    </p>
                </div> -->
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
.blog{
    // display: flex;
    // flex-flow: column wrap;
    background-color: #EDF7FA;
    .my-container{
        margin: 20px auto;
        padding: 100px;
    }
    .b-row{
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        a{
            color: $secondary;
            text-decoration: none;
        }
        .card{
            display: flex;
            flex-flow: column wrap;
            background-color: #fff;
            padding: 10px;
            margin: 10px;
            border-radius: 4px;
            width: fit-content;
            span{
                color: $light;
            }
        }
    }
}
</style>