<template>
    <div class="intgovernzw">
        <v-header></v-header>
        <div class="intgovernment">
            <div class="banner">
                <div class="banner-con">
                    <p class="p1">智慧政务管理平台</p>
                    <p class="p2">INTELLLGENT GOVERNMENT PLATFORM</p>
                    <P class="p3">智慧政务（智慧社区公共服务综合信息平台）是通过移动信息化、物联网技术及大数据分析等手段从技术上和管理上对省、市、县区政务及相关信息进行了统一管理，打造居民和政府的互联互通平台，实现了政府和居民间的信息及管理资源共享，使政务工作全面实现信息化。</P>
                </div>   
            </div>
            <div class="center">
                <v-title message="五大模块" messagetip="Five modules"></v-title>       
            </div>
            <div class="modules-con">
                <div class="intelligent-modules-con">
                    <ul>
                        <li  v-for="(item,index) in tabs" 
                            :class="{activeAdd:index == num}"
                            @click="tab(index)">{{item}}
                        </li>
                    </ul>
                    <div class="tabCon">
                        <div v-for='(itemCon,index) in tabContents' v-show=" index == num" class="tabContents">{{itemCon}}</div>
                    </div>
                </div>
            </div>  
            <div class="trait">
                <div class="trait-con">
                    <p class="title"><img src="../../../static/img/zhzw_03.jpg" alt="">平台特点</p>
                    <div>
                        <ul class="ul-left">
                            <li  v-for="basics in basics">{{basics}}</li>
                        </ul>
                        <ul class="ul-right">
                            <li  v-for="basicsContents in basicsContents">{{basicsContents}}</li>
                        </ul>
                    </div>
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
            active: 0,
            num: 0,
            tabs: ["在线审批","便民信息","建议咨询","活动管理","信息管理"],  
            tabContents: ["对居民提交的表格进行审批。居民可以通过查看网上办事流程进行查看，也可以通过在线填表，将信息录入后，传至社区，社区统一办理。", 
                            "人人信赖的生活服务平台，海量生活信息免费查询、发布。房屋租售、二手买卖、招聘求职、汽车租售、餐饮娱乐、覆盖全国所有大中小城市、汇聚大量商家和个人信息。真实、高效、免费，本地生活服务大全，让您的生活更简单！",
                            "为访客提供“即想即得”的信息咨询服务，随时随地在线解决您的任何问题，让您不再有疑没处答，有惑没处解。为百姓提供一个反馈诉求的渠道，让百姓参与并监督社会治理。通过该平台，百姓可以随时反馈各类社情民意问题。",
                            "以图片、文字的形式对社区活动和相关新闻进行展示，社区居民可以根据自己喜好选择相应活动，丰富自己的业余生活。",
                            "居民信息管理以户为单位,支持居民信息模糊查询,信息分类管理:党员 、特殊群体 、社会组织 、辖区单位,特殊群体信息分类管理:残疾人 、留守儿童 、低保人员 、空巢老人 、信息保密措施"
            ],
            basics: ["基础信息数据库","网格信息数据库","业务办理数据库","跨平台"],
            basicsContents:["人口、区划、经济社会发展情况、驻区单位、建筑",
                            "集中采集、动态更新、信息共享",
                            "统一受理、分类处置、逐级上报、跟踪督察、评价奖惩",
                            "艾米奈华智慧政务平台既有电脑WEB端，还有移动客户APP端，方便用户随时随地使用"
            ]
        }
    },
     methods:{
        tab(index) {
            this.num = index;
        }
    }
}
</script>

<style scoped lang="less">
.intgovernzw{
    width:100%;
    height:100%;
    margin-top:70px;
    .intgovernment{
         width:100%;
         .banner{
            width:100%;
            height:600px;
            background:url('../../../static/img/zhzw_01.jpg') no-repeat center top;
            background-size: cover;
            -webkit-background-size: cover;
            -o-background-size: cover;
            overflow: hidden;
            .banner-con{
                width:640px;
                margin:0 auto;
                padding:206px 0 0 520px;
                .p1{
                    font-size:34px;
                    color:#333;
                    width:570px;
                    letter-spacing: 5px;
                }
                .p2{
                    font-size:18px;
                    color:#323431;
                    margin:16px 0 15px 0;
                    width:570px;
                }
                .p3{
                    font-size:16px;
                    color:#7c7c7c;
                    width:610px;
                    line-height:26px;
                }
            }
        }
        .center{
            width:1196px;
            margin:0 auto;
        }
        .modules-con{
            width:100%;
            height:500px;
            margin-top:52px;
            background:url('../../../static/img/zhzw_02.jpg') no-repeat left top 40px;
            .intelligent-modules-con{
                width:856px;
                height:100%;
                margin:0 auto;
                padding-left:340px;
                ul{
                    width:228px;
                    height:340px;
                    float:left;
                    border-right:1px solid #e7e7e7;
                    border-top:1px solid #e7e7e7;
                    li{
                        width:228px;
                        height:67px;
                        line-height:72px;
                        color:#666;
                        font-size:16px;
                        cursor: pointer;
                        text-align: center;
                        background:#fff;
                        border-bottom:1px solid #e7e7e7;                        
                    }
                    .activeAdd{
                        color:#fff;
                        background:#00a0ea;
                        border-bottom:1px solid #00a0ea;    
                    }
                } 
                .tabCon{
                   box-shadow: 2px 2px 3px 1px rgba(0, 0, 0, 0.3);
                    width:578px;
                    height:341px;
                    float:left;
                    background:#fff;
                    .tabContents{
                        color:#666;
                        float:left;
                        width:492px;
                        line-height:26px;
                        font-size:16px;
                        margin:35px 0 0 50px;
                    }
                }
            }
            
        }
        .trait{
            width:100%;
            height:315px;
            .trait-con{
                width:1196px;
                height:100%;
                margin:0 auto;
                .title{
                   font-size:26px;
                   color:#00a0e8; 
                   padding-left:60px;
                   img{
                      margin-right:30px;
                      vertical-align: middle;
                      margin-bottom:5px; 
                   }
                }
                div{
                    padding:48px 0 0 220px;
                    .ul-left{
                        float:left;
                        li{
                            font-size:18px;
                            color:#00a0e8;
                            line-height:34px;
                            text-align: right;
                        }
                    }
                    .ul-right{
                        float:left;
                        li{
                            font-size:16px;
                            color:#494949;
                            line-height:34px;
                            margin-left:24px;
                        }
                    }
                }
            }
        }
     }  
}
     
</style>