<template>
    <div id="index">
        <div class="menu" :style="menuWidth">
            <el-menu background-color="#263445" v-model="isCollapse" default-active="1-4-1"
                class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="iconfont icon-shezhi"></i>
                        <span slot="title">后台首页</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1" @click="jump('/welcome')"><i class="iconfont icon-shezhi1"></i>欢迎页
                        </el-menu-item>
                        <el-menu-item index="1-2" @click="jump('/history')"><i class="iconfont icon-shezhi1"></i>访问记录
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="iconfont icon-shezhi"></i>
                        <span slot="title">商品分类</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="2-1" @click="jump('/cate')"><i class="iconfont icon-shezhi1"></i>分类列表
                        </el-menu-item>
                        <el-menu-item index="2-2" @click="jump('/cate/create')"><i
                                class="iconfont icon-shezhi1"></i>分类创建
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                        <i class="iconfont icon-shezhi"></i>
                        <span slot="title">商品属性</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="3-1" @click="jump('/goods/type')"><i class="iconfont icon-shezhi1"></i>商品类型
                        </el-menu-item>
                        <el-menu-item index="3-2" @click="jump('/type/create')"><i
                                class="iconfont icon-shezhi1"></i>类型创建
                        </el-menu-item>
                        <el-menu-item index="3-3" @click="jump('/goods/attr')"><i class="iconfont icon-shezhi1"></i>商品属性
                        </el-menu-item>
                        <el-menu-item index="3-4" @click="jump('/attr/create')"><i
                                class="iconfont icon-shezhi1"></i>属性创建
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">
                        <i class="iconfont icon-shezhi"></i>
                        <span slot="title">商品管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="4-1" @click="jump('/orders')"><i class="iconfont icon-shezhi1"></i>商品列表
                        </el-menu-item>
                        <el-menu-item index="4-2" @click="jump('/orders/create')"><i
                                class="iconfont icon-shezhi1"></i>商品创建
                        </el-menu-item>
                        <el-menu-item index="4-3" @click="jump('/orders/recycle')"><i
                                class="iconfont icon-shezhi1"></i>商品回收站
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="5">
                    <template slot="title">
                        <i class="iconfont icon-shezhi"></i>
                        <span slot="title">订单管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="5-1" @click="jump('/dingd')"><i class="iconfont icon-shezhi1"></i>订单管理
                        </el-menu-item>
                        <el-menu-item index="5-2" @click="jump('/ding/recycle')"><i
                                class="iconfont icon-shezhi1"></i>订单回收站
                        </el-menu-item>
                        <el-menu-item index="5-3" @click="jump('/ding/total')"><i class="iconfont icon-shezhi1"></i>订单统计
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="6">
                    <template slot="title">
                        <i class="iconfont icon-shezhi"></i>
                        <span slot="title">用户管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="6-1" @click="jump('/users')"><i class="iconfont icon-shezhi1"></i>用户列表
                        </el-menu-item>
                        <el-menu-item index="6-2" @click="jump('/users/create')"><i
                                class="iconfont icon-shezhi1"></i>用户创建
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="7">
                    <template slot="title">
                        <i class="iconfont icon-shezhi"></i>
                        <span slot="title">角色管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="7-1" @click="jump('/roles')"><i class="iconfont icon-shezhi1"></i>角色列表
                        </el-menu-item>
                        <el-menu-item index="7-2" @click="jump('/roles/create')"><i
                                class="iconfont icon-shezhi1"></i>角色创建
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="8">
                    <template slot="title">
                        <i class="iconfont icon-shezhi"></i>
                        <span slot="title">权限管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="8-1" @click="jump('/limits')"><i class="iconfont icon-shezhi1"></i>权限管理
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>

            </el-menu>
        </div>

        <div class="main">
            <div class="top">
                <div class="l">
                    <div class="btn" @click="handlemenu()">
                        <i :class="menuIcon"></i>
                    </div>
                    <div class="breadcrumb">
                        <span>首页 / 后台首页 / 欢迎页</span>
                    </div>
                </div>
                <div class="r">
                    <span>admin(超级管理员)<i class="el-icon-switch-button"></i><i class="el-icon-full-screen"></i></span>

                </div>
            </div>
            <div class="content">
                <!-- <img src="../../assets/img/1.jpg" alt=""> -->
                <router-view>
                </router-view>
            </div>
        </div>
    </div>

</template>

<script>


export default {
    data () {
        return {
            isCollapse: false,
            menuWidth: '200px',
            menuIcon: 'el-icon-s-fold'
        };
    },
    methods: {

        handlemenu () {
            this.isCollapse = !this.isCollapse;
            this.menuWidth = this.isCollapse ? '64px' : '200px';
            this.menuIcon = this.isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold';
        },
        handleOpen (key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose (key, keyPath) {
            console.log(key, keyPath);
        },
        // jump1 () { this.$router.replace('/welcome') },
        // jump2 () { this.$router.replace('/history') },
        // jump3 () { this.$router.replace('/cate') },
        // jump4 () { this.$router.replace('/catecreate') },
        // jump5 () { this.$router.replace('/goodstype') },
        // jump6 () { this.$router.replace('/typecreate') },
        // jump7 () { this.$router.replace('/goodsattr') },
        // jump8 () { this.$router.replace('/attrcreate') },
        // jump9 () { this.$router.replace('/goods') },
        // jump10 () { this.$router.replace('/create') },
        // jump11 () { this.$router.replace('/recycle') },
        // jump12 () { this.$router.replace('/dingd') },
        // jump13 () { this.$router.replace('/dingtotal') },
        // jump14 () { this.$router.replace('/drecycle') },
        // jump15 () { this.$router.replace('/users') },
        // jump16 () { this.$router.replace('/userscreate') },
        // jump17 () { this.$router.replace('/roles') },
        // jump18 () { this.$router.replace('/rolescreate') },
        // jump19 () { this.$router.replace('/limits') },

    }
}
</script>

<style lang="scss" scoped>
#index {
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
    .iconfont {
        margin-right: 5px;
        font-size: 20px;
    }
    .menu {
        text-align: left;
        height: 100%;
        background: #263445;
        span,
        .el-menu-item {
            color: #9aa6b4;
            font-size: 14px;
        }
        .el-menu-vertical-demo:not(.el-menu--collapse) {
            width: 200px;
            min-height: 400px;
        }
    }
    .main {
        flex: 1;
        height: 100%;
        background: #fff;
        overflow-x: hidden;
        overflow-y: scroll;
        .top {
            width: 100%;
            height: 50px;
            box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
            .l {
                width: 300px;
                height: 100%;
                float: left;
                .btn {
                    width: 50px;
                    height: 100%;

                    text-align: center;
                    line-height: 50px;
                    float: left;
                    font-size: 20px;
                    cursor: pointer;
                }
                .breadcrumb {
                    width: 200px;
                    height: 100%;
                    line-height: 50px;
                    float: left;
                }
            }
            .r {
                width: 200px;
                height: 100%;
                float: right;
                line-height: 50px;
            }
        }
        .content {
            width: 96%;
            min-height: 100px;
            margin: 0 auto;
            margin-top: 30px;
            background: #fff;
        }
    }
}
</style>