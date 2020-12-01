<template>
    <div class="index">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>请输入商品名</span>
                <el-button round type="primary">创建</el-button>
            </div>
            <!-- 搜索 -->
            <div class="top">
                <div class="l">
                    <div>
                        <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                            <el-button slot="append" icon="el-icon-search"></el-button>
                        </el-input>
                    </div>
                </div>
                <div class="r">
                    <div class="block">
                        <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期"
                            end-placeholder="结束日期">
                        </el-date-picker>
                    </div>
                </div>
            </div>
            <!-- 搜索end -->

            <!-- 表格 -->
            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="date" label="日期" width="180">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="180">
                </el-table-column>
                <el-table-column prop="address" label="地址">
                </el-table-column>
            </el-table>
            <!-- 表格end -->
            <!-- 分页 -->
            <div class="block">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                    :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper" :total="400">
                </el-pagination>
            </div>
            <!-- 分页end -->

        </el-card>

    </div>
</template>

<script>
export default {
    methods: {
        //  分页
        handleSizeChange (val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange (val) {
            console.log(`当前页: ${val}`);
        }
        //分页end
    },


    data () {
        return {
            //日期
            pickerOptions: {
                shortcuts: [{
                    text: '最近一周',
                    onClick (picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一个月',
                    onClick (picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近三个月',
                    onClick (picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        picker.$emit('pick', [start, end]);
                    }
                }]
            },
            value1: '',
            value2: '',
            // 表格
            tableData: [{
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-08',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-06',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-07',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }]
            //
        }
    }
}
</script>

<style lang="scss" scoped>
.index {
    width: 100%;
    .el-card {
        width: 100%;
    }
    .box-card {
        .clearfix {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
    .top {
        width: 100%;
        background: red;
        margin-bottom: 20px;
        .l {
            float: left;
            .el-input {
                width: 400px;
            }
        }
        .r {
            float: right;
        }
    }
    // 表格
    // .demo-table-expand {
    //     font-size: 0;
    // }
    // .demo-table-expand label {
    //     width: 90px;
    //     color: #99a9bf;
    // }
    // .demo-table-expand .el-form-item {
    //     margin-right: 0;
    //     margin-bottom: 0;
    //     width: 50%;
    // }
    .el-table {
        margin-top: 60px;
    }
    //分页
    .el-pagination {
        background: #ccc;
        text-align: right;
        width: 100%;
        padding: 10px 0;
        margin-top: 20px;
    }
}
</style>