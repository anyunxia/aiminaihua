<template>
    <div class="home">
        <v-header></v-header>
        <div class="homeIndex">
            <div class="banner" ref="homePage">
                <div class="banner-con">  
                    <div class="banner-con-outershell">
                        <div class="banner-con-inshell">
                            <transition name='fade' appear appear-active-class='animated fadeInDown'>
                            <p>为用户提供</p>
                            </transition>
                            <transition name='fade' appear appear-active-class='animated fadeInDown'>
                            <p>多样化的智能服务</p>
                            </transition>
                            <transition name='fade' appear appear-active-class='animated fadeInUp'>
                            <span>Provide users with</span>
                            </transition>
                            <transition name='fade' appear appear-active-class='animated fadeInUp'>
                            <span>a variety of intelligent services</span>
                            </transition>
                        </div>
                    </div>
                </div>
            </div>
            <div class="intelligent-system">
                <div class="caption">
                    <v-title message="智慧系统" messagetip="Intelligence System"></v-title> 
                    <span class="paragraph">艾米智能通过联合各级次的医疗机构、养老机构、私立医院、养生机构、保险机构等,为老年人提供机构养老与居家养老服务,满足老年人对"医养结合"的养老需求。</span>
                </div>
                <div class="intelligent-img">
                    <span @mouseenter="showActive(1)" @mouseleave="showActive(0)" @click="handleClickZhzw()">
                        <img class="img0" src="../../../static/img/zhihui_09.jpg" alt="智慧政务">
                        <img v-show="active === 1" class="hide_tab img00" src="../../../static/img/le_01.jpg" alt="智慧政务">
                    </span>
                    <span @mouseenter="showActive(2)" @mouseleave="showActive(0)" @click="handleClickZhyl()">
                        <img class="img1" src="../../../static/img/zhihui_11.jpg" alt="智慧养老">
                        <img v-show="active === 2" class="hide_tab img11" src="../../../static/img/le_02.jpg" alt="智慧养老">
                    </span>
                    <span @mouseenter="showActive(3)" @mouseleave="showActive(0)" @click="handleClickZhjk()">
                        <img class="img2" src="../../../static/img/zhihui_15.jpg" alt="智慧健康">
                        <img v-show="active === 3" class="hide_tab img22" src="../../../static/img/le_03.jpg" alt="智慧健康">
                    </span>
                </div>
                <v-title message="智慧家" messagetip="Wisdom home"></v-title>   
            </div>
            <div class="intelligent-home">
                <div class="intelligent-home-con">
                    <ul>
                         <transition-group name='fade' appear appear-active-class='animated fadeInDown'>
                            <li  v-for="(item,index) in tabs" 
                                :class="{activeAdd:index == num}"
                                @click="tab(index)" 
                                :key="item.id"
                                >{{item.name}}
                            </li>
                        </transition-group>
                    </ul>
                    <div class="tabCon">
                        <div v-for='(itemCon,index) in tabContents' v-show=" index == num" class="tabContents">{{itemCon}}</div>
                    </div>
                </div>
            </div>
            <v-footer></v-footer>   
        </div>
    </div>
</template>

<script>

export default {
    data () {
        return {
          active: 0 ,
          tabs: [
                {id:1,name:'智慧养老院'},
                {id:2,name:'智慧建筑'},
                {id:3,name:'智慧工业'}],  
            
          tabContents: ["艾米奈华智慧养老院管理平台是艾米奈华（北京）智能科技有限公司为养老机构、养老院、敬老院、养老福利院、老年公寓等养老服务机构量身定制开发的专业的养老 管理软件产品；涵盖接待管理、老人管理、业务管理、护理管理、物资管理、人事管理、床位管理、系统设置、网站设置等功能模块，涉及从接待到退房的所有流程。 通过明确部门职能，精简业务流程，优化服务项目，科学规范管理，提高养老机构业务处理效率和管理效率，减少资源浪费，提升核心竞争力。", 
                        "艾米奈华建筑业4.0”实现对传统建筑行业人工的操作方式向建筑智能化的转变，由集中式控制向分散式增强型控制的基本模式转变，目标是建立一个高度灵活的个性化和数字化的建筑产品与服务的生产模式。在这样的模式中会产生各种新的活动领域和合作形式，真正实现全产业链的整合。",
                        "艾米奈华智慧工业4.0”实现对农机生产方式、交易流通方式、融资方式等全产业链的系统性再造，借助互联网、物联网等信息化技术，对农机生产要素的优化配置和利用，推动我国农机产业结构的转型升级，打造农机上下游发展的新引擎，增强我国农机产业的整体竞争力和持续发展力。"],
          num: 0,
          clientHeight:''
       }
    },
    methods:{
        showActive(index) {
            this.active = index;
        },
        tab(index) {
            this.num = index;
        },
        handleClickZhzw(){
           this.$router.push({path:'intgovernzw'})
        },
        handleClickZhyl(){
            this.$router.push({path:'intgovernyl'})
        },
        handleClickZhjk(){
           this.$router.push({path:'intgovernjk'})
        },
        changeFixed(clientHeight){                        //动态修改样式
        console.log(clientHeight);
        this.$refs.homePage.style.height = clientHeight+'px';

      },
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
    }
    
}
</script>

