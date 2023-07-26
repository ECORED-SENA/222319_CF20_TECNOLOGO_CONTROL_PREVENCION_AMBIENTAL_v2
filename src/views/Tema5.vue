<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.pb-0.pb-md-0.mb-5
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span 5
      h1 Informe de revisión ambiental


    .row.fondo-tema5.align-items-center.pb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .row.mb-5
            .bg-gris.p-4(data-aos="fade-down")
              .row.align-items-center.justify-content-center
                .col-lg-2.col-md-2.col-5.mb-3.mb-lg-0
                  figure.px-lg-3
                    img.px-lg-4(src='@/assets/curso/temas/tema5/ico.svg' alt='')
                .col-lg-10.col-md-10
                  p.mb-0 No existen unos requisitos estándar, de cómo debe ser un informe de revisión ambiental, aunque muchas veces estos informes dependen de requisitos según a quien va dirigido ejemplo: informe ICA, informe para una auditoría de ISO 14001 entre otros que pueden tener requisitos específicos.

          .row.align-items-center.justify-content-center
            .col-lg-5.col-8.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/tema5/img.png' alt='')
            .col-lg-7(data-aos="fade-left")
              p Las características generales de un informe de revisión ambiental son:
              ul.lista-ul--color.color-secundario.ps-3.fa-ul
                li 
                  i.fas.fa-check
                  | Revisión de los indicadores EDA.
                li 
                  i.fas.fa-check
                  | Valoración del cumplimiento de las metas ambientales.
                li 
                  i.fas.fa-check
                  | Seguimiento de la trazabilidad de la implementación del sistema de gestión o programas ambientales.
                li 
                  i.fas.fa-check
                  | Impacto del cumplimiento de las metas ambientales en el medio ambiente, organización y comunidad.
                li 
                  i.fas.fa-check
                  | Seguimiento de los hallazgos encontrados en revisiones anteriores o auditorías anteriores.
                li 
                  i.fas.fa-check
                  | Resultados de hallazgos positivos y por mejorar en la revisión ambiental.
                li 
                  i.fas.fa-check
                  | Acciones de mejora a implementar según el análisis de la revisión. 



</template>

<script>
export default {
  name: 'Tema4',
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
