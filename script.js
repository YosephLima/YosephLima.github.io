// - Declaração de 'componente' do Status, usado em várias seções

function statusComponent(text,color) {
    return `<span class="text-${color}-500">
                <span class="status-dot status-dot-${color}"></span><span class="text-[1.05rem]">${text}</span>
            </span>`
}

// - Iteração das Formações

const formacao = [
    {
        nome: 'Desenvolvimento de Software Multiplataforma',
        local: 'FATEC Prof. Jessen Vidal - São José dos Campos',
        periodo: '2025 - 2028',
        cursando: true,
    },
    {
        nome: 'Técnico em Desenvolvimento de Sistemas',
        local: 'SENAI Félix Guisard - Taubaté',
        periodo: '2021 - 2023',
        cursando: false,
    },
]

const containerFormacao = document.getElementById('formacao-container');

function renderFormacao() {
    if (!containerFormacao) return;

    containerFormacao.innerHTML = formacao.map(curso => `
         <div class="w-full">
            <div class="card p-4">
                <h5 class="text-xl font-semibold mb-2"><i class="bi bi-mortarboard-fill text-primary"></i>
                    ${curso.nome} ${curso.cursando ? (statusComponent('Cursando','green')): ''}</h5>
                <p class="m-0">${curso.local} | ${curso.periodo}</p>
            </div>
        </div>
    `).join('');
}

// - Iteração das Experiências

const experiencias = [
    {
        trabalhos: [
            {
                cargo: 'Desenvolvedor Júnior',
                empresa: 'Isolar Energy',
                periodo: 'Ago 2025 - Presente',
                descricao: "Implementações de novas funcionalidades, refatorações, conexões com API's externas e planilhas de cálculo transformadas em código.",
                tecnologias: "React, TypeScript, PHP, MySQL, Docker, API's RESTful",
                atual: true,
            }
        ]
    },
    {
        trabalhos: [
            {
                cargo: 'Estagiário de Desenvolvimento',
                empresa: 'Isolar Energy',
                periodo: 'Set 2024 - Jul 2025',
                descricao: "Alterações em sistemas legados e desenvolvimento de novas funcionalidades simples.",
                tecnologias: "React, TypeScript, PHP, MySQL",
                atual: false,
            },
            {
                cargo: 'Auxiliar de Engenharia/Topografia',
                empresa: 'Isolar Energy',
                periodo: 'Jun 2024 - Jun 2025',
                descricao: "Atividades de topografia (em campo e escritório) e suporte à equipe de engenharia.",
                tecnologias: "Excel, Agisoft Metashape, Google Earth Pro, Aparelhos RTK (GNSS)",
                atual: false,
            }
        ]
    }
];

const containerExperiencia = document.getElementById('experiencia-container');

function renderExperiencias() {
    if (!containerExperiencia) return;

    containerExperiencia.innerHTML = experiencias.map(card => `
        <div class="w-full">
            <div class="card p-4">
                ${card.trabalhos.map(trabalho => `
                    <h5 class="text-xl font-semibold mb-2">
                        ${trabalho.cargo} - ${trabalho.empresa}
                        ${trabalho.atual ? statusComponent('Atual', 'green') : ''}
                    </h5>
                    <p class="text-sm mb-2">${trabalho.periodo}</p>
                    <p class="m-0 mb-2">${trabalho.descricao}</p>
                    <p class="mb-0"><strong>Tecnologias:</strong> ${trabalho.tecnologias}</p>
                `).join('<hr class="my-4 border-gray-600" />')} 
                </div>
        </div>
    `).join('');
}

// - Iteração das Habilidades

const habilidades = [
    {
        key: 'front-end',
        types: 'Front-end',
        icon: 'bi bi-code-slash',
        items: [
            {
                nome: 'HTML',
                img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
            },
            {
                nome: 'CSS',
                img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
            },
            {
                nome: 'JavaScript',
                img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
            },
            {
                nome: 'TypeScript',
                img: './img/tecs/ts.png'
            },
            {
                nome: 'React.js',
                img: './img/tecs/react.png'
            },
            {
                nome: 'Vite.js',
                img: './img/tecs/vite.png'
            },
            {
                nome: 'Bootstrap',
                img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
            },
            {
                nome: 'Tailwind',
                img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
            }
        ]
    },
    {
        key: 'back-end',
        types: 'Back-end',
        icon: 'bi bi-server',
        items: [
            {
                nome: 'PHP',
                img: './img/tecs/php.png'
            },
            {
                nome: 'C',
                img: './img/tecs/c.png'
            },
            {
                nome: 'Python',
                img: './img/tecs/python.png'
            },
            {
                nome: 'Flask',
                img: './img/tecs/flask.png'
            },
            {
                nome: 'REST APIs',
                img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg'
            },
            {
                nome: 'MySQL',
                img: './img/tecs/mysql.png'
            }
        ]
    },
    {
        key: 'ferramentas',
        types: 'Ferramentas',
        icon: 'bi bi-tools',
        items: [
            {
                nome: 'Git',
                img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
            },
            {
                nome: 'GitHub',
                img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
            },
            {
                nome: 'Docker',
                img: './img/tecs/docker.png'
            },
            {
                nome: 'AWS',
                img: './img/tecs/aws.png'
            },
            {
                nome: 'XAMPP',
                img: './img/tecs/xampp.png'
            },
            {
                nome: 'VS Code',
                img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
            }
        ]
    }
];

