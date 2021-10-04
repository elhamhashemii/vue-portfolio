<template>
    <div class="nav">  
    <router-link to="/blog">Blog</router-link>
    <router-link to="/works">Works</router-link>
    <router-link to="/contact">Contact</router-link>
    </div>
    <div class="responsive-nav" @click="openMenu()" v-if="!sideMenu">
        <img src="@/assets/Icons/menu.png" alt="">
    </div>
    <div class="col-s-5 side-menu" v-if="sideMenu">
        <span @click="closeMenu()"><img src="@/assets/Icons/cancel.png" alt=""></span>
        <ul>
            <li><router-link to="/blog">Blog</router-link></li>
            <li><router-link to="/works">Works</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            sideMenu: false
        }
    },
    methods:{
        openMenu(){
            this.sideMenu = true
        },
        closeMenu(){
            this.sideMenu = false
        }
    }
}
</script>

<style scoped lang="scss">
@import "@/assets/styles.scss";
@media only screen and (min-width: 500px) {
    .nav{
        display: none;
    }
}
.responsive-nav{
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-end;
        padding: 10px;
        img{
            width: 30px;
            height: 30px;
            cursor: pointer;
        }
    }
.side-menu{
        // timing-function delay iteration-count direction fill-mode
        animation: sideMenu 2s ease;
        ul{
            background-color: $bgcolor;
            li{
                list-style-type: none;
                padding: 10px 0;
                // why doesnt it work?
                &.hover{
                    color: white;
                }
                a{
                    text-decoration: none;
                    color: #111;
                }
            }
        }
        span{
            img{
                cursor: pointer;
                width: 20px;
                height: 20px;
            }
            }
}

// Animation
@keyframes sideMenu{
    from{
        clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
    }
    to{
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
}
@media only screen and (min-width: 700px) {
    .nav {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    padding-right: 30px;
    a {
    color: #111;
    font-weight: bolder;
    text-decoration: none;
    padding: 10px;
    }
    }
    .responsive-nav{
        display: none;
    }
    .side-menu{
        display: none;
    }
}

</style>