<template>
    <div class="caption">
         <transition name='fade' appear appear-active-class='animated bounceInLeft' enter-active-class='animated bounceInLeft fade-enter-active' leave-active-class='animated shake fade-leave-active'>
                <p>{{message}}</p>
           </transition>
                <span>{{messagetip}}</span>
                
     
    </div> 
</template>

<script>
export default {
    props: ['message','messagetip'],
    data () {
        return {
           
        }
    }
}
</script>

<style scoped lang="less">
    .caption{
            p{
                text-align: center;
                color:#00a2ea;
                font-size:26px;
                background:url('../../static/img/line_01.jpg') no-repeat left 305px center,url('../../static/img/line_02.jpg') no-repeat right 305px center;
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
        .fade-enter, .fade-leave-to{
        opacity:0;
        }
        .fade-enter-active,.fade-leave-active{
            transition: opacity 4s; 
        }   
</style>