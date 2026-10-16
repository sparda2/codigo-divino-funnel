# Funnel "[NOMBRE DEL PRODUCTO]" (estudio bíblico visual), modelado de "Código Divino"
Constructor de Funnels Ganadores · 2026-10-16 · español · PUBLISH_TARGET = solo-archivos (+ Drive)

## Mapa + cableado de CTA
```
Anuncio Meta (ángulo: "lleva tu estudio bíblico a otro nivel" + "entiende la Biblia de forma visual")
  └─ index.html  (ventas, 5 CTA → cta.checkout)
       └─ #CHECKOUT_URL  (TU checkout real; configura ahí el order bump "Plan de lectura 90 días + glosario" US$5)
            └─ upsell-1.html  Estudio guiado capítulo por capítulo US$17
                 ├─ Sí → cta.accept (#UPSELL_ACCEPT_URL, 1 clic de tu plataforma) → thank-you
                 └─ No → downsell-1.html  Plan de lectura corto US$7
                          ├─ Sí → cta.downsellAccept (#DOWNSELL_ACCEPT_URL) → thank-you
                          └─ No → thank-you.html
```
Todos los destinos están en `funnel.config.js`. El kit (`assets/kit/funnel.js`) arrastra UTM/fbclid de paso en paso.
En Hotmart/Kiwify: pon `upsell-1.html` como "página de obrigado/upsell" del producto principal, para que el comprador llegue ahí tras pagar.

## Antes de meter tráfico: PLACEHOLDERS por rellenar
1. `funnel.config.js`: `checkout`, `accept`, `downsellAccept` (URLs reales de la plataforma de pago).
2. Nombre del producto, del upsell y del downsell, y la marca (footer `[MARCA]`); los precios (7,90 / 5 / 17 / 7) son PROPUESTOS.
3. Cantidades reales (`[Nº REAL]` páginas, devocionales, duración del plan) y los 3 bonos.
4. Garantía real (hero, oferta, sección de garantía, FAQ, upsell), la misma que tu plataforma.
5. Testimonios/rating/fotos REALES, o borrar los bloques EJEMPLO (§8).
6. Imágenes: los bloques "PLACEHOLDER DE IMAGEN" IMG-01…IMG-19 (no había motor de imágenes).
7. thank-you: enlace de acceso, email/WhatsApp de soporte.
8. FAQ: versión bíblica citada, denominación, permiso de impresión para grupos.
9. Enlaces de Privacidad/Términos/Reembolsos.
10. Urgencia: la línea de §11 solo si es verdad; countdown solo con fecha real → `deadline`.

## Publicar (solo-archivos)
Sube `` + `assets/` respetando la estructura (en este repo las páginas están en la raíz y cargan `assets/kit/funnel.js`). Para GHL: pega cada HTML en un paso de funnel (bloque de código personalizado) e incluye el kit inline.