<style scoped lang="less">
 
.home{
    width:100%;
    height:100%;
    .homeIndex{
        width:100%;
		.banner{
			width:100%;
			height:700px;
			background:url('../../../static/img/banner_01.jpg') no-repeat right top;
			background-size: 100% 100%;
            margin-top:70px;
            overflow: hidden;
            position:relative;
            .banner-con{
                margin:0 auto;
                height:100%;
                width:1196px;
                .banner-con-outershell{
                    width:750px;
                    height:430px;
                    margin: auto;  
                    position: absolute;  
                    top: 0; left: 0; bottom: 0; right: 0; 
                    .banner-con-inshell{
                        width:550px;
                        height:280px;
                        background:rgba(8, 7, 10, 0.6);
                        margin:0 auto;
                        margin-top:65px;
                        padding-top:60px;
                        p{
                            color:#fff;
                            font-size:50px;
                            text-align: center;
                            font-weight:lighter;
                            line-height:60px;                        
                        }
                        span{
                            display: block;
                            color:#fff;
                            font-size:30px;
                            text-align: center;
                            font-weight:lighter;
                            margin-top:10px;
                        }
                    }

                }
            }
		}
        .intelligent-system{
			width:1196px;
			margin:0 auto;
			height:1146px;
			.caption{
				p{
					text-align: center;
					color:#00a2ea;
					font-size:26px;
					background:url('../../../static/img/line_01.jpg') no-repeat left 305px center,url('../../../static/img/line_02.jpg') no-repeat right 305px center;
					margin-top:100px;
				}
				span{
					display: block;
					text-align: center;
					color:#adadad;
					margin-top:10px;
				}
				.paragraph{
					font-size: 17px;
					color:#4c4c4c;
					width:917px;
					margin:0 auto;
					line-height:26px;
					margin-top:48px;
					letter-spacing: 1px;
				}
				
			}
			.intelligent-img{
				margin-top:52px;
				cursor: pointer;
				.img0{
					width:630px;
					height:349px;
					padding-right:5px;
				}
				.img00{
					width:630px;
                    height:349px;
				}
				.img1,.img11{
					width:556px;
					height:349px;
					
				}
				.img2,.img22{
					width:1196px;
					height:349px;
					margin-top:8px;
				}
				span{
					position: relative;
					display: inline-block;
					.hide_tab{
						position: absolute;
                        top: 0;
                        left: 0;
					}
				}
			}   
          }
        .intelligent-home{
            width:100%;
            height:670px;
            background:url('../../../static/img/zhj.jpg') no-repeat center top;
            background-size: cover;
            -webkit-background-size: cover;
            -o-background-size: cover;
            margin-bottom:106px;
            .intelligent-home-con{
                    width:1196px;
                    margin:0 auto;
                    overflow: hidden;
                    ul{
                        width:265px;
                        height:323px;
                        margin-top:135px;
                        float:left;
                        li{
                            width:265px;
                            height:88px;
                            line-height:88px;
                            color:#fff;
                            font-size:20px;
                            cursor: pointer;
                            text-align: center;
                            background:#606579;
                            background-color: rgba(255, 255, 255, 0.4);
                            filter:alpha(opacity=40);
                            border-bottom:1px solid #fff;
                            
                        }
                        .activeAdd{
                            color:#fff;
                            background:#00a0ea;
                            height:151px;
                            line-height:151px;
                        }
                    } 
                    .tabCon{
                        width:565px;
                        float:left;
                        margin:167px 0 0 70px;
                        .tabContents{
                            color:#fff;
                            width:100%;
                            line-height:26px;
                            font-size:18px;
                        }
                    }
            }
        }
    }
   
}

// @media screen and (max-width:1380px){
  
//     .home .homeIndex .banner .banner-con .banner-con-outershell[data-v-a5316920] {
//     width: 630px;
//     height: 370px;
//     border: 1px solid #fff;
//     margin: 0 auto;
//     margin-top: 70px;
// }
// .home .homeIndex .banner .banner-con .banner-con-outershell .banner-con-inshell[data-v-a5316920] {
//     width: 450px;
//     height: 240px;
//     border: 1px solid #fff;
//     margin: 0 auto;
//     margin-top: 57px;
//     padding-top: 15px;
// }
// } 

</style>



   