export default {
  global: {
    componenteFormativo:
      'Monitorear los vertimientos, emisiones y normatividad ambiental',
    descripcionCurso:
      'En este material se realizará la explicación del proceso de revisión del cumplimiento de la normativa legal, los objetivos y metas ambientales de la organización, en relación con la evaluación de indicadores de gestión y desempeño ambiental. Los indicadores se establecerán como producto de la verificación del estado de la gestión ambiental, así se favorecerá la mejora continua en pro del desempeño ambiental y protocolos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Evaluación del desempeño ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Planificación de la EDA',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Uso de datos e información (Hacer)',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Comunicación y revisión de la EDA',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Informes de cumplimiento ambiental (ICA)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Verificación de requisitos legales SGA',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Medidas de manejo ambiental',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Informe de revisión ambiental',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/222319_CF20_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Introducción',
      referencia:
        'Frankinho88. (2011). <em>Paladini-Sistema de Gestión Ambiental</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=wPmvBlZS9Nc',
    },
    {
      tema: 'Introducción',
      referencia:
        'Gerencia Ambiental Argos. (2018). <em>Indicadores Ambientales</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4vwmrnHc1yA',
    },
    {
      tema: 'Informes de cumplimiento ambiental ICA',
      referencia:
        'Ministerio de Medio Ambiente, Subdirección de Licencias Ambientales (2018). <em>Sección 2. Apendice 1. Informes de Cumplimiento Ambiental (ICA).</em> ',
      tipo: 'Manual',
      descarga: '/downloads/Apendice1.pdf',
    },
    {
      tema: 'Verificación de requisitos legales, Sistema de Gestión Ambiental',
      referencia:
        'Universidad del Rosario (2017). <em>Lista de chequeo basada en las normas ISO 14001:2015 ISO 26000:2010 para el diagnóstico de la fundación Hospital San Carlos.</em> ',
      tipo: 'Lista de chequeo',
      descarga: '/downloads/CortesNino-LinaMarcela--1---2019.pdf',
    },
    {
      tema: 'Verificación de requisitos legales, Sistema de Gestión Ambiental',
      referencia:
        'Hereda Consultores (2018). <em>Cuestionario para la realización de auditoría interna de un Sistema de Gestión Ambiental Norma ISO 14001:2015.</em> ',
      tipo: 'Cuestionario',
      descarga: '/downloads/Check-list-auditoria-ISO-14001-2015.pdf',
    },
    {
      tema: 'Verificación de requisitos legales, Sistema de Gestión Ambiental',
      referencia:
        'Universidad Santo Tomás de Aquino (2017). <em>Lista de chequeo del sistema de gestión ambiental (SGA) NTC-ISO 14001:2015.</em> ',
      tipo: 'Lista de chequeo',
      descarga: '/downloads/2017marianbatista9.pdf',
    },
    {
      tema: 'Informe de revisión ambiental',
      referencia:
        'Empresas Públicas de Medellín. (2007). <em>Informe ambiental.</em> ',
      tipo: 'Informe',
      descarga: '/downloads/EPM_Informe2007_Ambiental.pdf',
    },
  ],
  glosario: [
    {
      termino: '<em>Benchmark</em>',
      significado:
        'punto de referencia contra el cual se pueden hacer comparaciones. (ICONTEC, 2016, p.2)',
    },
    {
      termino: 'Desempeño Ambiental',
      significado:
        'resultados medibles de la gestión que hace una organización de sus aspectos ambientales. (ICONTEC, 2016, p.2)',
    },
    {
      termino: 'Evaluación del desempeño ambiental EDA',
      significado:
        'proceso utilizado para facilitar las decisiones de la dirección con respecto al desempeño ambiental de la organización mediante la selección de indicadores, la recopilación y el análisis de datos la evaluación de la información comparada con los criterios de desempeño ambiental, los informes y comunicaciones, las revisiones periódicas y las mejoras de este proceso. (ICONTEC, 2016, p.2)',
    },
    {
      termino: 'Indicador',
      significado:
        'representación medible de la condición o el estado de las operaciones, la gestión o las condiciones. (ICONTEC, 2016, p.2)',
    },
    {
      termino: 'Meta ambiental',
      significado:
        'requisito de desempeño detallado, aplicable a la organización o a partes de la misma, que proviene de los objetivos ambientales y que es necesario establecer y cumplir para alcanzar dichos objetivos. (ICONTEC, 2016, p.3)',
    },
    {
      termino: 'Objetivo ambiental',
      significado:
        'fin ambiental de carácter general coherente con la política ambiental, que una organización se establece. (ICONTEC, 2016, p.3)',
    },
    {
      termino: 'Sistema de Gestión Ambiental SGA',
      significado:
        'la parte del sistema de gestión general utilizada para desarrollar e implementar su política ambiental y manejar sus aspectos ambientales. (ICONTEC, 2016, p.3)',
    },
  ],
  referencias: [
    {
      referencia:
        'Gerencia Ambiental de Proyectos Ltda. (s.f.). <em>Plan parcial No. 7.  “Ciudad Lagos de Torca”.</em> ',
    },
    {
      referencia:
        'ICONTEC (2016) Gestión Ambiental Evaluación del desempeño ambiental, directrices.',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación (2016). <em>Gestión Ambiental Evaluación del desempeño ambiental, directrices</em>',
    },
    {
      referencia:
        'Ministerio de Medio Ambiente, Subdirección de Licencias Ambientales. (2018). <em>Sección 2. Apéndice 1. Informes de Cumplimiento Ambiental (ICA)</em>',
      link:
        'http://documentacion.ideam.gov.co/openbiblio/bvirtual/005609/DocumentosOffice/Jueves21deNoviembre/ModuloelMunicipioyelmedioAmbiente/HerramientasMetodologicasydeevaluacionparaestudiosambient/Apendice1.pdf',
    },
    {
      referencia:
        'Universidad Francisco de Paula Santander (2012). <em>Evaluación del desempeño ambiental ajustado a la NTC-ISO 14031 en tecnicontrol S.A sede central Chía, Cundinamarca.</em>',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes	',
          cargo: 'Responsable ecosistema de producción de RED Santander',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Diana Carolina Triana Guarnizo',
          cargo: 'Instructor',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Juan Carlos Cárdenas Sánchez',
          cargo: 'Instructor',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Gloria Esperanza Ortiz Russi',
          cargo: 'Diseñador y evaluador instruccional',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador Instruccional',
          centro: 'Centro agropecuario La Granja - Regional Tolima',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrección de estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta ',
          cargo: 'Diseñadora instruccional ',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Rafael Neftali Lizcano Reyes',
          cargo: 'Responsable de Desarrollo Curricular',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador Full-stack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Álvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
