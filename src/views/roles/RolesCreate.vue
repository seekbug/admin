<template>
    <div class="index">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>角色创建</span>
                <el-button round type="primary" @click="jump('/roles')">返回</el-button>
            </div>
            <!-- 表单 -->
            <el-form :model="formData" :rules="rules" ref="numberValidateForm" label-width="100px"
                class="demo-ruleForm">
                <el-form-item label="角色名称" prop="role_name">
                    <el-input type="age" v-model="formData.role_name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="角色名称" prop="role_describe">
                    <el-input type="age" v-model="formData.role_describe" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
                    <el-button @click="resetForm('numberValidateForm')">重置</el-button>
                </el-form-item>
            </el-form>
            <!-- 表单end -->

        </el-card>

    </div>
</template>

<script>
import { postRolesApi } from '@/api'
export default {
    created () {
        postRolesApi()
            .then()
    },
    data () {
        return {
            formData: {
                role_name: '',
                role_describe: ''
            },
            rules: {
                role_name: [{ required: true, message: '角色名不能为空', trigger: 'bulr' },
                { min: 2, max: 6, message: '角色名不能为空', trigger: 'bulr' }
                ],
                role_describe: [{ required: true, message: '角色描述不能为空', trigger: 'bulr' },
                { min: 2, max: 6, message: '角色描述不能为空', trigger: 'bulr' }
                ]
            },
            numberValidateForm: {
                age: ''
            }
        }
    },
    methods: {
        submitForm (formName) {
            postRolesApi(this.formData)
                .then(res => {
                    if (res.meta.state === 201) {
                        this.$message.success(res.meta.msg)
                        // jump('/roles')
                        this.$router.push({ path: '/roles' })
                    } else {
                        this.$message.success(res.meta.msg)
                    }
                })
            //     this.$refs[formName].validate((valid) => {
            //         if (valid) {
            //             alert('submit!');
            //         } else {
            //             console.log('error submit!!');
            //             return false;
            //         }
            //     });
        },
        resetForm (formName) {
            this.$refs[formName].resetFields();
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
    .el-form-item {
        text-align: left;
    }
}
</style>