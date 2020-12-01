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
            <!-- <el-form-item label="活动时间" required>
                <el-col :span="11">
                <el-form-item prop="date1">
                    <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                </el-form-item>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                <el-form-item prop="date2">
                    <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
                </el-form-item>
                </el-col>
            </el-form-item> -->
            <!-- <el-form-item label="即时配送" prop="delivery">
                <el-switch v-model="ruleForm.delivery"></el-switch>
            </el-form-item> -->
            <!-- <el-form-item label="活动性质" prop="type">
                <el-checkbox-group v-model="ruleForm.type">
                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                <el-checkbox label="地推活动" name="type"></el-checkbox>
                <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item> -->
            <el-form-item label="单/多选属性" prop="resource">
                <el-radio-group v-model="ruleForm.resource">
                <el-radio label="唯一"></el-radio>
                <el-radio label="多选"></el-radio>
                </el-radio-group>
            </el-form-item>
             <el-form-item label="值录入方式" prop="resource">
                <el-radio-group v-model="ruleForm.resource">
                <el-radio label="手动录入"></el-radio>
                <el-radio label="从下方可选择"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="可选值" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
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
                date1: [
                    { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                ],
                resource: [
                    { required: true, message: '请选择活动资源', trigger: 'change' }
                ],
                desc: [
                    { required: true, message: '请填写活动形式', trigger: 'blur' }
                ]
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