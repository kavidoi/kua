Eres una persona senior en marca, producto y front‑end. Construye un sitio de aterrizaje (landing) ultra‑rápido, accesible e informativo para kua.cl.

Empresa
- Nombre: Kua
- Lema: Sistemas digitales para las personas, no para las plataformas.
- Misión: Crear software e infraestructura justos, con privacidad por defecto, que combatan la monopolización de datos de las big tech, ayuden a las personas a ahorrar dinero y empoderen a pequeñas empresas y comunidades subatendidas, manteniendo un internet abierto.
- Visión (detalles):
  - Construir diferentes productos y soluciones tecnológicas que mejoren el mundo.
  - Luchar contra el acaparamiento y bloqueo de datos; favorecer la portabilidad y la interoperabilidad.
  - Ofrecer herramientas a negocios pequeños y organizaciones fuera de los grupos objetivo de las grandes plataformas.
  - Crear espacios para comunidades pequeñas en internet: locales, cooperativas, redes de base.
  - Hacer negocio justo: no extraer valor; permitir que las personas ahorren, no robarles.
- Promesa: “No extraemos, habilitamos. Negocio justo. Más novedades pronto”.

Objetivos
- Página única e informativa con un CTA “Más novedades pronto”. Todo el frontend debe estar en español (ES‑CL).
- Inspiración visual (referencias): 
  - Interfaz oscura tipo Railway con acentos neón y motivos de nodos/grafos.
  - Dúo azul cobalto + lima neón con tipografía pixel/retro en detalles.
  - Gradientes amistosos verde/morado para ilustraciones.
- La experiencia debe sentirse instantánea y fluida en dispositivos de gama baja.

Sistema de marca
- Paleta de color (definir variables CSS):
  - Ink Black: #0B0B12 (fondo)
  - Violet Glow: #7C3AED
  - Royal Blue: #0B28FF
  - Neon Lime: #C7FF3F
  - Mint Green: #39D98A
  - Soft White: #F5F7FA
  - Slate Gray: #8A90A2
- Tipografía:
  - Primaria: Inter (600/400)
  - Acento/pixel para títulos y labels: VT323 (o mono pixel similar)
- Iconografía: líneas minimalistas; brillo neón sutil solo al pasar el cursor/enfocar.
- Ilustración/visual: “nodos” (tarjetas) conectados con líneas punteadas/animadas; campo estelar o retícula de puntos sutil.

Arquitectura de la página (una sola página)
1) Hero
   - H1: “Kua”
   - H2: “Sistemas digitales para las personas, no para las plataformas.”
   - Copy corto: privacidad por defecto, estándares abiertos, negocio justo.
   - CTA principal: “Más novedades pronto” (abre modal de suscripción por correo o mailto).
   - Secundario: “Nuestros principios” (scroll a Principios).
   - Visual lateral: clúster de nodos/grafo con pulsos luminosos sutiles.

2) Qué hacemos (3–5 tarjetas)
   - “Datos e infraestructura independientes”
   - “Software para pequeñas empresas”
   - “Internet comunitario y plataformas locales”
   - “Ahorro de costos e interoperabilidad”
   - El texto enfatiza combatir el lock‑in y ahorrar dinero.

3) Principios (cuadrícula)
   - Privacidad por defecto; Estándares abiertos y portabilidad; Interop > lock‑in;
     Eficiencia energética y de costos; Economía centrada en personas; IA ética.
   - Cada ítem: 1–2 oraciones; ícono pixel neón.

4) A quién servimos (tres tarjetas)
   - Pequeñas empresas fuera de los grupos objetivo
   - Redes y comunidades de base / cooperativas
   - Interés público y ONG
   - Cada una con un micro “Por qué importa”.

5) Hoja de ruta (teaser)
   - Lista temporal (virtualizada si >50 ítems) con pequeños hitos.
   - Línea final: “Más novedades pronto”.

6) Pie de página
   - “Hecho en Chile para todas y todos.”
   - Contacto: hello@kua.cl
   - Marcadores sociales, copyright, nota de privacidad (“Sin tracking, sin anuncios”).

Voz de contenido y pautas
- Clara, humana y esperanzadora. Evitar jerga vacía. Enfatizar justicia, ahorro y agencia.
- Todo el frontend en español (ES‑CL). Incluir, si se desea, archivo de traducciones listo para un futuro toggle EN.
- Proveer todo el contenido textual (H1–cuerpo) y texto alternativo.

Interacción y movimiento (rendimiento primero)
- Animaciones solo de compositor: transform/opacity; sin reflow.
- Brillos y pulsos neón sutiles (reducidos con prefers‑reduced‑motion).
- Elementos sticky:
  - Barra superior fija (logo, anclas, posible selector de idioma futuro).
  - Cinta inferior opcional “Más novedades pronto” en mobile.
- Visual del grafo: parallax/deriva lenta usando translate/opacity únicamente. Sin canvas salvo que sea imprescindible.

Rendimiento / stack técnico
- Next.js 14 (App Router) + TypeScript.
- Tailwind CSS con variables CSS para tema y superficies oscuras.
- Imágenes con next/image; fuentes auto‑alojadas con display=swap.
- Virtualización: react‑virtuoso para listas largas (p. ej., roadmap) para mantener el DOM liviano.
- Build: generación estática (SSG), división automática de chunks y entrega por CDN.
- Sin librerías pesadas de animación; usar CSS nativo + requestAnimationFrame.
- Objetivos Lighthouse: 95+ en PWA/Perf/SEO/A11y. LCP < 1.3s (Fast 3G). JS inicial < 120KB gz.
- Estrategias tipo Railway: animaciones de compositor, sticky layout para minimizar reflow, virtualización DOM y chunking estático con CDN.

Accesibilidad
- WCAG 2.2 AA: contraste, anillos de foco, skip links, landmarks semánticos.
- Reducir movimiento con prefers‑reduced‑motion; sin parpadeos.
- Compatible con teclado y lectores de pantalla.

SEO + Meta
- Título, meta descripción, Open Graph/Twitter.
- URL canónica https://kua.cl
- robots.txt + sitemap.xml; datos estructurados (Organization).

Analítica y privacidad
- Analítica opcional y respetuosa (Umami/Plausible) desactivada por defecto; sin cookies ni rastreadores de terceros.
- Cabeceras de seguridad; CSP.

Entregables
- Proyecto Next.js listo para producción.
- Todo el copy (ES), SVGs/íconos y componentes del grafo/nodos.
- README con configuración, tokens de tema y cómo agregar secciones.
- Despliegue de prueba (Vercel o Railway) y reporte de presupuesto de assets comprimidos.

Extra
- Tipografía pixel de acento en títulos/etiquetas (uso moderado).
- Líneas del grafo que “se dibujan” al entrar en vista usando solo opacity/scale.
- Hover/focus: halo sutil en lima neón/azul real.

CTA principal en todo el sitio: “Más novedades pronto”. Mantener el sitio puramente informativo.