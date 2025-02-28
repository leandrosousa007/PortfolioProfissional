const textElement = document.getElementById("text");
        const text = "Olá, eu sou o Leandro Evaristo";

        let index = 0;
        function typeText() {
            if (index < text.length) {
                textElement.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeText, 80); // Ajuste a velocidade aqui
            }
        }

        typeText();


        function req() {
      
            var fet = document.getElementById('fet');
            var nvl = document.getElementById('nvl');
            var ta = document.getElementById('ta');
      
            var feiticoValor = fet.value;
            var nivelValor = nvl.value;
      
            if (feiticoValor !== '' && nivelValor !== '') {
              var add = ta.insertRow();
              var col = add.insertCell();
              var col1 = add.insertCell();
      
              col.innerHTML = feiticoValor;
              col1.innerHTML = nivelValor;
      
              fet.value = '';
              nvl.value = '';
            }
          }