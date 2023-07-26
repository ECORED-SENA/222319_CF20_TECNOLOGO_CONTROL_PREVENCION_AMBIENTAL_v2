<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Evaluación del desempeño ambiental


    .row.mb-5
      .col-md-5.mb-3.mb-md-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img.png' alt='')
      .col-md-7(data-aos="fade-left")
        p La evaluación del desempeño ambiental (EDA) es un proceso interno de gestión que utiliza indicadores de desempeño ambiental con el fin de comparar el desempeño ambiental del pasado y del presente de una organización, con sus objetivos y metas. La EDA hace parte del modelo de gestión “Planificar-Hacer-Verificar-Actual” (PHVA). Los Indicadores de desempeño ambiental (IDA) proporcionan información relacionada con la gestión de los aspectos ambientales significativos de una organización y permiten demostrar los resultados de los programas ambientales.


    TabsC.color-acento-botones(data-aos="fade-down")
      .row.p-3.py-4.p-md-4.py-md-5.bg-green(titulo="Indicadores de desempeño de la gestión (IDG)")
        h4 Indicadores de desempeño de la gestión (IDG)
        p.mb-5 Proporcionan información sobre los esfuerzos de la dirección para influenciar el desempeño ambiental de la dirección de la organización.
        .row.justify-content-center 
          .col-md-8
            .titulo-sexto.color-primario
              p.mb-0 #[b Figura 1.] Comprensión de la organización y su contexto
            figure
              img(src='@/assets/curso/temas/tema1/fig1.svg' alt='La figura representa la comprensión de la organización y su contexto a través de diferentes indicadores de condición ambiental. Estas condiciones ingresan a la organización y se llevan a cabo los procesos operacionales. Además, existen flujos de información, flujos de entrada de las operaciones y flujos de decisión. Esto permite identificar el desempeño ambiental que presenta la organización.')
            figcaption.bg-white.mt-4
              p.mb-0 Nota. ICONTEC (2016) Gestión Ambiental Evaluación del desempeño ambiental, directrices. Figura 1. Comprensión de la organización y su contexto. p.6
      .row.p-3.py-4.p-md-4.py-md-5.bg-green(titulo="Indicadores de desempeño operacional (IDO) ")
        h4 Indicadores de desempeño operacional (IDO) 
        p.mb-5 Proporcionan información sobre el desempeño ambiental de las operaciones de una organización.  Se trata de las interrelaciones entre la dirección, las operaciones de una organización y la condición ambiental y destaca el tipo de indicador entre corchetes para el EDA relacionado con cada uno de estos elementos.
        .row.justify-content-center 
          .col-md-7
            .titulo-sexto.color-primario
              p.mb-0 #[b Figura 2.] Esquema de la EDA
            figure
              img(src='@/assets/curso/temas/tema1/fig2.svg' alt='La figura representa el esquema de evaluación del desempeño ambiental. El primer paso es la planificación de la evaluación, que implica la selección de indicadores para evaluar el desempeño. El segundo paso es la ejecución, que incluye la recopilación de datos, el análisis, la evaluación, así como la comunicación de los resultados e información obtenida. Por último, es importante realizar la verificación y tomar acciones para mejorar tanto la evaluación como el desempeño ambiental.')
            figcaption.bg-white.mt-4
              p.mb-0 Nota. ICONTEC (2016) Gestión Ambiental Evaluación del desempeño ambiental, directrices. Figura 2. Esquema de la EDA. p.7


    Separador

    #t_1_1
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.1 Planificación de la EDA

    .row.fondo-tema1-1.align-items-center.py-5.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-md-7.mb-4(data-aos="fade-right")
            .bg-green4.p-4
              p Las organizaciones seleccionan los indicadores clave de desempeño. Las organizaciones que tienen un Sistema de Gestión Ambiental (SGA) implementado deberían comparar su desempeño ambiental con la política ambiental, objetivos y metas y con los requisitos legales y otros que sean aplicables para la organización, pero para aquellas organizaciones que no tienen un SGA también pueden implementarlo para describir el desempeño ambiental de la organización con respecto a sus metas.
          .col-md-5.mb-4(data-aos="fade-left")
            img(src='@/assets/curso/temas/tema1/img2.png' alt='')

          p.mb-4(data-aos="fade") Es importante tener en cuenta las siguientes características de los datos para indicadores de la EDA:  

          .row
            SlyderF.text-center.mb-5(columnas="col-lg-6 col-xl-4 align-items-center" data-aos="fade-down")
              .tarjeta.color-acento-contenido.fondo-tarjetas.p-4
                .row.justify-content-center.mb-4
                  .col-md-5.col-6
                    img.px-md-1(src='@/assets/curso/temas/tema1/tarj-ico1.svg' alt='')
                h5 Medidas o cálculos directos
                p Datos básicos o información, ejemplo: toneladas de contaminantes emitidas.
              .tarjeta.color-acento-contenido.fondo-tarjetas.p-4
                .row.justify-content-center.mb-4
                  .col-md-5.col-6
                    img.px-md-1(src='@/assets/curso/temas/tema1/tarj-ico2.svg' alt='')
                h5 Medidas o cálculos relativos
                p Datos o información comparados con o en relación con otro parámetro ejemplo: toneladas de contaminante emitidas por tonelada de producto fabricado o toneladas de contaminante emitidas por unidad de volumen de ventas.
              .tarjeta.color-acento-contenido.fondo-tarjetas.p-4
                .row.justify-content-center.mb-4
                  .col-md-5.col-6
                    img.px-md-1(src='@/assets/curso/temas/tema1/tarj-ico3.svg' alt='')
                h5 Indexados
                p Datos descriptivos o información convertida en unidades o en una forma que relacione la información con un patrón seleccionado o con una línea base, ejemplo: emisiones contaminantes en el año en curso expresado como un porcentaje de estas emisiones en un año base.
              .tarjeta.color-acento-contenido.fondo-tarjetas.p-4
                .row.justify-content-center.mb-4
                  .col-md-5.col-6
                    img.px-md-1(src='@/assets/curso/temas/tema1/tarj-ico4.svg' alt='')
                h5 Agregados
                p Datos descriptivos o información del mismo tipo, pero de diferentes fuentes, compilada y expresada en un valor combinado, ejemplo: toneladas totales de un contaminante dado, emitidas por la producción de un producto en un año dado, determinado por la suma de las emisiones de múltiples instalaciones que fabrican el mismo producto.
              .tarjeta.color-acento-contenido.fondo-tarjetas.p-4
                .row.justify-content-center.mb-4
                  .col-md-5.col-6
                    img.px-md-1(src='@/assets/curso/temas/tema1/tarj-ico5.svg' alt='')
                h5 Ponderados
                p Datos descriptivos o información modificada aplicando un factor relacionado con su importancia.


    .row.fondo-tema1-1-2.align-items-center.py-5.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-md-12
            h3.subt.text-white.mb-3.mx-2(data-aos="fade") Selección de indicadores EDA
            p.mb-4(data-aos="fade") Puede ser beneficioso en términos de costos que las organizaciones seleccionen varios indicadores de la EDA derivados de un conjunto común de datos o utilizar indicadores combinados que incluyan información de más un aspecto; por tanto, es importante asegurarse de que la información sobre los diferentes aspectos de este indicador se puede extraer y comunicar fácilmente y al público deseado. Por ejemplo, una organización que descarga agua residual tratada a un lago puede seleccionar los siguientes indicadores para la EDA:

          .row
            .col-lg-3.col-md-6.px-md-0.mb-md-3
              .bg-green5.p-4.h-100
                .row.justify-content-center
                  .col-10.col-md-12
                    img.mb-4(src='@/assets/curso/temas/tema1/tarj-img1.png' alt='')
                p #[b Cantidad total de un contaminante] específico descargado por año (público a quien posiblemente va dirigido: comunidades locales)
            .col-lg-3.col-md-6.px-md-0.mb-md-3
              .bg-green2.p-4.h-100
                .row.justify-content-center
                  .col-10.col-md-12
                    img.mb-4(src='@/assets/curso/temas/tema1/tarj-img2.png' alt='')
                p #[b Concentración de contaminantes] en agua residual (público a quien posiblemente va dirigido: autoridades legales y reguladoras)
            .col-lg-3.col-md-6.px-md-0.mb-md-3
              .bg-green5.p-4.h-100
                .row.justify-content-center
                  .col-10.col-md-12
                    img.mb-4(src='@/assets/curso/temas/tema1/tarj-img3.png' alt='')
                p #[b Cantidad de contaminante descargado] por producto fabricado (público a quien posiblemente va dirigido: Dirección y consumidores)
            .col-lg-3.col-md-6.px-md-0.mb-md-3
              .bg-green2.p-4.h-100
                .row.justify-content-center
                  .col-10.col-md-12
                    img.mb-4(src='@/assets/curso/temas/tema1/tarj-img4.png' alt='')
                p #[b Cambio en la cantidad de contaminantes] descargados por año en relación a la inversión en tecnologías más limpias o mejoras de proceso (público a quien posiblemente va dirigido: Dirección e inversionistas).


    h3.subt.text-white.mb-3.mx-2(data-aos="fade") Selección de indicadores de desempeño de gestión (IDG)
    p.mb-4(data-aos="fade") Los IDG deberían proporcionar información sobre la capacidad y los esfuerzos de la organización para gestionar temas tales como formación, requisitos legales, asignación y utilización eficiente de los recursos, administración de los costos ambientales, compras, desarrollo de productos, documentación o acciones correctivas que tengan o puedan tener influencia en el desempeño ambiental de la organización. Los IDG deberían facilitar la evaluación de los esfuerzos de las decisiones y de las acciones de la dirección para mejorar el desempeño ambiental.

    .row.align-items-center.mb-5
      .col-lg-5.mb-3.mb-md-0.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img3.png' alt='')
      .col-lg-7(data-aos="fade-left")
        p Algunos ejemplos de IDG se pueden usar para dar seguimiento a:
        ul.lista-ul--color.color-secundario.ps-3.fa-ul
          li.mb-1
            i.fas.fa-check
            | El compromiso de los mandos medios con la gestión ambiental.
          li.mb-1
            i.fas.fa-check
            | El entendimiento por parte de la dirección de la importancia de la gestión ambiental para la misión de la organización.
          li.mb-1
            i.fas.fa-check
            | La eficacia de las políticas y los programas.
          li.mb-1
            i.fas.fa-check
            | Los recursos necesarios para implementar políticas y programas relacionados con la misión de la organización.
          li.mb-1
            i.fas.fa-check
            | El grado de compromiso con las partes interesadas (por ejemplo, comunidades locales en relación con temas ambientales).
          li.mb-1
            i.fas.fa-check
            | Los cambios en los roles y responsabilidades de una organización.
          li.mb-1
            i.fas.fa-check
            | Las actividades y el desempeño de la cadena de abastecimientos.
          li.mb-1
            i.fas.fa-check
            | Cómo están influenciados los usuarios finales de los productos y servicios.
          li.mb-1
            i.fas.fa-check
            | La mejora continua de los sistemas y el desempeño.
          li.mb-1
            i.fas.fa-check
            | El cumplimiento con los requisitos legales y regulatorios y la conformidad con otros requisitos suscritos por la organización.
          li
            i.fas.fa-check
            | Los costos o beneficios financieros de la gestión ambiental.


    .row.fondo-tema1-1-3.align-items-center.pt-5.pb-1.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-md-12
            h3.subt.text-white.mb-3.mx-2(data-aos="fade") Selección de indicadores de desempeño operacional (IDO)
            p.mb-4(data-aos="fade") Los (IDO) proporcionan información sobre el desempeño ambiental de las operaciones de la organización; se pueden identificar listando los flujos de entradas de la organización, procesos operativos y equipamientos y flujos de salida.

          .col-md-8.mb-5(data-aos="fade-down")
            .titulo-sexto.color-primario
              p.mb-0 #[b Figura 3.] Operaciones de la organización método entradas y salidas
            figure.bg-white
              img(src='@/assets/curso/temas/tema1/fig3.svg' alt='La figura representa las operaciones de la organización, con un enfoque centrado en los métodos de entrada y salida. Las entradas incluyen materiales, componentes, productos entrantes, energía y servicios, que son suministrados y utilizados en los procesos operativos. Las salidas consisten en productos, servicios, residuos y emisiones que se distribuyen o se generan como resultado de dichos procesos.')
            figcaption
              p.mb-0 Nota. ICONTEC (2016) Gestión Ambiental Evaluación del desempeño ambiental, directrices. Figura 3 operaciones de la organización (visión general). p.11

          p.mb-4(data-aos="fade") Los IDO se pueden seleccionar de las siguientes categorías y subcategorías:

          .col-lg-7.mb-3.mb-md-4(data-aos="fade-right")
            ul.lista-ul--color.color-secundario.ps-3.fa-ul
              li.mb-3
                i.fas.fa-check
                | Componentes, productos (por ejemplo, reutilizados, nuevos) y servicios (directos e indirectos) de entrada.
              li.mb-3
                i.fas.fa-check
                | Materiales primas y auxiliares, que están destinados a convertirse en productos, así como materiales de operación, que ayudan a la ejecución de los procesos (por ejemplo, materiales de limpieza y lubricantes.)
              li.mb-3
                i.fas.fa-check
                | Servicios de apoyo a las operaciones de la organización (por ejemplo, directos, indirectos).
              li.mb-3
                i.fas.fa-check
                | Procesos operativos (por ejemplo, el diseño de los procesos, la eficiencia operativa, el mantenimiento).
              li.mb-3
                i.fas.fa-check
                | Instalaciones y equipos (por ejemplo, diseño, instalación, operación, mantenimiento, uso de la tierra).
              li.mb-3
                i.fas.fa-check
                | Componentes y productos y servicios de salida (por ejemplo, diseño, impacto ambiental, subproductos, productos utilizados, distribución).
              li.mb-3
                i.fas.fa-check
                | Residuos (por ejemplo, peligrosos, no peligrosos).
              li
                i.fas.fa-check
                | Emisiones (por ejemplo, vapores peligrosos, contaminación, gases de efecto invernadero, sustancias que agotan el ozono, polvo, ruido, calor, energía térmica, efluentes que llegan al agua o la tierra)
          .col-lg-5.mb-4.mb-md-4.d-none.d-lg-block(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/tema1/img4.png' alt='')

          p.mb-4(data-aos="fade") A continuación, se presenta un balance de masas de entradas y salidas como visión general en una organización para tener en cuenta en la selección de indicadores. Estudie atentamente la gráfica.

          .col-md-10.mb-5(data-aos="fade-down")
            .titulo-sexto.color-primario
              p.mb-0 #[b Figura 4.] Visión general en entradas y salidas de las operaciones de la organización
            figure.bg-white
              img(src='@/assets/curso/temas/tema1/fig4.svg' alt='La figura representa una visión general de las entradas y salidas de las operaciones de la organización. En ella se incluyen las entradas como materiales procesados, reciclados y reutilizados, así como los recursos naturales que se utilizan junto con la energía. También se incluyen servicios de apoyo a la organización, como limpieza, jardinería, mantenimiento, transporte, distribución de información y comunicación, seguridad, entre otros, a través de una infraestructura física y equipamiento. Estos elementos son diseñados, instalados y utilizados en los procesos operativos, que se enfocan en la eficiencia operativa, el diseño de procesos, servicios y productos, así como el mantenimiento. Las salidas resultantes incluyen los productos principales, productos derivados, materiales reciclados y reutilizados.')
            figcaption
              p.mb-0 Nota. ICONTEC (2016) Gestión Ambiental Evaluación del desempeño ambiental, directrices. Figura 4. Operaciones de la organización. p.33



    h3.subt.text-white.mb-3.mx-2(data-aos="fade") Selección de indicadores de condición ambiental (ICA)

    .row.align-items-center.justify-content-center.mb-4
      .col-lg-7.mb-3.mb-lg-0(data-aos="fade-right")
        p Proporcionan información sobre la condición ambiental local, regional, nacional o global, a lo largo del tiempo o por eventos específicos. Aunque los ICA no son medidas directas e impacto ambiental, los cambios en los ICA pueden proporcionar información útil sobre las relaciones entre la condición ambiental y las actividades, productos y servicios de una organización. Los ICA se pueden desarrollar para las categorías ambientales (por ejemplo, el aire, el agua, el suelo, la flora, la fauna, los seres humanos, el paisaje, el patrimonio, la cultura, incluidos los indicadores especiales para la biodiversidad o los servicios ambientales).
        .bg-green6.p-4
          p El desarrollo y la aplicación de ICA es frecuentemente la función de agencias gubernamentales de organizaciones no gubernamentales locales, regionales, nacionales o internacionales y de instituciones científicas y de investigación, más que la función de una empresa en particular. No obstante, las organizaciones que pueden identificar una relación entre sus actividades y la condición de algún componente ambiental podrían optar por desarrollar sus propios ICA como ayuda para evaluar su desempeño ambiental de acuerdo a sus capacidades, intereses y necesidades.        
      .col-lg-5.col-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema1/img5.png' alt='')

    p.mb-4(data-aos="fade") En el siguiente recurso le presentamos un par de ejemplos de selección de Indicadores de condición ambiental (ICA).


    .row.fondo-tema1-1-4.align-items-center.pt-5.pb-1
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          h5.t-green.text-center.mb-4(data-aos="fade")  Selección de Indicadores de Condición Ambiental ICA
          p.mb-4(data-aos="fade") Las organizaciones que pueden identificar una relación entre sus actividades y la condición de algún componente ambiental, podrían optar por desarrollar sus propios ICA como ayuda para evaluar su desempeño ambiental de acuerdo a sus capacidades, intereses y necesidades. 

          .col-lg-4.col-7.mb-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema1/img12.svg' alt='')
          .col-lg-8.mb-4
            AcordionA(tipo="b" clase-tarjeta="tarjeta bg-blue")
              .row.align-items-center(titulo="Área donde la calidad del aire es reconocida como no satisfactoria ")
                h4 Ejemplo 1
                p.mb-4 Una organización de servicios ubicada en un área donde la calidad del aire es reconocida como no satisfactoria utiliza información sobre la calidad del aire para seleccionar indicadores apropiados para la EDA, coherentes con sus objetivos para reducir emisiones de los motores de sus vehículos: 
                h5.mb-1 ICA:
                p.mb-0 Concentración de partículas.
                p.mb-4 Concentraciones de contaminantes en el aire asociadas con las emisiones de los motores de los vehículos (CO, HC y NOx). 
                h5.mb-1 IDG: 
                p.mb-0 Cantidad de dinero invertido en la promoción del transporte público y de su uso. 
                p.mb-0 Número de horas de formación del personal sobre los beneficios del uso de transporte público. 
                p.mb-4 Eficacia de los esfuerzos para reducir el consumo de combustibles, mejorar el mantenimiento de los vehículos y eficiencia energética y utilizar combustibles alternativos.
                h5.mb-1 IDO: 
                p.mb-0 Reducción de emisiones de los motores atribuible al uso de combustibles alternativos. 
                p.mb-0 Consumo total de combustibles. 
                p.mb-0 Eficiencia energética por vehículo. 
                p.mb-0 Frecuencia del mantenimiento de los vehículos.
                p Número de vehículos equipados con tecnologías de control ambiental.
              .row.align-items-center(titulo="Área con disminución del suministro de agua")
                  h4 Ejemplo 2
                  p.mb-4 En una región geográfica donde la información ambiental indica una disminución del suministro de agua, una organización podría seleccionar indicadores para la EDA, relacionados con medidas de conservación del agua, que no hubieran sido seleccionados sin esta información.
                  h5.mb-1 ICA:
                  p.mb-0 Nivel freático. 
                  p.mb-4 Tasa de recarga.
                  h5.mb-1 IDG: 
                  p.mb-4 Cantidad de dinero invertido en investigación de métodos para la reducción del consumo de agua.
                  h5.mb-1 IDO: 
                  p.mb-0 Cantidad de agua utilizada por día.
                  p Cantidad de agua utilizada por unidad de producción.

          .col-md-10
            .row.tarjeta.bg-blue2.align-items-end.justify-content-center.pt-3  
              .col-lg-2.col-md-3.col-5.mb-3.mb-md-0
                img.px-4.px-md-2.px-lg-4(src='@/assets/curso/temas/tema1/ico.svg' alt='Importante')
              .col-lg-10.col-md-9
                p Los indicadores de desempeño operacional (IDO) se expresan normalmente en términos de cantidades por unidad de tiempo 
                h5.mb-1 Ejemplo:
                p Energía total por año.


    Separador
    
    #t_1_2
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.2 Uso de datos e información (Hacer) 

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-7.mb-3.mb-lg-0(data-aos="fade-right")
        p El siguiente elemento de planificación de la evaluación de desempeño ambiental, EDA, tiene que ver con el uso de los datos y de la información. La información generada por la EDA puede ayudar a una organización a:
        ul.lista-ul--color.color-secundario.ps-3.fa-ul
          li.mb-4
            i.fas.fa-check
            | Determinar las acciones necesarias para lograr sus objetivos de desempeño ambiental.
          li.mb-4
            i.fas.fa-check
            | Identificar los aspectos ambientales significativos.
          li.mb-4
            i.fas.fa-check
            | Identificar oportunidades para mejorar la gestión de sus aspectos ambientales (por ejemplo, prevención de la contaminación).
          li.mb-4
            i.fas.fa-check
            | Identificar tendencias en su comportamiento ambiental.
          li.mb-4
            i.fas.fa-check
            | Aumentar la eficiencia y eficacia de la organización.
          li
            i.fas.fa-check
            | Identificar oportunidades estratégicas.
      .col-lg-5.col-8(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema1/img6.png' alt='')


    h3.subt.text-white.mb-3.mx-2(data-aos="fade") Recopilación de datos
    p.mb-4(data-aos="fade") Para garantizar que los datos obtenidos sean del tipo y la calidad necesarios para el uso de la EDA, es necesario que la recopilación de los datos esté respaldada por prácticas de control y aseguramiento de la calidad. La organización puede utilizar sus propios datos obtenidos a través de su SGA o datos de otras fuentes, como se puede observar en la siguiente infografía:

    .row.fondo-tema1-2.align-items-center.justify-content-center.py-3.mb-5
      .col-lg-5.col-7.mb-4.mb-lg-0(data-aos="fade-right")
        img.px-1(src='@/assets/curso/temas/tema1/img7.svg' alt='')
      .col-lg-7(data-aos="fade-left")
        h5.t-green Entrevistas y observaciones
        ol.lista-ol--cuadro.fa-ul.mb-4
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Registros (por ejemplo, de seguimiento, medición, inventario, producción, financieros, contables, compras, formación, situaciones de emergencia, cumplimiento e incidentes). 
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Informes (por ejemplo, revisiones, auditorías, informes de evaluación, estudios científicos). 
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Agencias gubernamentales, instituciones académicas y organizaciones no gubernamentales. 
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Proveedores y contratistas. 
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Clientes, consumidores y partes interesadas. 
          li 
            .lista-ol--cuadro__vineta
              span 6
            | Asociaciones empresariales. 
        h5.t-green Otros sistemas de gestión
        p.mb-1 Sistemas, por ejemplo, de calidad, ocupacional, salud y seguridad, información. 
        p.mb-1 Mediciones correctivas y preventivas. 
        p.mb-1 Evaluación del riesgo. 
        p.mb-1 Permisos y licencias. 
        p Innovaciones.


    h3.subt.text-white.mb-3.mx-2(data-aos="fade") Análisis y conversión de datos y evaluación de información

    .row.align-items-center
      .col-lg-6.mb-3.mb-md-0(data-aos="fade-right")
        p Los datos recopilados deberían analizarse y convertirse en información que describa el desempeño ambiental de la organización.
        .bg-blue.p-4
          p.mb-0 La información derivada de los datos de desempeño se debería comparar con los objetivos y metas ambientales y realizarse un informe a la dirección que describa el desempeño ambiental de la organización, para dar soporte a las acciones pertinentes de gestión para mejorar o sostener el nivel de desempeño ambiental. 
      .col-lg-6(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema1/img8.png' alt='')

    
    Separador
    
    #t_1_3
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.3 Comunicación y revisión de la EDA 

    p.mb-4(data-aos="fade") La información y la comunicación sobre el desempeño ambiental proporciona información útil que describe las mejoras y los logros en el desempeño ambiental. A continuación, se presenta la importancia de la comunicación y la información sobre el desempeño ambiental, tanto interna como externamente:

    .row.mb-5(data-aos="fade-down")
      .col-lg-5.pe-lg-0.me-lg-0
        .row.bg-green2.p-4.p-lg-5.h-100
          .col-lg-3.col-4.col-md-3.mb-3
            img.px-lg-2(src='@/assets/curso/temas/tema1/ico1.svg', alt='')
          p #[b Comunicación interna:] la información que puede interesar a las partes interesadas internas es:
          ul.lista-ul--color.color-secundario.fa-ul
            li.mb-md-1 
              i.fas.fa-check
              | Tendencias en el desempeño ambiental de la organización, por ejemplo, reducción de residuos.
            li.mb-md-1 
              i.fas.fa-check
              | Cumplimiento de la normativa. 
            li.mb-md-1 
              i.fas.fa-check
              | Conformidad de la organización con los requisitos que suscriba, por ejemplo, los requisitos de la ISO 14001. 
            li.mb-md-1 
              i.fas.fa-check
              | La disponibilidad de los recursos naturales y otros resultados operativos. 
            li.mb-md-1 
              i.fas.fa-check
              | Ahorre de costes u otros resultados financieros. 
            li
              i.fas.fa-check
              | Oportunidades y riesgos.
      .col-lg-2.fondo-vs.p-0.m-0
        figure.d-none.d-lg-block
          img.h-100(src='@/assets/curso/temas/tema1/vs-pc.svg', alt='Versus')
        figure.d-block.d-lg-none
          img(src='@/assets/curso/temas/tema1/vs-mob.svg', alt='Versus')
      .col-lg-5.ps-lg-0.ms-lg-0
        .row.bg-green.p-4.p-lg-5.h-100
          .col-lg-3.col-4.col-md-3.mb-3
            img.px-md-2(src='@/assets/curso/temas/tema1/ico1.svg', alt='')
          p #[b Comunicación externa:] la información que puede informarse e interesarles a las partes interesadas externas es: 
          ul.lista-ul--color.color-secundario.fa-ul
            li.mb-md-1 
              i.fas.fa-check
              | Cumplimiento de los requisitos legales y de otro tipo.
            li.mb-md-1 
              i.fas.fa-check
              | Declaración de sus logros, incluyendo la gestión y mejora del medio ambiente. 
            li.mb-md-1 
              i.fas.fa-check
              | Descripción de sus actividades, productos y servicios.
            li.mb-md-1 
              i.fas.fa-check
              | Declaración de sus aspectos ambientales significativos (por ejemplo, GEI) e indicadores relacionados con la EDA. 
            li.mb-md-1 
              i.fas.fa-check
              | Información relativa a los objetivos de desempeño ambiental (por ejemplo, GEI).


    .row.align-items-center.mb-4
      .h4.t-green(data-aos="fade") Revisión y mejora de la EDA (Verificar y Actuar)
      .col-md-6.mb-3.mb-md-0(data-aos="fade-right")
        p La EDA de una organización debería revisarse periódicamente para identificar oportunidades de mejora. Tal revisión puede contribuir a las acciones de la dirección para mejorar el desempeño de la gestión y las operaciones de la organización, y puede dar lugar a mejoras en el estado del medio ambiente. Para aquellas organizaciones que tienen implementado un SGA según la norma ISO 14001, las recomendaciones para mejorar la EDA se deberían incluir en la revisión por la dirección.
      .col-md-6(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema1/img9.png' alt='')

    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-md-0.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img10.png' alt='')
      .col-lg-8(data-aos="fade-left")
        p.mb-4 Ejemplos de mejoras en los siguientes temas (costos y beneficios logrados):
        .bg-blue.p-4
          ul.lista-ul--color.color-secundario.fa-ul
            li.mb-3
              i.fas.fa-check
              | Progreso hacia los objetivos y metas ambientales.
            li.mb-3
              i.fas.fa-check
              | Progreso hacia mejoras en el desempeño ambiental (por ejemplo, mediante la evaluación comparativa).
            li.mb-3
              i.fas.fa-check
              | Uso de indicadores seleccionados para la EDA. (por ejemplo, mejorar el proceso de selección de indicadores).
            li.mb-3
              i.fas.fa-check
              | Fuentes de datos, métodos de recopilación y calidad.
            li.mb-3
              i.fas.fa-check
              | Información de las partes interesadas. (por ejemplo, mejorar los procesos de comunicación de la EDA.
            li.mb-3
              i.fas.fa-check
              | Cambios en los requisitos legales y de otro tipo, buenas prácticas y mejores técnicas disponibles.
            li.mb-3
              i.fas.fa-check
              | La información derivada de los datos de desempeño se debería comparar con los objetivos y metas ambientales y realizarse un informe a la dirección que describa el desempeño ambiental de la organización, para dar soporte a las acciones pertinentes de gestión para mejorar o sostener el nivel de desempeño ambiental.
            li
              i.fas.fa-check
              | Procesos, productos, servicios y descargas al ambiente.


    h3.subt.text-white.mb-3.mx-2(data-aos="fade") Uso de indicadores y toma de decisiones

    .row.align-items-center.mb-4
      .col-lg-7.mb-3.mb-md-0(data-aos="fade-right")
        p Cada objetivo tiene una meta medible y esta lleva un indicador o varios indicadores. La mayoría son indicadores de eficacia o de cumplimiento, algunos aplican no solo indicadores de eficacia sino también de eficiencia y análisis de tendencia del indicador para ello se maneja la denominada 
          b.t-green hoja del indicador.
        .tarjeta.color-primario.p-3
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-2.px-md-0.px-lg-2
                img.px-lg-1(src="@/assets/curso/temas/tema4/ico-pdf.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4.mb-1 Uso de indicadores y toma de decisiones
                    p.text-small Para profundizar en el uso de indicadores y en aspectos relativos a la toma de acciones sobre el monitoreo de los resultados de los indicadores, le invitamos a consultar el siguiente material descargable.
                  .col-sm-auto
                    a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_1_UsoDeIndicadoresYTomaDeDecisiones.pdf')" target="_blank")
                      span Descargar
                      i.fas.fa-file-download
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema1/img11.png' alt='')





</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
