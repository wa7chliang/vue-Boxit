<template>
    <div id="bpp">
        <div class="bpp">
            <h2>第一关</h2>        
            <ul>
                <li v-for="(li,index) in box" :class="li.class"></li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default({
        name:'bpp',
        data(){
            return {
                box:[],
                wall:[2,3,4,10,12,18,20,21,22,23,24,25,26,31,32,37,38,39,40,41,42,43,45,51,53,59,60,61],
                success:[11,33,30,52],
                boxli:[27,29,35,44],
                me:[36],
                game:64,
                white:{class:'white'},
                gray:{class:'gray'},
                blue:{class:'blue'},
                yellow:{class:'yellow'},
                green:{class:'green'}
            }
        },
        methods:{
            render(){
                this.box = [];
                for(var i = 0;i<this.game;i++){
                    if(this.wall.indexOf(i)!=-1){
                        this.box.push(this.gray);
                    }else if(this.boxli.indexOf(i)!=-1){
                        this.box.push(this.yellow);
                    }else if(this.success.indexOf(i)!=-1){
                        this.box.push(this.blue);
                    }else if(this.me.indexOf(i)!=-1){
                        this.box.push(this.green);
                    }else{
                        this.box.push(this.white);
                    }
                }
            },
            //判断是否前进的格子是墙
            testWall(index){
                var num = this.me[0] + index;
                if(this.wall.indexOf(num)== -1 && this.boxli.indexOf(num) == -1){
                    this.me[0] = num;
                }else if(this.boxli.indexOf(num)!=-1){
                    var boxIndex = this.boxli.indexOf(num);
                    if(this.wall.indexOf(num+index)!=-1){
                        this.me[0] = num-index;
                    }else if(this.boxli.indexOf(num+index)!=-1){
                        this.me[0] = num-index;                        
                    }else{
                        this.boxli.splice(boxIndex,1,num+index);                        
                    }
                }
            },
            //判断胜利
            win(){
                var num = 0;
                for(var i=0;i<4;i++){
                    if(this.success.indexOf(this.boxli[i])!=-1){
                        num++;
                        if(num == 4){
                            alert('游戏胜利');
                            //使用没有历史记录的跳转,防止后退地图混乱                          
                            this.$router.replace({path:'/level2'});                            
                        }
                    }else{
                        break;
                    }
                }
            },
            //键盘上键的方法
            upGo(){
                this.testWall(-8);
                this.render();
                this.win();
            },
            //键盘下键的方法
            downGo(){
                this.testWall(8);
                this.render();
                this.win();                
            },
            //键盘左键的方法
            leftGo(){
                this.testWall(-1);
                this.render();
                this.win();                
            },
            //键盘右键的方法
            rightGo(){
                this.testWall(1);
                this.render();
                this.win();                
            }
       },
       created(){
           this.render();
           let that = this;
           //使用全局键盘事件
           document.onkeyup = function($event){
               if($event.keyCode==38){
                    that.upGo();
               }else if($event.keyCode==40){
                   that.downGo();
               }else if($event.keyCode==37){
                   that.leftGo();
               }else if($event.keyCode==39){
                   that.rightGo();
               }
           };
       }
    })
</script>

<style>
    *{margin: 0;padding: 0;}
    #bpp{
        display: flex;
        height: 100vh;
    }
    .bpp{
        margin: auto;        
    }
    h2{
        text-align: center;
        margin-bottom: 20px;
    }
    ul{
        width: 240px;
        height: 240px;
    }
    li{
      list-style: none;
      width: 30px;
      height: 30px;
      float:left;
    }
    .white{
        background:white;
    }
    .gray{
        background:#333;
    }
    .blue{
        background:blue;
        border-radius:80%;
    }
    .yellow{
        background: yellow;
    }
    .green{
        background: green;
        border-radius:80%;        
    }
</style>