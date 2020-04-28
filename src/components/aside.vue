<template>
  <el-aside width="200px">
    <el-menu
      background-color="#333744"
      text-color="#fff"
      active-text-color="#ffd04b"
      :unique-opened="true"
      :default-active="$route.path"
      router
    >
      <el-submenu v-for="section in menulist" :key="section.id" :index="section.id + ''">
        <template slot="title">
          <i :class="iconObj[section.id + '']"></i>
          <span>{{ section.authName }}</span>
        </template>
        <el-menu-item v-for="row in section.children" :key="row.id" :index="'/' + row.path">
          <template slot="title">
            <span>{{ row.authName }}</span>
          </template>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  data() {
    return {
      menulist: [],
      iconObj: {
        '125': 'fa fa-user',
        '103': 'fa fa-id-card-o',
        '101': 'fa fa-calendar-check-o',
        '102': 'fa fa-truck',
        '145': 'fa fa-database'
      }
    }
  },
  created() {
    this.getMenuList()
  },
  methods: {
    async getMenuList() {
      const { data: res } = await this.$http.get('menus')
      // console.log(res)
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
      this.menulist = res.data
      // console.log(res)
    }
  }
}
</script>

<style lang="scss">
.el-aside {
  background-color: #333744;
  .el-menu {
    border-right: none;
    span {
      margin-left: 10px;
      font-size: 10px;
    }
  }
}
</style>
