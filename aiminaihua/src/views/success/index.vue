<template>
    <div class="success">
      <v-header></v-header>
        <div class="banner" ref="homePage">
            <div class="banner-p">
             <transition name='fade' appear appear-active-class='animated fadeInDown'>
                 <p>以城市为核心,&nbsp;基于大数据、大健康的医养生态圈建设</p>
                
             </transition>
            </div>
        </div>
        <div class="center">
             <v-title message="成功案例" messagetip="Successful case"></v-title>   
             <div class="imglist">
                 <!-- <div class="imglist-con" v-for="(item,index) in list" :class="addclass[index]">
                    <transition name='fade' appear appear-active-class='animated fadeInLeft' enter-active-class='animated fadeInDown fade-enter-active' leave-active-class='animated fadeOutDown fade-leave-active'> 
                        <img :src="item.img" alt="">
                        </transition>
                     <p class="con-top">{{item.title1}}</p>
                     <p class="con-bot">{{item.title2}}</p>
                </div> -->
                <div class="imglist-con ss1 scroll1" v-show="isshow">
                    <img src="../../static/img/cg_02.jpg" alt="">
                    <p class="con-top">黑龙江佳木斯大学附属第一医院</p>
                    <p class="con-bot">全民健康智慧医养服务管理平台</p>
                </div>
                <div class="imglist-con scroll2" v-show="isshow">
                    <img src="../../static/img/cg_03.jpg" alt="">
                    <p class="con-top">黑龙江省佳木斯市中医院</p>
                    <p class="con-bot">智慧健康管理平台</p>
                </div>
                <div class="imglist-con scroll3" style="padding-right:0;" v-show="isshow">
                    <img src="../../static/img/cg_04.jpg" alt="">
                    <p class="con-top">黑龙江省同江市民政局</p>
                    <p class="con-bot">智慧政务管理平台</p>
                </div>
                <div class="imglist-con scroll4" v-show="isshow">
                    <img src="../../static/img/cg_05.jpg" alt="">
                    <p class="con-top">黑龙江省佳木斯市民政局养老院</p>
                    <p class="con-bot">智慧养老管理平台</p>
                </div>
                <div class="imglist-con scroll5" style="padding-right:11px;" v-show="isshow">
                    <img src="../../static/img/cg_06.jpg" alt="">
                    <p class="con-top">黑龙江省双鸭山市民政局</p>
                    <p class="con-bot">智慧政务管理平台</p>
                </div>
                <div class="imglist-con scroll6" style="padding-right:0;" v-show="isshow">
                    <img src="../../static/img/cg_07.jpg" alt="">
                    <p class="con-top">黑龙江省佳木斯市九州社区</p>
                    <p class="con-bot">智慧政务管理平台</p>
                </div>

            </div>    
         </div> 
        <v-footer></v-footer>
    </div>
</template>

<script>
export default {
    data () {
        return {
            isshow:false,
            classList:"",
            clientHeight:''
        }
    },
    methods:{
        handleScroll(){
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            if(scrollTop >= 100){
                this.isshow = true
                document.querySelector('.scroll1').classList.add("animated","fadeInLeft")
                document.querySelector('.scroll3').classList.add("animated","fadeInRight")
                document.querySelector('.scroll2').classList.add("animated","fadeInUp")
                document.querySelector('.scroll5').classList.add("animated","fadeInUp")
                document.querySelector('.scroll4').classList.add("animated","fadeInLeft")
                document.querySelector('.scroll6').classList.add("animated","fadeInRight")                
            } 
        },
        changeFixed(clientHeight){                        //动态修改样式
            console.log(clientHeight);
            this.$refs.homePage.style.height = clientHeight+'px';
        }
    },
    mounted(){
        this.$nextTick(() => {
            window.addEventListener('scroll',this.handleScroll)     
        })
        // 获取浏览器可视区域高度
      this.clientHeight =   `${document.documentElement.clientHeight}`          //document.body.clientWidth;
      //console.log(self.clientHeight);
      window.onresize = function temp() {
        this.clientHeight = `${document.documentElement.clientHeight}`;
      };
    },
    watch: {
      // 如果 `clientHeight` 发生改变，这个函数就会运行
      clientHeight: function () {
        this.changeFixed(this.clientHeight)
      }
    },
    destroyed(){
        window.removeEventListener('scroll',this.handleScroll)
    }
}
</script>

<style scoped lang="less">
.success{
    width:100%;
    .banner{
        width:100%;
        height:700px;
        margin-top:70px;
        background:url('../../static/img/cg_01.jpg') no-repeat center top;
        overflow: hidden;
        background-size: 100% 100%;       
        .banner-p{
            width:100%;
            height:100%;
            color:#fff;

            font-size:32px;
            text-align: center;
            font-weight:lighter;
            position:relative;
            
            p{
            width:100%;
            height:32px;
            margin: auto;  
            position: absolute;  
            top: 0; left: 0; bottom: 0; right: 0; 
            }
        } 
    }
    .caption{
        margin-bottom:64px;
    }
    .center{
        width:1196px;
        height:1050px;
        margin:0 auto;
        .imglist{
            .imglist-con{
                float:left;
                padding:12px 12px 0 0;
                position:relative;
                color:#fff;
                .con-top{
                    position:absolute;
                    top:138px;
                    left:49px;
                    font-size:30px;
                    width:283px;
                    text-align: center;
                    line-height:40px;
                    letter-spacing: 2px;
                    
                }
                .con-bot{
                    position:absolute;
                    top:238px;
                    left:50%;
                    margin-left:-70px;
                    font-size:16px;
                }
            }
            .ss1{
                .con-bot{
                    left:143px; 
                }  
            }
            .ss3{
                .con-top{
                    width:251px;
                    left:57px;
                }
            }
            .ss5{
                padding-right:11px;
            }
            .ss3,.ss6{
                padding-right:0;
            }
        }
    }
} 
// @media screen and (max-width:1380px){
//   .success .banner{
//                 height:525px;
//                 background-size: cover;
//                 // -webkit-background-size: cover;
//                 // -o-background-size: cover;
//     }
//    .success .banner .banner-p p[data-v-0f58951c] {
//     margin-top: 230px;
// }
// }        
</style>