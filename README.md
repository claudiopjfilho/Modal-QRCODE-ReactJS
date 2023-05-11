# Modal QR Code para ReactJS

Este repositório contém um componente ReactJS que exibe um modal com um QR Code. O QR Code pode ser gerado a partir de uma string de texto ou de uma URL, e o modal é exibido ao clicar em um botão.

O componente foi desenvolvido usando ReactJS e a biblioteca [qrcode.react](https://www.npmjs.com/package/qrcode.react) para gerar o QR Code. O estilo do modal é criado com CSS puro, sem a utilização de bibliotecas externas.

## Como Usar

Para usar o componente em seu projeto ReactJS, basta instalar a biblioteca `qrcode.react` e importar o arquivo `ModalQRCode.js` deste repositório.

```bash
npm install qrcode.react --save
```

```javascript
import React from 'react';
import ModalQRCode from './ModalQRCode';

function App() {
  const text = 'https://www.google.com';
  
  return (
    <div>
      <button onClick={() => ModalQRCode.open(text)}>Abrir QR Code</button>
      <ModalQRCode />
    </div>
  );
}

export default App;
```

O método `ModalQRCode.open(text)` é usado para abrir o modal com o QR Code correspondente à string de texto passada como parâmetro. O modal é fechado ao clicar no botão "Fechar" ou ao pressionar a tecla "Esc".

## Customização

O componente pode ser customizado através das seguintes propriedades:

- `title`: título do modal (padrão: "QR Code");
- `text`: string de texto ou URL que será convertida em QR Code;
- `size`: tamanho do QR Code em pixels (padrão: 256);
- `padding`: espaço em pixels ao redor do QR Code (padrão: 16);
- `backgroundColor`: cor de fundo do modal (padrão: "rgba(0, 0, 0, 0.5)");

Exemplo:

```javascript
<ModalQRCode
  title="Meu QR Code"
  text="Olá, mundo!"
  size={128}
  padding={8}
  backgroundColor="#ffffff"
/>
```

## Contribuições

Contribuições são sempre bem-vindas! Se você encontrou algum problema ou quer sugerir alguma melhoria, fique à vontade para abrir uma [issue](https://github.com/claudiopjfilho/Modal-QRCODE-ReactJS/issues) ou enviar um [pull request](https://github.com/claudiopjfilho/Modal-QRCODE-ReactJS/pulls).

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](https://github.com/claudiopjfilho/Modal-QRCODE-ReactJS/blob/main/LICENSE) para mais detalhes.
