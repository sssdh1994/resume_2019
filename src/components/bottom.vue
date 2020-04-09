<template>
  <div class="bottom">
  	<div class="container">
  	<span class="tip">HOW TO FIND</span>
  	  <h1 class="title">{{title}}</h1>
  	  <span class="border"></span>
  	  <div class="content">
		<div class="imgbox">
			<div class="left">
				<div class ='iconwechat' v-on:mouseenter="getImageWechat"><img src="../common/images/wechaticon.png"></div>
				<div class ='iconqq' v-on:mouseenter="getImageQq"><img src="../common/images/qqicon.png"></div>
				<div class ='icongithub' v-on:mouseenter="getImageGithub"><img src="../common/images/githubicon.png"></div>
			</div>
			<div class="right">
				<img class ='img' v-show="showWechat" src="../common/images/wechatQR.jpg">
				<img class ='img' v-show="showQq" src="../common/images/qqQR.jpg">
				<img class ='img' v-show="showGithub" src="../common/images/githubQR.png">
			</div>
		</div>
  	    <dl>
  	      <dt>Contact By Email</dt>
  	      <dd>Mail1: <a href="mailto:info@example.com">info@example1.com</a></dd>
  	      <dd>Mail2: <a href="mailto:info@example.com">info@example2.com</a></dd>
  	    </dl>
  	  </div>
  	  <p v-text="desc"></p>
  	</div>
  </div>
</template>

<script>
 
export default {
  name: 'bottom',
  data () {
    return {
    	title: '联系我',
		desc: '© 2018 Preface . All rights reserved | Design by cisco lai.',
		showWechat:true,
		showQq:false,
		showGithub:false
	}
  },
  methods:{
	  getImageWechat(){
		  this.showWechat = true
		  this.showQq = false
		  this.showGithub = false
	  },
	  getImageQq(){
		  this.showWechat = false 
		  this.showQq = true
		  this.showGithub = false
	  },
	  getImageGithub(){
		  this.showWechat = false 
		  this.showQq = false
		  this.showGithub = true
	  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.bottom{height: auto;width: 100%;margin: 0 auto;background-color: #333333;background: url('../common/images/contact.jpg') no-repeat center top;background-size: cover;padding: 4% 0;}
	.container{max-width: 1200px;margin: 0 auto;text-align: center;}
	.tip{display:inline-block;position:relative;padding:6px 20px;margin:0 auto 10px;font-size: 20px;background:#03a9f4;color: #fff;}
	.tip:after{position:absolute;width: 0;height: 0;left:42%;bottom:-10px;content: '';border-style: solid;border-width: 10px 10px 0 10px;border-color: #03a9f4 transparent;}
	.title{padding: 6px 0 10px;font-family: 'Overlock', cursive;color: #fff;font-size: 36px;}
	.border{display:block;width: 20%;height: 1px;position:relative;margin:0 auto 30px;background: #8C8989;}
	.border:after{position: absolute;top: 0;left: 30%;content: " ";width: 40%;height: 5px;margin-top:-2px;background: #03a9f4;}

	.content{
		width:45%;
		margin:0 auto;
		background: #f5f5f5;
		border-radius: 10px;
	 	box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
	}
	.imgbox{
		display: flex;
	}
	.left{
		display: inline-block;
		width: 50%;height: auto;
		display: flex;
		justify-content:space-around;
	}
	.left div{
		width: 80px;
		height: 80px;
		border-radius: 4em;
		
		position: relative;
		top:50px;
	}
	.left div img{
		width: 40px;
		height: 40px;
		margin: 20px;
	}
	.left div:hover{
		background-color:#87CEFA
	}
	.right{
		display: inline-block;
		width: 270px;
		height: auto;
		border:1px black solid;
	}
	.img {
		max-width: 134.5px;
		max-height: 134.5px;
		border:1px black solid;
		
	}
	.iconwechat{
		background-color: green;
	}
	.iconqq{
		background-color: rgb(3, 169, 244);
	}
	.icongithub{
		background-color: grey;
	}
	.content img{width: 50%;height: auto;margin: 15% 0;}
	.content dl{border-top: 1px solid rgb(214, 212, 212);position: relative;padding-bottom: 20px;border:1px black solid;}
	.content dl:after{position: absolute;top: 8%;left: 48%;content: "";width: 16px;height: 16px;background: url('../common/images/email.png') no-repeat;background-size: 100% auto;}
	.content dt{font-size: 16px;margin: 30px 0 10px;}
	.content dd{font-size: 18px;color: #999;margin-top: 10px;}
	.content dd a{font-size: 16px;color: #00a78e;}
	.bottom p{font-size: 14px;color: #fff;margin-top: 6%;}
</style>
