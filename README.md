# Portfolio Jariane Santos

Site estatico em HTML, CSS e JavaScript com projetos de:

- Site de roupa
- Loja de roupa
- Site de emprego
- Curso de ingles
- Analise de dados

Contato: `jarianenaval@gmail.com`

## Como usar no VS Code

1. Abra o VS Code.
2. Clique em `File` > `Open Folder`.
3. Selecione esta pasta:

```text
C:\Users\santo\OneDrive\Área de Trabalho\moritoranavioenergiasolar
```

4. Abra o arquivo `index.html`.
5. Para testar no navegador, use uma destas opcoes:

```powershell
python -m http.server 8000
```

Depois abra:

```text
http://localhost:8000/index.html
```

Voce tambem pode abrir o `index.html` direto no navegador.

## Como enviar para o GitHub

No terminal do VS Code, rode:

```powershell
git init
git add .
git commit -m "Criar portfolio Jariane Santos"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
git push -u origin main
```

Troque `SEU-USUARIO` pelo seu usuario do GitHub e `NOME-DO-REPOSITORIO` pelo nome do repositorio.

## Como publicar com GitHub Pages

1. Entre no repositorio no GitHub.
2. Abra `Settings`.
3. Clique em `Pages`.
4. Em `Build and deployment`, escolha:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Salve.

O GitHub vai gerar um link parecido com:

```text
https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/
```