const containerHabilidades = document.getElementById('habilidades-container');

function renderHabilidades() {
    if (!containerHabilidades) return;

    containerHabilidades.innerHTML = habilidades.map(categoria => `
        <div class="col-md-4">
            <div class="card p-6 h-100">
                <h5 class="text-center text-xl font-semibold mb-4">
                    <i class="${categoria.icon}"></i> ${categoria.types}
                </h5>
                <div class="grid grid-cols-3 gap-3">
                    ${categoria.items.map(item => `
                        <div class="tech-card">
                            <img src="${item.img}" alt="${item.nome}" class="tech-icon">
                            <span class="tech-name">${item.nome}</span>
                        </div>
                    `).join('')} </div>
            </div>
        </div>
    `).join('');
}

// - Adição de Habilidades

const habilidadesEditBtn = document.getElementById('habilidades-editar-btn');
const habilidadeModalElement = document.getElementById('habilidade-modal');
const habilidadeForm = document.getElementById('habilidade-form');
const habilidadeFeedback = document.getElementById('habilidade-feedback');

if (habilidadesEditBtn && habilidadeModalElement) {
    const habilidadeModal = new bootstrap.Modal(habilidadeModalElement);

    habilidadesEditBtn.addEventListener('click', () => {
        if (habilidadeFeedback) {
            habilidadeFeedback.innerHTML = '';
        }
        habilidadeModal.show();
    });
}

if (habilidadeForm) {
    habilidadeForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const categoriaInput = document.getElementById('habilidade-categoria');
        const nomeInput = document.getElementById('habilidade-nome');
        const imagemInput = document.getElementById('habilidade-img');

        const categoria = categoriaInput ? categoriaInput.value.trim() : '';
        const nome = nomeInput ? nomeInput.value.trim() : '';
        const img = imagemInput ? imagemInput.value.trim() : '';

        if (categoria === '' || nome === '' || img === '') {
            if (habilidadeFeedback) {
                habilidadeFeedback.innerHTML = '<div class="alert alert-warning py-2 mb-0">Preencha todos os campos obrigatórios para cadastrar a habilidade.</div>';
            }
        } else {
            const categoriaEncontrada = habilidades.find(item => item.key === categoria);

            if (!categoriaEncontrada) {
                if (habilidadeFeedback) {
                    habilidadeFeedback.innerHTML = '<div class="alert alert-warning py-2 mb-0">Categoria inválida. Selecione uma categoria existente.</div>';
                }
            } else {
                categoriaEncontrada.items.push({
                    nome,
                    img,
                });

                renderHabilidades();
                habilidadeForm.reset();

                if (habilidadeFeedback) {
                    habilidadeFeedback.innerHTML = '<div class="alert alert-success py-2 mb-0">Habilidade adicionada com sucesso!</div>';
                }
            }
        }
    });
}

// - Iteração dos Projetos

