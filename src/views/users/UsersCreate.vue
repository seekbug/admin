<template>
    <div class="index">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>用户创建</span>
                <el-button round type="primary" @click="jump('/users')">返回</el-button>
            </div>
            <!-- 表单 -->
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
                class="demo-ruleForm">
                <el-form-item label="账号" prop="username">
                    <el-input type="password" v-model="formData.username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="formData.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码问题" prop="question">
                    <el-select v-model="formData" placeholder="请选择">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="密保答案" prop="answer">
                    <el-input v-model="formData.answer"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>

    </div>
</template>

<script>
import { postUsersApi } from "@/api"
export default {
    data () {
        // 表单
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
        return {
            //表单数据
            formData: {
                // username: this.username,
                // password: this.password,
                // question: this.question,
                // answer: this.answer
                username: '',
                password: '',
                question: '',
                answer: ''
            },
            //
            // ruleForm: {
            //     pass: '',
            //     checkPass: '',
            //     age: ''
            // },
            //选择数据
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
            //表单验证规则  (选择用change)
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                ],
                question: [
                    { required: true, message: '请填写活动形式', trigger: 'change' }
                ],
                answer: [
                    { required: true, message: '请选择密保答案', trigger: 'blur' }
                ]
            }
            //表单验证规则end
        };
    },
    methods: {
        // 表单
        submitForm (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    // alert('submit!');
                    postUsersApi(this.formData)
                        .then(res => {
                            if (res.meta.state === 201) {
                                this.$message.success(res.meta.msg)
                                this.$router.push({ path: '/users' })
                            } else {
                                this.$message.console.error(res.meta.msg)
                            }
                        })
                    // } else {
                    //     console.log('error submit!!');
                    //     return false;
                }
            });
        },
        resetForm (formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>

<style lang="scss" scoped>
.index {
    //
    .el-form {
        text-align: left;
    }
    //
    width: 100%;
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