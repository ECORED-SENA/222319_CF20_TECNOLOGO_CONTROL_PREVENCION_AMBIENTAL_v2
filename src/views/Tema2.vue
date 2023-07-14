<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Informes de cumplimiento ambiental (ICA)


    .row.mb-4
      .fondo-tema2img.p-4.py-md-5(data-aos="fade-down")
        .row.justify-content-center
          .col-md-10.bg-white.p-4.my-md-5
            p.mb-0 Los Informes de Cumplimiento Ambiental son un instrumento de prevención, seguimiento y control, enfocados al autocontrol y al mejoramiento continuo de la gestión ambiental por parte del beneficiario de la licencia ambiental. La cual, según el Art. 3 del 
              b.t-green Decreto 2820 del 5 de agosto de 2010
              |, es la autorización que otorga la autoridad ambiental competente para la ejecución de un proyecto, obra o actividad, que de acuerdo con la ley y los reglamentos pueda producir deterioro grave a los recursos naturales renovables o al medio ambiente o introducir modificaciones considerables o notorias al paisaje; está sujeta al beneficiario, al cumplimiento de los requisitos, términos, condiciones y obligaciones que la misma establezca en relación con la prevención, mitigación, corrección, compensación y manejo de los efectos ambientales del proyecto, obra o actividad autorizada.

    p.mb-4(data-aos="fade") El contenido de los ICA se centra en la verificación del cumplimiento y efectividad de los compromisos que el beneficiario de la licencia ambiental o propietario del proyecto, obra o actividad asumió ante la autoridad ambiental competente. Estos compromisos son asumidos para el beneficiario de la licencia ambiental como tareas ambientales, que, a su vez, en el seguimiento ambiental por parte de la autoridad ambiental respectiva, son traducidos en objetivos. De acuerdo con lo anterior, los ICA deben responder a los objetivos del seguimiento ambiental, que son:

    .row.align-items-center.mb-5
      .col-lg-5.mb-3.mb-md-0.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img2.png' alt='')
      .col-lg-7(data-aos="fade-left")
        ul.lista-ul--color.color-secundario.ps-3.fa-ul
          li.mb-md-4 
            i.fas.fa-check
            | Verificación del estado de cumplimiento de los programas que conforman el Plan de Manejo Ambiental (PMA). 
          li.mb-md-4 
            i.fas.fa-check
            | Verificación del cumplimiento de los permisos, concesiones o autorizaciones ambientales para el uso y/o aprovechamiento de los recursos naturales.
          li.mb-md-4 
            i.fas.fa-check
            | Verificación del estado de cumplimiento de los requerimientos de los actos administrativos.
          li.mb-md-4 
            i.fas.fa-check
            | Análisis de las tendencias de la calidad del medio en el cual se desarrolla el proyecto.
          li.mb-md-4 
            i.fas.fa-check
            | Análisis de la efectividad de los programas que conforman el PMA.
          li
            i.fas.fa-check
            | Los requeridos en los actos administrativos y propuestas de actualización.


    .row.fondo-tema2.align-items-center.py-5.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-md-12(data-aos="fade")
            h3.subt.text-white.mb-3.mx-2 Contenido del informe ICA

          .col-lg-8.mb-4.mb-md-0(data-aos="fade-right")
            p El contenido de los informes de cumplimiento ambiental está estipulado por el ministerio de medio ambiente. Contiene, además de los datos representativos de operación y resultados, la relación y diligenciamiento de algunos formatos.
            .tarjeta.color-primario.p-3
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-2
                  img.px-lg-4(src="@/assets/curso/temas/tema4/ico-pdf.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h4.mb-1 Contenido de informe cumplimiento ambiental
                      p.text-small Le invitamos a profundizar en el estudio de los elementos fundamentales de un informe y conocer su estructuración mediante el siguiente material descargable.			
                    .col-sm-auto
                      a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_2_ContenidoDeInformeCumplimientoAmbiental.pdf')" target="_blank")
                        span Descargar
                        i.fas.fa-file-download
          .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/tema2/img3.png' alt='')


    h3.subt.text-white.mb-3.mx-2(data-aos="fade") Criterios de indicadores para informe ICA

    p.mb-4(data-aos="fade") Según lineamientos, los indicadores para el informe de cumplimiento ambiental, ICA, deben reunir algunos atributos imprescindibles. En el siguiente recurso, se los presentamos. Estúdielos atentamente y tome nota de los aspectos más relevantes.

    .row.justify-content-center.mb-md-3 
      .col-lg-8.mb-4(data-aos="fade-right")
        .bg-green.h-100.p-4
          ul.lista-ul--color.color-secundario.fa-ul.mb-0
            li.mb-md-1 
              i.fas.fa-check
              | Validez.
            li.mb-md-1 
              i.fas.fa-check
              | Confiabilidad.
            li.mb-md-1 
              i.fas.fa-check
              | Especificidad.
            li.mb-md-1 
              i.fas.fa-check
              | Oportunidad.
            li.mb-md-1 
              i.fas.fa-check
              | Practicidad (no implicar operaciones complicadas o frecuentes).
            li.mb-md-1 
              i.fas.fa-check
              | Independencia (no incluir tendencias fuera de la influencia del proyecto).
            li.mb-md-1 
              i.fas.fa-check
              | Buena orientación (medir exclusivamente aquella información que se quiere conocer). 
            li.mb-md-1 
              i.fas.fa-check
              | Carácter de verificable (no dejar ambigüedades en su interpretación).
            li.mb-md-1 
              i.fas.fa-check
              | Sensibilidad para detectar las fases tempranas de cambio.
            li.mb-md-1 
              i.fas.fa-check
              | Posibilidad de ser distribuidos en una escala geográfica amplia o ser ampliamente aplicables.
            li.mb-md-1 
              i.fas.fa-check
              | Capacidad para proporcionar evaluaciones continuas sobre un rango amplio de perturbación.
            li 
              i.fas.fa-check
              | Facilidad y economía para medir, colectar, probar y/o calcular.
            li.mb-md-1
              i.fas.fa-check
              | Capacidad de diferenciación entre ciclos o tendencias naturales, y aquellos inducidos por perturbaciones antropogénicas.
            li.mb-md-0
              i.fas.fa-check
              | Se recomienda que los indicadores se establezcan bajo el contexto del mejoramiento continuo (P-H-V-A).
      .col-lg-4.col-md-6.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema2/img5.png' alt='')

    .row.justify-content-center      
      .col-lg-3.col-md-6.order-2.order-lg-1.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema2/img6.png' alt='')    
      .col-lg-9.order-1.order-lg-2.mb-4(data-aos="fade-left")
        .bg-blue.h-100.p-4
          h4 Aspectos sistémicos de los indicadores
          ul.lista-ul--color.color-secundario.fa-ul
            li.mb-md-1
              i.fas.fa-check
              span.mb-0 #[b Planeación:] misión, visión, objetivos, políticas, estrategias. 
            li.mb-md-1
              i.fas.fa-check
              | Relación entre objetivos y áreas de éxito. 
            li.mb-md-1
              i.fas.fa-check
              | Identificación de factores críticos de éxito. 
            li.mb-md-1
              i.fas.fa-check
              | Reflejo de los factores críticos en forma mensurable. 
            li.mb-md-1
              i.fas.fa-check
              | Fijación de metas en función de la capacidad, la información y la experiencia. 
            li.mb-md-1
              i.fas.fa-check
              | Establecimiento del proceso de medición. 
            li.mb-md-1
              i.fas.fa-check
              span.mb-0 #[b Identificación de oportunidades de mejoramiento:] toma de datos frente a metas.
            li.mb-md-1
              i.fas.fa-check
              | Proceso de toma de decisiones: mejoramiento, replanteamiento, cambio radical. 
            li.mb-md-1
              i.fas.fa-check
              span.mb-0 #[b Verificación:] volver a medir y comparar con las metas, interpretar, retroalimentar. 
            li
              i.fas.fa-check
              | Estandarización y corrección.


    .row.fondo-tema2-1.align-items-center.pt-5.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-md-12
            h3.subt.text-white.mb-3.mx-2(data-aos="fade") Tipos de indicadores propuestos
            p.mb-4(data-aos="fade") En cuanto a los tipos de indicadores propuestos, estos pueden ser obtenidos de las fuentes que se mencionan a continuación:

          .row(data-aos="fade-down")
            .col-lg-3.col-md-6.mb-4.mb-lg-0
              .tarjeta.bg-green3.py-5.px-4.h-100
                .row.justify-content-center.mb-4
                  .col-4.col-md-5.col-lg-5
                    img.px-md-2(src="@/assets/curso/temas/tema2/ico1.svg")
                p.text-center Estudio ambiental utilizado para obtener la licencia ambiental o establecer el Plan de Manejo Ambiental.
            .col-lg-3.col-md-6.mb-4.mb-lg-0
              .tarjeta.bg-green3.py-5.px-4.h-100
                .row.justify-content-center.mb-4
                  .col-4.col-md-5.col-lg-5
                    img.px-md-2(src="@/assets/curso/temas/tema2/ico2.svg")
                p.text-center Guías sectoriales para la gestión ambiental, realizadas con el apoyo del Ministerio del Medio Ambiente y/u otra autoridad ambiental.
            .col-lg-3.col-md-6.mb-4.mb-lg-0
              .tarjeta.bg-green3.py-5.px-4.h-100
                .row.justify-content-center.mb-4
                  .col-4.col-md-5.col-lg-5
                    img.px-md-2(src="@/assets/curso/temas/tema2/ico3.svg")
                p.text-center Indicadores establecidos específicamente para áreas, proyectos o sectores por parte de algunas autoridades ambientales.
            .col-lg-3.col-md-6.mb-4.mb-lg-0
              .tarjeta.bg-green3.py-5.px-4.h-100
                .row.justify-content-center.mb-4
                  .col-4.col-md-5.col-lg-5
                    img.px-md-2(src="@/assets/curso/temas/tema2/ico4.svg")
                p.text-center Indicadores corporativos, más exigentes que los establecidos en las normas, propuestos como iniciativas empresariales de producción sostenible. 

    
    p.mb-4(data-aos="fade") Así mismo, para efectos del informe, los indicadores deben ser:

    .row.align-items-center.justify-content-center.mb-4
      .col-md-9.mb-3.mb-md-0(data-aos="fade-right")
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-blue")
          .row(titulo="Indicadores de éxito")
            p Los indicadores de éxito miden el nivel en el cual se han alcanzado los objetivos fijados para un determinado programa de manejo ambiental. El valor de referencia o característica de calidad se entiende como el valor con el cual se estima que el objetivo de un programa ha sido alcanzado. Este tipo de indicadores se utiliza en los Formatos ICA-1a e ICA-5.
          .row(titulo="Indicadores de calidad ambiental ")
            p Son los que permiten establecer las tendencias de la calidad del medio ambiente en el cual se desarrolla el proyecto. Por lo general, los indicadores de calidad ambiental se refieren específicamente a un componente ambiental en particular (aire, agua, suelo, vegetación, fauna, paisaje, cultura y socioeconomía). No obstante, lo anterior, también se pueden seleccionar indicadores muy particulares, debidos a una descarga, aprovechamiento o emisión específica de la cual se tengan indicios. Los indicadores de calidad ambiental se utilizan en los Formatos ICA-4a e ICA -4b.
          .row(titulo="Indicadores de cumplimiento")
            p Los indicadores de cumplimiento están estrictamente relacionados con el desempeño ambiental del proyecto cuyos estándares de cumplimiento, están documentados en los permisos, concesiones y autorizaciones, o en la licencia ambiental, a manera de compromisos. Estos compromisos se establecen, por lo general, como:
            ul.lista-ul--color.color-secundario.ps-3.ps-md-5.fa-ul
              li.mb-md-1
                i.fas.fa-check
                | Estado de avance o de implementación del PMA. 
              li.mb-md-1
                i.fas.fa-check
                | Parámetros de calidad ambiental de las emisiones, vertimientos o disposiciones finales.
              li.mb-md-1
                i.fas.fa-check
                | Cantidades de aprovechamientos, vertimientos, emisiones o disposiciones. 
              li.mb-md-1
                i.fas.fa-check
                | Límite de tiempo durante el cual se puede utilizar o aprovechar un recurso natural.
            p Estos indicadores se utilizan en los Formatos ICA-1a, ICA-1b, ICA-2a al ICA-2i, ICA-3a e ICA-3b.
      .col-md-3(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema2/img4-1.png' alt='')







</template>

<script>
export default {
  name: 'Tema2',
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
