const config = window.SITE_CONFIG;

const FALLBACK_IMAGES = {
  'assets/image1.jpg': 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80',
  'assets/image2.jpg': 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=80',
  'assets/image6.jpg': 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80',
  'assets/image8.jpg': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80',
  'assets/image15.jpg': 'https://images.unsplash.com/photo-1558980664-10e7170b5df9?auto=format&fit=crop&w=900&q=80'
};

const formatPhone = (value) => {
  if (!value) return 'Solicite orçamento';
  return value;
};

const getWhatsAppLink = (value) => {
  if (!value) return '#contato';
  const clean = value.replace(/\D/g, '');
  return `https://wa.me/55${clean}`;
};

const getImage = (path) => FALLBACK_IMAGES[path] || path;

const buildNav = (company) => `
  <header class="site-header">
    <div class="container nav">
      <a href="#inicio" class="brand" aria-label="${company.nome}">
        <span class="brand-mark">4J</span>
        <span>${company.nome}</span>
      </a>
      <nav class="nav-links" aria-label="Menu principal">
        <a href="#inicio">Início</a>
        <a href="#servicos">Serviços</a>
        <a href="#frota">Frota</a>
        <a href="#atuacao">Atuação</a>
        <a href="#contato">Contato</a>
      </nav>
      <a class="btn btn-primary" href="${getWhatsAppLink(company.whatsapp)}" target="_blank" rel="noreferrer">Solicitar orçamento</a>
    </div>
  </header>
`;

const buildHero = (data) => `
  <section id="inicio" class="hero">
    <div class="container hero-grid">
      <div class="hero-copy">
        <span class="kicker">${data.hero.kicker}</span>
        <h1>${data.hero.tituloLinha1}<br><span class="accent">${data.hero.tituloDestaque}</span></h1>
        <p>${data.hero.texto}</p>
        <div class="hero-badge">${data.hero.badge}</div>
        <div class="hero-actions">
          <a class="btn btn-primary" href="${getWhatsAppLink(data.empresa.whatsapp)}" target="_blank" rel="noreferrer">Falar conosco</a>
          <a class="btn btn-secondary" href="#servicos">Conhecer serviços</a>
        </div>
      </div>

      <div class="hero-card">
        <div class="hero-visual">
          <img src="${getImage(data.hero.imagem)}" alt="${data.empresa.nome}" />
        </div>
        <div class="hero-panel">
          <strong>+20 anos</strong>
          <span>Experiência em logística e transporte com foco em confiabilidade e entrega.</span>
        </div>
      </div>
    </div>

    <div class="container cards-grid">
      ${data.frota.map((item) => `
        <article class="info-card">
          <h3>${item.quantidade}</h3>
          <p>${item.nome}</p>
        </article>
      `).join('')}
    </div>
  </section>
`;

const buildServices = (data) => `
  <section id="servicos" class="section">
    <div class="container">
      <div class="section-title">
        <span class="kicker">Serviços</span>
        <h2>${data.textos.servicosTitulo}</h2>
        <p>${data.textos.servicosLead}</p>
      </div>

      <div class="service-grid">
        ${data.servicos.map((item, index) => `
          <article class="service-card">
            <div class="icon">0${index + 1}</div>
            <h3>${item.titulo}</h3>
            <p>${item.texto}</p>
          </article>
        `).join('')}
      </div>
    </div>
  </section>
`;

const buildFleet = (data) => `
  <section id="frota" class="section section-alt">
    <div class="container">
      <div class="section-title">
        <span class="kicker">Frota</span>
        <h2>${data.textos.frotaTitulo}</h2>
        <p>${data.textos.frotaLead}</p>
      </div>

      <div class="fleet-grid">
        ${data.frota.map((item) => `
          <article class="fleet-card">
            <div class="icon">🚛</div>
            <h3>${item.quantidade} ${item.nome}</h3>
            <p>Disponibilidade operacional para atender diferentes demandas de transporte.</p>
          </article>
        `).join('')}
      </div>
    </div>
  </section>
`;

