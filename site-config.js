/*
  =============================================
  4J TRANSPORTE — CONFIGURAÇÃO DO SITE
  =============================================
  EDITE PRINCIPALMENTE ESTE ARQUIVO.
  Não precisa mexer no index.html para alterar
  contatos, textos, frota, serviços e regiões.
*/
const SITE_CONFIG = {
  empresa: {
    nome: '4J Transporte',
    slogan: 'Pontualidade e confiança guiando cada entrega.',
    base: 'Região Metropolitana de Belém – PA',
    whatsapp: '', // Ex.: 5591999999999
    email: '', // Ex.: comercial@4jtransporte.com.br
    telefone: '', // Ex.: (91) 99999-9999
    instagram: '', // Ex.: https://instagram.com/4jtransporte
    endereco: 'Região Metropolitana de Belém – PA'
  },

  seo: {
    titulo: '4J Transporte | Pontualidade e confiança guiando cada entrega',
    descricao: '4J Transporte: cargas dedicadas, transporte de alimentos, distribuição e transporte interestadual. Frota própria, rastreamento e segurança.'
  },

  hero: {
    kicker: 'Transporte • Distribuição • Logística',
    tituloLinha1: 'Movemos cargas.',
    tituloDestaque: 'Conectamos negócios.',
    texto: 'A 4J Transporte combina frota própria, pessoas, tecnologia e processos para entregar segurança, agilidade e confiança em cada operação.',
    badge: 'Base na Região Metropolitana de Belém • Atuação PA e MA • Expansão PI',
    imagem: 'assets/image6.jpg'
  },

  frota: [
    { quantidade: 5, nome: 'Caminhões', imagem: 'assets/image6.jpg' },
    { quantidade: 6, nome: 'Bitrens graneleiros', imagem: 'assets/image1.jpg' },
    { quantidade: 1, nome: 'Carreta baú', imagem: 'assets/image15.jpg' },
    { quantidade: 2, nome: 'Bitrucks', imagem: 'assets/image2.jpg' }
  ],

  servicos: [
    { titulo: 'Cargas dedicadas', texto: 'Exclusividade e agilidade para operações que exigem maior controle.' },
    { titulo: 'Transporte de alimentos', texto: 'Movimentação com atenção à segurança, qualidade e integridade da carga.' },
    { titulo: 'Distribuição', texto: 'Entregas planejadas para apoiar a operação e o atendimento ao cliente.' },
    { titulo: 'Transporte interestadual', texto: 'Conexão entre regiões com confiabilidade e controle.' }
  ],

  galeria: [
    { imagem: 'assets/image6.jpg', titulo: 'Frota própria', legenda: 'Disponibilidade e controle operacional' },
    { imagem: 'assets/image8.jpg', titulo: 'Scania', legenda: 'Operação de transporte' },
    { imagem: 'assets/image15.jpg', titulo: 'Iveco', legenda: 'Frota própria' },
    { imagem: 'assets/image2.jpg', titulo: 'Mercedes-Benz', legenda: 'Frota própria' },
    { imagem: 'assets/image1.jpg', titulo: 'Bitrem', legenda: 'Capacidade e eficiência' }
  ],

  seguranca: [
    { titulo: 'Frota própria', texto: 'Maior controle sobre disponibilidade e execução das operações.' },
    { titulo: 'Rastreamento e monitoramento', texto: 'Acompanhamento da operação e da localização dos veículos.' },
    { titulo: 'Seguro de carga', texto: 'Proteção da carga durante o transporte.' },
    { titulo: 'Equipe própria', texto: 'Motoristas e ajudantes CLT comprometidos com a operação.' },
    { titulo: 'Vistoria prévia', texto: 'Conferência das condições do veículo antes do embarque.' }
  ],

  atuacao: [
    { sigla: 'PA', nome: 'Pará', texto: 'Base operacional e atendimento a diferentes regiões.' },
    { sigla: 'MA', nome: 'Maranhão', texto: 'Expansão da atuação e novas conexões logísticas.' },
    { sigla: 'PI', nome: 'Piauí', texto: 'Expansão de mercado em desenvolvimento.' }
  ],

  diferenciais: [
    { titulo: 'Pontualidade', texto: 'Planejamento para cumprir prazos e apoiar o fluxo do cliente.' },
    { titulo: 'Confiança', texto: 'Transparência e responsabilidade em cada etapa da operação.' },
    { titulo: 'Agilidade', texto: 'Resposta rápida às necessidades de transporte.' },
    { titulo: 'Segurança', texto: 'Controle e acompanhamento para preservar pessoas, veículos e cargas.' }
  ],

  textos: {
    servicosTitulo: 'Soluções para diferentes operações.',
    servicosLead: 'Estrutura preparada para operações que exigem controle, disponibilidade e compromisso com a entrega.',
    frotaTitulo: 'Estrutura preparada para grandes desafios.',
    frotaLead: 'Frota própria, monitorada e preparada para diferentes perfis de operação.',
    segurancaTitulo: 'Diferenciais que protegem a operação.',
    segurancaLead: 'Visibilidade, segurança e qualidade para preservar pessoas, veículos e cargas.',
    atuacaoTitulo: 'Conectando operações e destinos.',
    atuacaoLead: 'Base na Região Metropolitana de Belém, com atuação no Pará e Maranhão e expansão planejada para o Piauí.',
    porqueTitulo: 'Uma operação construída para gerar confiança.',
    porqueLead: 'Pessoas + frota + processos trabalhando juntos para entregar resultado.',
    cotacaoTitulo: 'Vamos transportar o seu próximo destino?',
    cotacaoTexto: 'Envie os dados da sua operação. A equipe comercial poderá avaliar a demanda e retornar com uma proposta.',
    ctaTitulo: 'Prontos para a próxima operação.'
  }
};
