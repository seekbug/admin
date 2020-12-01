<template>
   <div class="index">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>创建商品</span>
                <el-button round type="primary">返回</el-button>
            </div>
            <!-- 标签页 -->
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <!-- 1表单验证 -->
                <el-tab-pane label="基本信息" name="first">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="商品名称" prop="name">
                            <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                        <div class="middle">
                            <!-- 信息 -->
                            <div class="l">
                                 <el-form-item label="商品数量" prop="name1">
                                <el-input v-model="ruleForm.name"></el-input>
                                </el-form-item>
                                <el-form-item label="商品价格" prop="name2">
                                    <el-input v-model="ruleForm.name"></el-input>
                                </el-form-item>
                                <el-form-item label="促销价" prop="name3" class="name3">
                                    <el-input v-model="ruleForm.name"></el-input>
                                </el-form-item>
                            </div>
                            <!-- 上传照片 -->
                            <div class="r">
                                <el-upload
                                class="avatar-uploader"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :show-file-list="false"
                                :on-success="handleAvatarSuccess"
                                :before-upload="beforeAvatarUpload">
                                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                            </div>
                        </div> 
                        <div class="fenlei">
                            <el-form-item label="所属分类" prop="region">
                                <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                                <el-option label="蔬菜" value="shanghai"></el-option>
                                <el-option label="水果" value="beijing"></el-option>
                                <el-option label="肉" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                            <el-button @click="resetForm('ruleForm')">重置</el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
                <!-- 1表单验证end -->
                <!-- 2商品描述 --> 
                <el-tab-pane label="商品描述" name="second">
                        
                </el-tab-pane>
                <!-- 2商品描述end -->
                <!-- 3商品相册 -->
                <el-tab-pane label="商品相册" name="third">
                    <div class="page3">
                       <el-upload
                        action="https://jsonplaceholder.typicode.com/posts/"
                        list-type="picture-card"
                        :on-preview="handlePictureCardPreview"
                        :on-remove="handleRemove">
                        <i class="el-icon-plus"></i>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                    </div>     
                </el-tab-pane>
                 <!--3商品相册end  -->
                 <!-- 4商品属性 -->
                <el-tab-pane label="商品属性" name="fourth">
                    <div class="page4">
                        <span>商品类型</span><el-select v-model="value" placeholder="请选择商品类型">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        :disabled="item.disabled">
                        </el-option>
                        </el-select>
                    </div>
                </el-tab-pane>
                 <!-- 4商品属性end -->
            </el-tabs>
            <!-- 标签页end -->
            
       
        </el-card>
          
   </div>
</template>

<script>
    export default {
        data() {
            return {
            activeName: 'second',
            // 1表单验证
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
                    { required: true, message: '请输入商品类型', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                name1: [
                    { required: true, message: '请输入库存', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                 name2: [
                    { required: true, message: '请输入价格', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                 name3: [
                    { required: true, message: '请输入价格', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                region: [
                    { required: true, message: '请选择活动区域', trigger: 'change' }
                ],
            },
            imageUrl: '',
        // 1表单验证end
        //3
            dialogImageUrl: '',
            dialogVisible: false,
        //3end
        //4
            options: [{
            value: '选项1',
            label: '黄金糕'
            }, {
            value: '选项2',
            label: '双皮奶',
            disabled: true
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
            value: ''
        //4end
            };
        },
        methods: {
        handleClick(tab, event) {
            console.log(tab, event);
            },
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
            },
            handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },
            //表单end

            //3
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
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
        // 表单
        .el-form{
            width: 50%;
        }
        .el-tabs .el-tab-pane{
            margin-top: 20px;
            .name3{
                text-align: left;
            }
            .middle{
                .l{
                    width: 65%;
                    float: left;
                }
                .r{
                    border: 1px dashed #d9d9d9;
                    border-radius: 6px;
                    height: 162px;
                    float:right;
                    .avatar-uploader .el-upload {
                    cursor: pointer;
                    position: relative;
                    overflow: hidden;
                    }
                    .avatar-uploader .el-upload:hover {
                        border-color: #409EFF;
                    }
                    .avatar-uploader-icon {
                        font-size: 28px;
                        color: #8c939d;
                        width: 178px;
                        height: 178px;
                        line-height: 178px;
                        text-align: center;
                    }
                    .avatar {
                        width: 178px;
                        height: 178px;
                        display: block;
            
                    }
                }  
            }
            .fenlei{
                clear: both;
            }
            
        }
        //3上传图片
        .page3{
            text-align: left;
        }
        //3上传图片end
        //4
            .page4{
                text-align: left;
                span{
                    margin-right: 5px;
                }
            }
        //4end
    }
        

   
    


 
</style>