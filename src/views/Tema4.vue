<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.pb-0.pb-md-0
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Medidas de manejo ambiental


    p(data-aos="fade") Las medidas de manejo ambiental son acciones para prevenir, controlar, mitigar y compensar los aspectos ambientales significativos de la organización, se define a continuación el tipo de medida ambiental.
    p.mb-4(data-aos="fade") Estas medidas se retroalimentan constantemente con las verificaciones:

    .row.align-items-center.justify-content-center.mb-4
      .col-lg-9.mb-3.mb-md-0(data-aos="fade-right")
        TabsA.color-acento-botones
          .tarjeta.bg-green2.p-4(titulo="Medidas de Prevención")
            h5 Medidas de prevención
            p Son acciones encaminadas a evitar los impactos, efectos y riesgos ambientales, que pueden causar impactos negativos o daño a las personas, al medio ambiente y/o a la propiedad privada durante la ejecución de un proyecto. Las medidas de prevención tienen por finalidad disminuir o evitar que aparezcan efectos desfavorables o indeseables a consecuencia de los riesgos ambientales, a la salud humana o en el medio ambiente, y que pudieran provocar una pérdida, disminución, detrimento o menoscabo significativo a uno o más elementos del mismo, a consecuencia de la ejecución del proyecto.
          .tarjeta.bg-green2.p-4(titulo="Medidas de Control")
            h5 Medidas de control
            p Las medidas de control consideran una serie de medidas destinadas a enfrentar con éxito los riesgos identificados en cada una de las etapas del proyecto toda vez que ocurra un riesgo específico, minimizando los daños a los trabajadores, a comunidades vecinas, al medio ambiente circundante y a las instalaciones.
          .tarjeta.bg-green2.p-4(titulo="Medidas de Mitigación")
            h5 Medidas de mitigación
            p Se entiende como medidas de mitigación la implementación o aplicación de cualquier política, estrategia, obra y/o acción tendiente a minimizar los impactos adversos que puedan presentarse durante las etapas de ejecución de un proyecto y mejorar la calidad ambiental aprovechando las oportunidades existentes.
          .tarjeta.bg-green2.p-4(titulo="Medidas de Compensación")
            h5 Medidas de compensación
            p Son las actividades dirigidas a retribuir a las comunidades, las regiones, localidades y entorno natural, por los impactos o efectos negativos generados por un proyecto, que no puedan ser evitados, corregidos, mitigados o sustituidos.
      .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema4/img.png' alt='')


    .row.fondo-tema4.align-items-center.py-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .row.align-items-center
            .col-lg-4.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/tema4/img2.png' alt='')
            .col-lg-8(data-aos="fade-left")
              p Estas medidas de manejo ambiental pueden llamarse 
                b.t-green programas ambientales
                |, que están incluidos en los PMA, Planes de manejo ambiental, PGIRS Planes de gestión integral de residuos, SGA Sistema de gestión Ambiental, entre otros tipos de documentos, según la exigencia, normativa o planteamiento en la organización. Los programas ambientales, que son definidos por la empresa, pueden estar integrados en un solo programa con varios componentes o aspectos ambientales o estar omitidos según impacto de los aspectos ambientales significativos en la organización y prioridad, y pueden ser:
              ul.lista-ul--color.color-secundario.ps-md-4.mb-4.fa-ul
                li.mb-0 
                  i.fas.fa-check
                  | Programa manejo de residuos sólidos peligrosos.
                li.mb-0 
                  i.fas.fa-check
                  | Programa manejo de residuos sólidos no peligrosos.
                li.mb-0 
                  i.fas.fa-check
                  | Programa manejo de escombros.
                li.mb-0 
                  i.fas.fa-check
                  | Programa manejo de aguas residuales.
                li.mb-0 
                  i.fas.fa-check
                  | Programa manejo de emisiones.
                li.mb-0 
                  i.fas.fa-check
                  | Programa de ahorro y uso eficiente del agua.
                li.mb-0 
                  i.fas.fa-check
                  | Programa de ahorro y uso eficiente de la energía.
                li.mb-0 
                  i.fas.fa-check
                  | Programa de ahorro y uso eficiente del papel.
                li.mb-0 
                  i.fas.fa-check
                  | Programa de ahorro de insumos y materias primas.
                li.mb-0 
                  i.fas.fa-check
                  | Programa de capacitaciones ambientales.
                li.mb-0 
                  i.fas.fa-check
                  | Programa de manejo de flora y fauna.
                li.mb-0 
                  i.fas.fa-check
                  | Programa de atención y participación ciudadana.
                li.mb-0 
                  i.fas.fa-check
                  | Programa de manejo de vegetación y paisajismo.
                li.mb-0 
                  i.fas.fa-check
                  | Programa de atención a contingencias ambientales.
              .tarjeta.color-primario.p-3.mb-5.mb-md-0
                .row.justify-content-around.align-items-center
                  .col-3.col-sm-2.col-lg-2
                    img.px-lg-3(src="@/assets/curso/temas/tema4/ico-pdf.svg")
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        h4.mb-1 Ejemplo de programa ambiental
                        p.text-small.mb-0 Le invitamos a consultar el siguiente material descargable en el cual se presenta un formato ejemplo para la consolidación de un programa ambiental. Estúdielo atentamente.			
                      .col-sm-auto
                        a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_3_EjemploDeProgramaAmbiental.pdf')" target="_blank")
                          span Descargar
                          i.fas.fa-file-download




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
