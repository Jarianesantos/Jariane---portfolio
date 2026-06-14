const projects = {
  "site-roupa": {
    category: "Moda",
    title: "Site de Roupa",
    image: "assets/site-roupa.png",
    description:
      "Projeto pensado para marcas de roupa que precisam apresentar colecoes, campanhas e produtos com visual editorial.",
    goal: "Valorizar pecas e campanhas com uma experiencia elegante.",
    features: "Lookbook, colecoes, chamada para contato e layout responsivo.",
    tech: "HTML, CSS, JavaScript"
  },
  "loja-roupa": {
    category: "E-commerce",
    title: "Loja de Roupa",
    image: "assets/loja-roupa.png",
    description:
      "Vitrine online para vender roupas com organizacao por categoria, destaques e area de carrinho.",
    goal: "Ajudar o cliente a encontrar produtos e seguir para compra com rapidez.",
    features: "Catalogo, filtros visuais, produtos em destaque, carrinho e chamada de compra.",
    tech: "HTML, CSS, JavaScript"
  },
  "site-emprego": {
    category: "Recrutamento",
    title: "Site de Emprego",
    image: "assets/site-emprego.png",
    description:
      "Portal para conectar empresas e candidatos com busca de vagas, detalhes e formulario de candidatura.",
    goal: "Organizar oportunidades e facilitar candidaturas.",
    features: "Lista de vagas, filtros, perfil de candidato, area de empresa e candidatura.",
    tech: "HTML, CSS, JavaScript"
  },
  "curso-ingles": {
    category: "Educacao",
    title: "Curso de Ingles",
    image: "assets/curso-ingles.png",
    description:
      "Pagina de curso com niveis, beneficios, planos de aula e convite para matricula.",
    goal: "Apresentar o curso e converter visitantes em alunos.",
    features: "Niveis, aulas, depoimentos, chamada de matricula e contato.",
    tech: "HTML, CSS, JavaScript"
  },
  "analise-dados": {
    category: "Dados",
    title: "Analise de Dados",
    image: "assets/analise-dados.png",
    description:
      "Dashboard para transformar indicadores em leitura clara, com graficos e metricas.",
    goal: "Facilitar a interpretacao de resultados e apoiar decisoes.",
    features: "KPIs, graficos, ranking, indicadores e resumo executivo.",
    tech: "HTML, CSS, JavaScript"
  }
};

const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll(".project-card");
const detailImage = document.querySelector("#detail-image");
const detailCategory = document.querySelector("#detail-category");
const detailTitle = document.querySelector("#detail-title");
const detailDescription = document.querySelector("#detail-description");
const detailGoal = document.querySelector("#detail-goal");
const detailFeatures = document.querySelector("#detail-features");
const detailTech = document.querySelector("#detail-tech");
const copyEmailButton = document.querySelector("#copy-email");

function setActiveProject(projectId) {
  const project = projects[projectId];

  if (!project) {
    return;
  }

  detailImage.src = project.image;
  detailImage.alt = `Previa ampliada do projeto ${project.title}`;
  detailCategory.textContent = project.category;
  detailTitle.textContent = project.title;
  detailDescription.textContent = project.description;
  detailGoal.textContent = project.goal;
  detailFeatures.textContent = project.features;
  detailTech.textContent = project.tech;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    projectCards.forEach((card) => {
      const shouldShow = filter === "todos" || card.dataset.category === filter;
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

document.querySelectorAll("[data-open-project]").forEach((button) => {
  button.addEventListener("click", () => {
    setActiveProject(button.dataset.openProject);
    document.querySelector(".detail-section").scrollIntoView({ behavior: "smooth" });
  });
});

copyEmailButton.addEventListener("click", async () => {
  const email = "jarianenaval@gmail.com";

  try {
    await navigator.clipboard.writeText(email);
    copyEmailButton.textContent = "Email copiado";
  } catch {
    copyEmailButton.textContent = email;
  }
});
