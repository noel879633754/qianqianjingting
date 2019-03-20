<template>
<div class="index">
    <ul>
        <li>
            <router-link to="/home">
                <img src="../assets/logo-ea5.png" alt="">
            </router-link>
        </li>
        <li>
            <router-link to="/artists">
                <img src="../assets/logo-ea5.png" alt="">
            </router-link>
        </li>
        <li>
            <router-link to="/listcate">
                <img src="../assets/logo-ea5.png" alt="">
            </router-link>
        </li>
        <li>
            <router-link to="/ucenter">
                <img src="../assets/logo-ea5.png" alt="">
            </router-link>
        </li>
        <li>
            <router-link to="/search">
                <img src="../assets/logo-ea5.png" alt="">
            </router-link>
        </li>
    </ul>
    <router-view></router-view>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.index{
    ul{
        display: flex;
        height: 50px;
        line-height: 50px;
        background: #f6f6f6;
        li{
            flex: 1;
            text-align: center;
            a{
                font-size: 16px;
                color: #999;
                img{
                    width: 26px;
                    height: 26px;
                }
            }
        }
    }
}
</style>
