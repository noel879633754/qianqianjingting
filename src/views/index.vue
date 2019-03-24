<template>
<div class="index">
    <router-view></router-view>

    <ul>
        <li>
            <router-link to="/home">
                <img src="../assets/logo-ea5.png" alt="">
            </router-link>
        </li>
        <li>
            <router-link to="/artists">
                歌手
            </router-link>
        </li>
        <li>
            <router-link to="/listcate">
                榜单
            </router-link>
        </li>
        <li>
            <router-link to="/ucenter">
                我的
            </router-link>
        </li>
        <li>
            <router-link to="/search">
                搜索
            </router-link>
        </li>
    </ul>
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
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 100;
        width: 100%;
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
