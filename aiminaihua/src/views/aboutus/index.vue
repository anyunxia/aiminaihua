<template>
    <div class="about">
        <v-header></v-header>              
        <div class="banner" ref="homePage">
            <div class="banner-con">
                <div class="bancenter">
                    <transition name='fade' appear appear-active-class='animated fadeInDown'> 
                        <p class="p-title">艾米奈华与中润天骐</p>
                    </transition>
                    <transition name='fade' appear appear-active-class='animated fadeInDown'> 
                        <p class="p-agreement">达成战略合作协议</p>
                    </transition>
                    <transition name='fade' appear appear-active-class='animated fadeInUp'> 
                    <p class="p-explain">黑龙江中润天骐科技发展有限公司与艾米奈华(北京)智能科技有限公司达成战略合作协议,双方决定就健康云监护平台及老年智能硬件和智能养老服务在医样结合领域展开深入合作,中润天骐
                        引入艾米智能的先进技术手段和注资,为共同推动健康云监护和智能居家养老系统在佳木斯地区市场的应用和发展。
                    </p>  
                    </transition>  
                 </div>
            </div>            
        </div>
        <div class="center">
            <v-title message="关于我们" messagetip="About Us"></v-title>
            <div class="center-img">
                <img src="../../static/img/gywm_11.jpg" alt="" class="scroll1">
                <img src="../../static/img/gywm_06.jpg" alt="" class="scroll2">
                <img src="../../static/img/gywm_08.jpg" alt="" class="scroll3">
                <img src="../../static/img/gywm_14.jpg" alt="" class="img4 scroll4">
            </div>
            <p style="text-indent:37px">艾米奈华（北京）智能科技有限公司成立于2014年，是首批从事智慧医疗、智慧养老、智慧社区领域的顶层方案搭建和实施的高新技术企业之一，具有国家高新技术企业认证、ISO9001认证、省级示范企业等系列荣誉和资质，公司在国内首次提出“互联网+区域化医养+深度服务”的理念，即通过信息化的搭建在提升医疗机构工作效率的同时，通过互联网和深度服务的结合引导区域内居民的就医。目前公司致力于利用信息化和物联网技术打造深度区域化医疗服务、构建区域化预防康复信息管理服务体系，为卫生系统、医疗机构构建预防、康复、分级诊疗制订顶层信息化方案和信息系统，利用信息化手段为医疗机构提升预防康复及分级诊疗工作效率，同时以信息化系统为载体，通过多边合作为区域内患者提供完善的线下服务保障体系。先后为全国多地政府、卫生系统、综合性医院、养老机构提供预防康复及分级诊疗顶层方案及信息化系统的落地实施。</p>
        </div>
        <div class="section">
            <div class="section-con"> 
                <img src="../../static/img/about_img.png" alt="">
                <!-- <div class="left scroll5">
                    <h3>获得荣誉</h3>
                    <p>2018年荣获黑龙江省”创新型科技企业“</p>
                    <p>2017年荣获集团财务管理软件市场年度成功企业</p>
                    <p>2017年荣获“新一代信息技术创新”典范企业</p>
                    <p>2017年荣获黑龙江省工信委“省示范企业”</p>
                    <p>2017年荣获北京软件和信息服务业协会“第九届理事会会员单位”</p>
                    <p>2016年成为国家疾控中心慢性病防治项目协议伙伴</p>
                    <p>2016年成为黑龙江省政法委综治维稳项目软件供应商</p>
                    <p>2016年成为黑龙江省民政养老软件系统合作商</p>
                    <p>2016年成为全国多家医疗机构”远程医疗“软件合作商</p>
                    <p>2016年荣获医养结合体系建设试点企业</p>
                    <p>2016年荣获CRM软件市场年度成功企业</p>
                    <p>2015年成为黑龙江省养老产业协会会员单位</p>
                    <p>2015年成为黑龙江民政系统智慧社区项目合作伙伴</p>
                    <p>2015年荣获HRM软件市场年度成功企业</p>
                    <p>2015年荣获PLM软件市场年度成功企业</p>
                    <p>2014年成为国家养老软件产业领跑者</p>
                </div>
                <div class="left right">
                    <div class="scroll6">
                        <h3>专利证书</h3>
                        <p>软件企业证书</p>
                        <p>软件产品证书</p>
                        <p>ISO9001质量管理体系认证证书</p>
                        <p>艾米智能爱家医生系统软件[简称：爱家系统]V1.0</p>
                        <p>艾米爱家医生系统V2.0.0</p>
                        <p>艾米云健康医疗系统V1.0</p>
                        <p>艾米智能智能养老服务平台[简称：养老平台]V1.0</p>
                        <p>艾米智能SOS求助全球定位系统软件V1.0</p>
                        <p>艾米智能呼叫服务中心[简称：呼叫中心]V1.0</p>
                        <p>老人信息管理系统V1.0</p>
                        <p>民政养老服务平台V1.0</p>
                        <p>同江二期民政养老服务系统V1.0</p>
                        <p>爱家智慧社区管理服务平台V1.0</p>
                        <p>艾米智能综治维稳系统软件[简称：综治维稳系统]V1.0</p>
                        <p>社区公共服务平台V1.0</p>
                        <p>双鸭山政务系统V1.0</p>
                    </div>
                </div> -->
            </div>
        </div>
        <div class="center">
            <v-title message="获得证书" messagetip="Get a Certificate"></v-title>       
        </div> 
        <div class="swiper">
            <swiper :options="swiperOption">
                <swiper-slide v-for="(item,index) in swiperSlide" :key="index">
                    <div class="swiper-img" :class="sstt[index]" >
                        <img :src="item.img" alt="" @click="handleImgAction(index)"/>
                    </div>
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div> 
         <!-- <div class="dialog" v-show="dialogState">
            <transition name="fade">
                <div v-show="show">
                <span @click="handleHideDialog">X</span>
                <img :src="swiperSlide[index].img" alt="">
                </div>
            </transition>
         </div> -->
        <v-footer></v-footer>   
    </div>
