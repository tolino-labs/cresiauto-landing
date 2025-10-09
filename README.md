# Cresiauto Website - Sistema de Configuración

Este sitio web utiliza un sistema de configuración centralizado que permite modificar fácilmente todos los contenidos sin tocar el código HTML.

## Archivos principales

- `index.html` - Página principal del sitio web
- `config.js` - Archivo de configuración con todas las constantes
- `logo.png` - Logo de la empresa
- `logo2.png` - Logo alternativo

## Cómo modificar el contenido

### 1. Información de la empresa

Edita el objeto `business` en `config.js`:

```javascript
business: {
  name: "Cresiauto",
  tagline: "Smart Mobility Solutions",
  description: "Descripción de la empresa...",
  slogan: "Tu nuevo slogan aquí",
  subtitle: "Tu subtítulo aquí",
  experience: "20+ años de experiencia"
}
```

### 2. Datos de contacto

Modifica el objeto `contact` en `config.js`:

```javascript
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
  whatsapp: "34678697668"
}
```

### 3. Horarios

Actualiza el objeto `schedule`:

```javascript
schedule: {
  weekdays: {
    morning: "8:00-13:00",
    afternoon: "15:00-18:00"
  },
  friday: {
    hours: "8:00-15:00"
  }
}
```

### 4. Promociones

Cambia las promociones en el objeto `promotions`:

```javascript
promotions: {
  welcome: {
    title: "Promo bienvenida:",
    description: "10% dto. en mano de obra en tu primera visita.",
    whatsappText: "Quiero aprovechar la promo de bienvenida"
  }
}
```

### 5. Servicios

Modifica los servicios en el objeto `services`:

```javascript
services: {
  maintenance: {
    title: "Mantenimiento y revisiones",
    description: "Descripción del servicio...",
    icon: "build"
  }
  // ... más servicios
}
```

### 6. Opiniones de clientes

Actualiza las opiniones en el objeto `reviews`:

```javascript
reviews: {
  rating: "4.9/5",
  totalReviews: "150+ opiniones",
  clients: [
    {
      name: "Juan S.",
      initials: "JS",
      vehicle: "BMW X3",
      since: "2021",
      quote: "Opinión del cliente...",
      brand: "BMW"
    }
    // ... más opiniones
  ]
}
```

### 7. Preguntas frecuentes

Modifica las FAQ en el array `faq`:

```javascript
faq: [
  {
    question: "¿Tu pregunta aquí?",
    answer: "Tu respuesta aquí."
  }
  // ... más preguntas
]
```

## Funciones disponibles

El archivo `config.js` incluye funciones útiles:

- `getWhatsAppUrl(type, customText)` - Genera URLs de WhatsApp
- `getPhoneUrl(phone)` - Genera URLs de teléfono
- `getEmailUrl(email)` - Genera URLs de email

## Cómo funciona

1. El archivo `config.js` se carga antes que el resto del JavaScript
2. Un script al final del HTML actualiza automáticamente todos los elementos con IDs específicos
3. Los enlaces se actualizan dinámicamente usando las funciones helper

## Elementos que se actualizan automáticamente

- Título de la página
- Meta descripción
- Números de teléfono
- Email
- Horarios
- Textos del hero
- Promociones
- Enlaces de WhatsApp
- Enlaces de teléfono y email

## Notas importantes

- Los cambios en `config.js` se reflejan inmediatamente al recargar la página
- No es necesario modificar el HTML para cambiar el contenido
- Los IDs en el HTML deben coincidir con los que busca el script de actualización
- Para agregar nuevos elementos, añade el ID correspondiente en el HTML y actualiza el script

## Estructura de archivos

```
website/
├── index.html          # Página principal
├── config.js           # Configuración centralizada
├── logo.png           # Logo principal
├── logo2.png          # Logo alternativo
└── README.md          # Este archivo
```

## Soporte

Para cualquier duda sobre la configuración, consulta este README o revisa el código en `config.js` y el script de actualización en `index.html`.
