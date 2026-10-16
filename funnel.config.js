/* Config del funnel codigo-divino. Solo valores REALES — el kit oculta cualquier gatillo sin datos. */
window.FUNNEL = {
  cta: {
    checkout: "#CHECKOUT_URL",        /* PLACEHOLDER: URL real del checkout (Hotmart/Kiwify/Stripe/GHL…) con el order bump configurado ahí */
    accept:   "#UPSELL_ACCEPT_URL",   /* PLACEHOLDER: enlace 1-clic del upsell (plataforma de pago) */
    downsellAccept: "#DOWNSELL_ACCEPT_URL", /* PLACEHOLDER: enlace 1-clic del downsell */
    decline:  "downsell-1.html",
    next:     "thank-you.html"
  },
  bar: { text: "📖 Guía visual de estudio bíblico · acceso inmediato" },
  deadline: null,                     /* sin deadline real confirmado → sin countdown */
  proof: { live: [] },                /* sin pedidos reales → sin toast */
  tabAway: { titles: ["📖 ¡Espera! Tu guía sigue aquí", "🙏 Entiende la Biblia paso a paso", "← Vuelve ✨"] },
  antiCopy: false
};
