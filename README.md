Inicialização do Projeto
Clone o repositório para o seu ambiente local:

git clone https://github.com/edcarlosrocha/future-web.git
Configure suas informações de usuário localmente:

git config user.name "seu nome entre as aspas"
git config user.email "seu email do GitHub entre as aspas"
Atualize o repositório local com as últimas alterações:

git pull origin main
Ciclo de Trabalho
Certifique-se de que está na branch principal (main):

git checkout main
git pull origin main
Crie um novo branch para suas mudanças:

git checkout -b nome-da-branch
Codifique todas as mudanças desejadas e faça commits significativos:

git add .
git commit -m "Descrição clara das mudanças realizadas"
Atualize a branch principal antes de mesclar:

git checkout main
git pull origin main
Mescle as alterações do branch de trabalho (nome-da-branch) na branch principal:

git merge nome-da-branch
Resolução de Conflitos
Se ocorrerem conflitos durante o merge, siga estas etapas:

Resolva os conflitos manualmente.
Adicione as alterações ao staging area:
git add .
Continue com o processo de merge:
git merge --continue
Envio das Alterações
Envie as alterações para o repositório remoto:

git push origin main
Lembre-se de seguir boas práticas de codificação e contribuir de maneira construtiva para o desenvolvimento do projeto. A Future Web agradece sua colaboração!
