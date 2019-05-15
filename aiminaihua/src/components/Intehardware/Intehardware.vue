<template>
    <div class="Intelligent_xty">
        <div class="contain" v-for="(item,index) in list" :key="index" v-show="selectIndex == index">
           <div class="left">
               <p class="contain-title">{{item.title1}}</p>
               <div v-for="(item_sl,index) in item.select" :key="index">
                   <p class="tit-p">{{item_sl.seleTit1}}</p>
                   <p class="ele-p">{{item_sl.feature1}}</p>
                   <p class="tit-p">{{item_sl.seleTit2}}</p>
                   <p class="ele-p">{{item_sl.feature2}}</p>
                   <p class="tit-p">{{item_sl.seleTit3}}</p>
                   <p class="ele-p">{{item_sl.feature3}}</p>
                   <p class="tit-p">{{item_sl.seleTit4}}</p>
                   <p class="ele-p">{{item_sl.feature4}}</p>
               </div>
           </div> 
           <div class="right">
               <img :src="item.img" alt="">
           </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        selectIndex: {
            type: Number,
            default: 9
        }
    },
    data () {
        return {
            list: [
                {
                    img:require('../../static/img/yq_01.jpg'),
                    title1: "AI-MI智能血糖仪",
                    select:[
                        {
                        seleTit1: "功能:",
                        feature1: "约6秒出测量结果、采血量1ul、500组记忆、省电模式、时间日期显示",
                        seleTit2: "特点:",
                        feature2: "1.方便：免调码，即插即用；2.无痛感：1.0ul微量采血；3.清晰：大屏幕，看得清；4.强大：大容量500组记忆。",
                        seleTit3: "用途:",
                        feature3: "测量血糖",
                        seleTit4: "购买渠道:",
                        feature4: "请拨打电话: 0454-8306018"
                        },
                    ]
                },
                {
                    img:require('../../static/img/yq_02.jpg'), 
                    title1: "AI-MI智能血压仪",
                    select:[
                        {
                        seleTit1: "功能:",
                        feature1: "双人各90组记忆功能，方便血压回顾，即使电池断电，测量数据也不回丢失。",
                        seleTit2: "特点:",
                        feature2: "一键操作、三次平均值、真人语音、90×2组记忆、智能加压、心律不齐监测、大屏显示",
                        seleTit3: "用途:",
                        feature3: "测量血压",
                        seleTit4: "购买渠道:",
                        feature4: "请拨打电话: 0454-8306018"
                        },
                    ]
                },
                {
                    img:require('../../static/img/yq_03.jpg'),
                    title1: "AI-MI智能血糖仪",
                    select:[
                        {
                        seleTit1: "功能:",
                        feature1: "实时持续检测、高温智能报警、免费咨询医生、云端远程看护、吃药护理提醒。",
                        seleTit2: "特点:",
                        feature2: "夜间发烧第一时间知道、出差在外家人健康在手、就医问诊所有病程在案、±0.05℃高精度传感器、6.5mm超薄舒适设计、超低功耗相当于1/10000的手机辐射。",
                        seleTit3: "用途:",
                        feature3: "测量体温",
                        seleTit4: "购买渠道:",
                        feature4: "请拨打电话: 0454-8306018"
                        },
                    ]
                },
                {
                    img:require('../../static/img/yq_04.jpg'),
                    title1: "AI-MI智能血糖仪",
                    select:[
                        {
                        seleTit1: "功能:",
                        feature1: "支持多种测量方式：手掌测量、腿部测量、胸部测量和导联线测量、LCD实时显示ECG测量波形、ECG记录时间30秒/次。",
                        seleTit2: "特点:",
                        feature2: "自适应调整ECG显示幅度、测量完毕，会给出ECG测量结果（平均心率和波形结果）、具有导联线接口，导联线选配。",
                        seleTit3: "用途:",
                        feature3: "测量血氧",
                        seleTit4: "购买渠道:",
                        feature4: "请拨打电话: 0454-8306018"
                        },
                    ]
                },
                {
                    img:require('../../static/img/yq_05.jpg'), 
                    title1: "AI-MI智能心率监测手表",
                    select:[
                        {
                        seleTit1: "功能:",
                        feature1: "实时定位、测心率、双向通话、实时跟踪、历史轨迹、找手表、电子围栏、闹钟提醒、防火墙",
                        seleTit2: "特点:",
                        feature2: "全方位实时定位、全天候心率监测、大屏幕、大字体老人看得清、大喇叭、大按键、北斗/GPS双星定位、四频天线、全球网络、电子围栏、智能报警、智能休眠、超长待机",
                        seleTit3: "用途:",
                        feature3: "定位、心率、急救、通话",
                        seleTit4: "购买渠道:",
                        feature4: "请拨打电话: 0454-8306018"
                        },
                    ]
                },
                {
                    img:require('../../static/img/yq_06.jpg'), 
                    title1: "AI-MI智能血糖仪",
                    select:[
                        {
                        seleTit1: "功能:",
                        feature1: "实时定位、语音对讲、历史轨迹、电子围栏、远程监听、紧急求救、双向通话、超长待机",
                        seleTit2: "特点:",
                        feature2: "精准定位无死角、超长待机时刻保障安全、行业领先的省电技术、语音对讲实时互动、清晰音质双向通话、",
                        seleTit3: "用途:",
                        feature3: "儿童定位、实时通话",
                        seleTit4: "购买渠道:",
                        feature4: "请拨打电话: 0454-8306018"
                        },
                    ]
                }
            ]
        }
    }    
}
</script>

<style scoped lang="less">
 .Intelligent_xty{
     width:100%;
     margin-top:93px;
    .contain{
        width:1196px;
        height:605px;
        margin:0 auto;
        background:#fff;
        overflow: hidden;
        // padding:130px 0 0 95px;
        .contain-title{
            color:#00a0e9;
            font-size:30px;
            
        }
        .tit-p{
                font-weight:normal;
                font-size:16px;
                color:#494949;
                margin-top:30px;
            }
            .ele-p{
                color:#747474;
                font-size:16px;
                line-height:24px;
                width:585px;
                text-indent:2em; 
                letter-spacing: 1px;
            }
        .left{
            float:left;
            margin: 120px 0 0 95px;
        }
        .right{
            margin-top:115px;
            img{
                margin-left: 51px;
                width: 410px;
                
            }
        }
    }
 }
      
</style>
    