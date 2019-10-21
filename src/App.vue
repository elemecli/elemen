<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
  /* 公共样式 */
body,ul,ol,dl,dd,p,h1,h2,h3,h4,h5,h6,input,textarea,hr{
  margin:0;
  padding:0;
  border:0;
  outline:none;
}
body{
	font-family: "微软雅黑";
}
html{
    font-size: 26.67vw;
    width:100%;
}
ul,ol{
	list-style: none;
}
a{
	text-decoration: none;
}
img{
	border: none;
}
#app{
    width:100%;
    height:100%;
}
</style>
