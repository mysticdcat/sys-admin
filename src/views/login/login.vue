<template>
    <div class="main">
        <div class="login-from">
            <el-input v-model="userName" placeholder="请输入账号">
                <i slot="prefix" class="el-input__icon el-icon-info"></i>
            </el-input>
            <el-input v-model="passWord" placeholder="请输入密码">
                <i slot="prefix" class="el-input__icon el-icon-warning"></i>
                <i slot="suffix" class="el-input__icon el-icon-view"></i>
            </el-input>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            userName:"",
            passWord:""
        }
    }
}
</script>
<style scope>
.main{
    height: 100%;
    width: 100%;
    position: relative;
}
.login-from{
    height: 333px;
    width: 450px;
    padding: 35px;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateY(-50%);
    transform: translateX(-50%);
}
</style>

