<template>
    <div class="index">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>订单列表</span>
                <download-excel class="export-excel-wrapper" :data="json_data" :fields="json_fields"
                    name="远程诊断报告导出.xls">
                    <!-- 上面可以自定义自己的样式，还可以引用其他组件button -->
                    <el-button round type="primary" size="small">导出数据</el-button>
                </download-excel>
            </div>
            <!-- 搜索 -->

            <div class="top">
                <div class="l">
                    <div class="l-1">
                        <div>
                            <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                                <el-button slot="append" icon="el-icon-search"></el-button>
                            </el-input>
                        </div>
                    </div>
                    <div class="r-1">
                        <div>
                            <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                                <el-button slot="append" icon="el-icon-search"></el-button>
                            </el-input>
                        </div>
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
            json_fields: {
                "头部-诊断名称": "name",    //常规字段
                "头部-联系电话": "phone.mobile", //支持嵌套属性
                "头部-损坏区域代码": {
                    field: "phone.landline",
                    //自定义回调函数
                    callback: value => {
                        return `损坏区域代码 - ${value}`;
                    }
                }
            },
            json_data: [
                {
                    name: "损坏的组件一",
                    city: "New York",
                    country: "United States",
                    birthdate: "1978-03-15",
                    phone: {
                        mobile: "1-541-754-3010",
                        landline: "(541) 754-3010"
                    }
                },
                {
                    name: "损坏的组件二",
                    city: "Athens",
                    country: "Greece",
                    birthdate: "1987-11-23",
                    phone: {
                        mobile: "+1 855 275 5071",
                        landline: "(2741) 2621-244"
                    }
                }
            ],
            json_meta: [
                [
                    {
                        " key ": " charset ",
                        " value ": " utf- 8 "
                    }
                ]
            ],

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
            //表格end
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
            width: 700px;
            float: left;
            .l-1 {
                float: left;
            }
            .r-1 {
                float: right;
                margin-right: 50px;
            }

            .el-input {
                width: 300px;
            }
            .ss {
                background-color: transparent;
            }
        }
        .r {
            float: right;
        }
    }
    .el-table {
        margin-top: 70px;
    }
    //分页
    .el-pagination {
        background: #ccc;
        text-align: right;
        width: 100%;
        padding: 10px 0;
        margin-top: 20px;
    }
    //分页end
}
</style>