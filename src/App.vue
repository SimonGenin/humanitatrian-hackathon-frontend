<template>
  <div id="app">
    <el-container>
      <el-header>
        
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          router
        >
          
          <el-menu-item index="home">UNITED</el-menu-item>
          <el-menu-item index="login" style="float: right">Log in</el-menu-item>
        

        </el-menu>


        <div class="line"></div>
        
      </el-header>

      <el-main>
        <router-view/>
      </el-main>

      
     
    </el-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: 'home',
      };
    },
    
  }
</script>

<style>

#app {

  font-family: Arial, Helvetica, sans-serif;

}

</style>
