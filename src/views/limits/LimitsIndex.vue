
<template>
    <!-- roles -->
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>权限列表</span>
        </div>
        <el-input placeholder="输入关键字进行过滤" v-model="filterText"></el-input>

        <el-tree class="filter-tree" :data="tableData2" :props="defaultProps" default-expand-all
            :filter-node-method="filterNode" ref="tree2">
        </el-tree>
    </el-card>
</template>

<script>
// import { getAuthApi } from '@/api'

// console.log(11111)

// export default {
//     created () {
//         getAuthApi()
//             .then(res => {
//                 console.log(res)
//                 if (res.meta.state === 200) {
//                     // this.tableData2 = res.data.
//                 }
//             })
//     }
// };
</script>

<style lang="scss" scoped>
.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.box-card {
    width: 100%;
    min-height: 500px;
}
.el-input {
    margin-top: 10px;
    margin-bottom: 20px;
}
</style>



<script>
import { getAuthApi } from '@/api'

export default {
    watch: {
        filterText (val) {
            this.$refs.tree2.filter(val);
        },
    },


    created () {
        getAuthApi()
            .then(res => {
                console.log(res)
                if (res.meta.state === 200) {
                    this.tableData2 = res.data
                }
            })
    },

    methods: {
        filterNode (value, data) {
            if (!value) return true;
            //   return data.label.indexOf(value) !== -1;
            return data.auth_name.indexOf(value) !== -1;
        },
    },

    data () {
        return {
            tableData2: [],
            filterText: "",
            data: [
                {
                    id: 1,
                    label: "后台首页",
                    children: [
                        {
                            id: 4,
                            label: "二级 1-1",
                            children: [
                                {
                                    id: 9,
                                    label: "三级 1-1-1",
                                },
                                {
                                    id: 10,
                                    label: "三级 1-1-2",
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 2,
                    label: "商品分类",
                    children: [
                        {
                            id: 5,
                            label: "二级 2-1",
                        },
                        {
                            id: 6,
                            label: "二级 2-2",
                        },
                    ],
                },

                {
                    id: 3,
                    label: "商品属性",
                    children: [
                        {
                            id: 7,
                            label: "二级 3-1",
                        },
                        {
                            id: 8,
                            label: "二级 3-2",
                        },
                    ],
                },
                {
                    id: 4,
                    label: "商品管理",
                    children: [
                        {
                            id: 7,
                            label: "二级 3-1",
                        },
                        {
                            id: 8,
                            label: "二级 3-2",
                        },
                    ],
                },
                {
                    id: 5,
                    label: "订单管理",
                    children: [
                        {
                            id: 7,
                            label: "二级 3-1",
                        },
                        {
                            id: 8,
                            label: "二级 3-2",
                        },
                    ],
                },
                {
                    id: 6,
                    label: "用户管理",
                    children: [
                        {
                            id: 7,
                            label: "二级 3-1",
                        },
                        {
                            id: 8,
                            label: "二级 3-2",
                        },
                    ],
                },
                {
                    id: 7,
                    label: "角色管理",
                    children: [
                        {
                            id: 7,
                            label: "二级 3-1",
                        },
                        {
                            id: 8,
                            label: "二级 3-2",
                        },
                    ],
                },
                {
                    id: 8,
                    label: "权限管理",
                    children: [
                        {
                            id: 7,
                            label: "二级 3-1",
                        },
                        {
                            id: 8,
                            label: "二级 3-2",
                        },
                    ],
                },
            ],
            defaultProps: {
                children: "children",  // 子组件在哪个属性中
                // label: "label",  // 组件名
                label: "auth_name",  // 组件名
            },
        };
    },
};
</script>