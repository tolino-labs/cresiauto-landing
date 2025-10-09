// Configuración de Cresiauto - Modifica estos valores para actualizar la web
const CONFIG = {
  // Información de la empresa
  business: {
    name: "Cresiauto",
    tagline: "Smart Mobility Solutions",
    description: "Cresiauto: mantenimiento, mecánica, electricidad, chapa y pintura, neumáticos y restauración de clásicos en Cartagena. Calidad, transparencia y garantía.",
    slogan: "Taller de confianza en Cartagena: rápido, claro y con garantía",
    subtitle: "Mantenimiento, mecánica, cajas automáticas, chapa y pintura, electricidad y neumáticos. Presupuesto sin sorpresas y entrega a tiempo.",
    experience: "20+ años de experiencia"
  },

  // Contacto
  contact: {
    phone: "968514340",
    phoneDisplay: "968 514 340",
    mobile: "678697668",
    mobileDisplay: "678 697 668",
    email: "centrodecarroceria@cresiauto.es",
    address: {
      street: "Calle Helsinki",
      city: "Cartagena",
      postalCode: "30353",
      country: "ES",
      full: "Calle Helsinki, 30353 Cartagena, España"
    },
    whatsapp: "34678697668",
    googleMapsUrl: "https://www.google.com/maps/place/Cresiauto/@37.6235901,-0.9596306,17z"
  },

  // Horarios
  schedule: {
    // Horario normal (resto del año)
    normal: {
      weekdays: {
        morning: "8:00-13:00",
        afternoon: "15:00-18:00",
        display: "Lun-Jue: 8:00-13:00 • 15:00-18:00"
      },
      friday: {
        hours: "8:00-15:00",
        display: "Vie: 8:00-15:00"
      },
      full: "Lunes a jueves: 8:00-13:00 y 15:00-18:00. Viernes: 8:00-15:00. Sábados y domingos cerrado."
    },
    // Horario de verano (julio y agosto)
    summer: {
      weekdays: {
        hours: "8:00-15:00",
        display: "Lun-Vie: 8:00-15:00"
      },
      full: "Lunes a viernes: 8:00-15:00. Sábados y domingos cerrado."
    }
  },

  // URLs y enlaces
  urls: {
    website: "https://www.cresiauto.com/",
    ogImage: "/og-cresiauto.jpg",
    favicon: "/favicon.ico",
    appleTouchIcon: "/apple-touch-icon.png",
    manifest: "/site.webmanifest",
    logo: "/logo.png"
  },

  // Promociones
  promotions: {
    welcome: {
      title: "Promo bienvenida:",
      description: "10% dto. en mano de obra en tu primera visita.",
      whatsappText: "Quiero aprovechar la promo de bienvenida"
    }
  },

  // Mensajes de WhatsApp
  whatsapp: {
    appointment: "Hola%20Cresiauto,%20quiero%20pedir%20cita",
    quote: "Hola%20Cresiauto,%20quisiera%20presupuesto%20para...",
    review: "Hola%20Cresiauto,%20quiero%20dejar%20mi%20opinión",
    welcome: "Quiero%20aprovechar%20la%20promo%20de%20bienvenida"
  },

  // Servicios
  services: {
    maintenance: {
      title: "Mantenimiento y revisiones",
      description: "Aceite y filtros, climatización, diagnosis electrónica y PRE-ITV. Sellado de mantenimiento sin perder garantía.",
      icon: "build"
    },
    mechanics: {
      title: "Cajas automáticas y mecánica",
      description: "Diagnóstico, cambio de ATF con máquina, reparación de motores, frenos, suspensión y transmisión.",
      icon: "settings"
    },
    bodywork: {
      title: "Chapa y pintura",
      description: "Cabina de pintado y bancadas de chasis con medición electrónica. Trabajamos con aseguradoras.",
      icon: "palette"
    },
    electrical: {
      title: "Electricidad y electrónica",
      description: "Diagnosis avanzada, centralitas, alternadores, batería, sensores ADAS y programación.",
      icon: "electrical_services"
    },
    tires: {
      title: "Neumáticos y alineado",
      description: "Marcas líderes a precio competitivo. Montaje, equilibrado y alineación. Revisamos frenos gratis.",
      icon: "tire_repair"
    },
    classics: {
      title: "Clásicos y restauración",
      description: "Mecánica y carrocería para vehículos clásicos con mimo y respeto por la originalidad.",
      icon: "restore"
    }
  },

  // Ventajas/Valores
  advantages: {
    diagnosis: {
      title: "Diagnóstico preciso",
      description: "Equipos de última generación y técnicos certificados.",
      icon: "search"
    },
    communication: {
      title: "Comunicación clara",
      description: "Presupuesto cerrado y aprobación antes de intervenir.",
      icon: "chat"
    },
    quality: {
      title: "Calidad garantizada",
      description: "Recambios de calidad y garantía por escrito.",
      icon: "verified"
    },
    delivery: {
      title: "Entrega a tiempo",
      description: "Compromiso de plazos y vehículo listo cuando lo necesitas.",
      icon: "schedule"
    }
  },

  // Proceso de trabajo
  process: {
    step1: {
      title: "Recepción y diagnosis",
      description: "Revisamos el vehículo y realizamos un diagnóstico preciso con equipos avanzados."
    },
    step2: {
      title: "Presupuesto claro",
      description: "Te enviamos el presupuesto y sólo comenzamos cuando das tu OK."
    },
    step3: {
      title: "Reparación con garantía",
      description: "Técnicos especialistas y recambios de calidad para resultados duraderos."
    },
    step4: {
      title: "Entrega y seguimiento",
      description: "Verificación final, factura detallada y seguimiento tras la entrega."
    }
  },

  // Garantías
  guarantees: [
    "Garantía por escrito en todas las reparaciones.",
    "Recambios de primeras marcas y equivalentes de calidad.",
    "Presupuesto transparente y aprobación previa.",
    "Entrega en plazo y comunicación durante el proceso."
  ],

  // Compañías con las que trabajan
  partners: [
    "MAPFRE", "ALLIANZ", "AXA", "GENERALI",
    "PIRELLI", "MICHELIN", "BOSCH", "ZF"
  ],

  // Opiniones de clientes
  reviews: {
    rating: "4.9/5",
    totalReviews: "150+ opiniones",
    clients: [
      {
        name: "Juan S.",
        initials: "JS",
        vehicle: "BMW X3",
        since: "2021",
        quote: "Me cambiaron ATF y solucionaron tirones en mi automático. Rápidos y profesionales. Muy recomendable.",
        brand: "BMW",
        brandLogo: "https://logos-world.net/wp-content/uploads/2020/05/BMW-Logo.png"
      },
      {
        name: "María G.",
        initials: "MG",
        vehicle: "",
        since: "2020",
        quote: "Pintura impecable. Gestionaron la peritación con mi aseguradora, todo muy fácil. Excelente servicio."
      },
      {
        name: "Pedro L.",
        initials: "PL",
        vehicle: "",
        since: "2019",
        quote: "Presupuesto claro y cumplen plazos. Taller de confianza donde llevo mis coches desde hace años."
      }
    ]
  },

  // FAQ
  faq: [
    {
      question: "¿Pierdo garantía si hago el mantenimiento aquí?",
      answer: "No. Cumplimos especificaciones del fabricante y sellamos el mantenimiento conforme a normativa europea."
    },
    {
      question: "¿Trabajáis con aseguradoras?",
      answer: "Sí. Gestionamos partes, peritaciones y reparación de carrocería y pintura."
    },
    {
      question: "¿Ofrecéis vehículo de cortesía?",
      answer: "Según disponibilidad y tipo de intervención. Consúltanos al reservar."
    },
    {
      question: "¿Qué horario tenéis?",
      answer: "Horario normal: Lunes a jueves de 8:00-13:00 y 15:00-18:00. Viernes de 8:00-15:00. Horario de verano (julio y agosto): Lunes a viernes de 8:00-15:00. Sábados y domingos cerrado."
    }
  ],

  // Colores de marca
  colors: {
    brand: {
      50: '#fff5f5',
      100: '#ffe3e3',
      200: '#ffbdbd',
      300: '#ff9b9b',
      400: '#f86a6a',
      500: '#e2211c',
      600: '#c61d19',
      700: '#a01915',
      800: '#7c1411',
      900: '#5f100e'
    }
  },

  // Textos adicionales
  texts: {
    insuranceWork: "Trabajamos con aseguradoras",
    quoteTime: "Presupuesto en 48h",
    quoteDescription: "Cada reparación es diferente. Los precios varían según marca, modelo, referencia de recambio y estado del vehículo. Te enviamos un presupuesto detallado y sin compromiso en menos de 24h.",
    quoteFeatures: [
      "Incluye detalle de piezas, mano de obra y plazos estimados.",
      "Sin compromiso: sólo empezamos cuando nos das tu OK."
    ],
    servicesDescription: "Soluciones integrales para tu vehículo. Trabajamos todas las marcas y ofrecemos presupuestos claros antes de intervenir.",
    processDescription: "Transparencia total, sin sorpresas. Te mantenemos informado en cada paso.",
    partnersDescription: "Aseguradoras y marcas líderes en recambio y neumáticos.",
    reviewsDescription: "Más de 20 años cuidando vehículos en Cartagena y alrededores",
    contactDescription: "Pide presupuesto o reserva cita. Te responderemos lo antes posible.",
    footerDescription: "Smart Mobility Solutions. Más de 20 años cuidando tu vehículo en Cartagena."
  }
};

