<template>
    <div class="contactus">
      <v-header></v-header>
        <div class="banner"></div>
        <div class="contactus-con">
            <div class="contactus-con-left">
                <h3>总部地址</h3>
                <p>总部地址: 北京市海淀区四季青路8号郦城工作区312室</p>
                <p>总部电话: 010-53340073</p>

                <h3>分部地址</h3>
                <p>分部地址: 黑龙江省佳木斯市前进区滨江东路389号</p>
                <p>分部电话: 0454-8306018</p>
                <h3>联系电话</h3>
                <p>全国免费服务热线: 400-625-3330</p>
                <p>全国免费售后电话: 400-881-8508</p>

            </div>
            <div class="contactus-con-right">
                <ul>
                    <li 
                    v-for="(item,index) in tabs" 
                    :class="{active:index == num}"
                    @click="tab(index)">{{item}}</li>
                </ul>
                <div class="tabCon">
                    <div 
                    v-for='(itemCon,index) in tabContents' 
                    v-show=" index == num"><img :src="itemCon" alt=""></div>
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
            tabs: ["北京总部", "黑龙江分部"],
            tabContents: [
                require('../../static/img/co_02.jpg'), 
                require('../../static/img/co_01.jpg')
                ],
            num: 0
        }
    },
    methods: {
        tab(index) {
            this.num = index;
        }
    }
}
</script>

<style scoped lang="less">
.contactus{
  .banner{
        width:100%;
        height:400px;
        margin-top:70px;
        background:url('../../static/img/lxwm_01.jpg') no-repeat center top;
        background-size: cover;
        -webkit-background-size: cover;
        -o-background-size: cover;
      
  }
  .contactus-con{
          width:1116px;
          height:520px;
          margin:0 auto;
          padding:75px 0 0 80px;
          .contactus-con-left{
              float:left;
              h3{
                  font-size:20px;
                  color: #333;
                  margin-bottom:35px;
                  margin-top:38px;
              }
              p{
                  font-size:16px;
                  color:#7d7d7d;
                  line-height:25px;
              }
          }
          .contactus-con-right{
              float:right;
              margin-top:22px;
              ul{
                  li{
                    width:200px;
                    height:40px;
                    background:#fff;
                    border:1px solid #e7e7e7;
                    text-align: center;
                    line-height:40px;
                    color:#333;
                    float:left;
                    cursor: pointer;
                 }
              }
              .active{
              background:#00a0ea;
              color:#fff;
              border:0;
              width:202px;
              height:42px;
              
          }
          .tabCon{
              width:629px;
              height:368px;
              img{
                  width:100%;
                  height:100%;
              }
          }
          }
          
      }  
}
 @media screen and (max-width:1400px){
  .contactus .banner{
      height:300px;
    width:100%;
    background-size: cover;                
    }

}     
</style>