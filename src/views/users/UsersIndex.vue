<template>
    <div class="index">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>用户列表</span>
                <el-button round type="primary" @click="jump('/users/create')">创建</el-button>
            </div>
            <!-- 搜索 -->
            <div class="top">
                <div class="l">
                    <div>
                        <el-input placeholder="请输入内容" v-model="uname" class="input-with-select">
                            <el-button slot="append" icon="el-icon-search" @click="initData"></el-button>
                        </el-input>
                    </div>
                </div>
                <div class="r">
                    <div class="block">
                        <el-date-picker v-model="value" type="daterange" range-separator="至" start-placeholder="开始日期"
                            end-placeholder="结束日期">
                        </el-date-picker>
                    </div>
                </div>
            </div>
            <!-- 搜索end -->
            <!-- 表格 -->
            <el-table :data="tableData2" stripe style="width: 100%">
                <el-table-column prop="user_id" label="编号" width="100">
                </el-table-column>
                <el-table-column prop="role_name" label="所属角色" width="100">
                </el-table-column>
                <el-table-column prop="username" label="用户名" width="100">
                </el-table-column>
                <el-table-column prop="mobile_phone" label="手机号" width="100">
                </el-table-column>
                <el-table-column prop="dong" label="冻结" width="100">
                    <template slot-scope="scope">
                        <el-switch @change="handleSwitch(scope.row.state,scope.row.user_id)" v-model="scope.row.state"
                            active-value='1' inactive-value='0' active-color="#13ce66" inactive-color="#ff4949">
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column prop="reg_time" label="时间" width="100">
                </el-table-column>
                <el-table-column label="操作" width="180">
                    <template slot-scope="scope">
                        <el-button type="primary" circle @click="dialogVisible=true">分配角色</el-button>
                        <el-button type="danger" icon="el-icon-delete" circle @click="handledel(scope.row.user_id)">
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 表格 -->

            <!-- 弹框 -->
            <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
                <span>此操作将永久删除该文件, 是否继续?</span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </span>
            </el-dialog>
            <!-- 弹框end -->

            <!-- 分页 -->
            <div class="block">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                    :current-page="currentPage4" :page-sizes="[5, 200, 300, 400]" :page-size="5"
                    layout="total, sizes, prev, pager, next, jumper" :total="tableData2Total">
                </el-pagination>
            </div>
        </el-card>
        <!-- dialog对话框(放表格外面) -->
        <el-dialog class="el-dialog_header" title="分配角色" :visible.sync="dialogVisible" width="60%"
            :before-close="handleClose">
            <!-- 提示信息 -->
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
                class="demo-ruleForm">
                <el-form-item label="当前用户" prop="pass">
                    <!-- <el-button disabled>扫码688</el-button> -->
                    <el-tag type="info" disabled="">扫码688</el-tag>
                </el-form-item>
                <el-form-item label="当前角色" prop="checkPass">
                    <el-tag type="info">普通用户</el-tag>
                </el-form-item>
                <el-form-item label="选择角色">
                    <el-select v-model="value" placeholder="请选择">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
            <!-- 提示信息end -->
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
        <!-- dialog对话框end -->

    </div>
</template>

<script>
//导入接口
import { getUsersApi, putUserGoodsApi, deleteusersApi } from '@/api/index'

