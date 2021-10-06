<template>
    <div class="footer col-12 col-s-12">
        <div class="icons">
            <img src="@/assets/Icons/fb.png" alt="">
            <img src="@/assets/Icons/instagram.png" alt="">
            <img src="@/assets/Icons/tw.png" alt="">
            <img src="@/assets/Icons/Linkedin.png" alt="">
        </div>
        <div class="footer-text">
            Copyright ©2020 All rights reserved 
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles.scss";
.footer{
    padding: 30px;
    background-color: #fff;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    .icons{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        img{
            width: 20px;
            height: 20px;
            margin: 10px;
            padding-bottom: 20px;
            cursor: pointer;
        }
    }
}
</style>