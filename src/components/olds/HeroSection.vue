<template>
  <div class="hero-wrapper">
    <div class="hero-cta">
      <h1>Realce sua Beleza Natural ✨</h1>
      <p>
        Cuidamos da sua pele com tecnologia de ponta e um olhar humano. Cada tratamento é pensado para realçar a beleza
        que já existe em você, com leveza e respeito à sua essência.
      </p>
      <div>
        <form action="">
          <div class="wrapper__input">
            <input type="text" placeholder="nome">
            <input type="text" placeholder="telefone">
          </div>
          <div class="wrapper__btn">
            <button>Agendar Avaliação</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.hero-wrapper {
  background-image: url('/img/hero_section.png');
  height: 713px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
}

.hero-cta {
  max-width: 90rem;
  margin: 0 auto;
  padding: 5px;
  width: 100%;
}

.hero-cta h1 {
  font-size: 40px;
  max-width: 600px;
  width: 100%;
}

.hero-cta p {
  margin-top: 0.8rem;
  font-size: 16px;
  max-width: 600px;
  width: 100%;
  color: #000000;
  text-align: justify;
}

.hero-cta div {
  margin-top: 2rem;
}

.hero-cta div form .wrapper__input {
  display: flex;
  gap: 0.3rem;
}

.hero-cta div form .wrapper__input input {
  border: unset;
  border-radius: 0.4rem;
  width: 250px;
  max-width: 100%;
  padding: 0.7rem 1rem;
  font-size: 1rem;
}

.hero-cta div form .wrapper__btn {
  margin-top: 15px;
}

.hero-cta div form .wrapper__btn button {
  border: unset;
  height: 45px;
  background-color: rgb(34, 145, 30);
  width: 250px;
  max-width: 100%;
  border-radius: 0.4rem;
  cursor: pointer;
  font-weight: 700;
  color: #F1F0EC;
  font-size: 1rem;
}

.hero-cta div form .wrapper__btn button:hover {
  background-color: rgba(34, 145, 30, 0.829)
}

@media screen and (max-width: 1000px) {}
</style>