// Función para obtener URLs de WhatsApp completas
function getWhatsAppUrl(type, customText = '') {
  const baseUrl = `https://wa.me/${CONFIG.contact.whatsapp}`;
  const text = customText || CONFIG.whatsapp[type] || '';
  return `${baseUrl}?text=${text}`;
}

// Función para obtener teléfono con formato
function getPhoneUrl(phone) {
  return `tel:${phone}`;
}

// Función para obtener email
function getEmailUrl(email) {
  return `mailto:${email}`;
}

// Función para detectar si estamos en meses de verano (julio y agosto)
function isSummerTime() {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // getMonth() devuelve 0-11, necesitamos 1-12
  return currentMonth === 7 || currentMonth === 8; // 7 = julio, 8 = agosto
}

// Función para obtener el horario actual (normal o de verano)
function getCurrentSchedule() {
  return isSummerTime() ? CONFIG.schedule.summer : CONFIG.schedule.normal;
}

// Función para obtener el horario completo como texto
function getScheduleText() {
  const currentSchedule = getCurrentSchedule();
  return currentSchedule.full;
}

// Función para obtener el horario de WhatsApp
function getScheduleWhatsAppText() {
  const currentSchedule = getCurrentSchedule();
  const isSummer = isSummerTime();
  
  if (isSummer) {
    return "Horario%20de%20verano%20(julio-agosto):%20Lunes%20a%20viernes%20de%208:00%20a%2015:00";
  } else {
    return "Horario%20normal:%20Lunes%20a%20jueves%20de%208:00-13:00%20y%2015:00-18:00.%20Viernes%20de%208:00-15:00";
  }
}