const buildGallery = (data) => `
  <section class="section">
    <div class="container">
      <div class="section-title">
        <span class="kicker">Operação</span>
        <h2>Visibilidade e confiança em cada etapa.</h2>
      </div>

      <div class="gallery-grid">
        ${data.galeria.map((item) => `
          <article class="gallery-item">
            <img src="${getImage(item.imagem)}" alt="${item.titulo}" />
            <div class="gallery-content">
              <h3>${item.titulo}</h3>
              <p>${item.legenda}</p>
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  </section>
`;

const buildSecurity = (data) => `
  <section class="section section-alt">
    <div class="container">
      <div class="section-title">
        <span class="kicker">Segurança</span>
        <h2>${data.textos.segurancaTitulo}</h2>
        <p>${data.textos.segurancaLead}</p>
      </div>

      <div class="security-grid">
        ${data.seguranca.map((item, index) => `
          <article class="security-card">
            <div class="icon">${['✓','📍','🛡️','👷','🧾'][index % 5]}</div>
            <h3>${item.titulo}</h3>
            <p>${item.texto}</p>
          </article>
        `).join('')}
      </div>
    </div>
  </section>
`;

const buildRegions = (data) => `
  <section id="atuacao" class="section">
    <div class="container">
      <div class="section-title">
        <span class="kicker">Atuação</span>
        <h2>${data.textos.atuacaoTitulo}</h2>
        <p>${data.textos.atuacaoLead}</p>
      </div>

      <div class="region-grid">
        ${data.atuacao.map((item) => `
          <article class="region-card">
            <div class="icon">${item.sigla}</div>
            <h3>${item.sigla} • ${item.nome}</h3>
            <p>${item.texto}</p>
          </article>
        `).join('')}
      </div>
    </div>
  </section>
`;

const buildDifferentials = (data) => `
  <section class="section section-alt">
    <div class="container">
      <div class="section-title">
        <span class="kicker">Diferenciais</span>
        <h2>${data.textos.porqueTitulo}</h2>
        <p>${data.textos.porqueLead}</p>
      </div>

      <div class="key-grid">
        ${data.diferenciais.map((item) => `
          <article class="key-card">
            <div class="icon">★</div>
            <h3>${item.titulo}</h3>
            <p>${item.texto}</p>
          </article>
        `).join('')}
      </div>
    </div>
  </section>
`;

const buildContact = (data) => {
  const company = data.empresa;
  return `
    <section id="contato" class="section">
      <div class="container contact-wrap">
        <div class="contact-panel">
          <span class="kicker">Contato</span>
          <h3>${data.textos.cotacaoTitulo}</h3>
          <p>${data.textos.cotacaoTexto}</p>

          <div class="contact-list">
            <div class="contact-list-item"><strong>WhatsApp</strong><span>${formatPhone(company.whatsapp) || 'Solicite orçamento'}</span></div>
            <div class="contact-list-item"><strong>E-mail</strong><span>${company.email || 'comercial@4jtransporte.com.br'}</span></div>
            <div class="contact-list-item"><strong>Telefone</strong><span>${company.telefone || '(91) 00000-0000'}</span></div>
            <div class="contact-list-item"><strong>Local</strong><span>${company.endereco}</span></div>
          </div>
        </div>

        <div class="contact-card">
          <div class="icon">📦</div>
          <h3>${data.textos.ctaTitulo}</h3>
          <p>Seu próximo transporte precisa de logística confiável, agilidade e compromisso com a entrega.</p>
          <div style="margin-top: 20px; display: flex; flex-wrap: wrap; gap: 12px;">
            <a class="btn btn-primary" href="${getWhatsAppLink(company.whatsapp)}" target="_blank" rel="noreferrer">Enviar mensagem</a>
            <a class="btn btn-secondary" href="mailto:${company.email || 'comercial@4jtransporte.com.br'}">Enviar e-mail</a>
          </div>
        </div>
      </div>
    </section>
  `;
};

const buildFooter = (company) => `
  <footer class="site-footer">
    <div class="container footer-row">
      <span>© ${new Date().getFullYear()} ${company.nome}. Todos os direitos reservados.</span>
      <span>${company.base}</span>
    </div>
  </footer>
`;

const renderSite = () => {
  if (!config) {
    return;
  }

  document.title = config.seo.titulo;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute('content', config.seo.descricao);

  const app = document.getElementById('app');

  app.innerHTML = `
    ${buildNav(config.empresa)}
    ${buildHero(config)}
    ${buildServices(config)}
    ${buildFleet(config)}
    ${buildGallery(config)}
    ${buildSecurity(config)}
    ${buildRegions(config)}
    ${buildDifferentials(config)}
    ${buildContact(config)}
    ${buildFooter(config.empresa)}
  `;
};

renderSite();
