<style lang="scss">
@mixin three {
  transform-style: preserve-3d;
  transform-origin: center center;
}
.index-container {
  @include three;

  position: relative;

  width: 100%;
  height: 100%;

  background-color: #ffecd3;

  perspective: 100px;

  overflow: hidden;

  .router-text {
    @include three;

    position: absolute;
    cursor: pointer;

    left: 50%;
    top: 50%;

    font-size: 1.5rem;
    color: rgb(254, 254, 254);
    text-shadow: 3px 3px 1px #b1b1b1;
    // transform: rotateX(30deg) rotate(30deg);
    transition: transform 0.3s, text-shadow 0.3s;

    &:hover {
      transform: rotateX(30deg) rotate(30deg) translateZ(2.5rem);
    }
  }

  .road {
    @include three;
    z-index: 1;
    box-sizing: border-box;
    position: absolute;
    top: 40%;
    bottom: 40%;
    left: -150%;
    right: 150%;

    width: 400%;
    height: 8rem;

    background-color: #4c4c4c;
    box-shadow: 0 20px 10px 10px #4c4c4ced;

    border: 0.5rem solid #fefdfa;

    transform: rotate(-35deg) translateX(-2.5%);

    &::after {
      content: "";
      display: block;
      position: absolute;

      width: 125%;
      height: 0;

      border: 0.1rem solid #fefdfa;

      top: 50%;
    }

    .tree {
      position: absolute;
      width: 10rem;
      height: 10rem;
      left: 50%;
      top: -170%;

      transform: rotate(30deg);

      img {
        width: 100%;
        height: 100%;

        object-fit: cover;
      }
    }

    .house {
      position: absolute;
      left: 56%;
      top: 130%;

      transform: rotate(35deg);

      mask-image: url(../../assets/imgs/屋子.png);
      mask-repeat: no-repeat;
      mask-position: center center;
      mask-size: cover;

      background-color: #4c4c4c;

      width: 10rem;
      height: 10rem;

      img {
        width: 100%;
        height: 100%;

        object-fit: cover;
      }
    }
  }

  .beach {
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(
      -20deg,
      #ffecd3 50%,
      #a8cfb0,
      #a2d4c4,
      #14a69d
    );
    background-size: 200% 200%;
    width: 100%;
    height: 70%;
    background-position: center center;
    background-size: cover;

    border-bottom-right-radius: 50%;

    animation: sea 4s infinite alternate-reverse ease-out;

    .creation {
      position: absolute;
      width: 2rem;
      height: 2rem;

      img {
        width: 100%;
        height: 100%;

        object-fit: cover;
      }
    }

    .star {
      transform: rotateX(60deg);
      top: 50%;

      &:nth-of-type(1) {
        left: 10%;
      }

      &:nth-of-type(2) {
        left: 15%;
      }
    }
  }
}

@keyframes sea {
  from {
    background-size: 300% 300%;
  }

  to {
    background-size: 100% 100%;
  }
}
</style>

<template>
  <div class="index-container">
    <section class="router-text">首页</section>
    <section class="road">
      <div class="tree">
        <img src="../../assets/imgs/树.png" alt="海星-红" />
      </div>
      <!-- <div class="house"></div> -->
    </section>
    <section class="beach">
      <div class="star creation">
        <img src="../../assets/imgs/海星-红.png" alt="海星-红" />
      </div>
      <div class="star creation">
        <img src="../../assets/imgs/海星-蓝.png" alt="海星-红" />
      </div>
    </section>
  </div>
</template>

<script setup></script>
