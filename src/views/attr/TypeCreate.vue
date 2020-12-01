<template>
   <div class="index">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>类型创建</span>
                <el-button round type="primary">返回</el-button>
            </div>
        <!-- 表单 -->
        <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
            <el-form-item
                label="类型名称"
                prop="age"
                :rules="[
                { required: true, message: '请输入商品类型'},
                { type: 'number', message: '年龄必须为数字值'}
                ]"
            >
            <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
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
    export default {
        data() {
            return {
                numberValidateForm: {
                age: ''
                }
            }
        },
        methods: {
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