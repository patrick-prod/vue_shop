<template>
  <el-container class="home-container">
    <el-header>
      <div class="header-logo">
        <img src="../assets/img/home_header_icon.png" alt="website_logo" />
        <span>接口管理平台</span>
      </div>
      <el-button type="success" @click="logout" plain>登出</el-button>
    </el-header>
    <el-container>
      <!-- <el-aside width="200px">
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#ffd04b"
          :unique-opened="true"
          router
        >
          <el-submenu
            v-for="section in menulist"
            :key="section.id"
            :index="section.id + ''"
          >
            <template slot="title">
              <i :class="iconObj[section.id + '']"></i>
              <span>{{ section.authName }}</span>
            </template>
            <el-menu-item
              v-for="row in section.children"
              :key="row.id"
              :index="'/' + row.path"
            >
              <template slot="title">
                <span>{{ row.authName }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>-->
      <i-menu></i-menu>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import iMenu from './aside.vue'
export default {
  components: {
    iMenu
  },
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
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
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
.home-container {
  height: 100%;
  .el-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 22px;
    font-weight: 100;
    color: #444;
    background-color: #6ec0b0;
    .header-logo {
      display: flex;
      justify-content: space-between;
      align-items: center;
      img {
        margin-right: 8px;
        width: 48px;
        height: 48px;
      }
    }

    .el-button {
      color: #6ec0b0;
      background: #f1f9f7;
      border-color: #c5e6df;
    }
  }

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

  .el-main {
    background-color: #eaedf1;
  }
}
</style>
