<template>
    <div class="index">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>角色列表</span>
                <el-button round type="primary" @click="jump('/roles/create')">创建</el-button>
            </div>
            <!-- 表格 -->
            <el-table :data="tableData1" stripe style="width: 100%">
                <el-table-column prop="role_id" label="编号" width="140">
                </el-table-column>
                <el-table-column prop="role_name" label="角色名称" width="140">
                </el-table-column>
                <el-table-column prop="role_describe" label="角色描述" width="180">
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="primary" circle @click="dialogVisible = true">分配权限</el-button>
                        <el-button type="primary" icon="el-icon-edit" circle></el-button>
                        <el-button type="danger" icon="el-icon-delete" circle @click="handledel(scope.row.role_id)">
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
        </el-card>
        <!-- dialog对话框(放表格外面) -->
        <el-button type="text" @click="dialogVisible = true"></el-button>
        <el-dialog title="提示" :visible.sync="dialogVisible" width="60%" :before-close="handleClose">
            <!-- 提示信息 -->
            <el-tree :data="data" show-checkbox node-key="id" :default-expanded-keys="[2, 3]"
                :default-checked-keys="[5]" :props="defaultProps">
            </el-tree>
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
import { getRolesApi, deleteRolesApi } from '@/api/index'
export default {
    created () {
        this.initData()
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
            //表格数据
            pagenum: 1,
            pagesize: 5,
            uname: '',
            start_time: '',
            end_time: '',
            tableData1: [],
            // dialog对话框
            dialogVisible: false,
            //提示信息
            data: [{
                id: 1,
                label: '一级 1',
                children: [{
                    id: 4,
                    label: '二级 1-1',
                    children: [{
                        id: 9,
                        label: '三级 1-1-1'
                    }, {
                        id: 10,
                        label: '三级 1-1-2'
                    }]
                }]
            }, {
                id: 2,
                label: '一级 2',
                children: [{
                    id: 5,
                    label: '二级 2-1'
                }, {
                    id: 6,
                    label: '二级 2-2'
                }]
            }, {
                id: 3,
                label: '一级 3',
                children: [{
                    id: 7,
                    label: '二级 3-1'
                }, {
                    id: 8,
                    label: '二级 3-2'
                }]
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            //提示信息end
            //dialog对话框end
            value: true,
            //表格数据
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
            //表格数据end
        }
    },
    methods: {
        //接口请求
        initData () {
            getRolesApi({
                pagenum: this.pagenum,
                pagesize: this.pagesize,
                uname: this.uname,
                start_time: this.start_time,
                end_time: this.end_time
            })
                .then(res => {
                    console.log(res.data)
                    this.tableData1 = res.data

                })
        },
        //dialog对话框
        handleClose (done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => { });
        },
        //dialog对话框end

        //删除
        handledel (role_id) {

            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                deleteRolesApi({
                    role_id
                })
                    .then(res => {
                        if (res.meta.state === 200) {
                            this.$message.success(res.meta.msg);
                            this.initData()
                        } else {
                            this.$message.error(res.meta.msg)
                        }
                    })
            });

        },
    }
}
</script>

<style lang="scss" scoped>
.index {
    width: 100%;
    //dialog
    .el-dialog_header {
        text-align: left;
    }
    .el-form {
        text-align: left;
    }
    //搜素
    // .l{
    //     border: 1px #d9d9d9 solid;
    //     width: 226px;
    //     float: left;
    //     input{
    //         width: 170px;
    //         height: 37px;
    //         border: 0;
    //     }
    //     .ss{
    //         background-color: transparent;
    //     }
    // }
    // .r{
    //     float: right;
    // }
    // 搜索end

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