</template>

<script>
export default {
    data () {
        return {
            isactive:false,
            dialogState: false,
            show:false,
            index: 0,
            swiperOption: {
                slidesPerView: 5,
                slidesPerGroup: 5,
                loopFillGroupWithBlank: false,
                autoplay:false,
                pagination: {el: '.swiper-pagination'},
            },
            swiperSlide:[ 
                {img:require('../../static/img/zs_09 (1).png')},
                {img:require('../../static/img/zs_09 (2).png')},
                {img:require('../../static/img/zs_09 (3).png')},
                {img:require('../../static/img/zs_09 (4).png')},
                {img:require('../../static/img/zs_09 (5).png')},
                {img:require('../../static/img/zs_09 (6).png')},
                {img:require('../../static/img/zs_09 (7).png')},
                {img:require('../../static/img/zs_09 (8).png')},
                {img:require('../../static/img/zs_09 (9).png')},
                {img:require('../../static/img/zs_09 (10).png')},
                {img:require('../../static/img/zs_09 (11).png')},
                {img:require('../../static/img/zs_09 (12).png')},
                {img:require('../../static/img/zs_09 (13).png')},
                {img:require('../../static/img/zs_09 (14).png')},
                {img:require('../../static/img/zs_09 (15).png')},
                {img:require('../../static/img/zs_09 (16).png')},
                
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
    methods:{
        handleScroll(){
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            if(scrollTop>=200){
                document.querySelector('.scroll1').classList.add("animated","bounceInLeft")
                document.querySelector('.scroll2').classList.add("animated","fadeInUp")
                document.querySelector('.scroll3').classList.add("animated","fadeInUp")
                document.querySelector('.scroll4').classList.add("animated","fadeInRight")                
            } 
        },
        handleImgAction (index) {
            this.show = true
            this.index = index       
            this.dialogState = true
            document.body.style.overflow = 'hidden'
        },
        handleHideDialog () {
            this.show = false
            this.dialogState = false
            document.body.style.overflow = 'auto'
        },
        changeFixed(clientHeight){                        //动态修改样式
            console.log(clientHeight);
            this.$refs.homePage.style.height = clientHeight+'px';
        },
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
.about{
    width:100%;
    .banner{
        width:100%;
        height:700px;
        margin-top:70px;
        background:url('../../static/img/gywm_03.jpg') no-repeat center top;
        background-size: 100% 100%;
        .banner-con{
            width:1196px;
            height:100%;
            margin:0 auto;
            color:#fff;
            overflow: hidden;
            position:relative;
            .bancenter{
                height:320px;
                width:600px;
                color:#fff;
                 margin: auto 0;  
            position: absolute;  
            top: 0; left: 0; bottom: 0; right: 0; 
                    .p-title{
                        font-size:60px;
                        
                        margin-bottom:18px;
                    }
                    .p-agreement{
                        font-size:60px;
                        font-weight:lighter;
                    }
                    .p-explain{
                        width:540px;
                        line-height:32px;
                        font-size:18px;
                        margin-top:12px;
                    }
            }
           
        }
    }
    .center{
        width:1196px;
        margin:0 auto;
        .center-img{
            margin-top:78px;
            img{
                width:278px;
                height:196px;
                margin-right:23px;
            }
            .img4{
                margin-right:0;
            }
        }
        p{
            font-size:18px;
            color:#333;
            line-height:26px;
            margin:69px 0 102px 0;
        }
    }
    .section{
        width:100%;
        height:818px;
        background:url('../../static/img/gywm_20.png') no-repeat center top;
        background-size:cover;
        .section-con{
            width:1196px;
            height:100%;
            margin:0 auto;
            color:#fff;
            padding-top:30px;
            overflow: hidden;
            
            img{
                width:56%;
                display: block;
                margin:0 auto;
                
            }
            .left{
                height:717px;
                width:566px ;
                float:left;
                h3{
                padding-top:38px;
                font-weight:normal;
                font-size:36px;
                margin-bottom:20px;
                }
                p{
                    font-size:16px; 
                    line-height:24px;
                }
            }
            .right{
                width:398px;
                height:726px;
                padding-left:133px;
                float:left;
                border-left:1px solid #fff;
                margin-bottom:43px;
                h3{
                    margin-top:240px;
                }
            }
        }
    }
    .swiper{
        width:1192px;
        height:350px;
        margin:0 auto;
        .swiper-container{
            height:330px;
            margin-left:30px;
        } 
        .swiper-slide{
            margin-top:93px;
        }
        .swiper-img{
            width:143px;
            height:195px;
            float:left;
            border-right:1px solid #e7e7e7;
            padding-right:48px;
            img{
                width:100%;
                height:100%;
                transform: scale(1);
                transition: all ease 0.5s;
            }
        }
    }
    .dialog{
        background: rgba(0,0,0,.5);
        height: 100%;
        width: 100%;
        position: fixed;
        left: 0px;
        top: 0px;
        bottom: 0px;
        right: 0px;
        z-index: 999;
        img{
            width: 24%;
            position: absolute;
            left: 0;
            right: 0;
            top: 10%;
            margin: 0 auto;
        }
        span{
            float: right;
            font-size: 32px;
            margin: 40px;
            font-weight: 800;
            color: #fff;
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to{
        opacity: 0;
    }
}

// @media screen and (max-width:1380px){
//   .about .banner{
//                 height:525px;
//                 background-size: 100%;
//                 // -webkit-background-size: cover;
//                 // -o-background-size: cover;
//     }
//     .about .banner .banner-con .p-title[data-v-72f553f8] {
//     font-size: 50px;
//     margin-top: 120px;
//     margin-bottom: 18px;
// }
// .about .banner .banner-con .p-agreement[data-v-72f553f8] {
//     font-size: 50px;
//     font-weight: lighter;
// }
// } 
</style>