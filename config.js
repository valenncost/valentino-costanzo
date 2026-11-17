/* =====================================================================
   CONFIGURACIÓN DEL PORTFOLIO DE VALENTINO COSTANZO
   ---------------------------------------------------------------------
   Acá están TODOS los datos y textos de la web, en inglés (en) y en
   castellano (es). La web arranca en inglés salvo que el navegador
   esté en español; el botón "ES / EN" de arriba cambia el idioma.

   Cómo editar sin romper nada:
   - Cambiá solo lo que está ENTRE COMILLAS "así".
   - Si cambiás un texto, cambialo en los dos idiomas (en y es).
   - No borres las comas del final de cada línea ni las llaves { } [ ].
   - En los títulos, lo que va entre <em> y </em> sale en naranja.
   - Guardá y recargá la página para ver el cambio.
   ===================================================================== */

const CONFIG = {

  /* ---------------------------------------------------------------
     CONTACTO
     --------------------------------------------------------------- */
  fiverr: "https://www.fiverr.com/valenn08",
  email: "costanzovalentino09@gmail.com",
  // WhatsApp: solo aparece en la versión en castellano
  whatsapp: "5492915239152",
  anio: "2026",


  /* ---------------------------------------------------------------
     STACK (la cinta que se mueve sola)
     - logo: archivo dentro de "logos-herramientas". Si no hay logo,
       se dibuja una placa con la "sigla".
     --------------------------------------------------------------- */
  herramientas: [
    { nombre: "Next.js",      sigla: "N" },
    { nombre: "React",        sigla: "R" },
    { nombre: "TypeScript",   sigla: "TS" },
    { nombre: "Supabase",     logo: "logos-herramientas/supabase.svg" },
    { nombre: "Three.js",     sigla: "3D" },
    { nombre: "Tailwind CSS", sigla: "TW" },
    { nombre: "Vercel",       logo: "logos-herramientas/vercel.svg" },
    { nombre: "Cloudflare",   sigla: "CF" },
    { nombre: "GitHub",       logo: "logos-herramientas/github.svg" },
    { nombre: "Mercado Pago", logo: "logos-herramientas/mercadopago.svg" }
  ],


  /* ---------------------------------------------------------------
     PROYECTOS (las tarjetas que se despliegan en "Recent work")
     Arriba van los datos que no cambian con el idioma (links, capturas);
     en "en" y "es" van los textos.
     - iconos: uno por paso (celu, pantalla, toque, ticket, qr)
     --------------------------------------------------------------- */
  proyectos: [
    {
      titulo: "REMLAB",
      linkWeb: "https://remlab3d.com/",
      linkPanel: "https://remlab3d.com/producto/lampara-de-luna",
      barraWeb: "remlab3d.com",
      barraPanel: "remlab3d.com/producto",
      imagenWeb: "proyectos/remlab-web.webp",
      imagenPanel: "proyectos/remlab-3d.webp",
      iconos: ["celu", "toque", "pantalla"],
      en: {
        etiqueta: "3D printing · Online store",
        plan: "Custom system",
        frase: "Every piece can be rotated, zoomed in and placed in your room with augmented reality before you buy it. Customers pick a color, fill the cart and pay by bank transfer or on pickup. The owner manages products, orders and payments from their panel.",
        web: { titulo: "What the customer sees", texto: "A 3D printer working live as soon as you land, and the catalog one tap away.", boton: "Visit the store" },
        panel: { titulo: "The piece in 3D", texto: "Rotate it with your finger, change the color live, and on a phone place it on your table with AR.", boton: "See a piece in 3D" },
        pasos: ["Rotate the piece and pick a color", "Fill the cart and choose how to pay", "The order shows up in the owner's panel"],
        nota: "This is REMLAB's live store. Orders placed here reach them for real."
      },
      es: {
        etiqueta: "Impresión 3D · Tienda online",
        plan: "Sistema a medida",
        frase: "Cada pieza se gira, se acerca y se ve en tu casa con realidad aumentada antes de comprarla. El cliente elige color, arma el carrito y paga por transferencia o al retirar. El dueño maneja productos, pedidos y pagos desde su panel.",
        web: { titulo: "Lo que ve el cliente", texto: "Una impresora 3D que trabaja en vivo apenas entrás, y el catálogo a un toque.", boton: "Ver la tienda" },
        panel: { titulo: "La pieza en 3D", texto: "La gira con el dedo, cambia el color en vivo y desde el celu la pone en su mesa con realidad aumentada.", boton: "Ver una pieza en 3D" },
        pasos: ["Gira la pieza y elige el color", "Arma el carrito y elige cómo pagar", "El pedido le aparece al dueño en el panel"],
        nota: "Es la tienda real de REMLAB: si hacés un pedido, les llega de verdad."
      }
    },

    {
      titulo: "Importado Bahía",
      linkWeb: "https://importadobahia.com/",
      linkPanel: "https://importadobahia.com/",
      barraWeb: "importadobahia.com",
      barraPanel: "importadobahia.com",
      imagenWeb: "proyectos/importado-web.webp",
      imagenPanel: "proyectos/importado-panel.webp",
      iconos: ["celu", "toque", "pantalla"],
      en: {
        etiqueta: "Perfume shop · Online store",
        plan: "Custom system",
        frase: "The full perfume catalog with notes, prices and decants. Customers place an order, pay by bank transfer or on pickup, and track it from a link. The owner handles orders, stock and customers from their panel.",
        web: { titulo: "What the customer sees", texto: "Browse the shop, filter by who it's for and style, and choose a full bottle, wholesale or a decant.", boton: "Visit the store" },
        panel: { titulo: "What the owner sees", texto: "Today's orders with the next step for each one: confirm, approve the payment, add shipping or message the customer on WhatsApp. Stock updates on its own.", boton: "Place an order" },
        pasos: ["Pick a perfume and the size", "Shipping or pickup, and how to pay", "The order shows up in the owner's panel"],
        nota: "This is Importado Bahía's live store. Orders placed here reach them for real."
      },
      es: {
        etiqueta: "Perfumería · Tienda online",
        plan: "Sistema a medida",
        frase: "Todo el catálogo de perfumes con notas, precios y decants. El cliente arma el pedido, paga por transferencia o al retirar, y lo sigue desde un link. El dueño maneja pedidos, stock y clientes desde su panel.",
        web: { titulo: "Lo que ve el cliente", texto: "Mira la vitrina, filtra por para quién y estilo, y elige frasco entero, mayorista o decant.", boton: "Ver la tienda" },
        panel: { titulo: "Lo que ve el dueño", texto: "Los pedidos del día con lo que hay que hacer: confirmar, aprobar el pago, cargar el envío o avisar por WhatsApp. El stock se descuenta solo.", boton: "Hacer un pedido" },
        pasos: ["Elige el perfume y cómo lo quiere", "Envío o retiro, y forma de pago", "El pedido le aparece al dueño en el panel"],
        nota: "Es la tienda real de Importado Bahía: si hacés un pedido, les llega de verdad."
      }
    },

    {
      titulo: "torino producciones",
      linkWeb: "https://torinoprod.com/",
      // El Studio es una demo con datos de ejemplo, publicada en la web de Cono
      linkPanel: "https://conoagency.vercel.app/demos/torino/admin.html",
      barraWeb: "torinoprod.com",
      barraPanel: "torino Studio",
      imagenWeb: "proyectos/torino-web.webp",
      imagenPanel: "proyectos/torino-panel.webp",
      iconos: ["celu", "qr", "toque"],
      en: {
        etiqueta: "Ticketing · Events",
        plan: "Custom system",
        frase: "They sell tickets from their own website: buyers pay with Mercado Pago and get a ticket with a QR code right away. In the Studio they see sales live, ticket tiers that move up on their own, guest passes and VIP, and at the door tickets are scanned from a phone, even with no signal.",
        web: { titulo: "What the buyer sees", texto: "Pick the party, pay with Mercado Pago and the ticket shows up with a QR code in your name. Skip the lines and the payment screenshots.", boton: "Visit torino's site" },
        panel: { titulo: "What the organizer sees", texto: "How much was sold, who bought and how many got in. Every sale pings the phone, VIP requests get approved and guest passes go out by WhatsApp.", boton: "Open the torino Studio" },
        pasos: ["Buy the ticket from a phone", "It arrives with a QR code in your name", "Scanned at the door, and you're in"],
        nota: "The website is torino's real one. The Studio is a demo with sample data, so feel free to click around."
      },
      es: {
        etiqueta: "Ticketera · Eventos",
        plan: "Sistema a medida",
        frase: "Venden las entradas desde su propia web: se paga con Mercado Pago y la entrada llega al instante con QR. En el Studio ven las ventas en vivo, los lotes que avanzan solos, las cortesías y el VIP, y en la puerta se escanea desde el celu, aunque no haya señal.",
        web: { titulo: "Lo que ve el que compra", texto: "Elige la fiesta, paga con Mercado Pago y la entrada aparece con QR a su nombre. Sin filas ni capturas de transferencia.", boton: "Ver la web de torino" },
        panel: { titulo: "Lo que ve el organizador", texto: "Ve cuánto vendió, quién compró y cuántos entraron. Le llega cada compra al celu, aprueba el VIP y manda cortesías por WhatsApp.", boton: "Ver el Studio de torino" },
        pasos: ["Compra la entrada desde el celu", "Le llega con QR a su nombre", "En la puerta se escanea y entra"],
        nota: "La web es la real de torino. El Studio es una demo con datos de ejemplo: tocá todo sin miedo."
      }
    },

    {
      titulo: "Contadores Asociados",
      linkWeb: "https://contadoresasociados.vercel.app/",
      linkPanel: "https://contadoresasociados.vercel.app/#servicios",
      barraWeb: "contadoresasociados.vercel.app",
      barraPanel: "contadoresasociados.vercel.app",
      imagenWeb: "proyectos/contadores-web.webp",
      imagenPanel: "proyectos/contadores-servicios.webp",
      iconos: ["pantalla", "toque", "celu"],
      en: {
        etiqueta: "Accounting firm · Website",
        plan: "Website",
        frase: "A website for an accounting firm in Encarnación, Paraguay. It explains their services in plain words, walks through how they work and sends visitors straight to WhatsApp for a first consultation.",
        web: { titulo: "The home page", texto: "What the firm does and who it helps, with the WhatsApp button always in reach.", boton: "Visit the site" },
        panel: { titulo: "The services", texto: "Every service with a short, clear description and a button to ask about it.", boton: "See the services" },
        pasos: ["The visitor finds the service they need", "Reads how the firm works", "Asks a question on WhatsApp"],
        nota: ""
      },
      es: {
        etiqueta: "Estudio contable · Web",
        plan: "Web",
        frase: "La web de un estudio contable de Encarnación, Paraguay. Explica sus servicios en simple, cuenta cómo trabajan y lleva a la gente directo a WhatsApp para una primera consulta.",
        web: { titulo: "El inicio", texto: "Qué hace el estudio y a quién ayuda, con el botón de WhatsApp siempre a mano.", boton: "Ver la web" },
        panel: { titulo: "Los servicios", texto: "Cada servicio con una explicación corta y clara, y un botón para consultar.", boton: "Ver los servicios" },
        pasos: ["El que entra encuentra el servicio que busca", "Lee cómo trabaja el estudio", "Consulta por WhatsApp"],
        nota: ""
      }
    },

    {
      titulo: "missú tiramisú",
      linkWeb: "https://missubb.vercel.app/",
      linkPanel: "https://missubb.vercel.app/#pedir",
      barraWeb: "missubb.vercel.app",
      barraPanel: "WhatsApp · missú",
      imagenWeb: "proyectos/missu-web.webp",
      imagenPanel: "proyectos/missu-wa.webp",
      iconos: ["celu", "toque", "pantalla"],
      en: {
        etiqueta: "Dessert shop · WhatsApp orders",
        plan: "Website",
        frase: "The tiramisu spins as you scroll, and the order arrives ready on WhatsApp: quantity, day, delivery or pickup.",
        web: { titulo: "What the customer sees", texto: "The product in 3D, photos, customer stories and an order in a few taps.", boton: "Visit missú's site" },
        panel: { titulo: "What the shop gets", texto: "A WhatsApp message with the full order: portions, day, address and payment method.", boton: "Place an order" },
        pasos: ["Pick how many portions and the day", "Friday delivery or pickup, and how to pay", "The order arrives ready on WhatsApp"],
        nota: "This is missú's live site. Orders placed here reach them for real."
      },
      es: {
        etiqueta: "Comercio · Pedidos por WhatsApp",
        plan: "Web",
        frase: "El tiramisú gira mientras bajás, y el pedido llega armado por WhatsApp: cantidad, día, envío o retiro.",
        web: { titulo: "Lo que ve el cliente", texto: "El producto en 3D, las fotos, las historias de clientes y el pedido en pocos toques.", boton: "Ver la web de missú" },
        panel: { titulo: "Lo que le llega al negocio", texto: "Un WhatsApp con todo el pedido listo: porciones, día, dirección y forma de pago.", boton: "Hacer un pedido" },
        pasos: ["Elige cuántas porciones y para qué día", "Envío el viernes o retiro, y forma de pago", "El pedido llega armado por WhatsApp"],
        nota: "Es la web real de missú: si hacés un pedido, les llega de verdad."
      }
    },

    {
      titulo: "chipaadicto",
      linkWeb: "https://chipaadicto.vercel.app/",
      linkPanel: "https://chipaadicto.vercel.app/#chipa",
      barraWeb: "chipaadicto.vercel.app",
      barraPanel: "WhatsApp · chipaadicto",
      imagenWeb: "proyectos/chipa-web.webp",
      imagenPanel: "proyectos/chipa-wa.webp",
      iconos: ["celu", "toque", "pantalla"],
      en: {
        etiqueta: "Bakery · WhatsApp orders",
        plan: "Website",
        frase: "Customers pick chipá or chipalitos, set the amount with + and −, see the total and the order arrives ready on WhatsApp.",
        web: { titulo: "What the customer sees", texto: "The products with prices, photos and an order with the total in plain sight.", boton: "Visit chipaadicto's site" },
        panel: { titulo: "What the shop gets", texto: "A WhatsApp message with the order and the total. Day, delivery and payment get sorted out there.", boton: "Place an order" },
        pasos: ["Pick chipá or chipalitos and how many", "See the total right away", "The order arrives ready on WhatsApp"],
        nota: "This is chipaadicto's live site. Orders placed here reach them for real."
      },
      es: {
        etiqueta: "Comercio · Pedidos por WhatsApp",
        plan: "Web",
        frase: "Eligen chipá o chipalitos, cuánto quieren con + y −, ven el total y el pedido llega armado por WhatsApp.",
        web: { titulo: "Lo que ve el cliente", texto: "Los productos con sus precios, las fotos y el pedido con el total a la vista.", boton: "Ver la web de chipaadicto" },
        panel: { titulo: "Lo que le llega al negocio", texto: "Un WhatsApp con el pedido y el total. Día, envío y pago los arreglan por ahí.", boton: "Hacer un pedido" },
        pasos: ["Elige chipá o chipalitos y cuánto", "Ve el total al instante", "El pedido llega armado por WhatsApp"],
        nota: "Es la web real de chipaadicto: si hacés un pedido, les llega de verdad."
      }
    },

    {
      titulo: "Guardiola Cuts",
      linkWeb: "https://guardiolacuts.vercel.app/",
      linkPanel: "https://guardiolacuts.vercel.app/#turnos",
      barraWeb: "guardiolacuts.vercel.app",
      barraPanel: "WhatsApp · Ale",
      imagenWeb: "proyectos/guardiola-web.webp",
      imagenPanel: "proyectos/guardiola-wa.webp",
      iconos: ["celu", "toque", "pantalla"],
      en: {
        etiqueta: "Barbershop · WhatsApp booking",
        plan: "Website",
        frase: "Customers pick a day and time from their phone, and the booking reaches Ale, the barber, ready on WhatsApp.",
        web: { titulo: "What the customer sees", texto: "The cuts, the prices and the loyalty card, and a booking in four taps.", boton: "Visit Guardiola's site" },
        panel: { titulo: "What Ale gets", texto: "A WhatsApp message with the day, time and name. He confirms by replying, without apps or spreadsheets.", boton: "Book a slot" },
        pasos: ["Pick a day and time from a phone", "Add your name and confirm", "Ale gets the booking on WhatsApp"],
        nota: "This is Guardiola's live site. Bookings made here reach Ale for real."
      },
      es: {
        etiqueta: "Barbería · Turnos por WhatsApp",
        plan: "Web",
        frase: "Los clientes eligen día y horario desde el celu, y el turno le llega armado a Ale por WhatsApp.",
        web: { titulo: "Lo que ve el cliente", texto: "Mira los cortes, el precio y la tarjeta de fidelidad, y saca turno en cuatro toques.", boton: "Ver la web de Guardiola" },
        panel: { titulo: "Lo que le llega a Ale", texto: "Un WhatsApp con el día, la hora y el nombre. Lo confirma respondiendo, sin apps ni planillas.", boton: "Sacar un turno" },
        pasos: ["Elige día y horario desde el celu", "Pone su nombre y confirma", "A Ale le llega el turno por WhatsApp"],
        nota: "Es la web real de Guardiola: si sacás un turno, le llega de verdad a Ale."
      }
    },

    {
      titulo: "Lumen Odontología",
      linkWeb: "https://lumenodontologia.vercel.app/",
      linkPanel: "https://lumenodontologia.vercel.app/panel.html?demo",
      barraWeb: "lumenodontologia.vercel.app",
      barraPanel: "Lumen · panel",
      imagenWeb: "proyectos/lumen-web.webp",
      imagenPanel: "proyectos/lumen-panel.webp",
      iconos: ["celu", "pantalla", "toque"],
      en: {
        etiqueta: "Dental clinic · Online booking",
        plan: "Demo",
        frase: "Patients book their own appointments from their phone. The front desk gets a panel with everything: today's schedule, patients, pending payments and WhatsApp reminders.",
        web: { titulo: "What the patient sees", texto: "Open the site, pick the treatment, the day and the time. That's it, without a phone call.", boton: "Visit the clinic's site" },
        panel: { titulo: "What the front desk sees", texto: "The schedule, one-tap confirmations, pending payments and a WhatsApp message to the patient.", boton: "Open the clinic's panel" },
        pasos: ["The patient books from a phone", "It shows up in the clinic's panel", "The front desk confirms with one tap"],
        nota: "This one is a demo with sample data. Book an appointment on the site, then open the panel to see it."
      },
      es: {
        etiqueta: "Consultorio · Turnos online",
        plan: "Demo",
        frase: "Los pacientes sacan turno solos desde el celu. La secretaria tiene un panel con todo: la agenda del día, los pacientes, los cobros pendientes y los recordatorios por WhatsApp.",
        web: { titulo: "Lo que ve el paciente", texto: "Entra a la web, elige el tratamiento, el día y el horario. Listo, sin llamar.", boton: "Ver la web del consultorio" },
        panel: { titulo: "Lo que ve la secretaria", texto: "Ve la agenda, confirma turnos con un toque, anota los cobros pendientes y le avisa al paciente por WhatsApp.", boton: "Ver el panel del consultorio" },
        pasos: ["El paciente saca turno desde el celu", "Aparece en el panel del consultorio", "La secretaria confirma con un toque"],
        nota: "Este es una demo con datos de ejemplo. Sacá un turno en la web y después abrí el panel para verlo."
      }
    }
  ],


  /* ---------------------------------------------------------------
     TEXTOS DE LA PÁGINA
     Cada clave corresponde a un data-i18n="clave" en index.html.
     Las listas (pastillas, servicios, preguntas) las arma main.js.
     --------------------------------------------------------------- */
  textos: {
    en: {
      metaTitulo: "Valentino Costanzo | Web developer",
      metaDescripcion: "I'm Valentino, a web developer from Argentina. I build websites, online stores, booking and ticketing systems, admin panels and 3D product viewers.",

      saltar: "Skip to content",
      irInicio: "Valentino Costanzo, go to top",
      abrirMenu: "Open menu",
      cerrarMenu: "Close menu",
      cambiarIdioma: "Cambiar a español",
      menuPrincipal: "Main menu",
      secciones: "Sections",
      contratame: "Hire me on Fiverr",
      volverArriba: "Back to top",
      escribime: "Contact me",

      navProyectos: "Projects",
      navServicios: "What I do",
      navProceso: "How I work",
      navPorQue: "Why me",
      navContacto: "Contact",
      navPreguntas: "FAQ",

      heroEyebrow: "Web developer · Argentina",
      heroTitulo: "Websites and systems <em>for your business</em>.",
      heroLead: "I'm Valentino. I build websites, online stores, booking and ticketing systems, admin panels and 3D product viewers.",
      quickProyectosT: "See projects",
      quickProyectosS: "Live sites you can try",
      quickServiciosT: "What I do",
      quickServiciosS: "Websites, stores and systems",
      perfilCaption: "REMLAB · 3D product viewer",
      perfilLugar: "Bahía Blanca, Argentina",
      perfilHora: "UTC−3, overlaps with US business hours",
      perfilIdiomas: "English and Spanish",
      pastillas: ["Websites & online stores", "Booking & ticketing", "Admin panels", "3D & AR product views"],

      stackTitulo: "My stack",

      proyectosTag: "01 · Projects",
      proyectosTitulo: "Recent <em>work</em>.",
      proyectosLead: "Open one to see how it works inside.",
      verComoFunciona: "See how it works",
      cerrar: "Close",

      serviciosTag: "02 · What I do",
      serviciosTitulo: "What I can <em>build for you</em>.",
      serviciosLead: "Every project is built from scratch for the business. These are the most common ones.",
      servicioBoton: "Let's talk",
      servicios: [
        {
          nombre: "Websites",
          etiqueta: "For small businesses",
          descripcion: "A custom website so people find you and get in touch. If you want, customers can book or order and it reaches you ready to go.",
          puntos: ["Custom design, mobile first", "Bookings or orders sent to you", "Your own domain", "Fast and easy to update"],
          ejemplo: "e.g. Guardiola Cuts, missú, Contadores Asociados"
        },
        {
          nombre: "Online stores",
          etiqueta: "Sell online",
          descripcion: "A store with your catalog, cart and checkout, plus a panel to manage products, orders and stock.",
          puntos: ["Catalog with filters and variants", "Cart and order tracking", "Stock that updates on its own", "Orders panel for the owner"],
          ejemplo: "e.g. REMLAB, Importado Bahía"
        },
        {
          nombre: "Custom systems & admin panels",
          etiqueta: "Everything in one place",
          descripcion: "Bookings, tickets, customers, payments or orders saved and organized in a private panel you can use from your phone.",
          puntos: ["Login for you and your team", "Booking and ticketing flows", "Automatic notifications", "No more spreadsheets"],
          ejemplo: "e.g. torino producciones, Lumen"
        },
        {
          nombre: "3D & AR product views",
          etiqueta: "Show it better",
          descripcion: "Let customers rotate your product, change colors live and place it in their room with augmented reality.",
          puntos: ["Interactive 3D viewer", "Live color and material changes", "Augmented reality on phones", "Built with Three.js"],
          ejemplo: "e.g. REMLAB, missú"
        }
      ],

      fraseTitulo: "Websites that <em>do the work</em>.",
      fraseTexto: "Taking orders, booking appointments, selling tickets, tracking stock. I build the part your customers see and the panel you use to run it.",
      fraseChips: ["Website", "Store", "Admin panel", "3D"],

      procesoTag: "03 · How I work",
      procesoTitulo: "From first message to <em>live site</em>.",
      procesoLead: "Four simple steps.",
      pasoLabel: "Step",
      paso1T: "You message me",
      paso1P: "On Fiverr or by email. Tell me about your business and what you need.",
      paso2T: "I send a plan",
      paso2P: "What I'll build, the price and the timeline, before any work starts.",
      paso3T: "I build it",
      paso3P: "You get progress updates along the way and tell me what to change.",
      paso4T: "Launch",
      paso4P: "I publish it, show you how to use it and stay around for changes.",

      porQueTag: "04 · Why me",
      porQueTitulo: "Why work <em>with me</em>.",
      porQueLead: "A few honest reasons.",
      porQue1T: "You talk to me directly",
      porQue1P: "No account managers. The person you talk to is the one who designs and builds it.",
      porQue2T: "Work you can try",
      porQue2P: "Most projects on this page are live sites. Open them and click around.",
      porQue3T: "Plain English",
      porQue3P: "Hosting, domains and databases explained in simple words. No jargon.",
      porQue4T: "Design and code",
      porQue4P: "From the first sketch to the database, one person takes care of all of it.",

      contactoTag: "05 · Contact",
      contactoTitulo: "Got a project? <em>Let's talk</em>.",
      contactoLead: "The easiest way to hire me is through Fiverr: payments are protected and everything stays in one place. You can also email me with questions first.",
      contactoFiverrT: "Hire me on Fiverr",
      contactoFiverrS: "fiverr.com/valenn08",
      contactoEmailT: "Send me an email",
      contactoWaT: "WhatsApp",
      contactoWaS: "+54 9 291 523-9152",
      contactoNota: "I usually reply within a day.",

      preguntasTag: "06 · FAQ",
      preguntasTitulo: "Common <em>questions</em>.",
      preguntas: [
        { pregunta: "I'm in the US. Is the time difference a problem?", respuesta: "Not really. I'm in Argentina (UTC−3), which is 1 to 2 hours ahead of New York, so our working hours overlap. We can talk by message or schedule a call." },
        { pregunta: "How does payment work?", respuesta: "Through Fiverr. You pay when you place the order, and Fiverr holds the money until you approve the delivery." },
        { pregunta: "How long does a project take?", respuesta: "It depends on the size. A simple website is quicker than a store or a custom system. I give you a timeline before we start." },
        { pregunta: "Can you update or fix my existing site?", respuesta: "Yes. Send me the link and tell me what you need, and I'll tell you if I can help." },
        { pregunta: "What happens after launch?", respuesta: "I show you how to use it, and if you need changes later, you message me and we sort it out." },
        { pregunta: "Do I need to know anything technical?", respuesta: "No. You tell me how your business works and I take care of the rest." }
      ],

      cierreTitulo: "Let's build <em>your next site</em>.",
      footerBajada: "Web developer from Bahía Blanca, Argentina. Websites, online stores and custom systems.",
      footerSecciones: "Sections",
      footerContacto: "Contact",
      footerHecho: "Built by hand, in Argentina."
    },

    es: {
      metaTitulo: "Valentino Costanzo | Desarrollador web",
      metaDescripcion: "Soy Valentino, desarrollador web de Bahía Blanca. Hago webs, tiendas online, sistemas de turnos y entradas, paneles de gestión y visores 3D de productos.",

      saltar: "Saltar al contenido",
      irInicio: "Valentino Costanzo, ir al inicio",
      abrirMenu: "Abrir menú",
      cerrarMenu: "Cerrar menú",
      cambiarIdioma: "Switch to English",
      menuPrincipal: "Menú principal",
      secciones: "Secciones",
      contratame: "Contratame en Fiverr",
      volverArriba: "Volver arriba",
      escribime: "Escribime",

      navProyectos: "Proyectos",
      navServicios: "Qué hago",
      navProceso: "Cómo trabajo",
      navPorQue: "Por qué yo",
      navContacto: "Contacto",
      navPreguntas: "Preguntas",

      heroEyebrow: "Desarrollador web · Argentina",
      heroTitulo: "Webs y sistemas <em>para tu negocio</em>.",
      heroLead: "Soy Valentino. Hago webs, tiendas online, sistemas de turnos y entradas, paneles de gestión y visores 3D de productos.",
      quickProyectosT: "Ver proyectos",
      quickProyectosS: "Webs reales para probar",
      quickServiciosT: "Qué hago",
      quickServiciosS: "Webs, tiendas y sistemas",
      perfilCaption: "REMLAB · Visor 3D de productos",
      perfilLugar: "Bahía Blanca, Argentina",
      perfilHora: "Clientes en Argentina y Paraguay",
      perfilIdiomas: "Castellano e inglés",
      pastillas: ["Webs y tiendas online", "Turnos y entradas", "Paneles de gestión", "Productos en 3D y AR"],

      stackTitulo: "Con qué trabajo",

      proyectosTag: "01 · Proyectos",
      proyectosTitulo: "Trabajos <em>terminados</em>.",
      proyectosLead: "Tocá uno para ver cómo funciona por dentro.",
      verComoFunciona: "Ver cómo funciona",
      cerrar: "Cerrar",

      serviciosTag: "02 · Qué hago",
      serviciosTitulo: "Lo que te puedo <em>armar</em>.",
      serviciosLead: "Cada proyecto se hace a medida del negocio. Estos son los más comunes.",
      servicioBoton: "Hablemos",
      servicios: [
        {
          nombre: "Webs",
          etiqueta: "Para tu negocio",
          descripcion: "Tu web a medida, para que te encuentren y te escriban. Si querés, el cliente saca turno o arma su pedido y te llega listo.",
          puntos: ["Diseño a medida, pensado para el celu", "Turnos o pedidos que te llegan armados", "Dominio propio", "Rápida y fácil de actualizar"],
          ejemplo: "Ej: Guardiola Cuts, missú, Contadores Asociados"
        },
        {
          nombre: "Tiendas online",
          etiqueta: "Vendé por internet",
          descripcion: "Una tienda con tu catálogo, carrito y compra, más un panel para manejar productos, pedidos y stock.",
          puntos: ["Catálogo con filtros y variantes", "Carrito y seguimiento del pedido", "Stock que se descuenta solo", "Panel de pedidos para el dueño"],
          ejemplo: "Ej: REMLAB, Importado Bahía"
        },
        {
          nombre: "Sistemas y paneles a medida",
          etiqueta: "Todo en un lugar",
          descripcion: "Turnos, entradas, clientes, cobros o pedidos guardados y ordenados en un panel privado que usás desde el celu.",
          puntos: ["Usuario para vos y tu equipo", "Turnos y venta de entradas", "Avisos automáticos", "Chau planillas"],
          ejemplo: "Ej: torino producciones, Lumen"
        },
        {
          nombre: "Productos en 3D y AR",
          etiqueta: "Mostralo mejor",
          descripcion: "Que tu cliente gire el producto, cambie el color en vivo y lo vea en su casa con realidad aumentada.",
          puntos: ["Visor 3D interactivo", "Colores y materiales en vivo", "Realidad aumentada en el celu", "Hecho con Three.js"],
          ejemplo: "Ej: REMLAB, missú"
        }
      ],

      fraseTitulo: "Webs que <em>laburan por vos</em>.",
      fraseTexto: "Tomar pedidos, dar turnos, vender entradas, controlar el stock. Armo lo que ve tu cliente y el panel que usás vos para manejarlo.",
      fraseChips: ["Web", "Tienda", "Panel", "3D"],

      procesoTag: "03 · Cómo trabajo",
      procesoTitulo: "Del primer mensaje a tu web <em>andando</em>.",
      procesoLead: "Cuatro pasos, sin vueltas.",
      pasoLabel: "Paso",
      paso1T: "Me escribís",
      paso1P: "Por WhatsApp, mail o Fiverr. Me contás qué hacés y qué necesitás.",
      paso2T: "Te paso un plan",
      paso2P: "Qué voy a hacer, el precio y los tiempos, antes de arrancar.",
      paso3T: "Manos a la obra",
      paso3P: "Te mando avances y me decís qué cambiar.",
      paso4T: "Lista para usar",
      paso4P: "La publico, te enseño a usarla y quedo para cualquier cambio.",

      porQueTag: "04 · Por qué yo",
      porQueTitulo: "Por qué <em>trabajar conmigo</em>.",
      porQueLead: "Algunas razones, sin vueltas.",
      porQue1T: "Hablás directo conmigo",
      porQue1P: "Sin intermediarios. El que te atiende es el que la diseña y la programa.",
      porQue2T: "Trabajos para probar",
      porQue2P: "Casi todos los proyectos de esta página son webs reales. Entrá y recorrelas.",
      porQue3T: "En criollo",
      porQue3P: "Hosting, dominios y bases de datos explicados en simple. Sin vueltas técnicas.",
      porQue4T: "Diseño y código",
      porQue4P: "Del primer boceto a la base de datos, me encargo yo de todo.",

      contactoTag: "05 · Contacto",
      contactoTitulo: "¿Tenés un proyecto? <em>Hablemos</em>.",
      contactoLead: "Escribime por WhatsApp o por mail y lo charlamos. Si preferís, también me podés contratar por Fiverr.",
      contactoFiverrT: "Contratame en Fiverr",
      contactoFiverrS: "fiverr.com/valenn08",
      contactoEmailT: "Mandame un mail",
      contactoWaT: "Escribime por WhatsApp",
      contactoWaS: "291 523-9152",
      contactoNota: "Suelo responder en el día.",

      preguntasTag: "06 · Preguntas frecuentes",
      preguntasTitulo: "Lo que siempre me <em>preguntan</em>.",
      preguntas: [
        { pregunta: "¿En cuánto tiempo la tengo?", respuesta: "Depende de lo que necesites. Una web simple sale más rápido que una tienda o un sistema. Te paso los tiempos antes de arrancar." },
        { pregunta: "¿Cómo se paga?", respuesta: "Lo charlamos antes de arrancar. Si me contratás por Fiverr, pagás ahí y Fiverr guarda la plata hasta que aprobás la entrega." },
        { pregunta: "¿Podés arreglar o actualizar mi web actual?", respuesta: "Sí. Pasame el link, contame qué necesitás y te digo si te puedo ayudar." },
        { pregunta: "¿Y si después quiero cambiar algo?", respuesta: "Me escribís y lo resolvemos. Te enseño a usarla y quedo para cualquier cambio." },
        { pregunta: "¿Tengo que saber de tecnología?", respuesta: "No. Vos me contás cómo trabajás y yo me encargo del resto." }
      ],

      cierreTitulo: "¿Arrancamos con <em>tu web</em>?",
      footerBajada: "Desarrollador web de Bahía Blanca, Argentina. Webs, tiendas online y sistemas a medida.",
      footerSecciones: "Secciones",
      footerContacto: "Contacto",
      footerHecho: "Hecho a mano, en Bahía Blanca."
    }
  }
};
