## 🗂️ Modelo de Dados

Abaixo está o detalhamento dos campos, tipos e regras de negócio para cada entidade do sistema:

### 📄 Apresentação
- `titulo` (string)
- `descricao` (string)
> ⚠️ **Regra de Negócio**: Permite apenas READ, UPDATE e DELETE. Trata-se de um registro único, não existindo a operação de POST (Create) para múltiplos registros.

### 🎓 Formação
- `nome` (string)
- `status` (boolean)
- `local` (string)
- `inicio` (int - formato AAAA)
- `fim` (int - formato AAAA)
> ⚠️ **Regras de Negócio**: 
> - `inicio < fim` (O ano de início deve ser anterior ao ano de término)
> - `inicio != fim` (O curso deve ter duração de pelo menos anos distintos)

### 💼 Experiência
- `nome` (string)
- `local` (string)
- `atual` (boolean)
- `inicio` (string - ex: "YYYY-MM")
- `fim` (string - ex: "YYYY-MM" ou null se atual)
- `descricao` (string)
- `tecnologias` (Array de strings)

### 🛠️ Habilidade Técnica
- `nome` (string)
- `categoria` (ENUM: `["Front-End", "Back-End", "Ferramentas"]`)
- `img` (string - URL ou caminho da imagem)

### 🚀 Projeto
- `titulo` (string)
- `finalizado` (boolean)
- `img` (string - URL ou caminho da imagem)
- `descricao` (string)
- `tecnologias` (Array de strings)

### 📜 Certificação
- `nome` (string)
- `instituicao` (string)
- `ano` (int - formato AAAA)
- `url` (string - link para validação)

### 📞 Forma de Contato
- `img` (string - ícone ou logo)
- `url` (string - link do contato/rede social)