<template>
    <div class="header">
        <div class="header-con">
            <img src="../../static/img/icon_03.jpg" alt="">
            <div class="navbar-text">
                <p class="title-top">艾米奈华</p>
                <p class="title-bottom">AI-MINERVA</p>
            </div>
            
            <ul class="header-box">
                
                <li>
                    <router-link to="/" tag="span">
                    
                        <span>首页</span>
                        
                    </router-link>
                </li>
                
                <li>
                    <router-link to="/aboutus" tag="span">
                   
                        <span>关于我们</span>
                        
                    </router-link>
                </li>
                <li>
                    <router-link to="/success" tag="span">
                    <span>成功案例</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/intelligent" tag="span">
                        <span>艾米商城</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/contactus" tag="span">
                        <span>联系我们</span>
                    </router-link>
                </li>
                 <!-- <li>
                    <router-link to="/contactus" tag="span">
                        <span>人才招聘</span>
                    </router-link>
                </li>
                 <li>
                    <router-link to="/contactus" tag="span">
                        <span>渠道合作</span>
                    </router-link>
                </li>
                 <li>
                    <router-link to="/contactus" tag="span">
                        <span>子公司</span>
                    </router-link>
                </li> -->
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            
        }
    }
     
}
</script>



<style scoped lang="less">
    .header{
        width:100%;
         height:70px;
         background:#fff; 
        position:fixed;
        left:0;
        top:0;
        margin-bottom:70px;
        z-index: 22;
        box-shadow:0 2px 3px -1px #ccc;
        
            
            .header-con{
                width:1196px;
                margin:0 auto;
            height:70px;
            line-height:22px;
            width:1114px;
            background:#fff; 
            padding:0 60px 0 22px;
                img{
                    margin-top: 16px;
                    width: 57px;
                    float: left;
                }
                .navbar-text{
                    float:left;
                    
                    color: #1890ff;
                    white-space: nowrap;
                    padding-left: 14px;
                    padding-top: 17px;
                    .title-top{
                        font-size:18px;
                    }
                    .title-bottom{
                        font-size:12px;
                    }
                }
            ul{
                float:right;
                li{
                    float:left;
                    margin-left:15px;
                    width:80px;
                    cursor:pointer;
                    text-align: center;
                    height:30px;
                    line-height:30px;
                   border-radius: 16px;
                   margin-top:22px;
                }
            }
            .cur{color:#fff;background-color: #0079c8;}  
    
   }
}
 
    .router-link-exact-active{
    //    .header-box{
    //        span{
    //            color:pink;
    //        }
    //    } 
    color: #fff !important;
    background:#126aff;
    display: inline-block;
    width:80px;
    border-radius: 16px;
    }

</style>