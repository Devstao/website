"""
<Breve descrição da função.>

Args:
<param1> (<type>): <descrição>
<param2> (<type>): <descrição>

Returns:
<type>: <descrição do valor retornado>

Raises:
<ExceptionType>: <descrição> (opcional)

"""

Exemplo de aplicação:

- O titulo da docstring devem ter exatos 75 caracteres
- Use linguagem clara e técnica.
- O texto e a primeira palavra do sumário precisa ser em modo imperativo
- O texto da docstring precisa ser em português
- Caso funções/classes não tenham comentários, inclua comentários do tipo "#" para explicar o código sempre.
- Corrija erros do tipo "Missing type annotation"
- Você não precisa inserir docstrings em arquivos stub
- As docstrings precisam respeitar o limite de linhas de 88 caracteres
- As funções devem ter seus parâmetros e retornos tipados
- Ao tipar funções e retornos, evite usar tipos genéricos como "Any" ou "object", em vez disso `Generic[T]` sendo T um TypeVar.
