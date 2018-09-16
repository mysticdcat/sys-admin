<template>
    <div class="role-content">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="">
                <el-input v-model="formInline.roleName" size="medium"  placeholder="角色名称"></el-input>
            </el-form-item>
            <el-form-item label="">
                <el-button size="medium" plain>查询</el-button>
            </el-form-item>
                <el-form-item>
                <el-button size="medium" type="primary">新增</el-button>
                </el-form-item>
            <el-form-item>
               <el-button size="medium" type="danger">批量删除</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            formInline: {
                roleName: ""
            }
        };
    }
};
</script>
<style scope>
.role-content {
    height: 100%;
    width: 100%;
}
</style>

