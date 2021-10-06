<template>
    <div class="works">
        <div class="my-container">
            <h3>Featured works</h3>
            <!-- <div class="work">
                <div class="w-pic">
                    <img src="@/assets/Pics/Rectangle30.png" alt="">
                </div>
                <div class="work-content">
                    <h2>Title</h2>
                    <p>
                        <span class="badge">2021</span>
                        <span>we relax</span>
                    </p>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div> -->
            <div class="work col-12" v-for="work in works" :key="work.id">
                <div class="w-pic col-3 col-s-12">
                    <img :src='work.img' alt="">
                </div>
                <div class="work-content col-8 col-s-12">
                    <h2>{{ work.title }}</h2>
                    <p>
                        <span class="badge">{{ work.badge }}</span>
                        <span> {{ work.des }} </span>
                    </p>
                    <p>{{  work.detail }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        works(){
            return this.$store.state.works;
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles.scss";
.works{
    .my-container{
    margin: 20px auto;
    padding: 0 100px 100px 100px;
    h3{
        margin-bottom: 35px;
    }
    .work{
        display: flex;
        flex-flow: row wrap;
        border-bottom: 1px solid $light;
        padding: 20px 0;
        img{
           width: 250px;
           height: 150px;
        }
        .work-content{
            display: flex;
            flex-flow: column wrap;
            margin-left: 30px;
            .badge{
                background-color: $dark;
                color: #fff;
                padding: 2px 5px;
                border-radius: 10px;
            }
            h2{
                margin-top: 0;
            }
            p{
                span{
                    margin-right: 30px;
                    color: $light;
                }
            }
        }
    }
}
}
</style>