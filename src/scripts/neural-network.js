const NEURAL_COLORS = {
  lightPrimary: '#1F7A45',
  lightAccent: '#2F9E54',
  darkPrimary: '#3FAE6B',
  darkAccent: '#3FAE6B',
};

class NeuralEffect {
  constructor(card) {
    this.card = card;
    this.canvas = card.querySelector('.effect-canvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.dark = this.canvas.dataset.dark === 'true';
    this.active = false;
    this.animationId = null;
    this.mouse = { x: -9999, y: -9999 };

    this.resize();
    this.initNodes();

    card.addEventListener('mouseenter', () => this.start());
    card.addEventListener('mouseleave', () => this.stop());
    card.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;
    });
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    const rect = this.canvas.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;
    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;
    this.canvas.style.width = rect.width + 'px';
    this.canvas.style.height = rect.height + 'px';
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.scale(dpr, dpr);
    this.w = rect.width;
    this.h = rect.height;
    this.initNodes();
  }

  initNodes() {
    if (!this.w || !this.h) return;
    const count = Math.max(12, Math.floor((this.w * this.h) / 6000));
    this.nodes = [];
    for (let i = 0; i < count; i++) {
      this.nodes.push({
        x: Math.random() * this.w,
        y: Math.random() * this.h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        baseR: 1.2 + Math.random() * 0.8,
      });
    }
  }

  start() {
    if (this.active) return;
    this.active = true;
    this.resize();
    this.tick();
  }

  stop() {
    this.active = false;
    this.mouse.x = -9999;
    this.mouse.y = -9999;
    if (this.animationId) cancelAnimationFrame(this.animationId);
    setTimeout(() => {
      if (!this.active && this.ctx) this.ctx.clearRect(0, 0, this.w, this.h);
    }, 500);
  }

  tick() {
    if (!this.active) return;
    this.draw();
    this.animationId = requestAnimationFrame(() => this.tick());
  }

  draw() {
    if (!this.ctx || !this.nodes) return;
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.w, this.h);
    const baseColor = this.dark ? NEURAL_COLORS.darkPrimary : NEURAL_COLORS.lightPrimary;
    const accentColor = this.dark ? NEURAL_COLORS.darkAccent : NEURAL_COLORS.lightAccent;
    const lineAlpha = this.dark ? 0.35 : 0.22;

    for (const n of this.nodes) {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > this.w) n.vx *= -1;
      if (n.y < 0 || n.y > this.h) n.vy *= -1;
    }

    for (let i = 0; i < this.nodes.length; i++) {
      for (let j = i + 1; j < this.nodes.length; j++) {
        const a = this.nodes[i];
        const b = this.nodes[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 110) {
          const alpha = (1 - d / 110) * lineAlpha;
          ctx.strokeStyle = baseColor;
          ctx.globalAlpha = alpha;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1;

    for (const n of this.nodes) {
      const dx = n.x - this.mouse.x;
      const dy = n.y - this.mouse.y;
      const d = Math.sqrt(dx * dx + dy * dy);
      const proximity = Math.max(0, 1 - d / 140);
      const r = n.baseR + proximity * 3;
      const alpha = this.dark ? 0.55 + proximity * 0.4 : 0.45 + proximity * 0.5;
      ctx.fillStyle = baseColor;
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
      ctx.fill();

      if (proximity > 0.3) {
        ctx.strokeStyle = accentColor;
        ctx.globalAlpha = proximity * 0.4;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(n.x, n.y, r + 6 + proximity * 4, 0, Math.PI * 2);
        ctx.stroke();
      }
    }
    ctx.globalAlpha = 1;
  }
}

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.effect-canvas').forEach((c) => {
    c.style.display = 'none';
  });
} else {
  document.querySelectorAll('.service-card, .ki-cat').forEach((card) => {
    if (card.querySelector('.effect-canvas')) new NeuralEffect(card);
  });
}
