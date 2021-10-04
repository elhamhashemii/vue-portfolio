<template>
    <div class="blog">
        <div class="my-container">
            <div class="b-row">
                <div>Recent Posts</div>
                <div><router-link to="/blog">View All</router-link></div>
            </div>
            <div class="b-row">
                <div class="card col-6">
                    <h2 class="card-title">Title</h2>
                    <span>12 Feb 2020 | Design, Pattern</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, error
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, error
                    </p>
                </div>
                <div class="card col-6">
                    <h2 class="card-title">Title</h2>
                    <span>12 Feb 2020 | Figma, Icon Design</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, error
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, error
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

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