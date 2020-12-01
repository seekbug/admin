<template>
    <div class="index">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>订单统计</span>
                <el-button round type="primary">导出数据</el-button>
            </div>
            <!-- 搜索 -->
            <div class="top">
                <div class="l">
                    <div class="l-1">
                        <div>
                            <el-input placeholder="收货人" v-model="consignee" class="input-with-select">
                                <el-button slot="append" icon="el-icon-search" @click="initData"></el-button>
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
            <div id="myChart" :style="{width: '1000px', height: '500px'}"></div>
        </el-card>

    </div>
</template>

<script>
import { getTotalApi } from '@/api'
export default {
    mounted () {
        this.drawLine();
    },
    created () {
        this.initData()
    },
    watch: {
        value1 (newData) {
            // console.log(newData)
            this.start_time = newData[0]
            this.end_time = newData[1]
            this.initData()
        }
    },
    methods: {
        //请求接口
        initData () {
            getTotalApi({
                consignee: this.consignee,
                start_time: this.start_time,
                end_time: this.end_time
            })
                .then(res => {
                    // console.log(res.data)
                    this.tableData2 = res.data.data
                    this.tableTitle2 = res.data.title
                    this.drawLine();

                })
        },
        //echarts
        drawLine () {
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            myChart.setOption({
                tooltip: {},
                xAxis: {
                    // data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                    data: this.tableTitle2

                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    // data: [5, 20, 36, 10, 10, 20]
                    data: this.tableData2
                }]
            })
        },
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
            value1: [],
            consignee: '',
            start_time: '',
            end_time: '',
            tableTitle2: [],
            tableData2: [],
            //echarts
            msg: 'Welcome to Your Vue.js App',
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
            value2: '',


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
            .l-1 {
                float: left;
            }
            .r-1 {
                float: right;
                margin-left: 50px;
            }

            .el-input {
                width: 300px;
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