export interface ProgrammaticPageData {
  slug: string;
  type: 'service-city' | 'niche' | 'niche-city';
  title: string;
  metaTitle: string;
  metaDescription: string;
  badge: string;
  heroTitle: string;
  heroHighlight: string;
  heroSubtitle: string;
  contextHeading: string;
  contextParagraphs: string[];
  painPointsTitle: string;
  painPoints: Array<{
    title: string;
    desc: string;
  }>;
  deliverablesTitle: string;
  deliverables: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  relatedSlugs: string[];
  cityName?: string;
  stateCode?: string;
  serviceName?: string;
  nicheName?: string;
}

interface CityInfo {
  slug: string;
  name: string;
  state: string;
  region: string;
  economicProfile: string;
  localInsight: string;
  keySectors: string;
}

interface ServiceType {
  slugPrefix: string;
  name: string;
  shortName: string;
  focusBenefit: string;
  deliveryTime: string;
  idealFor: string;
  coreFeatures: string[];
}

interface NicheInfo {
  slug: string;
  name: string;
  singular: string;
  targetAudience: string;
  mainPain: string;
  conversionGoal: string;
  specificFeatures: string[];
  complianceOrDetail: string;
}

export const CITIES_DATA: CityInfo[] = [
  {
    slug: 'sao-paulo',
    name: 'São Paulo',
    state: 'SP',
    region: 'Sudeste',
    economicProfile: 'maior centro financeiro, corporativo e tecnológico da América Latina',
    localInsight: 'Em um mercado hipercompetitivo como a capital paulista, onde o custo por clique no Google Ads é um dos mais altos do país, ter uma página lenta significa perder orçamento publicitário para concorrentes da Faria Lima, Paulista, Berrini e grandes polos comerciais.',
    keySectors: 'consultorias B2B, clínicas de alto padrão, escritórios jurídicos, startups SaaS e comércio especializado',
  },
  {
    slug: 'brasilia',
    name: 'Brasília',
    state: 'DF',
    region: 'Centro-Oeste',
    economicProfile: 'capital federal e polo de serviços de alto poder aquisitivo, saúde privada e consultorias institucionais',
    localInsight: 'O público de Brasília, do Plano Piloto (Asa Sul, Asa Norte, Sudoeste, Noroeste) a Águas Claras e Lago Sul, pesquisa intensamente no Google antes de agendar consultas ou contratar serviços especializados, exigindo extrema credibilidade visual.',
    keySectors: 'clínicas odontológicas e médicas, escritórios de advocacia, construtoras, educação e serviços premium',
  },
  {
    slug: 'rio-de-janeiro',
    name: 'Rio de Janeiro',
    state: 'RJ',
    region: 'Sudeste',
    economicProfile: 'segunda maior metrópole do Brasil, com forte economia em serviços, turismo, saúde, estética e energia',
    localInsight: 'Da Zona Sul e Barra da Tijuca ao Centro corporativo, empresas cariocas que combinam presença no Google com atendimento imediato pelo WhatsApp dominam a captação de clientes locais e turistas.',
    keySectors: 'clínicas de estética, medicina, hotelaria, gastronomia, engenharia e escritórios corporativos',
  },
  {
    slug: 'belo-horizonte',
    name: 'Belo Horizonte',
    state: 'MG',
    region: 'Sudeste',
    economicProfile: 'polo nacional de tecnologia (San Pedro Valley), mineração, engenharia e serviços médicos de referência',
    localInsight: 'O mercado mineiro valoriza confiança e relacionamento. Um site profissional que apresenta casos reais, equipe e contato transparente na Savassi, Lourdes ou Raja Gabaglia acelera o fechamento de contratos.',
    keySectors: 'empresas de engenharia, clínicas especializadas, startups de tecnologia, contabilidade e atacado',
  },
  {
    slug: 'curitiba',
    name: 'Curitiba',
    state: 'PR',
    region: 'Sul',
    economicProfile: 'referência em inovação urbana, indústria, arquitetura e serviços corporativos exigentes',
    localInsight: 'O consumidor curitibano é analítico e atento aos detalhes técnicos. Sites mal estruturados ou com aparência amadora têm alta taxa de rejeição no mercado paranaense.',
    keySectors: 'escritórios de arquitetura, clínicas de saúde, indústrias B2B, imobiliárias de alto padrão e tecnologia',
  },
  {
    slug: 'porto-alegre',
    name: 'Porto Alegre',
    state: 'RS',
    region: 'Sul',
    economicProfile: 'centro de negócios do Rio Grande do Sul, com forte tradição em serviços financeiros, saúde e comércio',
    localInsight: 'Empresas gaúchas que investem em posicionamento orgânico no Google conquistam demanda recorrente em toda a Região Metropolitana sem depender apenas de indicações presenciais.',
    keySectors: 'assessorias financeiras, escritórios jurídicos, clínicas médicas, indústria e comércio regional',
  },
  {
    slug: 'goiania',
    name: 'Goiânia',
    state: 'GO',
    region: 'Centro-Oeste',
    economicProfile: 'capital do agronegócio, polo nacional de estética, medicina, moda e mercado imobiliário em forte expansão',
    localInsight: 'Com o crescimento acelerado dos setores Marista, Bueno e Jardim Goiás, clínicas e empresas de Goiânia disputam a atenção de clientes de alto ticket que buscam atendimento rápido pelo celular.',
    keySectors: 'clínicas médicas e odontológicas, construtoras, empresas do agronegócio, estética e moda',
  },
  {
    slug: 'campinas',
    name: 'Campinas',
    state: 'SP',
    region: 'Sudeste',
    economicProfile: 'capital do Vale do Silício brasileiro, polo logístico, industrial, universitário e de pesquisa',
    localInsight: 'Sede de multinacionais e centros de tecnologia, Campinas exige presença digital moderna para empresas que atendem tanto o público B2B da região quanto moradores do Cambuí e Alphaville.',
    keySectors: 'indústrias, logística, tecnologia, clínicas de especialidades e consultorias empresariais',
  },
  {
    slug: 'florianopolis',
    name: 'Florianópolis',
    state: 'SC',
    region: 'Sul',
    economicProfile: 'Ilha do Silício, capital nacional com maior densidade de startups, turismo premium e mercado imobiliário valorizado',
    localInsight: 'Em uma cidade movida pela tecnologia e pelo alto padrão imobiliário, sua empresa precisa de uma página com design impecável e carregamento instantâneo no 5G.',
    keySectors: 'imobiliárias de luxo, empresas SaaS, clínicas de estética, turismo e gastronomia',
  },
  {
    slug: 'salvador',
    name: 'Salvador',
    state: 'BA',
    region: 'Nordeste',
    economicProfile: 'grande centro econômico do Nordeste, impulsionado por serviços, saúde, turismo, construção civil e comércio',
    localInsight: 'Posicionar sua empresa na primeira página do Google em Salvador permite captar clientes do Caminho das Árvores, Alphaville e Horto Florestal todos os dias.',
    keySectors: 'clínicas médicas, turismo e receptivo, educação, engenharia civil e comércio varejista',
  },
  {
    slug: 'recife',
    name: 'Recife',
    state: 'PE',
    region: 'Nordeste',
    economicProfile: 'sede do Porto Digital e maior polo médico e tecnológico do Norte-Nordeste',
    localInsight: 'Com um polo médico que atrai pacientes de vários estados e um ecossistema de TI vibrante, ter um site otimizado em Recife coloca seu negócio à frente na busca orgânica.',
    keySectors: 'clínicas médicas e diagnósticos, tecnologia, advocacia, logística e educação',
  },
  {
    slug: 'fortaleza',
    name: 'Fortaleza',
    state: 'CE',
    region: 'Nordeste',
    economicProfile: 'hub internacional de cabos submarinos de fibra óptica, turismo, indústria e comércio atacadista',
    localInsight: 'Empresas de Fortaleza que estruturam landing pages rápidas convertem muito mais leads vindos do tráfego pago no Instagram e Google Ads na região da Aldeota e Meireles.',
    keySectors: 'energia solar, turismo, clínicas de saúde, atacado de moda e serviços empresariais',
  },
  {
    slug: 'vitoria',
    name: 'Vitória',
    state: 'ES',
    region: 'Sudeste',
    economicProfile: 'capital com altíssimo PIB per capita, comércio exterior, logística portuária e setor de saúde qualificado',
    localInsight: 'Atendendo Vitória, Vila Velha e Serra, um site bem posicionado conecta sua marca a empresas exportadoras e consumidores de alto poder aquisitivo na Enseada do Suá e Praia do Canto.',
    keySectors: 'comércio exterior, logística, clínicas odontológicas e médicas, imobiliárias e consultorias',
  },
  {
    slug: 'ribeirao-preto',
    name: 'Ribeirão Preto',
    state: 'SP',
    region: 'Sudeste',
    economicProfile: 'capital brasileira do agronegócio, polo cervejeiro, médico e de serviços financeiros no interior paulista',
    localInsight: 'O público da Zona Sul de Ribeirão Preto busca serviços premium no Google. Uma página focada em conversão transforma essa demanda em agendamentos diários.',
    keySectors: 'agronegócio, medicina avançada, odontologia, investimentos e loteamentos fechados',
  },
  {
    slug: 'uberlandia',
    name: 'Uberlândia',
    state: 'MG',
    region: 'Sudeste',
    economicProfile: 'maior centro logístico e atacadista do Brasil Central, com forte setor de tecnologia e agronegócio',
    localInsight: 'Para empresas do Triângulo Mineiro, um site preparado para SEO local e regional garante presença constante para compradores B2B e clientes finais.',
    keySectors: 'logística, distribuidoras, agronegócio, clínicas e engenharia solar',
  },
  {
    slug: 'joinville',
    name: 'Joinville',
    state: 'SC',
    region: 'Sul',
    economicProfile: 'maior cidade de Santa Catarina e um dos principais polos industriais metalmecânicos, químicos e plásticos do país',
    localInsight: 'Indústrias e prestadores de serviços de Joinville precisam de sites institucionais sólidos que transmitam capacidade técnica para compradores de todo o Brasil.',
    keySectors: 'indústria B2B, automação, engenharia, clínicas e contabilidade corporativa',
  },
  {
    slug: 'londrina',
    name: 'Londrina',
    state: 'PR',
    region: 'Sul',
    economicProfile: 'polo universitário, médico, tecnológico e agroindustrial do norte paranaense',
    localInsight: 'Com forte concentração de médicos, dentistas e construtoras na Gleba Palhano, destacar-se no Google em Londrina exige velocidade de carregamento e copywriting persuasivo.',
    keySectors: 'saúde, construção civil, agronegócio, educação e serviços jurídicos',
  },
  {
    slug: 'sorocaba',
    name: 'Sorocaba',
    state: 'SP',
    region: 'Sudeste',
    economicProfile: 'parque industrial moderno e um dos mercados que mais crescem no interior de São Paulo',
    localInsight: 'Empresas do Campolim e do polo industrial de Sorocaba multiplicam pedidos de orçamento quando substituem sites antigos por páginas otimizadas para celular.',
    keySectors: 'indústria, condomínios residenciais, clínicas médicas, escolas e serviços B2B',
  },
  {
    slug: 'sao-jose-dos-campos',
    name: 'São José dos Campos',
    state: 'SP',
    region: 'Sudeste',
    economicProfile: 'capital da indústria aeroespacial, defesa e alta tecnologia no Vale do Paraíba',
    localInsight: 'Com um público de engenheiros, executivos e famílias de alta renda no Urbanova e Jardim Aquarius, sua empresa precisa de presença digital à altura do padrão tecnológico da cidade.',
    keySectors: 'engenharia, tecnologia, clínicas de alto padrão, educação bilíngue e imobiliárias',
  },
  {
    slug: 'niteroi',
    name: 'Niterói',
    state: 'RJ',
    region: 'Sudeste',
    economicProfile: 'cidade com um dos maiores índices de qualidade de vida e renda do estado do Rio de Janeiro',
    localInsight: 'Em Icaraí, Santa Rosa e Região Oceânica, profissionais liberais e clínicas que aparecem no topo do Google captam clientes qualificados sem depender só do Instagram.',
    keySectors: 'medicina, odontologia, advocacia, gastronomia e arquitetura',
  },
  {
    slug: 'santos',
    name: 'Santos',
    state: 'SP',
    region: 'Sudeste',
    economicProfile: 'sede do maior porto da América Latina, comércio marítimo, serviços e mercado imobiliário verticalizado',
    localInsight: 'Na Baixada Santista, desde empresas de logística portuária até clínicas no Gonzaga e Ponta da Praia, ter um site rápido é decisivo para fechar novos negócios.',
    keySectors: 'logística portuária, despachantes, clínicas de saúde, imobiliárias e comércio',
  },
  {
    slug: 'balneario-camboriu',
    name: 'Balneário Camboriú',
    state: 'SC',
    region: 'Sul',
    economicProfile: 'metro quadrado mais valorizado do Brasil, capital de imóveis de luxo, turismo internacional e estética avançada',
    localInsight: 'Para vender imóveis de alto padrão, procedimentos estéticos ou serviços premium em Balneário Camboriú e Praia Brava, seu site precisa transmitir sofisticação imediata.',
    keySectors: 'construtoras, imobiliárias de luxo, harmonização e odontologia estética, náutica e gastronomia',
  },
  {
    slug: 'cuiaba',
    name: 'Cuiabá',
    state: 'MT',
    region: 'Centro-Oeste',
    economicProfile: 'coração do agronegócio mato-grossense, com forte expansão em energia solar, saúde privada e construção',
    localInsight: 'Em um estado movido por grandes negócios, empresas de Cuiabá que possuem páginas claras e botão de WhatsApp imediato fecham contratos de alto valor com rapidez.',
    keySectors: 'agronegócio, energia solar, clínicas médicas, concessionárias e advocacia agrária',
  },
  {
    slug: 'campo-grande',
    name: 'Campo Grande',
    state: 'MS',
    region: 'Centro-Oeste',
    economicProfile: 'polo da Rota Bioceânica, pecuária moderna, celulose e setor de serviços em pleno crescimento',
    localInsight: 'Dominar as pesquisas locais no Google em Campo Grande garante vantagem competitiva enorme, já que muitos concorrentes ainda utilizam sites lentos e desatualizados.',
    keySectors: 'agronegócio, clínicas odontológicas, engenharia, contabilidade e comércio',
  },
  {
    slug: 'manaus',
    name: 'Manaus',
    state: 'AM',
    region: 'Norte',
    economicProfile: 'Polo Industrial de Manaus (Zona Franca), logística amazônica, comércio e serviços de saúde',
    localInsight: 'Atender a demanda de indústrias do Distrito Industrial e consumidores em Adrianópolis e Ponta Negra exige um site leve que carregue rápido em qualquer conexão móvel.',
    keySectors: 'indústria eletroeletrônica, logística, clínicas médicas, educação e varejo',
  },
  {
    slug: 'belem',
    name: 'Belém',
    state: 'PA',
    region: 'Norte',
    economicProfile: 'metrópole da Amazônia, centro de mineração, gastronomia internacional, comércio e serviços no Pará',
    localInsight: 'Com a crescente visibilidade internacional e expansão empresarial de Belém, posicionar sua marca no Google atrai novos clientes e parceiros corporativos.',
    keySectors: 'engenharia e mineração, clínicas particulares, turismo, gastronomia e advocacia',
  },
  {
    slug: 'joao-pessoa',
    name: 'João Pessoa',
    state: 'PB',
    region: 'Nordeste',
    economicProfile: 'um dos mercados imobiliários e turísticos que mais crescem no Brasil, atraindo investidores de todo o país',
    localInsight: 'Milhares de pessoas pesquisam diariamente sobre imóveis, serviços e clínicas em Cabo Branco, Manaíra e Altiplano. Estar na primeira página do Google captura essa demanda em tempo real.',
    keySectors: 'imobiliárias, construtoras, clínicas médicas, turismo e serviços digitais',
  },
  {
    slug: 'natal',
    name: 'Natal',
    state: 'RN',
    region: 'Nordeste',
    economicProfile: 'polo de energias renováveis, turismo de sol e mar e setor de serviços consolidado no Nordeste',
    localInsight: 'Empresas de Natal que combinam SEO local com landing pages focadas em conversão transformam pesquisas no Google em mensagens qualificadas no WhatsApp.',
    keySectors: 'hotelaria e turismo, energia solar e eólica, clínicas e comércio local',
  },
  {
    slug: 'maceio',
    name: 'Maceió',
    state: 'AL',
    region: 'Nordeste',
    economicProfile: 'destino turístico de destaque nacional com forte expansão imobiliária e de serviços na Pajuçara e Ponta Verde',
    localInsight: 'Seja para atender turistas de alto padrão ou moradores locais em Maceió, uma página rápida no celular é o seu melhor canal de vendas 24 horas.',
    keySectors: 'turismo, mercado imobiliário, clínicas odontológicas, estética e restaurantes',
  },
  {
    slug: 'aracaju',
    name: 'Aracaju',
    state: 'SE',
    region: 'Nordeste',
    economicProfile: 'capital planejada com excelente qualidade de vida, setor de energia, saúde e serviços em crescimento',
    localInsight: 'Em Aracaju, a concorrência digital ainda permite que empresas com SEO técnico bem feito conquistem o topo do Google em poucas semanas.',
    keySectors: 'clínicas médicas, educação, engenharia, imobiliárias e advocacia',
  },
  {
    slug: 'maringa',
    name: 'Maringá',
    state: 'PR',
    region: 'Sul',
    economicProfile: 'referência nacional em cooperativismo agroindustrial, desenvolvimento de software e qualidade de vida',
    localInsight: 'O empresariado de Maringá valoriza eficiência e retorno sobre o investimento. Nossos sites são projetados para gerar leads qualificados desde a primeira semana.',
    keySectors: 'agronegócio, cooperativas, software, clínicas médicas e loteadoras',
  },
  {
    slug: 'blumenau',
    name: 'Blumenau',
    state: 'SC',
    region: 'Sul',
    economicProfile: 'polo nacional de tecnologia (Vale Europeu), indústria têxtil e eventos no estado de Santa Catarina',
    localInsight: 'Em uma cidade com forte cultura de tecnologia e indústria têxtil, ter uma loja virtual ou site corporativo veloz destaca sua marca nacionalmente.',
    keySectors: 'indústria têxtil e moda, empresas de software, contabilidade e saúde',
  },
  {
    slug: 'caxias-do-sul',
    name: 'Caxias do Sul',
    state: 'RS',
    region: 'Sul',
    economicProfile: 'segundo maior polo metalmecânico do Brasil e coração industrial da Serra Gaúcha',
    localInsight: 'Para indústrias e prestadores de serviços da Serra Gaúcha, um catálogo digital e site institucional moderno abre portas para compradores do Brasil e do exterior.',
    keySectors: 'indústria metalmecânica, transporte, enoturismo, engenharia e clínicas',
  },
  {
    slug: 'sao-bernardo-do-campo',
    name: 'São Bernardo do Campo',
    state: 'SP',
    region: 'Sudeste',
    economicProfile: 'coração industrial do ABC Paulista, polo automotivo, moveleiro, logístico e de serviços',
    localInsight: 'Empresas do Grande ABC precisam se destacar tanto nas buscas locais quanto na Grande São Paulo. Otimizamos sua página para captar orçamentos em toda a região.',
    keySectors: 'indústria e autopeças, logística, clínicas médicas, marcenaria e advocacia trabalhista/empresarial',
  },
  {
    slug: 'santo-andre',
    name: 'Santo André',
    state: 'SP',
    region: 'Sudeste',
    economicProfile: 'forte centro comercial, médico e de serviços de alto padrão no ABC Paulista (Bairro Jardim e Campestre)',
    localInsight: 'Clínicas, escritórios e comércios de Santo André que investem em landing pages profissionais reduzem o custo por lead e aumentam o fechamento no WhatsApp.',
    keySectors: 'saúde e estética, gastronomia, escritórios jurídicos, imobiliárias e educação',
  },
  {
    slug: 'osasco',
    name: 'Osasco',
    state: 'SP',
    region: 'Sudeste',
    economicProfile: 'um dos maiores PIBs do Brasil, sede de gigantes de tecnologia, fintechs e e-commerce',
    localInsight: 'Ao lado da capital paulista, Osasco concentra um volume imenso de buscas diárias por serviços empresariais e locais que exigem resposta rápida.',
    keySectors: 'serviços financeiros, logística, clínicas populares e especializadas, comércio e TI',
  },
  {
    slug: 'sao-jose-do-rio-preto',
    name: 'São José do Rio Preto',
    state: 'SP',
    region: 'Sudeste',
    economicProfile: 'capital do noroeste paulista, referência em medicina de alta complexidade, comércio de joias e agronegócio',
    localInsight: 'Rio Preto atrai consumidores de dezenas de cidades vizinhas. Quando seu site aparece no topo do Google, você conquista clientes de toda a macrorregião.',
    keySectors: 'clínicas médicas e cirúrgicas, odontologia, agronegócio, condomínios e comércio',
  },
  {
    slug: 'piracicaba',
    name: 'Piracicaba',
    state: 'SP',
    region: 'Sudeste',
    economicProfile: 'polo mundial de agtechs (AgTech Valley), setor sucroenergético, indústria pesada e universidades',
    localInsight: 'Para empresas de engenharia, agtechs e clínicas de Piracicaba, uma presença digital moderna transmite inovação e facilita o contato comercial.',
    keySectors: 'agtechs, indústria metalúrgica, engenharia ambiental, clínicas e consultorias',
  },
  {
    slug: 'jundiai',
    name: 'Jundiaí',
    state: 'SP',
    region: 'Sudeste',
    economicProfile: 'centro logístico estratégico entre São Paulo e Campinas, com parques industriais e altíssima renda familiar',
    localInsight: 'Com condomínios de alto padrão e multinacionais instaladas, Jundiaí oferece excelente retorno para empresas que se posicionam de forma profissional no Google.',
    keySectors: 'logística, indústria, clínicas médicas e odontológicas, arquitetura e escolas',
  },
  {
    slug: 'bauru',
    name: 'Bauru',
    state: 'SP',
    region: 'Sudeste',
    economicProfile: 'centro universitário, hospitalar e de serviços no centro-oeste paulista, referência mundial em odontologia',
    localInsight: 'Em um polo reconhecido pela excelência em saúde e educação, ter um site rápido e focado na experiência do paciente diferencia sua clínica imediatamente.',
    keySectors: 'odontologia, medicina, educação superior, comércio e serviços técnicos',
  },
  {
    slug: 'juiz-de-fora',
    name: 'Juiz de Fora',
    state: 'MG',
    region: 'Sudeste',
    economicProfile: 'principal centro médico, universitário e industrial da Zona da Mata Mineira',
    localInsight: 'Estrategicamente localizada entre BH e o Rio de Janeiro, Juiz de Fora possui forte demanda por serviços médicos, odontológicos e empresariais que começam na pesquisa do Google.',
    keySectors: 'clínicas médicas, educação, indústria têxtil e metalúrgica, engenharia e advocacia',
  },
  {
    slug: 'sao-luis',
    name: 'São Luís',
    state: 'MA',
    region: 'Nordeste',
    economicProfile: 'grande complexo portuário (Itaqui), polo siderúrgico, logístico e centro de serviços do Maranhão',
    localInsight: 'Empresas de São Luís instaladas no Renascença, Calhau e Península da Ponta d’Areia conquistam clientes de alto ticket quando contam com páginas rápidas e profissionais.',
    keySectors: 'logística portuária, engenharia, clínicas médicas, turismo nos Lençóis e mercado imobiliário',
  },
  {
    slug: 'teresina',
    name: 'Teresina',
    state: 'PI',
    region: 'Nordeste',
    economicProfile: 'maior polo de saúde privada do Meio-Norte brasileiro, atraindo pacientes de múltiplos estados',
    localInsight: 'Como Teresina é referência regional em medicina e odontologia, clínicas que aparecem no topo do Google captam pacientes particulares de todo o Piauí e Maranhão.',
    keySectors: 'hospitais, clínicas médicas e odontológicas, educação privada, comércio e energia solar',
  },
  {
    slug: 'campina-grande',
    name: 'Campina Grande',
    state: 'PB',
    region: 'Nordeste',
    economicProfile: 'reconhecido polo tecnológico e universitário mundial, com forte indústria de software, calçados e saúde',
    localInsight: 'Em uma cidade com vocação tecnológica, empresas que investem em sites velozes e modernos ganham destaque imediato no mercado local e nacional.',
    keySectors: 'tecnologia e software, clínicas especializadas, indústria, educação e eventos',
  },
  {
    slug: 'lajeado',
    name: 'Chapecó',
    state: 'SC',
    region: 'Sul',
    economicProfile: 'capital brasileira da agroindústria, polo metalmecânico, cooperativista e logístico do oeste catarinense',
    localInsight: 'O empresariado do oeste de Santa Catarina é focado em produtividade e negócios B2B. Um site institucional sólido abre portas para contratos em toda a região Sul.',
    keySectors: 'agroindústria, máquinas e equipamentos, logística, clínicas e contabilidade',
  },
  {
    slug: 'cascavel',
    name: 'Cascavel',
    state: 'PR',
    region: 'Sul',
    economicProfile: 'capital do oeste paranaense, referência no agronegócio de alta tecnologia, medicina e ensino universitário',
    localInsight: 'Em Cascavel, empresas do agronegócio, engenharia e clínicas médicas que dominam o Google recebem pedidos diários de clientes de dezenas de municípios vizinhos.',
    keySectors: 'agronegócio, medicina, odontologia, concessionárias e construção civil',
  },
  {
    slug: 'foz-do-iguacu',
    name: 'Foz do Iguaçu',
    state: 'PR',
    region: 'Sul',
    economicProfile: 'segundo maior destino de turistas estrangeiros do país, comércio na tríplice fronteira, hotelaria e logística internacional',
    localInsight: 'Por atuar em uma região trinacional (Brasil, Paraguai e Argentina), negócios de Foz do Iguaçu se beneficiam imensamente de sites rápidos e preparados para múltiplos idiomas.',
    keySectors: 'turismo e receptivo, hotelaria, clínicas de odontologia e estética, comércio exterior e eventos',
  },
  {
    slug: 'anapolis',
    name: 'Anápolis',
    state: 'GO',
    region: 'Centro-Oeste',
    economicProfile: 'sede do DAIA (maior polo farmacêutico e logístico do Centro-Oeste), entre Goiânia e Brasília',
    localInsight: 'Com indústrias farmacêuticas, porto seco e comércio pujante no bairro Jundiaí, Anápolis oferece excelente retorno para empresas B2B e clínicas bem posicionadas no Google.',
    keySectors: 'indústria farmacêutica, logística, engenharia, clínicas médicas e contabilidade',
  },
  {
    slug: 'palmas',
    name: 'Palmas',
    state: 'TO',
    region: 'Norte',
    economicProfile: 'capital planejada em plena expansão imobiliária, centro do agronegócio do Matopiba e energia solar',
    localInsight: 'O mercado de Palmas cresce em ritmo acelerado. Posicionar sua empresa agora na primeira página do Google garante liderança orgânica com baixa concorrência.',
    keySectors: 'agronegócio, energia solar, construção civil, clínicas particulares e serviços públicos/privados',
  },
  {
    slug: 'porto-velho',
    name: 'Porto Velho',
    state: 'RO',
    region: 'Norte',
    economicProfile: 'polo logístico hidroviário do agronegócio, energia hidrelétrica, comércio e serviços na Amazônia Ocidental',
    localInsight: 'Empresas e clínicas de Porto Velho que contam com páginas rápidas para celular transformam pesquisas no Google em clientes todos os dias.',
    keySectors: 'logística, agronegócio, clínicas médicas e odontológicas, advocacia e comércio',
  },
];

