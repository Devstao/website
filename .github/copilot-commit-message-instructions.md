Especifique o tipo do commit (ex.: `chore`, `refact`, etc.)
Ao gerar mensagens de commit, o Copilot deve sugerir um título breve, descritivo e no imperativo, indicando resumidamente a principal alteração realizada. No corpo (body) da mensagem de commit, o Copilot deve detalhar separadamente as alterações feitas em cada arquivo modificado, listando o nome do arquivo seguido de uma breve descrição da mudança correspondente. Por exemplo:

```xml
✨ *<type>: <short summary>*

<detailed description - what, why, how>

Files Changed:
- *<path/file1.ext>*: <short summary of what changed>
- *<path/file2.ext>*: <short summary of what changed>
```

Os commits precisam ser em português

Recomenda-se também sugerir o uso de emojis no início do título do commit, conforme o tipo de alteração, como por exemplo: ✨ para nova feature, 🐛 para correção de bug, 🔧 para ajustes de configuração, entre outros.
