<!-- SnakeGame.vue -->
<template>
  <h1 id="name">Snake</h1>
    <div id="container">
      <canvas ref="snakeCanvas"></canvas>
    </div>
    <h2>Now that you answered the question right you get a reward! To play the snake game you just made with word blocks. (Arrows as controls)</h2>
  </template>
  
  <script lang="ts">
  export default {
    data() {
      return {
        blockSize: 25,
        rows: 20,
        cols: 20,
        board: null,
        context: null,
        snakeX: 25 * 5,
        snakeY: 25 * 5,
        velocityX: 0,
        velocityY: 0,
        snakeBody: [],
        foodX: 0,
        foodY: 0,
        gameOver: false,
      };
    },
    mounted() {
      this.board = this.$refs.snakeCanvas;
      this.board.height = this.rows * this.blockSize;
      this.board.width = this.cols * this.blockSize;
      this.context = this.board.getContext("2d");
  
      this.placeFood();
      document.addEventListener("keyup", this.changeDirection);
      setInterval(this.update, 1000 / 10); // 100 milliseconds
    },
    methods: {
      update() {
        if (this.gameOver) {
          return;
        }
  
        this.context.fillStyle = "black";
        this.context.fillRect(0, 0, this.board.width, this.board.height);
  
        this.context.fillStyle = "red";
        this.context.fillRect(this.foodX, this.foodY, this.blockSize, this.blockSize);
  
        if (this.snakeX === this.foodX && this.snakeY === this.foodY) {
          this.snakeBody.push([this.foodX, this.foodY]);
          this.placeFood();
        }
  
        for (let i = this.snakeBody.length - 1; i > 0; i--) {
          this.snakeBody[i] = this.snakeBody[i - 1];
        }
        if (this.snakeBody.length) {
          this.snakeBody[0] = [this.snakeX, this.snakeY];
        }
  
        this.context.fillStyle = "green";
        this.snakeX += this.velocityX * this.blockSize;
        this.snakeY += this.velocityY * this.blockSize;
        this.context.fillRect(this.snakeX, this.snakeY, this.blockSize, this.blockSize);
        for (let i = 0; i < this.snakeBody.length; i++) {
          this.context.fillRect(
            this.snakeBody[i][0],
            this.snakeBody[i][1],
            this.blockSize,
            this.blockSize
          );
        }
  
        // game over conditions
        if (
          this.snakeX < 0 ||
          this.snakeX >= this.cols * this.blockSize ||
          this.snakeY < 0 ||
          this.snakeY >= this.rows * this.blockSize
        ) {
          alert("Game over, press OK to reset");
          this.resetGame();
        }
  
        for (let i = 0; i < this.snakeBody.length; i++) {
          if (this.snakeX === this.snakeBody[i][0] && this.snakeY === this.snakeBody[i][1]) {
            alert("Game over, press OK to reset");
            this.resetGame();
          }
        }
      },
      changeDirection(e) {
        if (e.code === "ArrowUp" && this.velocityY !== 1) {
          this.velocityX = 0;
          this.velocityY = -1;
        } else if (e.code === "ArrowDown" && this.velocityY !== -1) {
          this.velocityX = 0;
          this.velocityY = 1;
        } else if (e.code === "ArrowLeft" && this.velocityX !== 1) {
          this.velocityX = -1;
          this.velocityY = 0;
        } else if (e.code === "ArrowRight" && this.velocityX !== -1) {
          this.velocityX = 1;
          this.velocityY = 0;
        }
      },
      placeFood() {
        // Ensure that food doesn't spawn on the snake
        do {
          this.foodX = Math.floor(Math.random() * this.cols) * this.blockSize;
          this.foodY = Math.floor(Math.random() * this.rows) * this.blockSize;
        } while (this.snakeBody.some(([x, y]) => x === this.foodX && y === this.foodY));
      },
      resetGame() {
        this.snakeX = this.blockSize * 5;
        this.snakeY = this.blockSize * 5;
        this.velocityX = 0;
        this.velocityY = 0;
        this.snakeBody = [];
        this.placeFood();
        this.gameOver = false;
      },
    },
  };
  </script>
  
  <style scoped>
    #container{   
      display: flex;
      margin-top: 7rem;
      position: absolute;
      left: 34vw;
    }

    #name{
      position: absolute;
      margin-top: 4rem;
      left: 34vw;

      height: 2rem;
      width: 500px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    h2{
      position: absolute;
      width: 500px;
      margin-top: 40rem;
      left: 34vw;
    }
  </style>
  