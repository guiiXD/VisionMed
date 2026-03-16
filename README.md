VisionMed - Centro Oftalmológico
 Site institucional desenvolvido para a VisionMed, focado em oferecer uma experiência moderna, profissional e acessível. O projeto prioriza a navegabilidade e a 
 identidade visual forte, utilizando tecnologias fundamentais do desenvolvimento front-end.

* Sobre o Projeto:
 - A proposta do site é estabelecer a presença digital da clínica, facilitando o acesso de pacientes a informações cruciais como exames realizados, convênios aceitos e canais 
diretos de agendamento. Além de transmitir credibilidade, o site busca simplificar a jornada do usuário até o contato final.

* Diferenciais do Site:
 - Visual limpo e institucional.
 - Paleta de cores alinhada à identidade da clínica.
 - Navegação simples e intuitiva.
 - Suporte a tema claro e escuro (Light/Dark Mode).
 - Integração com WhatsApp e Google Maps.

* Tecnologias Utilizadas:
 - HTML5: Estruturação semântica do conteúdo.
 - CSS3: Estilização, animações de scroll e gerenciamento de temas.
 - JavaScript: Manipulação de DOM, persistência de tema via localStorage e lógica de navegação.
 - APIs: Google Maps Embed e WhatsApp API.
 - Tipografia: Google Fonts.

* Funcionalidades:
 - Navegação Dinâmica: Header com scroll suave e destaque automático do item ativo no menu.
 - Gerenciamento de Tema: Alternância manual entre modo claro e escuro, com detecção automática das preferências do sistema.
 - Componentes Interativos: Carrossel de exames, botão flutuante de WhatsApp e botão de retorno ao topo.
 - Conteúdo Informativo: Seção institucional, área de convênios e mapa de localização integrado.
 - Feedback Visual: Animações suaves nas seções durante a rolagem da página.

* Estrutura do Projeto:
 Plaintext
 VisionMed/
 ├── visionmed.html   # Documento principal
 ├── home.css         # Estilização e variáveis de cores
 ├── script.js        # Lógica de interações e comportamento
 └── imagens/         # Assets visuais
    ├── banner_olho.png
    ├── logo.png
    ├── icone.png
    └── ... (arquivos de mídia auxiliares)

* Seções do Site:
 - Início: Banner principal com mensagem de apresentação e botão para agendamento.
 - Sobre: Apresentação institucional destacando tecnologia, atendimento humanizado e experiência na área.
 - Exames: Catálogo dos principais procedimentos com descrições resumidas dentro de um carrossel.
 - Convênios: Lista de planos atendidos e orientações de cobertura.
 - Localização: Endereço físico com mapa integrado para facilitar o acesso.
 - Contato: Canais diretos via telefone, e-mail e redes sociais.
 - Footer: Rodapé com resumo institucional e links rápidos.

* Identidade Visual:
 - O design foi fundamentado em uma paleta de cores que comunica os valores da clínica:
  • Azul Marinho: Transmite confiança, seriedade e estabilidade.
  •Laranja: Utilizado para chamadas para ação (CTA) e destaques.
  •Tons Neutros: Garantem leveza visual e alta legibilidade.

* Como Executar o Projeto:
 - Como este é um projeto front-end estático, não há necessidade de instalação de dependências:
 - Faça o download ou clone o repositório.
 - Abra o arquivo visionmed.html em qualquer navegador moderno.
 - Para desenvolvimento, recomenda-se o uso da extensão Live Server no Visual Studio Code para atualização automática do navegador.

* Responsividade:
 - O site da VisionMed está em processo de adaptação para diferentes tamanhos de tela, com foco em oferecer uma navegação confortável e organizada também em dispositivos móveis.
 - A estrutura responsiva está sendo desenvolvida para garantir boa visualização em:
    • smartphones
    • tablets
    • notebooks
    • desktops

 - Foram planejados e aplicados ajustes para que os elementos do site se reorganizem de forma mais adequada em telas menores, incluindo:
   • reorganização do header e do menu de navegação
   • redimensionamento de textos, botões e espaçamentos
   • adaptação das seções institucionais
   • ajuste do carrossel de exames para uso em telas touch
   • reorganização dos cards de convênios e contato
   • adequação do footer para dispositivos móveis
   •reposicionamento dos botões flutuantes

 - Além disso, o carrossel de exames também recebeu suporte para interação por toque, permitindo que o usuário deslize os slides com o dedo em dispositivos mobile, melhorando a 
 experiência de uso.

* Status da responsividade:
 - A responsividade está em desenvolvimento e faz parte da evolução contínua do projeto, com foco em refinamentos visuais e melhor adaptação para diferentes plataformas.

