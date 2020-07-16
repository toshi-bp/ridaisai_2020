<template>
  <div class="visitor">
    <TheContainer class="container">
      <h2 class="visitor__title">
        ご来場者の皆様へ
      </h2>
      <div class="visitor__colorbox">
        <div class="visitor__colorbox__item access">
          <img src="~/assets/icons/visitor/map_icon.svg" class="visitor__colorbox__item access"/>
          アクセス
        </div>
        <div class="visitor__colorbox__item map">
          <img src="~/assets/icons/visitor/map_icon.svg" class="visitor__colorbox__item map"/>
          キャンパスマップ
        </div>
        <div class="visitor__colorbox__item trouble">
          <img src="~/assets/icons/visitor/map_icon.svg" class="visitor__colorbox__item trouble"/>
          お困りの際は
        </div>
        <div class="visitor__colorbox__item question">
          <img src="~/assets/icons/visitor/map_icon.svg" class="visitor__colorbox__item question"/>
          よくあるご質問
        </div>
        <div class="visitor__colorbox__item ban">
          注意事項
        </div>
      </div>
    </TheContainer>
  </div>
</template>

<script>
import TheContainer from '~/components/atoms/TheContainer.vue'
// import LinkButton2 from '~/components/atoms/LinkButton2.vue'

export default {
  components: {
    TheContainer
  }
}
</script>

<style lang="scss" scoped>
.visitor {
  margin-top: 5rem;
  background-color: rgba($sub-color, $alpha: 0.15);
  padding: 2rem 0 3rem;
  margin-bottom: 5rem;

  &__itembox{
    display: flex;
      justify-content: space-between;

      &__item{
      //   height: 20rem;
        width: 100%;
        background-color: rgba($sub-color, $alpha: 0.15);
      }
  }

  &__colorbox{
    display: flex;
    flex-wrap: wrap;

    &__item{
      width: 22.75%;
      height: 6rem;
      margin-right: 3%;
      margin-bottom: 1rem;
      background-color: $theme-color;
      &:last-child{
          width: 100%;
          margin-right: 0;
        }

      @include media-breakpoint-down(sm) {
        width: 47.5%;
        margin-right: 5%;
      }
    }
  }
}

.access{
  background-color: rgba(#ffff00,0.6);
  transition: 0.5s;
  &:hover{
    background-color: #ffff00;
  }
}
.map{
  background-color: rgba(#d2691e,0.6);
  transition: 0.5s;
  &:hover{
    background-color: #d2691e;
  }
  @include media-breakpoint-down(sm) {
    margin-right: 0;
  }
}
.trouble{
  background-color: rgba(#6a5acd,0.6);
  transition: 0.5s;
  &:hover{
    background-color: #6a5acd;
  }
}
.question{
  background-color: rgba(#ee82ee,0.6);
  transition: 0.5s;
  &:hover{
    background-color: #ee82ee;
  }
  margin-right: 0;
}
.ban{
  background-color: rgba(#000000,0.6);
  transition: 0.5s;
  &:hover{
    background-color: #000000;
  }
}

</style>
