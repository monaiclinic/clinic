<template>
  <div class="container">
    <div class="content">
      <div class="left">
        <h1 class="titulo--principal">
          Redescrubra sua <br> <span>melhor versão</span>
        </h1>
        <p class="paragrafo">

          Tratamentos faciais exclusivos com tecnologia avançada e o cuidado personalizado que você merece.

        </p>
      </div>
      <div class="right">
        <img src="/img/09.jpg" alt="">
      </div>
    </div>
  </div>
  <div>dsad</div>
</template>

<script setup></script>

<style scoped lang="scss">
.container {
  max-width: 1920px;
  margin: 0 auto;
  padding: 6rem 50px 6rem 36px;
  background: linear-gradient(105deg, #f5e9b841 0%, #FFFFFF 100%);
}

.container>div {
  height: 50px;
  display: flex;
  width: 100%;
  height: 100%;
  gap: 2.5rem;
  width: 1440px;
  margin: 0 auto;
}

.container .left {
  height: 400px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.container .left h1.titulo--principal {
  font-size: 4rem;
  font-weight: bold;
  line-height: 100%;
}

.container .left h1 span {
  color: #e2ab34;
  font-weight: bold;
}

.container .left p.paragrafo {
  font-size: 1.45rem;
  width: 100%;
  color: #3a3939;
  text-align: justify;
}

.container .right {
  height: 400px;
  width: 50%;
  border-radius: 1rem;
}

.container .right img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
}


@media screen and (max-width: 1920px) {}

@media screen and (max-width: 1368px) {}

@media screen and (max-width: 1000px) {
  .container {
    padding: 2rem 20px 4rem 20px;
  }

  .container>div {
    flex-direction: column;

  }

  .container .left h1.titulo--principal {
    font-size: 2.4rem;
    text-align: center;
  }

  .container .left p.paragrafo {
    margin-top: 1rem;
    text-align: center;
    font-size: 1.2rem;
  }

  .container .left {
    justify-content: start;
    height: auto;
  }

  .container .left,
  .container .right {
    width: 100%;
    height: auto;
  }
}
</style>