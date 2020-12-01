<template>
   <div class="index">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>创建商品属性</span>
                <el-button round type="primary">返回</el-button>
            </div>
        <!-- 表单 -->
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="属性名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="所属类型" prop="region">
                <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
             <el-form-item label="关键词">
                <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
            <el-form-item label="跳转">
                <el-input v-model="formLabelAlign.type"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
        <!-- 表单end -->
       
        </el-card>
          
   </div>
</template>

<script>
    export default {
        data() {
            return {
                //表单
                labelPosition: 'right',
                formLabelAlign: {
                name: '',
                region: '',
                type: ''
                },
                ruleForm: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
                },
                rules: {
                name: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                region: [
                    { required: true, message: '请选择活动区域', trigger: 'change' }
                ],
                }
            //表单end
            };
        },
        methods: {
            //表单
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
            //表单end
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
        .el-form-item{
            text-align: left;
        }
    }


 
</style>