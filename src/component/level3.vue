<template>
    <div id="bpp">
        <div class="bpp">
            <h2>第三关</h2>        
            <ul>
                <li v-for="(li,index) in box" :class="li.class"></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default({
        name:'level3',
        data(){
            return{
                box:[],
                wall:[1,2,3,4,5,6,7,11,17,18,19,20,21,23,24,25,29,30,39,40,44,48,49,50,51,54,58,61,62,63,64,65,66,67,68],
                success:[42,43,52,53],
                me:[33],
                boxli:[22,34,37,46],
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
                for(var i=0;i<70;i++){
                    if(this.wall.indexOf(i)!=-1){
                        this.box.push(this.gray);
                    }else if(this.me.indexOf(i)!=-1){
                        this.box.push(this.green);
                    }else if(this.boxli.indexOf(i)!=-1){
                        this.box.push(this.yellow);
                    }else if(this.success.indexOf(i)!=-1){
                        this.box.push(this.blue);
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
                for(var i=0;i<3;i++){
                    if(this.success.indexOf(this.boxli[i])!=-1){
                        num++;
                        if(num == 3){
                            alert('游戏胜利');
                        }
                    }else{
                        break;
                    }
                }
            },
            //键盘上键的方法
            upGo(){
                this.testWall(-10);
                this.render();
                this.win();
            },
            //键盘下键的方法
            downGo(){
                this.testWall(10);
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
    });
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
        width: 300px;
        height: 210px;
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