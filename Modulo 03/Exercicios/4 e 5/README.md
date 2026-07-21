# techaulas
(trabalho pedagofico preparado pelo professor Macio, com o objetivo de criar uma empresa de acordo com as exigencias de um cliente  ) O site Tech aulas é voltada para vender cursos de tecnologia, mostrando a possiveis assinantes os tipos diferentes de cursos disponiveis e mentorias pesonalizadas com profissionais da area.


Documentação

assets:
banner -> imagens dos banner individualmente
logo -> ícone do linkedin e instagram e logo da empresa




css:

base

reset.css -> reset do padding, margin, box-sizing e padronização do body
variables.css -> criação das váriaveis

components
banner.css -> banner padrão com a resolucao e estilo
button.css -> botão padrão que vai ser usado no formulário
dropdown.css -> dropdown da navegação do header
form.css -> formulário de cadastro, login
maps.css -> google maps com a localização do colégio
videos.css -> proporção dos vídeos dos cursos


main.css -> importações do css
inicio.css -> css da página início.html
style.css -> estilo padrão de todos os main do html

js:

components

dropdown.js -> da página de avaliações
site-banner.js -> html do banner
site-header.js -> html do header
site-footer.js -> html do footer

pages

cadastro.html -> página de cadastro do usuário
cadastro.js -> js de cadastro do usuário
esqueceusenha.html -> página para recuperação de senha (a fazer)
login.html -> página de entrar do usuário
login.js -> js de entrar do usuário

services

viacep.js -> API do CEP - página de cadastro


pages:

somente o main de cada página, para mexer no header e footer usar:

header html -> js/components/site-header.js | css -> css/layout/header.css
footer html -> js/components/site-footer.js | css -> css/layout/footer.css