export const SERVICE_TYPES: ServiceType[] = [
  {
    slugPrefix: 'criacao-de-sites-em',
    name: 'Criação de Sites Profissionais',
    shortName: 'Site Institucional',
    focusBenefit: 'autoridade de marca, posicionamento na primeira página do Google e captação contínua de orçamentos',
    deliveryTime: '10 a 20 dias úteis',
    idealFor: 'empresas estabelecidas, clínicas, escritórios e indústrias que precisam apresentar múltiplos serviços com máxima credibilidade',
    coreFeatures: [
      'Arquitetura pensada para ranquear no Google (SEO Técnico nativo)',
      'Carregamento em menos de 1 segundo no celular (nota 90+ no Google PageSpeed)',
      'Páginas exclusivas para cada serviço da sua empresa, ampliando seu alcance orgânico',
      'Botão de WhatsApp inteligente e formulário qualificador anti-curiosos',
      'Design autoral sob medida, sem cara de template genérico',
    ],
  },
  {
    slugPrefix: 'criacao-de-landing-page-em',
    name: 'Criação de Landing Page de Alta Conversão',
    shortName: 'Landing Page',
    focusBenefit: 'transformar cliques de anúncios (Google Ads e Instagram) em clientes reais chamando no WhatsApp todos os dias',
    deliveryTime: '7 a 14 dias úteis',
    idealFor: 'profissionais liberais, clínicas e empresas que rodam tráfego pago ou querem vender um serviço específico com retorno rápido',
    coreFeatures: [
      'Estrutura persuasiva com gatilhos de confiança, prova social e quebra de objeções',
      'Foco único em conversão: sem distrações que façam o cliente fechar a aba',
      'Velocidade instantânea no 4G e 5G para não desperdiçar dinheiro de anúncio',
      'Integração pronta com Pixel da Meta, Tag do Google Ads e Google Analytics 4',
      'Filtro de qualificação rápida antes de enviar o lead para o seu WhatsApp',
    ],
  },
  {
    slugPrefix: 'criacao-de-loja-virtual-em',
    name: 'Criação de Loja Virtual e E-commerce',
    shortName: 'E-commerce',
    focusBenefit: 'vender produtos 24 horas por dia com checkout rápido via Pix e cartão, sem travamentos no celular',
    deliveryTime: '20 a 40 dias úteis',
    idealFor: 'marcas próprias, distribuidoras, lojas físicas e varejistas que querem escalar vendas online com margem alta',
    coreFeatures: [
      'Checkout transparente de 1 clique com Pix imediato e parcelamento no cartão',
      'Cálculo automático de frete (Correios, transportadoras e entrega local por motoboy)',
      'Páginas de produto otimizadas para aparecer nas buscas orgânicas do Google',
      'Painel simples para cadastrar produtos, controlar estoque e gerenciar pedidos',
      'Recuperação automática de carrinho abandonado e botão de compra assistida via WhatsApp',
    ],
  },
  {
    slugPrefix: 'agencia-de-seo-em',
    name: 'Otimização SEO e Posicionamento no Google',
    shortName: 'SEO & Google',
    focusBenefit: 'colocar sua empresa na primeira página do Google e nas recomendações de IAs (ChatGPT e Gemini) sem pagar por clique',
    deliveryTime: '7 a 15 dias úteis para implementação técnica',
    idealFor: 'empresas que já possuem ou querem um site novo dominando as pesquisas orgânicas da sua cidade e segmento',
    coreFeatures: [
      'Auditoria e correção completa de Core Web Vitals e velocidade no celular',
      'Arquitetura de SEO Programático e páginas de serviço focadas em intenção de compra',
      'Implementação de microdados Schema.org (LocalBusiness, Service e FAQPage)',
      'Integração direta e monitoramento via Google Search Console e Google Analytics 4',
      'Estruturação de conteúdo estratégico para ser citado por assistentes de IA',
    ],
  },
  {
    slugPrefix: 'desenvolvimento-de-sistemas-web-em',
    name: 'Desenvolvimento de Sistemas Web e Plataformas Sob Medida',
    shortName: 'Sistema Web / SaaS',
    focusBenefit: 'automatizar processos internos, criar portais de clientes, sistemas de agendamento ou lançar seu próprio produto SaaS',
    deliveryTime: '30 a 60 dias úteis',
    idealFor: 'empresas em expansão e startups que precisam de painéis administrativos, integrações via API e sistemas exclusivos',
    coreFeatures: [
      'Desenvolvimento Full Stack moderno em Next.js, React, TypeScript e Node.js',
      'Painéis administrativos seguros com controle de usuários, permissões e relatórios',
      'Integração nativa com gateways de pagamento (Stripe, Asaas, Mercado Pago, Pix)',
      'Conexão via API e Webhooks com CRMs, ERPs e automações de WhatsApp',
      'Banco de dados escalável na nuvem com backups automáticos e alta disponibilidade',
    ],
  },
];

