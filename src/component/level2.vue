<template>
    <div id="bpp">
        <div class="bpp">
            <h2>第二关</h2>
            <ul>
                <li v-for="(li,index) in box" :class="li.class"></li>
            </ul>
        </div>
    </div>
</template>

<script>
  export default({
    name: "level2",
    data(){
      return {
        box: [],
        wall: [0, 1, 2, 3, 4, 9, 13, 18, 22, 24, 25, 26, 27, 31, 33, 35, 36, 37, 38, 40, 41, 42, 44, 46, 47, 53, 55, 59, 62, 64, 68, 69, 70, 71, 73, 74, 75, 76, 77],
        success: [34, 43, 52],
        boxli: [20, 29, 39],
        me: [30],
        white: {class: 'white'},
        gray: {class: 'gray'},
        blue: {class: 'blue'},
        yellow: {class: 'yellow'},
        green: {class: 'green'}
      }
    },
    methods: {
      render(){
        this.box = [];
        for (var i = 0; i < 81; i++) {
          if (this.wall.indexOf(i) != -1) {
            this.box.push(this.gray);
          } else if (this.me.indexOf(i) != -1) {
            this.box.push(this.green);
          } else if (this.boxli.indexOf(i) != -1) {
            this.box.push(this.yellow);
          } else if (this.success.indexOf(i) != -1) {
            this.box.push(this.blue);
          } else {
            this.box.push(this.white);
          }
        }
      },
      //判断是否前进的格子是墙
      testWall(index){
        var num = this.me[0] + index;
        if (this.wall.indexOf(num) == -1 && this.boxli.indexOf(num) == -1) {
          this.me[0] = num;
        } else if (this.boxli.indexOf(num) != -1) {
          var boxIndex = this.boxli.indexOf(num);
          if (this.wall.indexOf(num + index) != -1) {
            this.me[0] = num - index;
          } else if (this.boxli.indexOf(num + index) != -1) {
            this.me[0] = num - index;
          } else {
            this.boxli.splice(boxIndex, 1, num + index);
            this.me[0] = num
          }
        }
      },
      //判断胜利
      win(){
        var num = 0;
        for (var i = 0; i < 3; i++) {
          if (this.success.indexOf(this.boxli[i]) != -1) {
            num++;
            if (num == 3) {
              alert('游戏胜利');
              this.$router.replace({path: '/level3'});
            }
          } else {
            break;
          }
        }
      },
      //键盘上键的方法
      upGo(){
        this.testWall(-9);
        this.render();
        setTimeout(()=> {
          this.win();
        } ,1)
      },
      //键盘下键的方法
      downGo(){
        this.testWall(9);
        this.render();
        setTimeout(()=> {
          this.win();
        } ,1)
      },
      //键盘左键的方法
      leftGo(){
        this.testWall(-1);
        this.render();
        setTimeout(()=> {
          this.win();
        } ,1)
      },
      //键盘右键的方法
      rightGo(){
        this.testWall(1);
        this.render();
        setTimeout(()=> {
          this.win();
        } ,1)
      }
    },
    created(){
      this.render();
      let that = this;
      //使用全局键盘事件
      document.onkeyup = function ($event) {
        if ($event.keyCode == 38) {
          that.upGo();
        } else if ($event.keyCode == 40) {
          that.downGo();
        } else if ($event.keyCode == 37) {
          that.leftGo();
        } else if ($event.keyCode == 39) {
          that.rightGo();
        }
      };
    }
  })
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    #bpp {
        display: flex;
        height: 100vh;
    }

    .bpp {
        margin: auto;
    }

    h2 {
        text-align: center;
        margin-bottom: 20px;
    }

    ul {
        width: 270px;
        height: 270px;
    }

    li {
        list-style: none;
        width: 30px;
        height: 30px;
        float: left;
    }

    .white {
        background: white;
    }

    .gray {
        background: #333;
    }

    .blue {
        background: blue;
        border-radius: 80%;
    }

    .yellow {
        background: yellow;
    }

    .green {
        background: url("../common/images/role.png");
        background-size: contain;
    }
</style>