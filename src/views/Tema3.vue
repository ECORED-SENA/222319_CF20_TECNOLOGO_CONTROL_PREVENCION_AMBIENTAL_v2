<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Verificación de requisitos legales SGA


    .row.fondo-tema3.align-items-center.pb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .row.mb-5
            .bg-green.p-4(data-aos="fade-down")
              .row.align-items-center.justify-content-center
                .col-lg-2.col-md-2.col-5.mb-3.mb-md-0
                  figure.px-lg-2
                    img.px-lg-4(src='@/assets/curso/temas/tema3/ico.svg' alt='')
                .col-lg-10.col-md-10
                  p.mb-0 La verificación de los requisitos legales se realiza por medio de listas de chequeo o en la misma matriz legal de la organización en la columna cumple o no cumple el requisito legal, esta verificación se debe hacer mínimo una vez al año, la mayoría de las veces se hace la verificación de los requisitos legales junto con la verificación del sistema de gestión ambiental si la empresa la tiene, en su mayoría por medio de inspecciones planeadas y auditorías.

          p.mb-4.text-center(data-aos="fade") Las preguntas mínimas para realizar en la verificación de los requisitos legales son:

          SlyderF.text-center.mb-5(columnas="col-lg-6 col-xl-4 align-items-center" data-aos="fade-down")
            .tarjeta.color-acento-contenido.fondo-tarjetas.p-4.p-md-5.d-flex.align-items-center.flex-column
              h1.num 1
              p ¿La organización establece, implementa y mantiene uno o varios procedimientos para determinar cómo se aplican estos requisitos a sus aspectos ambientales?
            .tarjeta.color-acento-contenido.fondo-tarjetas.p-4.p-md-5.d-flex.align-items-center.flex-column
              h1.num 2
              p ¿La organización mantiene información documentada de sus requisitos legales y otros requisitos?
            .tarjeta.color-acento-contenido.fondo-tarjetas.p-4.p-md-5.d-flex.align-items-center.flex-column
              h1.num 3
              p ¿La organización se asegura que los requisitos legales aplicables y otros requisitos que la organización suscriba se tengan en cuenta en el establecimiento, implementación y mantenimiento y mejora continua del SGA?
            .tarjeta.color-acento-contenido.fondo-tarjetas.p-4.p-md-5.d-flex.align-items-center.flex-column
              h1.num 4
              p ¿La organización se asegura que los requisitos legales aplicables se revisan y se actualizan constantemente?
            .tarjeta.color-acento-contenido.fondo-tarjetas.p-4.p-md-5.d-flex.align-items-center.flex-column
              h1.num 5
              p ¿La organización se asegura de la matriz de requisitos legales es conocida por la organización, se conoce el nivel de cumplimiento y las normas descritas son las aplicables a la organización?
            .tarjeta.color-acento-contenido.fondo-tarjetas.p-4.p-md-5.d-flex.align-items-center.flex-column
              h1.num 6
              p ¿La organización se asegura de las fuentes de información confiables para alimentar la matriz de requisitos legales?
            .tarjeta.color-acento-contenido.fondo-tarjetas.p-4.p-md-5.d-flex.align-items-center.flex-column
              h1.num 7
              p ¿Se ha determinado la metodología de acceso a los requisitos legales y otros requisitos aplicables?
            .tarjeta.color-acento-contenido.fondo-tarjetas.p-4.p-md-5.d-flex.align-items-center.flex-column
              h1.num 8
              p ¿Se ha identificado la aplicación de los requisitos legales en la organización?
            .tarjeta.color-acento-contenido.fondo-tarjetas.p-4.p-md-5.d-flex.align-items-center.flex-column
              h1.num 9
              p ¿Se han tenido en cuenta los requisitos legales y otros requisitos en la implementación, mantenimiento y mejora del sistema de gestión ambiental?


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