export default {
    watch: {
        value (newData) {
            console.log(newData)
            this.start_time = newData[0]
            this.end_time = newData[1]
            this.initData()
        }
    },
    data () {
        //
        var checkAge = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('年龄不能为空'));
            }
            setTimeout(() => {
                if (!Number.isInteger(value)) {
                    callback(new Error('请输入数字值'));
                } else {
                    if (value < 18) {
                        callback(new Error('必须年满18岁'));
                    } else {
                        callback();
                    }
                }
            }, 1000);
        };
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.ruleForm.checkPass !== '') {
                    this.$refs.ruleForm.validateField('checkPass');
                }
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm.pass) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        //
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.ruleForm.checkPass !== '') {
                    this.$refs.ruleForm.validateField('checkPass');
                }
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm.pass) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            //搜索
            select: '',
            // 表格列表数据
            pagenum: 1,  //当前页为第一页
            pagesize: 5,    //页面显示信息数为3条
            uname: '',
            start_time: '',
            end_time: '',
            tableData2: [],
            tableData2Total: 0,

            // dialog对话框
            dialogVisible: false,
            ruleForm: {
                pass: '',
                checkPass: '',
                age: ''
            },
            rules: {
                pass: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                checkPass: [
                    { validator: validatePass2, trigger: 'blur' }
                ],
                age: [
                    { validator: checkAge, trigger: 'blur' }
                ]
            },
            //选择器
            options: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            value: '',
            //dialog对话框end
            value: true,
            tableData: [{
                date: '602',
                name: '千峰UFO',
                address: 'a5f8ce358ed87d563',
                numbel: '1888888888',
            }, {
                date: '586',
                name: '普通用户',
                address: '扫码群586',
                numbel: '7777777777',

            }, {
                date: '585',
                name: '普通用户',
                address: '扫码群586',
                numbel: '18654d43222',

            }, {
                date: '585',
                name: '普通用户',
                address: '扫码群586',
                numbel: '1888888888',
            }],
            currentPage1: 5,
            currentPage2: 5,
            currentPage3: 5,
            currentPage4: 4
        }
    },
    created () {
        // console.log(getUsersApi);
        this.initData()
    },
    methods: {
        // search () {
        //     this.pagenum = 1;
        //     this.initData()
        // },
        handleSwitch (state, user_id) {
            // console.log(tag, state)
            putUserGoodsApi({
                user_id,
                state
            }).then(res => {
                // console.log(res)
                if (res.meta.state === 200) {
                    this.$message.success(res.meta.msg);
                    // this.initData()   //可以不加 
                } else {
                    this.$message.error(res.meta.msg);
                }
            })
        },
        initData () {
            getUsersApi({
                pagenum: this.pagenum,
                pagesize: this.pagesize,
                uname: this.uname,
                start_time: this.start_time,
                end_time: this.end_time
            })
                .then(res => {
                    console.log(res.data)
                    this.tableData2 = res.data.list
                    this.tableData2Total = parseInt(res.data.total)
                })
        },
        //dialog对话框
        submitForm (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm (formName) {
            this.$refs[formName].resetFields();
        },
        //dialog对话框end
        handleClose (done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => { });
        },
        //弹框

        //删除
        handledel (user_id) {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                deleteusersApi({
                    user_id
                }).then(res => {
                    if (res.meta.state === 200) {
                        this.$message.success(res.meta.msg);
                        this.initData()
                    } else {
                        this.$message.error(res.meta.msg);
                    }
                })
            })
        },
        //分页
        handleSizeChange (val) {
            console.log(`每页 ${val} 条`)
        },
        handleCurrentChange (val) {
            console.log(`当前页: ${val}`)
            this.pagenum = val;
            this.initData()
        }
    }
}
</script>

<style lang="scss" scoped>
.index {
    width: 100%;
    //搜索
    .el-select .el-input {
        width: 130px;
    }
    .input-with-select .el-input-group__prepend {
        background-color: #fff;
    }
    //dialog
    .el-dialog_header {
        text-align: left;
    }
    .el-form {
        text-align: left;
    }
    //搜素
    .l {
        float: left;
        .el-input {
            width: 400px;
        }
    }
    .r {
        float: right;
    }
    // 搜索end
    .el-table {
        width: 100%;
        margin-top: 60px;
    }
    .el-card {
        width: 100%;
    }
    .el-pagination {
        background: #ccc;
        text-align: right;
        width: 100%;
        padding: 5px 0;
    }
}
.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.box-card {
    .clearfix {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
</style>