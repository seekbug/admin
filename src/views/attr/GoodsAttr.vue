 <template>
   <div class="index">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>商品类型</span>
                <el-button round type="primary">创建</el-button>
            </div>

        <!-- 表格 -->
           <el-table
            :data="tableData"
            stripe
            style="width: 100%">
            <el-table-column
            prop="date"
            label="日期"
            width="180">
            </el-table-column>
            <el-table-column
            prop="name"
            label="姓名"
            width="180">
            </el-table-column>
            <el-table-column
            prop="address"
            label="地址">
            </el-table-column>
            </el-table>
        <!-- 表格end -->
        <!-- 分页 --> 
            <div class="block">
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
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
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
            //分页end
        },
       

        data() {
        return {
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
          
            }
        }    
    }
</script>

<style lang="scss" scoped>
    .index{
        width: 100%;
        .el-card{
            width: 100%;
        }
         .box-card {
            .clearfix{
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
        }
        .top{
            width: 100%;
            background: red;
            margin-bottom: 20px;
        }
    

        //分页
          .el-pagination{
            background: #ccc;
            text-align:right;
            width: 100%;
            padding: 10px 0;
            margin-top: 20px;
        }
    }


 
</style>