export const NICHES_DATA: NicheInfo[] = [
  {
    slug: 'site-para-dentistas',
    name: 'Dentistas e Clínicas Odontológicas',
    singular: 'Clínica Odontológica',
    targetAudience: 'pacientes buscando implantes dentários, lentes de contato dental, alinhadores invisíveis (Invisalign), ortodontia e urgências',
    mainPain: 'depender apenas de indicações ou pagar caro em cliques no Google Ads para uma página lenta onde o paciente não agenda a avaliação',
    conversionGoal: 'agendamentos diários de avaliações particulares pelo WhatsApp',
    specificFeatures: [
      'Páginas individuais por tratamento (Implantes, Estética, Invisalign, Próteses) para ranquear em cada busca no Google',
      'Galeria ética de casos e estrutura visual que transmite biossegurança e tecnologia',
      'Botão de agendamento rápido via WhatsApp com pré-seleção do tratamento desejado',
      'Integração com mapa da clínica (Google Meu Negócio) e avaliações 5 estrelas dos pacientes',
    ],
    complianceOrDetail: 'Totalmente adequado às diretrizes de publicidade odontológica do CFO, destacando o responsável técnico e CRO.',
  },
  {
    slug: 'landing-page-para-advogados',
    name: 'Advogados e Escritórios de Advocacia',
    singular: 'Escritório de Advocacia',
    targetAudience: 'pessoas físicas e empresas precisando de assessoria jurídica urgente (trabalhista, previdenciário, família, tributário, empresarial ou criminal)',
    mainPain: 'receber apenas contatos desqualificados tirando dúvidas grátis ou não conseguir captar clientes pelo Google respeitando o provimento da OAB',
    conversionGoal: 'triagem qualificada de clientes reais prontos para contratar consultoria ou ação jurídica',
    specificFeatures: [
      'Copywriting informativo e ético, 100% alinhado ao Provimento 205/2021 da OAB',
      'Formulário de triagem jurídica que filtra curiosos e já entrega o resumo do caso no seu WhatsApp',
      'Design sóbrio e institucional que transmite autoridade imediata ao cliente',
      'Artigos e seção de dúvidas frequentes que posicionam o escritório nas buscas orgânicas do Google',
    ],
    complianceOrDetail: 'Desenvolvido rigorosamente dentro das normas de publicidade jurídica da OAB (caráter informativo, sem mercantilização indevida).',
  },
  {
    slug: 'site-para-medicos-e-clinicas',
    name: 'Médicos e Clínicas Médicas',
    singular: 'Clínica Médica ou Consultório',
    targetAudience: 'pacientes particulares procurando especialistas (dermatologia, cirurgia plástica, ortopedia, cardiologia, nutrologia, psiquiatria)',
    mainPain: 'agenda dependente de convênios que pagam pouco por consulta, enquanto pacientes particulares escolhem médicos com presença digital superior',
    conversionGoal: 'aumentar a proporção de consultas e procedimentos particulares na agenda',
    specificFeatures: [
      'Apresentação elegante do currículo médico, RQE, CRM e formação acadêmica',
      'Explicação humanizada das patologias e tratamentos para educar o paciente antes da consulta',
      'Agendamento direto com a secretária via WhatsApp ou integração com sistemas de agenda médica',
      'Carregamento ultrarrápido no celular para campanhas de Google Ads de pesquisa médica',
    ],
    complianceOrDetail: 'Estruturado em conformidade com as normas de publicidade médica do CFM (Resolução CFM nº 2.336/2023).',
  },
  {
    slug: 'site-para-contabilidade',
    name: 'Escritórios de Contabilidade e Contadores',
    singular: 'Escritório Contábil',
    targetAudience: 'empresários querendo abrir CNPJ, trocar de contador, migrar de MEI para ME ou reduzir impostos com planejamento tributário',
    mainPain: 'competir por preço com contabilidades online baratas por não demonstrar claramente o valor consultivo do seu escritório',
    conversionGoal: 'captar empresas em abertura e clientes de mensalidade recorrente (BPO financeiro e contábil)',
    specificFeatures: [
      'Filtro interativo: Abertura de Empresa, Troca de Contador, Contabilidade para Médicos/PJ ou Planejamento Tributário',
      'Destaque para atendimento consultivo e economia tributária legal (Fator R, Lucro Presumido, Simples Nacional)',
      'Botão direto para falar com especialista contábil no WhatsApp já com o porte da empresa informado',
      'SEO focado em buscas de alta intenção como "contador especializado" e "abrir empresa"',
    ],
    complianceOrDetail: 'Foco em geração de receita recorrente (MRR) para o escritório contábil, atraindo clientes de melhor ticket médio.',
  },
  {
    slug: 'site-para-imobiliaria-e-corretores',
    name: 'Imobiliárias, Construtoras e Corretores de Alto Padrão',
    singular: 'Imobiliária ou Corretor',
    targetAudience: 'compradores e investidores procurando lançamentos, casas em condomínio fechado, apartamentos de alto padrão e imóveis comerciais',
    mainPain: 'depender exclusivamente de portais imobiliários caros onde o mesmo cliente é enviado para outros 10 corretores concorrentes',
    conversionGoal: 'captar leads exclusivos de compradores e agendar visitas aos empreendimentos',
    specificFeatures: [
      'Vitrine de imóveis e lançamentos com filtros rápidos por bairro, valor e metragem',
      'Landing pages dedicadas para lançamentos imobiliários específicos com plantas e tour visual',
      'Captura de leads com envio imediato para o WhatsApp do corretor ou CRM imobiliário',
      'Galeria de imagens em alta resolução otimizada para abrir sem lentidão no celular',
    ],
    complianceOrDetail: 'Ideal para corretores autônomos de alto padrão, boutiques imobiliárias e construtoras.',
  },
  {
    slug: 'site-para-clinica-de-estetica',
    name: 'Clínicas de Estética e Harmonização',
    singular: 'Clínica de Estética',
    targetAudience: 'clientes buscando botox, preenchimento, bioestimuladores, depilação a laser, limpeza de pele e protocolos corporais',
    mainPain: 'ter muitos seguidores no Instagram mas pouca conversão real em avaliações agendadas na clínica',
    conversionGoal: 'transformar o tráfego do Instagram e Google em agenda cheia de avaliações',
    specificFeatures: [
      'Design sofisticado que valoriza a estrutura da clínica e os equipamentos de ponta',
      'Apresentação clara de cada protocolo facial e corporal com foco no benefício e autoestima',
      'Botão flutuante de WhatsApp para agendamento imediato de avaliação estética',
      'Fácil leitura no celular (onde 92% do público de estética navega)',
    ],
    complianceOrDetail: 'Perfeito para biomédicos estetas, dermatologistas, harmonizadores e centros de estética avançada.',
  },
  {
    slug: 'site-para-energia-solar',
    name: 'Empresas de Energia Solar e Integradores',
    singular: 'Empresa de Energia Solar',
    targetAudience: 'proprietários de residências, comércios, indústrias e propriedades rurais que querem reduzir a conta de luz em até 95%',
    mainPain: 'receber pedidos de curiosos que têm conta de luz muito baixa ou perder orçamentos grandes por demora no atendimento',
    conversionGoal: 'receber leads qualificados com o valor médio da conta de energia já preenchido',
    specificFeatures: [
      'Pré-simulador de orçamento: o cliente informa se é Residencial, Comercial ou Rural e a faixa da conta de luz',
      'Portfólio de usinas instaladas, marcas de equipamentos homologados e garantias de engenharia',
      'Seção explicando linhas de financiamento solar e tempo de retorno do investimento (Payback)',
      'Envio instantâneo dos dados da simulação direto para o WhatsApp da equipe comercial',
    ],
    complianceOrDetail: 'O filtro de valor da fatura de energia economiza horas da sua equipe de engenharia e vendas.',
  },
  {
    slug: 'site-para-arquitetura-e-interiores',
    name: 'Arquitetos e Designers de Interiores',
    singular: 'Escritório de Arquitetura',
    targetAudience: 'clientes comprando terreno em condomínio, reformando apartamentos ou montando espaços comerciais',
    mainPain: 'usar apenas o Instagram ou PDF pesado como portfólio e não ser encontrado por quem pesquisa escritório de arquitetura no Google',
    conversionGoal: 'atrair projetos arquitetônicos e de interiores de alto padrão',
    specificFeatures: [
      'Galeria minimalista de projetos com carregamento progressivo em alta definição',
      'Explicação clara das etapas do projeto (Estudo Preliminar, Executivo, Acompanhamento de Obra)',
      'Formulário qualificador que pergunta metragem aproximada, tipo de imóvel e prazo desejado',
      'Estética editorial digna de prêmios de design que valoriza o passe do arquiteto',
    ],
    complianceOrDetail: 'Seu portfólio deixa de ser apenas fotos soltas e passa a conduzir o cliente para o pedido de proposta.',
  },
  {
    slug: 'site-para-psicologos-e-terapeutas',
    name: 'Psicólogos, Psicanalistas e Terapeutas',
    singular: 'Consultório de Psicologia',
    targetAudience: 'pacientes buscando terapia online ou presencial para ansiedade, burnout, relacionamento, TDAH e autoconhecimento',
    mainPain: 'ficar refém de plataformas que cobram taxas ou obrigam a atender por valores muito abaixo da tabela particular',
    conversionGoal: 'preencher os horários da agenda com pacientes particulares (online no Brasil/exterior e presencial)',
    specificFeatures: [
      'Ambiente visual acolhedor, sereno e seguro para quem está buscando ajuda emocional',
      'Apresentação da abordagem terapêutica (TCC, Psicanálise, Gestalt, Sistêmica) em linguagem clara',
      'Explicação simples de como funciona a primeira sessão e o atendimento online para brasileiros no exterior',
      'Botão de WhatsApp discreto e humanizado para agendar a conversa inicial',
    ],
    complianceOrDetail: 'Respeita integralmente o Código de Ética Profissional do Psicólogo (CRP).',
  },
  {
    slug: 'site-para-construtora-e-engenharia',
    name: 'Construtoras e Empresas de Engenharia',
    singular: 'Construtora ou Engenharia',
    targetAudience: 'empresas contratando obras industriais, galpões, reformas corporativas, laudos técnicos ou famílias construindo casas de alto padrão',
    mainPain: 'ter um site antigo que não reflete o porte das obras entregues, perdendo licitações e contratos privados para concorrentes',
    conversionGoal: 'gerar solicitações de cotação de obras, projetos e serviços de engenharia',
    specificFeatures: [
      'Acervo técnico de obras realizadas com ficha técnica, metragem e segmento atendido',
      'Destaque para certificações, normas técnicas (ABNT/NR), cumprimento de cronograma e segurança',
      'Canal direto para envio de memorial descritivo e solicitação de orçamento técnico',
      'SEO otimizado para buscas corporativas e industriais de engenharia',
    ],
    complianceOrDetail: 'Transmite a solidez financeira e técnica que diretores e contratantes exigem antes de assinar contrato.',
  },
  {
    slug: 'site-para-consultoria-empresarial',
    name: 'Consultorias Empresariais, Financeiras e B2B',
    singular: 'Consultoria Empresarial',
    targetAudience: 'CEOs, diretores e donos de pequenas, médias e grandes empresas buscando gestão, finanças, RH, vendas ou tecnologia',
    mainPain: 'dificuldade em explicar soluções complexas de forma simples e convencer decisores B2B a agendar uma reunião de diagnóstico',
    conversionGoal: 'agendar reuniões de diagnóstico estratégico com tomadores de decisão',
    specificFeatures: [
      'Estrutura focada em ROI, indicadores de eficiência e estudos de caso reais',
      'Posicionamento de autoridade executiva para vendas de ticket médio e alto',
      'Fluxo de agendamento de reunião de diagnóstico com qualificação do porte da empresa',
      'Performance técnica impecável e versão multilíngue opcional (Português, Inglês e Espanhol)',
    ],
    complianceOrDetail: 'Construído para impressionar diretores, conselheiros e compradores corporativos.',
  },
  {
    slug: 'site-para-academia-e-studio-fitness',
    name: 'Academias, Studios de Pilates, Crossfit e Personal',
    singular: 'Academia ou Studio Fitness',
    targetAudience: 'moradores e trabalhadores da região procurando musculação, pilates, treinamento funcional, artes marciais ou personal trainer',
    mainPain: 'perder alunos da vizinhança porque a academia não aparece bem no Google ou não facilita o agendamento de aula experimental',
    conversionGoal: 'agendamentos diários de aulas experimentais e matrículas recorrentes',
    specificFeatures: [
      'Chamada direta para agendar Aula Experimental no WhatsApp em menos de 30 segundos',
      'Apresentação das modalidades, grade de horários, estrutura climatizada e planos',
      'Otimização para buscas locais ("pilates perto de mim", "academia no bairro")',
      'Fotos e vídeos leves que mostram a energia do espaço sem travar o celular do aluno',
    ],
    complianceOrDetail: 'Transforma pesquisas de moradores do seu bairro em alunos matriculados no plano anual.',
  },
  {
    slug: 'site-para-restaurantes-e-gastronomia',
    name: 'Restaurantes, Bistrôs, Eventos e Gastronomia',
    singular: 'Restaurante ou Espaço Gastronômico',
    targetAudience: 'clientes buscando reservas de mesa, eventos corporativos, confraternizações, cardápio digital e experiências gastronômicas',
    mainPain: 'pagar comissões altíssimas para aplicativos ou usar cardápios em PDF ruins de ler no celular que afastam reservas de grupos',
    conversionGoal: 'reservas diretas de mesas, eventos fechados e pedidos sem taxas intermediárias',
    specificFeatures: [
      'Cardápio interativo nativo na página (sem obrigar o cliente a baixar PDF pesado)',
      'Botão rápido para reserva de mesa e cotação de eventos corporativos ou aniversários',
      'Fotografia gastronômica em alta definição com carregamento instantâneo',
      'Integração com localização no Google Maps, horários de funcionamento e Instagram',
    ],
    complianceOrDetail: 'Aumenta o giro do salão e capta eventos corporativos de alto ticket médio.',
  },
  {
    slug: 'site-para-pet-shop-e-veterinaria',
    name: 'Clínicas Veterinárias, Hospitais Pet e Pet Shops',
    singular: 'Clínica Veterinária',
    targetAudience: 'tutores de cães e gatos procurando atendimento veterinário 24h, vacinas, cirurgias, exames, banho e tosa ou creche pet',
    mainPain: 'tutores em situação de emergência veterinária clicam no primeiro hospital ou clínica que abre rápido e tem botão de WhatsApp claro',
    conversionGoal: 'atendimentos de emergência, consultas agendadas e planos de recorrência (banho/tosa)',
    specificFeatures: [
      'Botão de Plantão / Emergência Veterinária em destaque no topo da tela do celular',
      'Lista clara de especialidades veterinárias, exames laboratoriais e centro cirúrgico',
      'Agendamento fácil para vacinação, consultas de rotina e estética animal',
      'SEO local preparado para dominar as buscas de tutores na região da clínica',
    ],
    complianceOrDetail: 'Velocidade de carregamento crucial para momentos em que o tutor precisa de atendimento imediato.',
  },
  {
    slug: 'site-para-escola-e-cursos',
    name: 'Escolas Particulares, Idiomas e Cursos Profissionalizantes',
    singular: 'Instituição de Ensino',
    targetAudience: 'pais buscando matrícula escolar (infantil, fundamental, médio, bilíngue) ou adultos buscando cursos e especializações',
    mainPain: 'campanhas de matrículas que geram poucos agendamentos de visita pedagógica por falta de uma página clara e confiável',
    conversionGoal: 'agendar visitas presenciais à escola e matrículas para a próxima turma',
    specificFeatures: [
      'Apresentação da proposta pedagógica, infraestrutura, segurança e diferenciais de ensino',
      'Formulário rápido para Agendar Visita à Escola ou solicitar valores de mensalidade no WhatsApp',
      'Depoimentos de pais e alunos que reforçam a confiança na instituição',
      'Páginas específicas para cada segmento (Educação Infantil, Fundamental, Ensino Médio ou Cursos)',
    ],
    complianceOrDetail: 'Impulsiona resultados durante toda a temporada de captação de matrículas.',
  },
  {
    slug: 'site-para-corretora-de-seguros',
    name: 'Corretoras de Seguros e Planos de Saúde',
    singular: 'Corretora de Seguros',
    targetAudience: 'empresas contratando plano de saúde empresarial, seguro de frota/vida e pessoas físicas buscando seguro auto ou residencial',
    mainPain: 'perder cotações para corretoras digitais porque o cliente não encontra um formulário rápido para pedir cotação comparativa',
    conversionGoal: 'receber pedidos diários de cotação de planos de saúde (PME/Adesão) e seguros',
    specificFeatures: [
      'Simulador rápido de cotação: o cliente escolhe o tipo de seguro ou plano, quantidade de vidas e se tem CNPJ',
      'Exibição das principais operadoras e seguradoras parceiras para gerar confiança imediata',
      'Encaminhamento direto para o corretor especialista no WhatsApp com os dados preenchidos',
      'Páginas otimizadas para captar planos empresariais (PME), que possuem as melhores comissões',
    ],
    complianceOrDetail: 'Foco em cotações qualificadas com CNPJ e número de vidas já identificados.',
  },
  {
    slug: 'site-para-agencia-de-viagens-e-turismo',
    name: 'Agências de Viagens, Turismo Receptivo e Roteiros',
    singular: 'Agência de Viagens',
    targetAudience: 'viajantes, casais em lua de mel, famílias e empresas buscando pacotes personalizados, passeios, passagens e assessoria de viagem',
    mainPain: 'clientes pesquisam roteiros no Google e acabam comprando em grandes portais impessoais por não encontrarem sua agência',
    conversionGoal: 'pedidos de roteiros personalizados e pacotes de viagem no WhatsApp',
    specificFeatures: [
      'Vitrine visual dos principais destinos, roteiros exclusivos e pacotes da temporada',
      'Destaque para o suporte humano antes, durante e depois da viagem (o grande diferencial contra portais)',
      'Botão de cotação onde o viajante informa destino, mês da viagem e número de pessoas',
      'Avaliações reais de clientes que viajaram com a agência',
    ],
    complianceOrDetail: 'Valoriza o atendimento consultivo da agência e aumenta o fechamento de pacotes completos.',
  },
  {
    slug: 'site-para-marcenaria-e-moveis-planejados',
    name: 'Marcenarias de Alto Padrão e Lojas de Móveis Planejados',
    singular: 'Marcenaria ou Loja de Planejados',
    targetAudience: 'proprietários que acabaram de pegar as chaves do apartamento ou casa e arquitetos buscando execução de móveis sob medida',
    mainPain: 'depender só do boca a boca enquanto clientes com planta na mão pesquisam no Google quem faz móveis planejados na cidade',
    conversionGoal: 'receber plantas e projetos para orçamento de marcenaria completa',
    specificFeatures: [
      'Galeria de ambientes entregues (Cozinhas, Closets, Home Theater, Corporativo) com acabamento de alto padrão',
      'Explicação sobre qualidade do MDF, ferragens com amortecimento e garantia de entrega no prazo',
      'Botão direto para o cliente enviar a planta ou projeto do arquiteto pelo WhatsApp',
      'Posicionamento estratégico no Google para captar quem está mobiliando imóvel novo',
    ],
    complianceOrDetail: 'Um único fechamento de casa ou apartamento completo paga o investimento do site diversas vezes.',
  },
  {
    slug: 'site-para-estetica-automotiva-e-oficina',
    name: 'Estética Automotiva (Detailer), Blindadoras e Oficinas Premium',
    singular: 'Centro Automotivo',
    targetAudience: 'donos de veículos buscando vitrificação, PPF, insulfilm antivandalismo, revisão mecânica especializada ou blindagem',
    mainPain: 'atrair apenas perguntas de serviços baratos em vez de clientes dispostos a investir em proteção de pintura (PPF) e manutenção premium',
    conversionGoal: 'agendar serviços automotivos de alto ticket no box da oficina',
    specificFeatures: [
      'Visual escuro e esportivo que valoriza o brilho, acabamento e tecnologia do centro automotivo',
      'Explicação técnica dos pacotes (PPF, Vitrificação 9H, Higienização Interna, Mecânica Especializada)',
      'Botão de orçamento no WhatsApp onde o cliente já informa o modelo do carro e o serviço desejado',
      'Localização fácil com rota direta pelo Waze e Google Maps',
    ],
    complianceOrDetail: 'Eleva a percepção de valor do seu estúdio automotivo ou oficina perante donos de carros de alto valor.',
  },
  {
    slug: 'landing-page-para-infoprodutores-e-lancamentos',
    name: 'Infoprodutores, Mentores, Palestrantes e Lançamentos',
    singular: 'Infoprodutor ou Mentor',
    targetAudience: 'alunos, mentorados e empresas contratando palestras, mentorias high-ticket, cursos online e imersões presenciais',
    mainPain: 'usar páginas lentas feitas em construtores pesados que derrubam a conversão do tráfego pago em até 40% no dia de abrir carrinho',
    conversionGoal: 'maximizar a taxa de conversão de captura de leads, aplicações de mentoria e vendas no checkout',
    specificFeatures: [
      'Carregamento instantâneo sob picos de tráfego simultâneo (milhares de acessos em lives e aberturas de carrinho)',
      'Design cinematográfico que posiciona o especialista como referência número 1 do nicho',
      'Formulário de aplicação para mentorias High-Ticket integrado à equipe comercial',
      'Nota máxima no Google PageSpeed para baratear o custo por lead (CPL) na Meta e no Google',
    ],
    complianceOrDetail: 'Chega de perder vendas porque a página demorou 6 segundos para abrir no navegador do Instagram.',
  },
  {
    slug: 'site-para-empresa-de-seguranca-e-portaria',
    name: 'Empresas de Segurança Patrimonial, Portaria Remota e Facilities',
    singular: 'Empresa de Segurança e Facilities',
    targetAudience: 'síndicos profissionais, administradoras de condomínios, indústrias e redes varejistas contratando portaria, limpeza e vigilância',
    mainPain: 'perder cotações de condomínios e empresas porque o site atual parece amador e não transmite robustez operacional',
    conversionGoal: 'gerar reuniões com síndicos e gestores de compras para contratos mensais recorrentes',
    specificFeatures: [
      'Apresentação clara das soluções: Portaria Remota/Presencial, Limpeza Conservação, CFTV Inteligente e Controle de Acesso',
      'Destaque para central de monitoramento 24h, conformidade trabalhista e treinamento da equipe',
      'Formulário qualificador para Síndicos e Empresas solicitarem vistoria e proposta técnica',
      'SEO focado em buscas B2B de alto valor contratual',
    ],
    complianceOrDetail: 'Projetado para conquistar contratos recorrentes de longo prazo com condomínios e empresas.',
  },
  {
    slug: 'site-para-clinica-de-fisioterapia-e-reabilitacao',
    name: 'Clínicas de Fisioterapia, Quiropraxia e Osteopatia',
    singular: 'Clínica de Fisioterapia',
    targetAudience: 'pacientes com dores na coluna, hérnia de disco, lesões esportivas, pós-operatório ortopédico e reabilitação',
    mainPain: 'pacientes com dor aguda pesquisam no Google e agendam na primeira clínica que transmite confiança e responde rápido no WhatsApp',
    conversionGoal: 'agendar avaliações fisioterapêuticas particulares todos os dias',
    specificFeatures: [
      'Páginas focadas nas dores reais que o paciente digita no Google (Dor Lombar, Ciático, Joelho, Ombro, Pós-Operatório)',
      'Apresentação dos recursos terapêuticos e especializações da equipe de fisioterapeutas',
      'Botão de agendamento imediato de avaliação sem burocracia',
      'Depoimentos de pacientes recuperados e localização com estacionamento/acessibilidade',
    ],
    complianceOrDetail: 'Foca no paciente particular que busca tratamento individualizado e resolutivo.',
  },
  {
    slug: 'site-para-empresa-de-tecnologia-e-saas',
    name: 'Startups, Empresas de Software (SaaS) e Consultorias de TI',
    singular: 'Empresa de Tecnologia ou SaaS',
    targetAudience: 'empresas contratando sistemas, ERPs, suporte de TI, cibersegurança, cloud ou assinando plataformas SaaS B2B',
    mainPain: 'ter um excelente software ou serviço técnico, mas uma landing page confusa que não converte visitantes em demonstrações agendadas (Demos)',
    conversionGoal: 'aumentar o agendamento de demonstrações (Book a Demo) e testes gratuitos (Free Trial)',
    specificFeatures: [
      'Design padrão Vale do Silício: escuro, moderno, com microinterações fluidas e foco no produto',
      'Arquitetura de copywriting B2B que explica os benefícios do sistema sem jargão confuso',
      'Seção interativa de funcionalidades, integrações via API, segurança de dados e planos',
      'Fluxo otimizado para agendamento de Demo Comercial ou criação de conta',
    ],
    complianceOrDetail: 'Desenvolvido em Next.js e TypeScript: a mesma stack utilizada pelas maiores empresas de tecnologia do mundo.',
  },
  {
    slug: 'site-para-empresa-de-climatizacao-e-ar-condicionado',
    name: 'Empresas de Climatização, PMOC e Ar-Condicionado Central',
    singular: 'Empresa de Climatização',
    targetAudience: 'empresas, clínicas, hospitais, comércios e residências de alto padrão buscando instalação VRF/Split, manutenção e contrato PMOC',
    mainPain: 'ficar preso apenas em manutenções avulsas baratas em vez de fechar contratos mensais de PMOC com empresas e clínicas',
    conversionGoal: 'fechar contratos recorrentes de PMOC e projetos de climatização residencial/comercial',
    specificFeatures: [
      'Página dedicada à obrigatoriedade legal do PMOC (Lei 13.589/2018) com emissão de ART para empresas',
      'Apresentação de projetos de infraestrutura, dutos, sistemas VRF/VRV e automação',
      'Filtro de orçamento separando Demanda Residencial de Demanda Corporativa/Industrial',
      'Posicionamento no Google para captar engenheiros, arquitetos e gerentes prediais',
    ],
    complianceOrDetail: 'Atrai contratos corporativos de manutenção mensal que dão previsibilidade de caixa.',
  },
  {
    slug: 'site-para-transportadora-e-logistica',
    name: 'Transportadoras, Logística B2B e Comércio Exterior',
    singular: 'Transportadora e Logística',
    targetAudience: 'indústrias, distribuidoras e e-commerces que precisam de frete dedicado, carga fracionada, armazenagem ou desembaraço aduaneiro',
    mainPain: 'embarcadores e compradores industriais descartam transportadoras que não possuem um site profissional com formulário de cotação de frete ágil',
    conversionGoal: 'receber cotações de frete B2B e fechar contratos de transporte recorrente',
    specificFeatures: [
      'Formulário rápido de Cotação de Frete (Origem, Destino, Tipo de Carga, Peso/Cubagem e CNPJ)',
      'Mapa de rotas atendidas, tipos de frota, licenças (ANTT, Sassmaq, Anvisa) e seguro de carga',
      'Canal rápido no WhatsApp para cotações urgentes de carga fechada ou dedicada',
      'Estrutura técnica otimizada para ser encontrada por gestores de logística no Google',
    ],
    complianceOrDetail: 'Posiciona sua transportadora para disputar contas industriais e comerciais de médio e grande porte.',
  },
  {
    slug: 'site-para-clinica-de-olhos-e-oftalmologia',
    name: 'Clínicas de Oftalmologia e Cirurgia Refrativa',
    singular: 'Clínica Oftalmológica',
    targetAudience: 'pacientes buscando consulta oftalmológica, cirurgia de catarata, cirurgia refrativa a laser (miopia/astigmatismo) e exames oculares',
    mainPain: 'pacientes pesquisam sintomas e cirurgias oculares no Google, mas encontram apenas diretórios genéricos em vez do site da sua clínica',
    conversionGoal: 'agendar consultas e avaliações cirúrgicas particulares e de convênios selecionados',
    specificFeatures: [
      'Páginas informativas sobre Cirurgia de Catarata, Cirurgia Refrativa, Ceratocone, Glaucoma e Oftalmopediatria',
      'Tipografia de alta legibilidade e contraste pensado para o conforto visual do paciente',
      'Apresentação do corpo clínico, equipamentos de diagnóstico e convênios atendidos',
      'Agendamento direto pelo WhatsApp com triagem rápida do exame ou consulta',
    ],
    complianceOrDetail: 'Aumenta a captação de cirurgias oftalmológicas particulares de alto valor agregado.',
  },
  {
    slug: 'site-para-salao-de-beleza-e-barbearia',
    name: 'Salões de Beleza Premium, Studios de Noivas e Barbearias',
    singular: 'Salão de Beleza ou Barbearia',
    targetAudience: 'clientes buscando mechas, visagismo, dia da noiva, tratamentos capilares de luxo ou barbearia por assinatura',
    mainPain: 'depender só do alcance orgânico instável do Instagram e perder clientes novos que se mudaram para o bairro e pesquisam no Google',
    conversionGoal: 'lotar a agenda dos profissionais durante toda a semana e vender pacotes especiais',
    specificFeatures: [
      'Vitrine impecável de serviços: Mechas, Colorimetria, Dia da Noiva, Barbearia VIP e Clube de Assinatura',
      'Botão rápido de agendamento via WhatsApp ou integração direta com sistema de agenda (Trinks, Avec, Booksy)',
      'Galeria de resultados e ambiente do salão que justifica o valor do seu serviço',
      'Otimização local para aparecer no topo quando pesquisarem salão ou barbearia na sua região',
    ],
    complianceOrDetail: 'Ideal para posicionar seu espaço como referência premium e atrair clientes de maior ticket médio.',
  },
  {
    slug: 'site-para-empresa-de-eventos-e-buffet',
    name: 'Buffets, Espaços de Eventos, Casamentos e Produtoras',
    singular: 'Espaço de Eventos ou Buffet',
    targetAudience: 'noivos planejando casamento, empresas organizando convenções/confraternizações e famílias celebrando formaturas e aniversários',
    mainPain: 'noivos e produtores de eventos corporativos pedem orçamento para os 3 primeiros espaços que encontram com fotos bonitas e informações claras no Google',
    conversionGoal: 'receber pedidos de orçamento qualificados com data do evento e número de convidados',
    specificFeatures: [
      'Filtro de orçamento inteligente: Tipo de Evento (Casamento, Corporativo, Social), Data Prevista e Quantidade de Convidados',
      'Tour visual pelo espaço, opções de gastronomia/cardápio e capacidade do salão',
      'Depoimentos de noivos e empresas que já realizaram eventos no local',
      'Atendimento imediato no WhatsApp para agendar degustação ou visita técnica ao espaço',
    ],
    complianceOrDetail: 'Garante agenda cheia de eventos nos finais de semana e datas corporativas durante a semana.',
  },
  {
    slug: 'site-para-dedetizadora-e-controle-de-pragas',
    name: 'Dedetizadoras, Controle de Pragas e Higienização de Reservatórios',
    singular: 'Empresa de Controle de Pragas',
    targetAudience: 'condomínios, restaurantes, indústrias alimentícias, clínicas e residências precisando de dedetização urgente ou laudo sanitário',
    mainPain: 'nesse segmento, 90% dos clientes vêm do Google com urgência. Se o site demorar para abrir ou não passar confiança, o cliente liga para o próximo da lista',
    conversionGoal: 'chamados imediatos no WhatsApp para atendimento residencial e contratos mensais para empresas',
    specificFeatures: [
      'Chamada de atendimento rápido com botão de WhatsApp em destaque para emergências',
      'Destaque para Licenças da Vigilância Sanitária (Anvisa), IBAMA, produtos sem cheiro e segurança para crianças/pets',
      'Seção exclusiva para Empresas e Condomínios que precisam de Certificado de Dedetização e Limpeza de Caixa d’Água',
      'Carregamento em milissegundos para dominar o topo das buscas locais e campanhas de Google Ads',
    ],
    complianceOrDetail: 'Projetado para reduzir drasticamente o custo por clique no Google Ads e converter mais ligações.',
  },
  {
    slug: 'site-para-clinica-de-reabilitacao-e-geriatria',
    name: 'Residenciais Sênior, Casas de Repouso e Home Care',
    singular: 'Residencial Sênior ou Home Care',
    targetAudience: 'famílias buscando hospedagem assistida para idosos, cuidados pós-cirúrgicos, enfermagem domiciliar (Home Care) ou centro-dia',
    mainPain: 'a decisão da família envolve extrema sensibilidade e confiança. Sites frios, confusos ou desatualizados geram insegurança imediata nos familiares',
    conversionGoal: 'agendar visitas presenciais da família à instituição ou avaliação de Home Care',
    specificFeatures: [
      'Design acolhedor, humano e transparente que mostra o cuidado médico, nutrição e atividades de convivência',
      'Apresentação da equipe multidisciplinar (Médico Geriatra, Enfermagem 24h, Fisioterapia, Nutrição)',
      'Explicação das modalidades: Moradia Permanente, Temporária (Pós-Operatório) e Day Care',
      'Canal direto e empático no WhatsApp para tirar dúvidas da família e agendar uma visita guiada',
    ],
    complianceOrDetail: 'Construído com foco em empatia, transparência e acolhimento familiar.',
  },
  {
    slug: 'site-para-clinica-de-implantes-dentarios',
    name: 'Clínicas de Implantes Dentários e Reabilitação Oral',
    singular: 'Clínica de Implantes',
    targetAudience: 'pacientes buscando protocolo sobre implantes, carga imediata, implante unitário e prótese fixa',
    mainPain: 'pacientes de implante pesquisam muito antes de decidir e desconfiam de clínicas que não mostram estrutura moderna e explicação clara sobre o tratamento sem dor',
    conversionGoal: 'agendar avaliações de tomografia e planejamento de implantes dentários',
    specificFeatures: [
      'Seção educativa explicando Carga Imediata, Protocolo Fixo e sedação consciente para pacientes com receio',
      'Destaque para tecnologia de escaneamento intraoral 3D e cirurgia guiada sem cortes',
      'Qualificador rápido para identificar se o paciente busca 1 implante ou reabilitação total',
      'Botão direto para agendar avaliação com o implantodontista pelo WhatsApp',
    ],
    complianceOrDetail: 'Foco no procedimento de maior ticket médio da odontologia, respeitando as normas do CFO.',
  },
  {
    slug: 'site-para-cirurgia-plastica',
    name: 'Cirurgiões Plásticos e Clínicas de Cirurgia Estética',
    singular: 'Clínica de Cirurgia Plástica',
    targetAudience: 'pacientes buscando rinoplastia, mamoplastia, lipoaspiração HD, abdominoplastia e lifting facial',
    mainPain: 'pacientes de cirurgia plástica exigem altíssimo nível de confiança, segurança hospitalar e título de especialista (SBCP)',
    conversionGoal: 'agendar consultas presenciais de avaliação cirúrgica particular',
    specificFeatures: [
      'Design de luxo minimalista que reflete precisão cirúrgica, ética e cuidado no pré e pós-operatório',
      'Páginas detalhadas para cada procedimento (Contorno Corporal, Mama, Face, Rinoplastia)',
      'Destaque para credenciais médicas (CRM, RQE, membro da SBCP) e hospitais onde opera',
      'Atendimento de concierge via WhatsApp para agendamento de consulta exclusiva',
    ],
    complianceOrDetail: 'Totalmente alinhado às diretrizes éticas do CFM e da Sociedade Brasileira de Cirurgia Plástica.',
  },
  {
    slug: 'site-para-dermatologista-e-tricologia',
    name: 'Dermatologistas, Clínicas Capilares e Transplante Capilar',
    singular: 'Clínica Dermatológica ou Capilar',
    targetAudience: 'pacientes procurando transplante capilar FUE, tratamento de calvície, lasers dermatológicos, rejuvenescimento e dermatologia clínica',
    mainPain: 'concorrer com clínicas populares por não ter uma página que posicione a autoridade médica e a tecnologia do consultório',
    conversionGoal: 'agendar consultas dermatológicas e avaliações de transplante capilar',
    specificFeatures: [
      'Apresentação dos protocolos capilares (Técnica FUE, MMP Capilar, Ledterapia) e tecnologias a laser',
      'Design clean e sofisticado com foco na saúde da pele, cabelos e rejuvenescimento natural',
      'Agendamento rápido de consulta particular com triagem da queixa principal',
      'SEO técnico focado em termos de alta intenção de busca médica na sua cidade',
    ],
    complianceOrDetail: 'Atrai pacientes que valorizam diagnóstico médico especializado e procedimentos de ponta.',
  },
  {
    slug: 'site-para-nutricionista-e-nutrologo',
    name: 'Nutricionistas Esportivos, Clínicos e Médicos Nutrólogos',
    singular: 'Consultório de Nutrição ou Nutrologia',
    targetAudience: 'pacientes buscando emagrecimento saudável, hipertrofia, performance esportiva, longevidade e reposição metabólica',
    mainPain: 'depender de postagens diárias no Instagram para conseguir preencher a agenda de consultas e acompanhamentos trimestrais',
    conversionGoal: 'vender consultas avulsas e planos de acompanhamento nutricional/metabólico',
    specificFeatures: [
      'Apresentação do método de atendimento, exame de bioimpedância e aplicativo de acompanhamento',
      'Explicação clara de como funcionam os planos de acompanhamento (Trimestral/Semestral)',
      'Botão de WhatsApp com qualificação do objetivo do paciente (Emagrecimento, Hipertrofia, Saúde)',
      'Avaliações reais de pacientes que transformaram a saúde e composição corporal',
    ],
    complianceOrDetail: 'Ideal para posicionar programas de acompanhamento de maior valor agregado.',
  },
  {
    slug: 'site-para-advogado-trabalhista-e-previdenciario',
    name: 'Escritórios de Advocacia Trabalhista e Previdenciária (INSS)',
    singular: 'Escritório Trabalhista e Previdenciário',
    targetAudience: 'trabalhadores buscando rescisão indireta, horas extras, acidente de trabalho, aposentadoria, BPC/LOAS e auxílio-doença',
    mainPain: 'atender dezenas de pessoas sem direito algum porque a página atual não faz uma pré-triagem básica do caso',
    conversionGoal: 'receber casos trabalhistas e previdenciários já pré-qualificados no WhatsApp',
    specificFeatures: [
      'Questionário rápido de 3 passos: área do direito, situação atual e tempo de serviço/contribuição',
      'Textos claros que explicam os direitos do cidadão sem juridiquês complicado',
      'Carregamento instantâneo em celulares simples para não perder nenhum contato de campanha',
      'Botão de WhatsApp direto com a equipe de triagem do escritório',
    ],
    complianceOrDetail: 'Comunicação informativa 100% adequada às normas éticas da OAB.',
  },
  {
    slug: 'site-para-advogado-empresarial-e-tributario',
    name: 'Advocacia Empresarial, Tributária, Societária e Contratos',
    singular: 'Banca Jurídica Empresarial',
    targetAudience: 'empresários, diretores financeiros e sócios buscando recuperação tributária, blindagem patrimonial, holdings familiares e contratos B2B',
    mainPain: 'ter uma presença digital tímida que não transmite a senioridade necessária para atender médias e grandes empresas',
    conversionGoal: 'agendar reuniões estratégicas com sócios e diretores de empresas',
    specificFeatures: [
      'Visual corporativo sóbrio, inspirado nas maiores bancas jurídicas internacionais',
      'Páginas específicas para Recuperação de Créditos Tributários, Holding Familiar, Fusões (M&A) e Assessoria Mensal',
      'Publicação de artigos técnicos que posicionam os sócios no Google e no LinkedIn',
      'Formulário executivo para solicitação de reunião diagnóstica',
    ],
    complianceOrDetail: 'Projetado para atrair honorários corporativos e contratos de partido mensal.',
  },
  {
    slug: 'site-para-empresa-de-engenharia-civil-e-projetos',
    name: 'Escritórios de Engenharia Estrutural, Elétrica, Laudos e Perícias',
    singular: 'Empresa de Engenharia',
    targetAudience: 'indústrias, condomínios, construtoras e comércios precisando de projetos complementares, AVCB, laudos estruturais e reformas',
    mainPain: 'depender apenas de parceiros antigos por não aparecer quando empresas pesquisam engenharia especializada no Google',
    conversionGoal: 'receber solicitações de propostas técnicas, laudos com ART e projetos de engenharia',
    specificFeatures: [
      'Catálogo organizado por especialidade: Projetos Estruturais, Instalações, AVCB/Bombeiros, Laudos e Perícias',
      'Destaque para registro no CREA, emissão ágil de ART e acervo técnico (CAT)',
      'Formulário para envio de plantas, editais ou solicitação de vistoria técnica in loco',
      'SEO focado nas buscas técnicas de engenheiros, síndicos e gerentes industriais',
    ],
    complianceOrDetail: 'Aumenta o fluxo de cotações B2B durante todos os meses do ano.',
  },
  {
    slug: 'site-para-empresa-de-energia-fotovoltaica-industrial',
    name: 'Usinas Solares, Energia Livre e Eficiência Energética B2B',
    singular: 'Consultoria em Energia e Usinas Solares',
    targetAudience: 'indústrias, redes de supermercados, hotéis, postos de combustível e agronegócio (Mercado Livre de Energia e Grupo A)',
    mainPain: 'páginas amadoras que só atraem residências pequenas em vez de contas de energia acima de R$ 10.000/mês (Demanda Contratada / Grupo A)',
    conversionGoal: 'captar faturas de alta tensão (Grupo A) e projetos de usinas de investimento',
    specificFeatures: [
      'Qualificador focado em Grandes Consumidores: filtra contas acima de R$ 5 mil, R$ 15 mil e R$ 50 mil mensais',
      'Explicação técnica sobre Migração para o Mercado Livre de Energia e Usinas Fotovoltaicas',
      'Estudos de caso mostrando redução anual de custos operacionais em indústrias e agronegócio',
      'Canal direto para envio da fatura de energia para estudo de viabilidade engenharia',
    ],
    complianceOrDetail: 'Direciona sua força comercial para os contratos de maior margem do setor elétrico.',
  },
  {
    slug: 'site-para-distribuidora-e-atacado',
    name: 'Distribuidoras, Atacadistas, Importadoras e Indústrias B2B',
    singular: 'Distribuidora ou Atacadista',
    targetAudience: 'lojistas, revendedores, supermercados, farmácias e compradores corporativos buscando fornecedores no atacado com CNPJ',
    mainPain: 'representantes comerciais perdendo tempo com consumidor final (varejo) ou catálogo em PDF desatualizado difícil de cotar',
    conversionGoal: 'receber cadastros de lojistas com CNPJ ativo para compras no atacado',
    specificFeatures: [
      'Catálogo digital B2B organizado por categorias e marcas distribuídas (com ou sem exibição de preços)',
      'Filtro obrigatório de CNPJ e pedido mínimo para proteger seu time de vendas do varejo unitário',
      'Integração rápida com WhatsApp da televendas separada por região de atendimento',
      'SEO preparado para quando o lojista pesquisa "distribuidora de [produto] no atacado"',
    ],
    complianceOrDetail: 'Transforma seu site em uma máquina de abertura de novos pontos de venda (PDVs) em todo o Brasil.',
  },
  {
    slug: 'site-para-empresa-de-mudancas-e-guarda-moveis',
    name: 'Empresas de Mudanças Residenciais, Comerciais e Self Storage',
    singular: 'Empresa de Mudanças ou Self Storage',
    targetAudience: 'famílias mudando de apartamento/cidade e empresas transferindo escritórios ou precisando de guarda-móveis (box privativo)',
    mainPain: '100% da demanda de mudanças acontece na pesquisa imediata do Google. Quem não tem um formulário rápido de inventário perde o frete na hora',
    conversionGoal: 'receber pedidos diários de orçamento de mudança local, interestadual e locação de box',
    specificFeatures: [
      'Cotador rápido: Cidade de Origem, Cidade de Destino, Tipo de Imóvel e Data Prevista',
      'Destaque para embalagem completa, seguro total da carga, içamento e montagem de móveis',
      'Apresentação de boxes de Guarda-Móveis / Self Storage com segurança monitorada',
      'Botão de WhatsApp imediato para envio de vídeo ou lista de itens da mudança',
    ],
    complianceOrDetail: 'Altíssima conversão para campanhas de Google Ads de pesquisa local e interestadual.',
  },
  {
    slug: 'site-para-empresa-de-limpeza-pos-obra-e-terceirizacao',
    name: 'Terceirização de Limpeza, Pós-Obra e Conservação Corporativa',
    singular: 'Empresa de Limpeza e Terceirização',
    targetAudience: 'arquitetos, construtoras, escritórios corporativos, clínicas e condomínios contratando limpeza técnica pós-obra ou equipe fixa',
    mainPain: 'ser confundido com diaristas autônomas por não apresentar equipamentos profissionais, EPIs e emissão de nota fiscal',
    conversionGoal: 'fechar limpezas pós-obra de alto padrão e contratos fixos de terceirização',
    specificFeatures: [
      'Separação clara entre Limpeza Técnica Pós-Obra (fina/pesada) e Terceirização de Mão de Obra Fixa',
      'Destaque para maquinário industrial, produtos homologados, equipe uniformizada e seguro de responsabilidade',
      'Orçamento rápido no WhatsApp informando metragem aproximada (m²) e localização',
      'Foco em parcerias recorrentes com escritórios de arquitetura e engenharia',
    ],
    complianceOrDetail: 'Posiciona sua empresa para atender obras de alto padrão, clínicas e sedes corporativas.',
  },
  {
    slug: 'site-para-laboratorio-e-clinica-de-imagem',
    name: 'Laboratórios de Análises Clínicas, Diagnóstico por Imagem e Check-up',
    singular: 'Laboratório ou Clínica de Diagnóstico',
    targetAudience: 'pacientes buscando exames de sangue, coleta domiciliar, ultrassonografia, ressonância, tomografia e exames ocupacionais',
    mainPain: 'pacientes têm dificuldade de encontrar unidades, preparo de exames e agendamento rápido pelo celular no site antigo do laboratório',
    conversionGoal: 'aumentar o agendamento de exames particulares, coleta domiciliar e convênios',
    specificFeatures: [
      'Acesso rápido para Agendar Exames no WhatsApp, Coleta Domiciliar e Consulta de Resultados Online',
      'Lista clara de exames realizados, orientações de jejum/preparo e convênios aceitos',
      'Localizador fácil das unidades de atendimento com horário de coleta e rota no mapa',
      'Carregamento ultrarrápido pensado para pacientes que acessam pelo 4G na saída do consultório médico',
    ],
    complianceOrDetail: 'Melhora a experiência do paciente e reduz o congestionamento telefônico da recepção.',
  },
  {
    slug: 'site-para-clinica-de-fonoaudiologia-e-desenvolvimento-infantil',
    name: 'Clínicas de Fonoaudiologia, Terapia ABA, Psicopedagogia e Neuropediatria',
    singular: 'Clínica de Desenvolvimento Infantil',
    targetAudience: 'pais buscando avaliação e intervenção multidisciplinar (Fonoaudiologia, Terapia Ocupacional, ABA, TEA, TDAH e Apraxia da Fala)',
    mainPain: 'famílias buscam clínicas que transmitam acolhimento, estrutura lúdica segura e equipe certificada, mas encontram páginas frias',
    conversionGoal: 'agendar avaliações iniciais multidisciplinares com os pais',
    specificFeatures: [
      'Design empático e acolhedor que apresenta as salas sensoriais e a metodologia de intervenção',
      'Explicação clara para os pais sobre atraso de fala, integração sensorial, método ABA e acompanhamento escolar',
      'Botão direto para falar com a coordenação clínica pelo WhatsApp e tirar dúvidas iniciais',
      'Posicionamento orgânico no Google para famílias que pesquisam especialistas na região',
    ],
    complianceOrDetail: 'Transmite a segurança técnica e o carinho que toda família procura para o desenvolvimento dos filhos.',
  },
  {
    slug: 'site-para-aluguel-de-equipamentos-e-maquinas',
    name: 'Locadoras de Equipamentos para Construção, Eventos, Médico ou TI',
    singular: 'Locadora de Equipamentos',
    targetAudience: 'construtoras, engenheiros, produtores de eventos, clínicas ou empresas buscando locação de máquinas, andaimes, geradores ou notebooks',
    mainPain: 'o cliente precisa saber rapidamente se o equipamento está disponível para locação imediata, mas os catálogos atuais são confusos',
    conversionGoal: 'receber pedidos de cotação de locação diária, semanal ou mensal no WhatsApp',
    specificFeatures: [
      'Catálogo ágil por categoria de equipamento com especificações técnicas e aplicação',
      'Botão "Consultar Disponibilidade e Valor de Locação" direto no WhatsApp em cada item',
      'Filtro de período de locação (Diária, Mensal, Contrato Anual) e opção de entrega na obra/empresa',
      'SEO focado em termos exatos como "aluguel de [equipamento]" para capturar demanda urgente',
    ],
    complianceOrDetail: 'Aumenta a taxa de ocupação do seu estoque de máquinas e equipamentos.',
  },
  {
    slug: 'site-para-fotografo-e-produtora-de-video',
    name: 'Produtoras Audiovisuais, Filmes Corporativos e Fotógrafos de Alto Padrão',
    singular: 'Produtora Audiovisual ou Estúdio',
    targetAudience: 'empresas contratando vídeos institucionais, cobertura de eventos, comerciais, fotos corporativas ou noivos buscando fotografia autoral',
    mainPain: 'usar portfólios gratuitos lentos que comprimem a qualidade das imagens ou demoram 10 segundos para abrir o showreel no celular',
    conversionGoal: 'fechar produções audiovisuais corporativas, campanhas e coberturas premium',
    specificFeatures: [
      'Player de vídeo otimizado e galerias em alta resolução com carregamento instantâneo',
      'Estética cinematográfica escura que destaca as cores e a direção de fotografia do seu trabalho',
      'Qualificador de orçamento por tipo de diária/projeto (Vídeo Institucional, Evento, Retrato Corporativo, Casamento)',
      'Posicionamento profissional no Google para ser encontrado por agências e diretores de marketing',
    ],
    complianceOrDetail: 'Valoriza seu trabalho autoral e permite cobrar um ticket condizente com a qualidade da sua entrega.',
  },
];

