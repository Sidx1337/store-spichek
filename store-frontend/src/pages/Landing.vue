<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg11sidx.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">Igor Sidx Shop</h1>
        </div>
      </div>
    </div>
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">About Sidx Shop {{$route.meta.value}}</h2>
            <h5 class="description">
              Магазин электронных сигарет от Igor Sidx – место, где найдется всё для вейпинга: от мощных электронных сигарет до комплектующих для самонамотки. Мы постоянно отслеживаем интересы и предпочтения наших клиентов и на основе полученных результатов обновляем ассортимент, дополняя и расширяя каталог продукции.
              Обращаясь в наш вейп шоп, вы можете быть уверены: все предложенные товары имеют лицензию и протестированы как лично нами, так и сотнями других пользователей. К тому же, наш vape shop – это не только множество товаров для вейпинга, но и оперативная служба поддержки, которая всегда поможет с выбором модели парогенератора, вкуса и крепости жидкости, расскажет об особенностях намотки и самозамеса и ответит на множество других актуальных вопросов.
            </h5>
          </div>
        </div>
        <div class="separator separator-primary"></div>
        <div class="section-story-overview">
         <Dashboard />
        </div>
      </div>
    </div>
    <div class="section section-team text-center">
      <div class="container">
        <h2 class="title">Команда разработчиков</h2>
        <div class="team">
          <div class="row">
            <div class="col-md-4 text-center ml-auto mr-auto">
              <div class="team-player">
                <img
                  src="img/boss.jpg"
                  alt="Thumbnail Image"
                  class="rounded-circle img-fluid img-raised"
                />
                <h4 class="title">Igor Sidx</h4>
                <p class="category text-primary">Boss</p>
                <p class="description">
                  Гений, миллиардер, плейбой, филантроп.
                </p>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-twitter"></i
                ></a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-linkedin"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-contact-us text-center">
      <div class="container">
        <h2 class="title">Want to work with us?</h2>
        <p class="description">Your project is very important to us.</p>
        <div class="row">
          <div class="col-lg-6 text-center ml-auto mr-auto col-md-8">
            <fg-input
              class="input-lg"
              placeholder="First Name..."
              v-model="form.firstName"
              addon-left-icon="now-ui-icons users_circle-08"
            >
            </fg-input>
            <fg-input
              class="input-lg"
              placeholder="Email Here..."
              v-model="form.email"
              addon-left-icon="now-ui-icons ui-1_email-85"
            >
            </fg-input>
            <div class="textarea-container">
              <textarea
                class="form-control"
                name="name"
                rows="4"
                cols="80"
                v-model="form.message"
                placeholder="Type a message..."
              ></textarea>
            </div>
            <div class="send-button">
              <n-button type="primary" round block size="lg"
                >Send Message</n-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
import Dashboard from "@/components/Dashboard";
export default {
  name: 'landing',
  bodyClass: 'landing-page',
  components: {
    Dashboard,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
      form: {
        firstName: '',
        email: '',
        message: ''
      }
    };
  }
};
</script>
<style></style>
