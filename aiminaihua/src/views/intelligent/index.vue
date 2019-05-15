<template>
    <div class="Intelligent">
        <v-header></v-header>
        <div class="banner" v-if="isshow" ref="homePage" >
            <div class="center">
                <transition name='fade' appear appear-active-class='animated fadeInDown'>
                    <div class="banner-p"><p>艾米改变的生活方式</p> </div>
                </transition>
                <transition name='fade' appear appear-active-class='animated fadeInUp'>
                    <div class="banner-p banner-develop"><p>经过多年的发展,明华凭借积累多年的行业经验、先进的设计理念和强大的研发实力</p></div>
                </transition>
            </div>
        </div>
        <v-select :selectIndex="selectIndex"></v-select> 
        <div class="center" v-if="isshowline">
            <v-title message="智能硬件" messagetip="Intelligent Hardware"></v-title>   
        </div> 
        <div class="swiper-con">
            <div class="swiper">
                <swiper :options="swiperOption">
                    <swiper-slide v-for="(item,index) in swiperSlide" :key="index">
                        <div class="swiper-img" @click="tabChange(index)">
                            <img :src="item.img" alt="" />
                            <p>{{item.title1}}</p>
                            <span>了解更多</span>
                        </div> 
                    </swiper-slide>
                </swiper>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>  
            </div> 
        </div>
        <v-footer></v-footer>  
    </div>
</template>

<script>
import select1 from '@/components/Intehardware/Intehardware.vue'
 let timer = null //定义初始值
export default {
      props:{
      step:{   //此数据是控制动画快慢的
        type:Number,
        default:100
      }
    },
    data () {
       
        return {
             flag: false,
            selectIndex: 9,
            isshow:true,
            isshowline:true,
            swiperOption: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                loopFillGroupWithBlank: false,
                autoplay:false,
    //          loop : true,
                pagination: {el: '.swiper-pagination',clickable: true,},
                navigation: {nextEl: '.swiper-button-next',prevEl: '.swiper-button-prev'},
            },
            swiperSlide: [
               
                {img:require('../../static/img/yq_01.jpg'), title1: "智能血糖仪"},
                {img:require('../../static/img/yq_02.jpg'), title1: "智能血压仪"},
                {img:require('../../static/img/yq_03.jpg'), title1: "智能体温计"},
                {img:require('../../static/img/yq_04.jpg'), title1: "智能心电仪"},
                {img:require('../../static/img/yq_05.jpg'), title1: "智能心率监测手表"},
                {img:require('../../static/img/yq_06.jpg'), title1: "智能定位手表"}
            ],
            sstt:[
                "ss1",
                "ss2",
                "ss3",
                "ss4",
                "ss5"
            ], 
        clientHeight:''        
        }
        
    },
    components: {  
      "v-select" : select1 
    },
    methods: {  
        tabChange(index,i){
            this.selectIndex = index
            this.isshow = false
            this.isshowline = false
            //回到顶部
            timer = setInterval(function () {
                let osTop = document.documentElement.scrollTop || document.body.scrollTop
                let ispeed = Math.floor(-osTop / 5)
                document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed
                this.isTop = true
                if (osTop === 0) {
                    clearInterval(timer)
                }
            },20)
        },
        changeFixed(clientHeight){                        //动态修改样式
            console.log(clientHeight);
            this.$refs.homePage.style.height = clientHeight+'px';
        }
    },
    mounted(){
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
}
</script>

<style scoped lang="less">
.Intelligent{
    width:100%;
    .banner{
        width:100%;
        height:700px;
        margin-top:70px;
        background:url('../../static/img/zn_01.jpg') no-repeat center top;
        overflow: hidden;
        background-size: 100% 100%;  
        .center{
            width:100%;
            height:170px;
            margin: auto;  
            position: absolute;  
            top: 0; left: 0; bottom: 0; right: 0; 

            .banner-p p{
             width:550px;
             color:#fff;
             font-size:60px;
            margin:0 auto;
            padding-bottom:20px;
            text-align: center;
            font-weight:lighter;
            border-bottom:1px solid #fff;
         } 
         .banner-develop p{
            color:#fff;
            width:456px;
            font-size:20px;
            margin-top:20px;
            border-bottom:0;
            letter-spacing: 1px;
            line-height:34px;
         }
        } 
         
    }
    .caption{
        margin-bottom:64px;
    }
    .center{
        width:1196px;
        margin:0 auto;
    }
    .swiper-con{
        width:100%;
        height:528px;
        background:#00a0ea;
        margin-bottom:70px;
    }
    .swiper{
        width:1258px;
        height:100%;
        margin:0 auto;
        position:relative;
        padding-top:70px;
        .swiper-container{
            height:380px;
            width:1128px;
        } 
        .swiper-img{
            width:254px;
            height:396px;
            background:#fff;
            float:left;
            img{
                width:220px;
                height:250px;
                border:1px solid #e7e7e7;
                margin:14px 0 0 16px;
            }
            p{
                text-align: center;
                font-size:18px;
                padding:24px 0 14px 0;
            }
            span{
                display: block;
                width:140px;
                height:30px;
                color:#fff;
                font-size:14px;
                background:#00a0ea;
                text-align: center;
                line-height:30px;
                margin:0 auto;
                cursor: pointer;
            }
        }
        .ss5{
            border-right:0;
            padding-right:0; 
        }
        .swiper-button-prev{
            background:url('../../static/img/left_01.jpg') no-repeat left center;
            width: 55px;
            height: 73px;
            left:-12px;
            margin-top: -70px;
        }
        .swiper-button-next{
            background:url('../../static/img/right_01.jpg') no-repeat right center;
            width: 55px;
            height: 73px;
            right:7px;
            margin-top: -70px;
        }
    }
    
}
// @media screen and (max-width:1380px){
//   .Intelligent .banner{
//         height:525px;
//         background-size: cover;                
//     }
//     .Intelligent .banner .banner-p p{
//         margin-top: 196px;
//     }
//     .Intelligent .banner .banner-develop p{
//         margin-top: 20px;    
//     } 
// }
</style>
    