// Generate all programmatic pages dynamically and deterministically
function buildAllProgrammaticPages(): Record<string, ProgrammaticPageData> {
  const pages: Record<string, ProgrammaticPageData> = {};

  // 1. Service x City combinations (5 services * 50 cities = 250 pages)
  CITIES_DATA.forEach((city, cityIdx) => {
    SERVICE_TYPES.forEach((service, serviceIdx) => {
      const slug = `${service.slugPrefix}-${city.slug}`;
      
      const otherServicesSameCity = SERVICE_TYPES
        .filter((_, idx) => idx !== serviceIdx)
        .slice(0, 2)
        .map((s) => `${s.slugPrefix}-${city.slug}`);
      
      const nextCity1 = CITIES_DATA[(cityIdx + 1) % CITIES_DATA.length];
      const nextCity2 = CITIES_DATA[(cityIdx + 2) % CITIES_DATA.length];
      const relatedCities = [
        `${service.slugPrefix}-${nextCity1.slug}`,
        `${service.slugPrefix}-${nextCity2.slug}`,
      ];
      const relatedNiches = [
        NICHES_DATA[cityIdx % NICHES_DATA.length].slug,
        NICHES_DATA[(cityIdx + 3) % NICHES_DATA.length].slug,
      ];

      pages[slug] = {
        slug,
        type: 'service-city',
        cityName: city.name,
        stateCode: city.state,
        serviceName: service.name,
        title: `${service.name} em ${city.name} (${city.state})`,
        metaTitle: `${service.name} em ${city.name} - ${city.state} | Rápido e Focado em Vendas`,
        metaDescription: `Procurando ${service.name.toLowerCase()} em ${city.name} (${city.state})? Desenvolvemos páginas ultrarrápidas, otimizadas para o Google e feitas para gerar orçamentos no WhatsApp.`,
        badge: `ATENDIMENTO EM ${city.name.toUpperCase()} · ${city.state}`,
        heroTitle: `${service.name} em`,
        heroHighlight: `${city.name} (${city.state})`,
        heroSubtitle: `Desenvolvemos soluções digitais sob medida para empresas de ${city.name} que buscam ${service.focusBenefit}. Entrega ágil em ${service.deliveryTime}.`,
        contextHeading: `Por que empresas de ${city.name} precisam de uma estrutura digital superior em 2026?`,
        contextParagraphs: [
          `Reconhecida como ${city.economicProfile}, a cidade de ${city.name} (${city.state}) possui um ecossistema empresarial dinâmico com forte atuação em ${city.keySectors}.`,
          city.localInsight,
          `Na Web Lunar, construímos seu projeto sem templates pesados ou lentos. Nosso foco para o mercado de ${city.name} é entregar uma plataforma que carregue em menos de 1 segundo no celular, posicione sua empresa nas pesquisas do Google e conduza o visitante diretamente ao seu WhatsApp já qualificado.`,
        ],
        painPointsTitle: `O que impede empresas de ${city.name} de venderem mais pela internet hoje`,
        painPoints: [
          {
            title: 'Páginas lentas que desperdiçam cliques no celular',
            desc: `Mais de 84% das pesquisas por serviços em ${city.name} acontecem pelo smartphone. Se a sua página demora mais de 3 segundos para abrir, o cliente volta para o Google e chama o seu concorrente.`,
          },
          {
            title: 'Falta de posicionamento nas buscas locais do Google',
            desc: `Ter apenas perfil em rede social não capta quem está com intenção imediata de compra pesquisando pelo seu serviço em ${city.name} agora mesmo.`,
          },
          {
            title: 'Contatos curiosos que só perguntam preço e somem',
            desc: `Sem uma página que explique o valor do seu trabalho e filtre o perfil do cliente, sua equipe comercial perde tempo respondendo curiosos desqualificados.`,
          },
        ],
        deliverablesTitle: `O que entregamos no seu projeto de ${service.shortName} para ${city.name}`,
        deliverables: service.coreFeatures,
        faqs: [
          {
            question: `Como funciona o atendimento da Web Lunar para empresas de ${city.name} (${city.state})?`,
            answer: `Atendemos empresas de ${city.name} de forma 100% digital e ágil. Realizamos o alinhamento estratégico por videochamada ou WhatsApp, apresentamos o protótipo visual para aprovação e entregamos o projeto publicado no seu domínio em ${service.deliveryTime}.`,
          },
          {
            question: `Meu site vai aparecer quando pesquisarem pelo meu serviço em ${city.name} no Google?`,
            answer: `Sim! Estruturamos todo o código com SEO técnico local voltado para ${city.name} e região (${city.state}), incluindo títulos estratégicos, microdados Schema.org e integração com o Google Search Console para indexação rápida.`,
          },
          {
            question: `O projeto já vem pronto para receber anúncios no Google Ads e Instagram?`,
            answer: `Totalmente. Entregamos sua página com carregamento instantâneo, nota superior a 90 no Google PageSpeed e todas as tags de rastreamento configuradas para que suas campanhas em ${city.name} tenham o menor custo por lead possível.`,
          },
        ],
        relatedSlugs: [...otherServicesSameCity, ...relatedCities, ...relatedNiches],
      };
    });
  });

  // 2. Niche pages (45 specialized industry pages)
  NICHES_DATA.forEach((niche, nicheIdx) => {
    const slug = niche.slug;
    const nextNiche1 = NICHES_DATA[(nicheIdx + 1) % NICHES_DATA.length];
    const nextNiche2 = NICHES_DATA[(nicheIdx + 2) % NICHES_DATA.length];
    const nextNiche3 = NICHES_DATA[(nicheIdx + 3) % NICHES_DATA.length];
    const relatedCities = [
      `criacao-de-sites-em-${CITIES_DATA[nicheIdx % CITIES_DATA.length].slug}`,
      `criacao-de-landing-page-em-${CITIES_DATA[(nicheIdx + 1) % CITIES_DATA.length].slug}`,
      `${niche.slug}-em-${CITIES_DATA[nicheIdx % 10].slug}`,
    ];

    pages[slug] = {
      slug,
      type: 'niche',
      nicheName: niche.name,
      serviceName: `Sites e Landing Pages para ${niche.name}`,
      title: `Criação de Sites e Landing Pages para ${niche.name}`,
      metaTitle: `Criação de Site e Landing Page para ${niche.name} | Alta Conversão`,
      metaDescription: `Desenvolvimento de sites e landing pages para ${niche.name.toLowerCase()}. Atraia ${niche.targetAudience.slice(0, 80)}... e receba contatos qualificados no WhatsApp.`,
      badge: `SOLUÇÃO ESPECIALIZADA · ${niche.singular.toUpperCase()}`,
      heroTitle: `Sites e Landing Pages para`,
      heroHighlight: niche.name,
      heroSubtitle: `Estrutura digital projetada especificamente para atrair ${niche.targetAudience} e gerar ${niche.conversionGoal}.`,
      contextHeading: `Como posicionar seu negócio de ${niche.singular} para captar os melhores clientes no Google`,
      contextParagraphs: [
        `No segmento de ${niche.name}, o maior gargalo comercial hoje é ${niche.mainPain}.`,
        `Quando um cliente em potencial pesquisa no Google, ele compara a credibilidade visual, a clareza das informações e a velocidade de resposta nos primeiros 5 segundos de navegação.`,
        `${niche.complianceOrDetail} Na Web Lunar, desenhamos cada seção da sua página para responder às dúvidas reais do seu público e transformar visitas em ${niche.conversionGoal}.`,
      ],
      painPointsTitle: `Por que páginas genéricas não funcionam para ${niche.name}`,
      painPoints: [
        {
          title: 'Falta de linguagem específica para o seu público',
          desc: `Seu cliente busca segurança antes de contratar. Textos vagos não despertam confiança em ${niche.targetAudience}.`,
        },
        {
          title: 'Ausência de filtro qualificador antes do WhatsApp',
          desc: `Sem uma triagem inteligente na página, você recebe perguntas desalinhadas em vez de clientes prontos para avançar.`,
        },
        {
          title: 'Lentidão em dispositivos móveis',
          desc: `A grande maioria dos clientes pesquisa pelo celular. Páginas pesadas derrubam sua posição no Google e encarecem seus anúncios.`,
        },
      ],
      deliverablesTitle: `Diferenciais inclusos no projeto para ${niche.singular}`,
      deliverables: niche.specificFeatures,
      faqs: [
        {
          question: `Qual o prazo de entrega de um site ou landing page para ${niche.singular}?`,
          answer: `Entregamos landing pages de alta conversão entre 7 a 14 dias úteis e sites institucionais completos entre 10 a 20 dias úteis, já com textos persuasivos e design personalizado para a área de ${niche.name}.`,
        },
        {
          question: `Eu preciso escrever todos os textos da página?`,
          answer: `Não! Nossa equipe realiza um briefing rápido com você e estrutura toda a comunicação persuasiva específica para ${niche.name}, destacando seus diferenciais e serviços.`,
        },
        {
          question: `A página já vem com filtro para qualificar os contatos no WhatsApp?`,
          answer: `Sim! Incluímos um qualificador rápido onde o cliente seleciona a necessidade principal antes de abrir a conversa no seu WhatsApp, garantindo que o contato já chegue contextualizado.`,
        },
      ],
      relatedSlugs: [nextNiche1.slug, nextNiche2.slug, nextNiche3.slug, ...relatedCities],
    };
  });

  // 3. Ultra-Targeted Niche x Top 10 Cities combinations (12 top niches * 10 top cities = 120 pages)
  const topNiches = NICHES_DATA.slice(0, 12);
  const topCities = CITIES_DATA.slice(0, 10);

  topNiches.forEach((niche, nIdx) => {
    topCities.forEach((city, cIdx) => {
      const slug = `${niche.slug}-em-${city.slug}`;
      const nextCity = topCities[(cIdx + 1) % topCities.length];
      const nextNiche = topNiches[(nIdx + 1) % topNiches.length];

      pages[slug] = {
        slug,
        type: 'niche-city',
        cityName: city.name,
        stateCode: city.state,
        nicheName: niche.name,
        serviceName: `Site e Landing Page para ${niche.singular} em ${city.name}`,
        title: `Site para ${niche.singular} em ${city.name} (${city.state})`,
        metaTitle: `Criação de Site e Landing Page para ${niche.singular} em ${city.name} - ${city.state}`,
        metaDescription: `Especialistas em sites e landing pages para ${niche.name.toLowerCase()} em ${city.name} (${city.state}). Atraia clientes pelo Google e qualifique contatos no WhatsApp.`,
        badge: `${niche.singular.toUpperCase()} · ${city.name.toUpperCase()} (${city.state})`,
        heroTitle: `Sites e Landing Pages para ${niche.singular} em`,
        heroHighlight: `${city.name} (${city.state})`,
        heroSubtitle: `Posicione seu negócio de ${niche.singular.toLowerCase()} no topo das pesquisas de ${city.name} para atrair ${niche.targetAudience} e gerar ${niche.conversionGoal}.`,
        contextHeading: `Como destacar seu negócio de ${niche.singular} no mercado de ${city.name} (${city.state})`,
        contextParagraphs: [
          `Em um polo exigente como ${city.name} (${city.economicProfile}), profissionais e empresas de ${niche.name} enfrentam um desafio diário: ${niche.mainPain}.`,
          city.localInsight,
          `${niche.complianceOrDetail} Por isso, desenvolvemos para o mercado de ${city.name} páginas ultrarrápidas com filtro qualificador integrado, transformando pesquisas locais no Google em ${niche.conversionGoal}.`,
        ],
        painPointsTitle: `O que faz ${niche.name} em ${city.name} perderem clientes todos os dias`,
        painPoints: [
          {
            title: `Invisibilidade nas pesquisas locais de ${city.name}`,
            desc: `Clientes que pesquisam no Google por ${niche.singular.toLowerCase()} em ${city.name} já estão decididos a contratar. Se você não aparece na primeira página com uma estrutura impecável, esse cliente fecha com o concorrente do bairro ao lado.`,
          },
          {
            title: 'Páginas lentas que encarecem anúncios no Google e Instagram',
            desc: `Rodar tráfego pago em ${city.name} enviando o visitante para um site lento ou confuso desperdiça seu orçamento com cliques que não viram conversas no WhatsApp.`,
          },
          {
            title: 'Falta de triagem inteligente do perfil do cliente',
            desc: `Sem o formulário anti-curioso na página, você perde tempo respondendo contatos desalinhados em vez de focar em ${niche.conversionGoal}.`,
          },
        ],
        deliverablesTitle: `O que entregamos para o seu projeto de ${niche.singular} em ${city.name}`,
        deliverables: niche.specificFeatures,
        faqs: [
          {
            question: `Como a Web Lunar ajuda meu negócio de ${niche.singular} a aparecer no Google em ${city.name}?`,
            answer: `Combinamos arquitetura de código ultrarrápida (nota 90+ no Google PageSpeed) com SEO técnico geolocalizado para ${city.name} (${city.state}) e termos específicos buscados por ${niche.targetAudience}.`,
          },
          {
            question: `Em quanto tempo a página fica pronta para captar clientes em ${city.name}?`,
            answer: `Entregamos landing pages de alta conversão entre 7 a 14 dias úteis e sites completos entre 10 a 20 dias úteis, já configurados com botão de WhatsApp qualificador e prontos para campanhas em ${city.name}.`,
          },
          {
            question: `A estrutura respeita as normas do setor de ${niche.name}?`,
            answer: `Sim! ${niche.complianceOrDetail} Todos os textos e elementos visuais são construídos sob medida para transmitir máxima ética, autoridade e confiança.`,
          },
        ],
        relatedSlugs: [
          niche.slug,
          `criacao-de-sites-em-${city.slug}`,
          `criacao-de-landing-page-em-${city.slug}`,
          `${niche.slug}-em-${nextCity.slug}`,
          `${nextNiche.slug}-em-${city.slug}`,
          nextNiche.slug,
        ],
      };
    });
  });

  return pages;
}

export const PROGRAMMATIC_SEO_PAGES: Record<string, ProgrammaticPageData> = buildAllProgrammaticPages();

export const PROGRAMMATIC_SEO_LIST: ProgrammaticPageData[] = Object.values(PROGRAMMATIC_SEO_PAGES);
