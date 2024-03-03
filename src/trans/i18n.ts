import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: `Acting as a Purple Team, automating daily tasks with bash, Fraud prevention, applying in-product security, Threat 
      Intelligence and thinking outside the box every day.`,

      "about-title": `I Am`,
      "about-subtitle": `Rachel Bullmann`,

      about: `I have a degree in Computer Networks and Information Security, I have worked a long time 
      with support until you find out what WordPress
       sites can be hacked through vulnerabilities. I found out how I could 
       work with What I like the most, which is to read logs and understand 
       the origin of things, in the day by day. Today I'm on a Purple team looking 
       for ways to protect the threat company, mainly with frauds and malicious actors.`,

      "about-complement": 'In addition to being a full-time Mom, you can call me "MommyOffice".',

      "hability-title": `My`,
      "hability-subtitle": `Skills`,
      "hability-01": "Redes de computadores",
      "hability-02": "Hosting",
      "hability-03": "Investigação e Prevenção a Fraude",
      "hability-04": "Inteligencia de ameaças/OSINT",
      "hability-05": "Linux/script",
      "hability-06": "Siem",
      "hability-07": "IAM",
      "hability-08": "Inglês intermediário",

      "ex-title": "My",
      "ex-subtitle": "Experiences",

      "ex-01": `* Unisys - direct support to the end user assisting with daily difficulties correlated to the OS and installed software, assisting in problem solving. via phone, chat, and remote access. * Senac MS - intern in face-to-face support, performing formatting, exchange of parts and machines and technical support to the internal employee. * Nastek - support for the company's system, dealing with the needs of technicians in the field and supporting in problem solving and writing daily reports.`,
      "ex-02": `At Hostgator I worked as an advanced support for the company's dedicated and shared hosting servers. Daily activities involved installing and updating packages, troubleshooting DNS and SMTP issues, maintaining cPanel and Plesk hosting panels. In addition to automating daily or repetitive tasks with bash script. Attendance via ticket and chat, explaining the technical part in a way that the customer understands.`,
      "ex-03": `Currently working at RD Station, I'm acting as a Purple team where my daily challenge is to protect the product against fraud and possible threats. I work with Threat Intelligence to bring more security to the company and our customers. I perform analysis of various data daily in search of patterns, I have proximity with the product teams for security recommendations in new features.`,
      'ex-title-01':'Support Analyst',
      'ex-title-02':'Linux Advanced Support Analyst',
      'ex-title-03':'Cyber Security Engineer',

      'contact-title': 'My',
      'contact-subtitle': 'Contact'
    },
  },
  pt: {
    translation: {
      home: `Atuando como Purple Team, automatizando tarefas diarias com bash,prevenção a Fraudes, aplicando
       Segurança no produto, Threat Intelligence e pensando fora da caixa todos os dias.`,

      "about-title": `Eu sou`,
      "about-subtitle": `Rachel Bullmann`,

      about: `Sou formada em Redes de Computadores e Segurança da Informação, atuei
      muito tempo com suporte até descobrir que sites em wordpress podem ser
      invadidos através de vulnerabilidades. Descobri como poderia atuar com
      o que mais gosto, que é ler logs e entender a origem das coisas, no
      dia a dia. Hoje estou em um Purple team buscando formas de proteger a
      empresa de ameaças, principalmente com fraudes e atores malicioso.`,

      "about-complement": 'Além de ser Mãe em tempo integral, pode me chamar de "MommyOffice".',

      "hability-title": `Minhas`,
      "hability-subtitle": `Habilidades`,
      "hability-01": "Redes de computadores",
      "hability-02": "Hosting",
      "hability-03": "Investigação e Prevenção a Fraude",
      "hability-04": "Inteligencia de ameaças/OSINT",
      "hability-05": "Linux/script",
      "hability-06": "Siem",
      "hability-07": "IAM",
      "hability-08": "Inglês intermediário",

      "ex-title": "Minhas",
      "ex-subtitle": "Experiências",

      "ex-01": `* Unisys - suporte direto ao usuário final auxiliando com dificuldades diárias correlacionadas ao SO e Softwares instalados, auxiliando na resolução de problemas.
      através do telefone, chat e acesso remoto.          
      * Senac MS - estagiaria no suporte presencial, realizando formatações, troca de peças e maquinas e apoio técnico ao funcionário interno.         
      * Nastek - suporte para o sitema da empresa lidando com necessidades de técnicos em campo e apoiando nas soluções de problemas e escritas de relatórios diarios`,
      "ex-02": `Na Hostgator atuei como suporte avançado aos servidores de hospedagem dedicados e compartilhados da empresa. Atividades diárias envolviam instalação e atualização de pacotes, resoluções de problemas de DNS e SMTP, manutenção nos paineis de hospedagem cPanel e Plesk. Além de automatizar 
      tarefas diárias ou repetitivas com bash script. Atendimentos via ticket e chat, explicando a parte técnica de maneira que o cliente entenda.`,
      "ex-03": `Atualmente trabalho na RD Station, estou atuando como Purple team onde meu desafio diário é proteger o produto contra Fraudes
       e possíveis ameaças. Atuo com Threat Intelligence para trazer mais segurança para a empresa e aos nossos clientes. Realizo análise de diversos
       dados diariamente em busca de padrões, possuo proximidade com os times de produto para recomendações de segurança em novas funcionalidades.`,
       'ex-title-01':'Analista de Suporte',
       'ex-title-02':'Analista de suporte avançado Linux',
       'ex-title-03':'Cyber Security Engineer',

       'contact-title': 'Meu',
       'contact-subtitle': 'Contato'
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
