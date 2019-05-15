<template>
<div class="intgovernjk">
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
            tabs: ["数据自动上传","异常提醒","体征诊断","智能随访预约","远程医师问诊","增值服务"],  
            tabContents: ["通过配备智能血压计、智能血糖仪、智能心电仪、智能血氧仪等移动医疗设备方便、快捷、实时掌握自己的健康状况的同时，相关数据自动上传到智慧健康管理系统的健康档案数据库，医生可根据这些数据，通过互联网对患者实现线上的诊疗咨询、慢病管理、健康指导等", 
                            "超出正常取值范围，系统采用红色字体警告，并给绑定亲情号的子女发送预警信息<br>系统自动分析<br>用户上传体征测量数据<br>系统预先设置正常取值范围",
                            "体征数据<br>● 医生根据用户上传的体征测量数据，进行初步诊断<br>健康评测<br>● 医生在系统内提供健康评测问卷，用户填写并提交答案后，医生根据用户的答案为其做出诊断参考<br>随访<br>● 系统自动为医生安排随访工作，并全面记录随访情况，医生根据随访结果做进一步诊断",
                            "根据用户需求，在医院诊治后医护人员仍需对病人继续追踪、查访，所以专门设置两种随访方式，便于医护人员随时掌握用户的身体情况<br>● 系统默认为每个慢病患者安排三个月随访一次<br>● 医生根据用户健康需求安排随访",
                            "在线问答<br>● 一对一进行即时服务支持定位、语音、视频<br>健康问答<br>● 通过特定平台进行互动提问，问答对所有人可见<br>健康养生<br>● 系统提供大量的常见健康问题供用户参考<br>咨询记录<br>● 长期记录用户的咨询记录以便随时查看",
                            "公告<br>● 借此平台发布各类健康相关公告<br>健康贴士<br>● 借此平台发布健康小贴士，供用户参考<br>健康评测问卷<br>一卡通<br>● 会员与非会员实行不同的收费方式"
            ],
            basics: ["实时高效","扩展性强","跨平台使用"],
            basicsContents:["数据自动上传，检测结果即时反馈",
                            "系统集成多项健康应用",
                            "艾米奈华智慧健康平台既有电脑WEB端，还有移动客户APP端，方便用户随时随地使用"
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
.intgovernjk{
    width:100%;
    height:100%;
    margin-top:70px;
        .intgovernment{
            width:100%;
            .banner{
                width:100%;
                height:600px;
                background:url('../../../static/img/zhjk_033.jpg') no-repeat center top;
                background-size: cover;
                -webkit-background-size: cover;
                -o-background-size: cover;
                overflow: hidden;
                .banner-con{
                        width: 940px;
                        margin: 0 auto;
                        padding: 124px 0 0 20px;
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
                        height:407px;
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