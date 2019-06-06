# site

Site da comunidade perifaCode

## Como rodar o site localmente

Instalação das dependências:

Instalação do rbenv, para manter as versões de Ruby: [rbenv doc](https://github.com/rbenv/rbenv#installation).

Comandos do rbenv: [devhints](https://devhints.io/rbenv).

Após a instalação do rbenv, instale a versão 2.6.3 do Ruby:

```
rbenv install  2.6.3
```

Agora pode seguir a configuração do site baseado em nossas dependências locais.

```
bundle install
```

Rodar o site:

```
bundle exec jekyll s
```

O site estará disponível em localhost:4000
