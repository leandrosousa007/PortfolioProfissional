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