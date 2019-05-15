<template>
    <div class="intgovernyl">
        <v-header></v-header>
        <div class="intgovernment">
            <div class="banner">
                <div class="banner-con">
                    <p class="p1">智慧养老管理平台</p>
                    <p class="p2">intelligent Old-age Management Platform</p>
                    <P class="p3">智慧养老（智慧养老管理服务平台）是面向居家老人、社区及养老机构的传感网系统与信息平台，有别于传统养老系统，艾米养老系统是通过信息化、物联网技术和艾米医疗体系的互联互通，实现互联网+医养结合模式。平台以社区为依托，老龄人群为服务对象，企事业服务机构、医疗、养老机构为支撑，提供康复医疗和生活照料相结合的新型养老服务模式，既包括养老机构传统的生活护理服务、精神心理服务、老年文化服务，也融合了医疗康复服务。并在此基础上提供实时、快捷、高效、低成本的，物联化、互联化、智能化的养老服务。</P>
                </div>   
            </div>
            <div class="center">
                <v-title message="六大模块" messagetip="Five modules"></v-title>       
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
                        <div v-for='(itemCon,index) in tabContents' v-show=" index == num" class="tabContents" v-html="itemCon">{{itemCon}}</div>
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
            tabs: ["一键式服务","多样化服务","质量保证服务","优质服务态度","贴心服务策略","实时高效服务理念"],  
            tabContents: [
                            "一部手机 <br>● 您只需一部可以正常拨打电话的手机或座机<br>一个电话号码<br>● 您只需牢记一个为您提供服务的电话号码<br>描述自己的需求<br>● 详细的与工作人员描述自己的任何相关需求<br>等待服务上门<br>● 完成以上步骤，即可在家享受优质服务", 
                            "医疗健康<br>● 送药上门 ● 大夫上门<br>餐饮美食<br>● 叫外卖 ● 预订饭店 ● 预定餐位<br>休闲娱乐<br>● 预订门票 ● 预订景区 ● 预定酒店<br>出行旅游<br>● 预订汽车票、火车票、机票、船票 ● 预定旅游团<br>便民服务<br>● 托管 ● 房屋中介 ● 保姆 ● 搬家 ● 快递 ● 物业<br>增值服务<br>● 招聘信息 ● 求职信息 ● 商户广告",
                            "1.从众多的服务商中，选取知名度高、服务质量好的商家<br>2.从上一步骤中选拔出的商家中进行竞标选取<br>3.从竞标获胜的商家中选择口碑好的商家（由民众投票选择）<br>4.在后期正式上架运行时，由用户为商家的服务作评价。",
                            "话务员<br>● 呼叫中心的话务员是由经过专业培训的高素质的人员组成<br>上门服务人员<br>● 为用户提供服务的人员是经过重重选拔的商家中脱颖而出的优秀人才<br>商铺服务人员<br>● 我们坚持以用户为中心，快速响应用户需求持续为用户提供优质服务",
                            "新用户<br>● 针对新用户，首先记录用户信息<br>● 在多次服务过后，系统自行总结该用户的生活习惯，以便提供更贴心的服务<br>老用户<br>● 针对老用户，系统自行总结该用户的生活习惯，以便提供更贴心的服务",
                            "系统会自动对商家每天的接单数量进行统计<br>如果用户没有指定商家，话务员会尽量选择当天单数较少的商家提供服务"
            ],
            basics: ["远程监控老人生活","监测健康"],
            basicsContents:["利用物联网技术，通过各类传感器告知家人，使老人的日常生活处于远程监控状态",
                            "不仅将时刻保护老人的安全，还能全方位监测老人的健康状况"
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
.intgovernyl{
    width:100%;
    height:100%;
    margin-top:70px;
    .intgovernment{
        width:100%;
        .banner{
            width:100%;
            height:600px;
            background:url('../../../static/img/zhyl_01.jpg') no-repeat center top;
            background-size: cover;
            -webkit-background-size: cover;
            -o-background-size: cover;
            overflow: hidden;
            .banner-con{
                width:940px;
                margin:0 auto;
                padding:126px 0 0 20px;
                .p1{
                    font-size:34px;
                    color:#333;
                    width:570px;
                    letter-spacing: 5px;
                }
                .p2{
                    font-size: 18px;
                    color: #323431;
                    margin: 16px 0 15px 0;
                    width: 570px;
                }
                .p3{
                    font-size: 16px;
                    color: #7c7c7c;
                    width: 465px;
                    line-height: 26px;
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
            margin-top:67px;
            background:url('../../../static/img/zhjk_02.jpg') no-repeat left top 40px;
            .intelligent-modules-con{
                width:856px;
                height:100%;
                margin:0 auto;
                padding-left:340px;
                ul{
                    width:228px;
                    height:407px;
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
                    height:408px;
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