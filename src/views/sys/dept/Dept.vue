<template>
    <div class="sys-dept">
        <tree-table :data="deptList" :expandAll="true" :columns="columns" border>
            <el-table-column label="操作" width="200">
                <template slot-scope="scope">
                    <el-button type="primary" size="small" icon="el-icon-edit" @click="rowEdit(scope,scope.row)" circle></el-button>
                    <el-button type="success" size="small" icon="el-icon-plus" @click="rowAdd(scope,scope.row)" circle></el-button>
                    <el-button type="danger" size="small" icon="el-icon-delete" @click="rowDelete(scope,scope.row)" circle></el-button>
                </template>
            </el-table-column>
        </tree-table>
        <el-dialog :title="isEdit?'组织编辑':'组织新增'" :visible.sync="formDialog" :width="'40%'">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="排序">
                    <!-- <el-input v-model="form.orderNum"></el-input> -->
                    <el-input-number v-model="form.orderNum" controls-position="right" :min="1"></el-input-number>
                </el-form-item>
                <el-form-item label="名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="编码">
                    <el-input v-model="form.deptCode"></el-input>
                </el-form-item>
                <el-form-item label="是否可用">
                    <el-radio v-model="form.ifFlag" label="0">是</el-radio>
                    <el-radio v-model="form.ifFlag" label="1">否</el-radio>
                </el-form-item>
                <el-form-item label="备注描述">
                    <el-input type="textarea" v-model="form.remark"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button v-if="isEdit" type="primary" @click="onEdit">确认修改</el-button>
                    <el-button v-else="isEdit" type="primary" @click="onAdd">确认新建</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>
<script>
import treeTable from '@/components/TreeTable'
import { getDeptList,addDept } from "@/api/sys/sysDept.js";
export default {
    data() {
        return {
            deptList: [],
            columns: [
                {
                    text: '组织名称',
                    value: 'name',
                    width: 300
                },
                {
                    text: 'ID',
                    value: 'deptId'
                },
                {
                    text: '组织编码',
                    value: 'deptCode'
                },
                {
                    text: '是否可用',
                    value: "ifFlag",
                    format: function(value,row) {
                        if(value=="1") {
                            return "否";
                        } else {
                            return "是";
                        }
                    }
                },
                {
                    text: '备注描述',
                    value: 'remark'
                }
            ],
            formDialog: false,
            isEdit: true,
            form: {
                orderNum: "",
                name: "",
                deptCode: "",
                ifFlag: "0",
                remark: ""
            }
        };
    },
    watch: {
    },
    methods: {
        initDept() {
            this.form={
                orderNum: "",
                name: "",
                deptCode: "",
                ifFlag: "0",
                remark: ""
            }
            getDeptList()
                .then(res => {
                    this.deptList=res.data.data;
                })
                .catch(erro => {
                    debugger;
                });
        },
        copyAttrs(row) {
            this.form.parentId=row.deptId;
            this.form.orderNum=row.orderNum;
            this.form.name=row.name;
            this.form.deptCode=row.deptCode;
            this.form.ifFlag=row.ifFlag;
            this.form.remark=row.remark;
        },
        rowEdit(scope,row) {

            this.isEdit=true;
            this.formDialog=true;

            //拷贝属性
            this.copyAttrs(row);

        },
        rowAdd(scope,row) {

            this.isEdit=false;
            this.formDialog=true;
            this.form.parentId=row.deptId;
        },
        rowDelete(scope) {

        },
        onEdit() {
            let sysDept=this.form;

            updateDept(
                sysDept
            ).then(res => {
                this.formDialog=false;
                this.initDept();
            }).catch(erro => {
                this.formDialog=false;
                this.initDept();
            })
        },
        onAdd() {
            let sysDept=this.form;

            addDept(
                sysDept
            ).then(res => {
                this.formDialog=false;
                this.initDept();
            }).catch(erro => {
                this.formDialog=false;
                this.initDept();
            })
        }

    },
    created() {
        this.initDept();
    },
    components: {
        treeTable
    }
};
</script>
<style scope>
.custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
}
.menu-input {
    width: 217px;
}
</style>