const projetos = [
    {
        nome: 'My Personal Accounting',
        status: 'Em Desenvolvimento',
        statusColor: 'yellow',
        img: './img/contabilidade.png',
        classeContainerImg: 'flex items-center justify-center mb-4 bg-gray-300 h-64 rounded-md p-8',
        classeImg: 'max-h-full max-w-full object-contain mx-auto',
        descricao: 'Aplicação completa para gestão de finanças pessoais, com controle de despesas e receitas. Sendo um projeto pessoal, <b>sou o único Desenvovedor (Full-Stack)</b>, criando o layout, modelando o banco de dados e estruturando o Front e Back-End. Atualmente será de uso interno, mas planejo moldá-lo para um projeto público.',
        link: null,
        tecnologias: [
            { nome: 'React.js', img: './img/tecs/react.png' },
            { nome: 'Vite.js', img: './img/tecs/vite.png' },
            { nome: 'TypeScript', img: './img/tecs/ts.png' },
            { nome: 'PHP', img: './img/tecs/php.png' },
            { nome: 'MySQL', img: './img/tecs/mysql.png' },
            { nome: 'Docker', img: './img/tecs/docker.png' }
        ]
    },
    {
        nome: 'Planeja SJC',
        status: 'Concluído',
        statusColor: 'green',
        img: './img/PlanejaSJC.png',
        classeContainerImg: '',
        classeImg: 'w-full h-64 object-cover rounded mb-4',
        descricao: 'Plataforma de Gráficos interativos sobre os dados do Censo 2022 do município de São José dos Campos. Desenvolvido como Projeto Integrador na FATEC SJC, <b>tive minha participação como Product Owner & Back-End Developer</b>, responsável por, principalmente, estruturar a disposição dos gráficos.',
        link: 'https://github.com/OmniDevsOficial/API-Censo-2022',
        tecnologias: [
            { nome: 'HTML', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
            { nome: 'CSS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
            { nome: 'MySQL', img: './img/tecs/mysql.png' },
            { nome: 'AWS', img: './img/tecs/aws.png' },
            { nome: 'Python', img: './img/tecs/python.png' },
            { nome: 'Flask', img: './img/tecs/flask.png' }
        ]
    }
];

const containerProjetos = document.getElementById('projetos-container');

function renderProjetos() {
    if (!containerProjetos) return;

    containerProjetos.innerHTML = projetos.map(projeto => `
        <div class="col-md-6">
            <div class="card h-100">
                <div class="card-body flex flex-col"> <h5 class="text-xl font-semibold mb-3 text-center"> 
                        ${projeto.nome} 
                        ${projeto.status ? statusComponent(projeto.status, projeto.statusColor) : ''}
                    </h5>
                    
                    ${projeto.classeContainerImg ? `
                        <div class="${projeto.classeContainerImg}">
                            <img src="${projeto.img}" alt="${projeto.nome}" class="${projeto.classeImg}">
                        </div>
                    ` : `
                        <img src="${projeto.img}" alt="${projeto.nome}" class="${projeto.classeImg}">
                    `}

                    <p class="mb-3 flex-grow">${projeto.descricao}</p> <p class="mb-2 font-semibold text-center mt-auto">Tecnologias:</p> <div class="flex flex-wrap gap-2 mb-4 items-center justify-center">
                        ${projeto.tecnologias.map(tech => `
                            <div class="project-tech-icon" title="${tech.nome}">
                                <img src="${tech.img}" alt="${tech.nome}">
                            </div>
                        `).join('')}
                    </div>

                    <div class="text-center mt-3">
                        <a ${projeto.link ? `href="${projeto.link}" target="_blank"` : ''} 
                           style="text-decoration: none;"
                           class="${projeto.link ? '' : 'cursor-pointer'} inline-block px-8 py-2.5 bg-blue-500 hover:bg-blue-400 text-white rounded-lg font-semibold border-2 border-blue-400 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
                           Acessar
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// - Iteração das Certificações

const certificacoes = [
    {
        nome: 'Técnico em Desenvolvimento de Sistemas',
        instituicao: 'SENAI Taubaté - 2023',
        link: null,
        icone: 'bi-filetype-pdf',
        corBotao: '',
        tooltip: 'Ver PDF'
    },
    {
        nome: 'Programação de Robôs Industriais',
        instituicao: 'SENAI Taubaté - 2023',
        link: null,
        icone: 'bi-filetype-pdf',
        corBotao: '',
        tooltip: 'Ver PDF'
    },
    {
        nome: 'AWS Academy Cloud Foundations',
        instituicao: 'Amazon Web Services - 2022',
        link: 'https://www.credly.com/badges/00fa832f-d2fc-415b-8ede-0e2e63e1f115/print',
        icone: 'bi-eye',
        corBotao: '!bg-blue-600',
        tooltip: 'Acessar Certificado'
    },
    {
        nome: 'Escola de Inovadores',
        instituicao: 'INOVA CPS - 2025',
        link: 'https://drive.google.com/file/d/1tV3KV7SpCNKKyRnOwVJj_p8aiaM-UUPr',
        icone: 'bi-filetype-pdf',
        corBotao: '',
        tooltip: 'Ver PDF'
    }
];

const containerCertificacoes = document.getElementById('certificacoes-container');

function renderCertificacoes() {
    if (!containerCertificacoes) return;

    containerCertificacoes.innerHTML = certificacoes.map(cert => `
        <div class="col-md-6">
            <div class="card p-4">
                <div class="flex justify-between items-center">
                    <div>
                        <h6 class="text-lg font-semibold mb-2">
                            <i class="bi bi-award-fill text-warning"></i> ${cert.nome}
                        </h6>
                        <p class="m-0">${cert.instituicao}</p>
                    </div>
                    
                    <a ${cert.link ? `href="${cert.link}" target="_blank" rel="noopener noreferrer"` : ''} 
                       class="cert-pdf-btn cursor-pointer ${cert.corBotao}" 
                       title="${cert.tooltip}">
                        <i class="bi ${cert.icone}"></i>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// - Chamada de Todas as Funções

renderFormacao();
renderExperiencias();
renderHabilidades();
renderProjetos();
renderCertificacoes();
