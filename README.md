## Perbedaan imperatif dan deklaratif
### Imperatif
Menjelaskan bagaimana melakukan sesuatu dengan instruksi langkah demi langkah.
### Deklaratif
Menyatakan apa yang ingin dicapai, tanpa menjelaskan langkah-langkah rinci..

Contoh syntax jquery (imperatif):

```bash
$('#myButton').click(function() {
  $('#myText').text('Hello, World!');
});
```

Contoh syntax react {deklaratif):

```bash
// React: Deklaratif
import { useState } from 'react';

function MyComponent() {
  const [text, setText] = useState('');

  return (
    <div>
      <button onClick={() => setText('Hello, World!')}>Click me</button>
      <p>{text}</p>
    </div>
  );
}
```
