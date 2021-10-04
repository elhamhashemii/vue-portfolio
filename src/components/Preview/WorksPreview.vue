<template>
    <div class="works">
        <div class="my-container">
            <h3>Featured works</h3>
            <div class="work">
                <div class="w-pic">
                    <img src="@/assets/Pics/Rectangle30.png" alt="">
                </div>
                <div class="work-content">
                    <h2>Title</h2>
                    <p>
                        <span>2021</span>
                        <span>we relax</span>
                    </p>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
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
        img{
           width: 250px;
           height: 150px;
        }
        .work-content{
            display: flex;
            flex-flow: column wrap;
            margin-left: 30px;
            h2{
                margin-top: 0;
            }
            p{
                span{
                    margin-right: 30px;
                }
            }
        }
    }
}
}
</style>