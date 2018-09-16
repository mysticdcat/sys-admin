<template>
  <el-row :gutter="20">
    <el-col :span="8" :offset="+2">
      <div style="margin-bottom:20px">
        <el-input
          placeholder="输入关键字进行过滤"
          v-model="filterText">
        </el-input>
      </div>
      
      <el-tree
      @node-click = "nodeClick"
      :data="data"
      :filter-node-method="filterNode"
      node-key="id"
      default-expand-all
      :expand-on-click-node="false"
      ref="tree2">>
        <span class="custom-tree-node" slot-scope="{ node, data }">
          <span>{{ node.label }}</span>
          <span>
            <el-button
              type="text"
              size="mini"
              @click="() => append(data)">
              <i class="el-icon-plus"></i>
            </el-button>
            <el-button
              type="text"
              size="mini"
              @click="() => remove(node, data)">
              <i class="el-icon-minus"></i>
            </el-button>
          </span>
        </span>
      </el-tree>
    </el-col>
    <el-col :span="12" :offset="+2">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="排序:">
          <el-col :span="11">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="名称:">
          <el-col :span="11">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="图标:">
          <el-col :span="11">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="路由地址:">
          <el-col :span="11">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="视图地址:">
          <el-col :span="11">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="备注描述:">
          <el-col :span="11">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-col>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>



<script>
var data = [
  {
    id: 1,
    label: "权限管理系统",
    children: [
      {
        id: "1-1",
        label: "用户管理"
      },
      {
        id: "1-2",
        label: "角色管理"
      },
      {
        id: "1-3",
        label: "组织管理"
      },
      {
        id: "1-4",
        label: "菜单管理"
      }
    ]
  },
  {
    id: 2,
    label: "管网基础设施",
    children: [
      {
        id: "2-1",
        label: "巡检管理",
        children: [
          {
            id: "2-1-1",
            label: "巡检点"
          },
          {
            id: "2-1-2",
            label: "巡检线路"
          }
        ]
      }
    ]
  }
];
export default {
  data() {
    return {
      data,
      filterText: "",
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    nodeClick(obj, node, cop) {
      debugger;
    },
    onSubmit() {
      console.log("submit!");
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree2.filter(val);
    }
  }
};
</script>
<style>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
.menu-input{
  width: 217px;
}
</style>
