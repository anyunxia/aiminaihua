<template>
    <div class="footer">
        <div class="footer-con">
            <div class="left">
                <div class="left-top">
                    <P>
                        <span class="name">艾米奈华</span>
                        <span>AI-MINERVA</span>
                    </P>
                </div>
                <div class="left-bottom">
                        <p class="lxfs">联系方式: 全国免费服务热线: 400-625-3330</p>
                        <p class="shdh">全国免费售后电话: 400-881-8508</p>
                </div>
            </div>  
            <div class="center">
                <div>
                    <span>总部地址:&nbsp;</span>
                    <span class="span-right">北京市海淀区四季青路8号郦城工作区312室</span>
                    <span>总部电话:&nbsp;</span>
                    <span class="span-right">010-53340073</span>
                    <span>分部地址:&nbsp;</span>
                    <span class="span-right">黑龙江省佳木斯市前进区滨江东路389号</span>
                    <span>分部电话:&nbsp;</span>
                    <span class="span-right">0454-8306018</span>
                </div>
            </div>
            <div class="right"></div>
            <div class="reference">©版权所有&nbsp;@www.aiminerva.com All Right Reserved .京ICP备: 15014763号-1</div>
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

        .footer{
        width:100%;
        height:420px;
        background:#2d2d2d;
        .footer-con{
            width:1196px;
            height:100%;
            margin:0 auto;
            overflow: hidden;
            .left{
                width:33%;
                height:180px;
                border-right:1px solid #fff;
                margin-top:85px;
                float:left;
                .left-top{
                    width:100%;
                    height:106px;
                    overflow: hidden;
                    background:url('../../static/img/le_21.jpg') no-repeat left 90px top 15px; 
                    p{
                        color: #fff;
                        margin:15px 0 0 190px;
                        .name{
                            font-size:28px;
                        }
                        span{
                            display: block;
                            font-size:18px;
                            margin-top:10px;
                        }
                    }
                }
                .left-bottom{
                    color: #fff;
                    font-size:15px;
                    line-height:30px;
                    .lxfs{
                        text-align: center;
                    }
                    .shdh{
                        margin-left:117px;
                    }
                }
            }
            .center{
                width:33%;
                color:#fff;
                font-size: 16px;
                height:180px;
                border-right:1px solid #fff;
                float:left;
                margin-top:85px;
                div{
                    width:243px;
                    margin:0 auto;
                    span{
                        display:inline-block;
                        float:left;
                        line-height:29px;
                    }
                    .span-right{
                        width:170px;
                    }
                }
            }
            .right{
                width:33%;
                height:180px;
                float:left;
                margin-top:85px;
                background:url('../../static/img/le_24.jpg') no-repeat left 90px top 15px; 
            }
            .reference{
                text-align: center;
                color:#fff;
                padding-top:370px;
            }
        }
    }  
</style>