* Desafios encontrados no desenvolvimento
 - Durante a construção do site da VisionMed, alguns desafios importantes surgiram ao longo do processo. Eles foram fundamentais para o amadurecimento do projeto e para a 
 evolução da estrutura visual e funcional da página.

 1. Construção de uma identidade visual coerente.
   Um dos primeiros desafios foi encontrar uma estética que transmitisse, ao mesmo tempo, profissionalismo, confiança, modernidade e acolhimento, características essenciais 
   para um site da área da saúde. Foi necessário ajustar paleta de cores, tipografia, espaçamentos, destaques visuais e estilo geral até chegar a uma apresentação mais alinhada 
   com a proposta institucional da clínica.

 2. Organização do layout.
   No início, algumas partes do site apresentavam uma estrutura mais simples e linear. Um dos desafios foi transformar esse conteúdo em uma interface mais agradável visualmente, 
   evitando uma aparência que desse a sensação de “lista” e deixando a navegação mais fluida. Isso exigiu reorganização das seções, melhoria na distribuição dos elementos e 
   criação de blocos visuais mais equilibrados.

 3. Ajustes finos de alinhamento e espaçamento.
  Boa parte do desenvolvimento envolveu correções detalhadas de posicionamento, como:
   • alinhamento da logo.
   • distribuição dos elementos no header.
   • ajuste do espaçamento entre textos, cards e seções.
   • correção de âncoras do menu fixo.
   • posicionamento visual de elementos no footer.
  Esses ajustes foram importantes para dar ao site um acabamento mais profissional.

 4. Implementação do modo escuro.
  A criação do modo escuro trouxe desafios tanto visuais quanto funcionais. Foi necessário adaptar cores, contrastes, botões, cards, footer e elementos informativos para que o 
  site continuasse bonito e legível em ambos os temas. Além disso, também foi implementada a lógica de alternância manual de tema, persistência com localStorage e detecção do 
  tema do sistema operacional.

 5. Comportamento visual do header e da navegação.
  Outro desafio importante foi fazer com que o header fixo funcionasse bem junto com a navegação por seções. Isso envolveu ajustar o comportamento do menu, corrigir a posição 
  de chegada ao clicar nos links e aplicar destaque automático no item ativo conforme a rolagem da página.

 6. Desenvolvimento do carrossel de exames.
  A seção de exames exigiu um cuidado maior por envolver um componente interativo. Foi necessário estruturar:
   • navegação por botões.
   • indicadores de slide.
   • transição automática.
   • pausa ao interagir
   • suporte a toque em dispositivos móveis
  Esse foi um dos pontos mais importantes para deixar o site mais dinâmico e menos estático.

 7. Responsividade para dispositivos móveis.
  Como o projeto começou com foco visual em tela maior, um dos desafios posteriores foi adaptar toda a estrutura para mobile. Isso incluiu revisar proporções, reorganizar grids,
  redimensionar fontes, ajustar botões, melhorar o uso do carrossel em telas touch e repensar o comportamento do layout em diferentes larguras de tela.

 8. Equilíbrio entre estética e funcionalidade.
  Ao longo do projeto, foi necessário tomar várias decisões para equilibrar beleza visual e usabilidade. Em muitos momentos, elementos que pareciam interessantes visualmente 
  precisaram ser refinados para não comprometer a leitura, a organização do conteúdo ou a navegação do usuário.

 9. Evolução contínua do projeto.
  Outro desafio foi justamente o processo de evolução constante. O site passou por diversas melhorias incrementais, com revisões frequentes em detalhes visuais, animações, seções
  institucionais, footer, contatos e comportamento responsivo. Esse processo foi importante para transformar uma base inicial em uma interface mais sólida e profissional.
 
- Cada desafio enfrentado contribuiu para melhorar o projeto em aspectos técnicos, visuais e estruturais. Mais do que apenas construir uma página, o desenvolvimento do site 
  da VisionMed serviu como prática real de:
   • organização de interface.
   • refinamento visual.
   • experiência do usuário.
   • responsividade.
   • manipulação com JavaScript.
   • construção de um projeto institucional mais completo.

* Possíveis Melhorias Futuras:
 - Criação de um formulário de agendamento interno.
 - Painel administrativo para gerenciamento de exames e convênios.
 - Otimização de SEO (Search Engine Optimization).
 - Galeria de fotos da estrutura física da clínica.

* Status do Projeto:
 -Em desenvolvimento. O projeto possui uma base sólida e funcional, estando aberto a refatorações e novas funcionalidades.

* Autor:
 - Guilherme Pinheiro Rodrigues de Souza

* Licença
 - Este projeto foi desenvolvido para fins de estudo, prática de desenvolvimento web e uso institucional da clínica VisionMed. Todos os direitos reservados ao autor.
