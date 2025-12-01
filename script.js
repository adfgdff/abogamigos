document.addEventListener('DOMContentLoaded', function() {
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const chatMessages = document.getElementById('chat-messages');

    sendButton.addEventListener('click', function() {
        const messageText = messageInput.value;
        if (messageText.trim() !== '') {
            // Añadir mensaje del usuario
            addMessageToChat(messageText, 'user');

            // Limpiar el input
            messageInput.value = '';

            // Respuesta del bot (simulada)
            setTimeout(function() {
                const botResponse = getBotResponse(messageText);
                addMessageToChat(botResponse, 'bot');
            }, 1000); // Simula un tiempo de espera para la respuesta del bot
        }
    });

    function addMessageToChat(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);

        // Hacer scroll al último mensaje
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function getBotResponse(userMessage) {
        userMessage = userMessage.toLowerCase();

        if (userMessage.includes('hola') || userMessage.includes('saludos')) {
            return '¡Hola! Bienvenido al despacho de abogados. ¿En qué puedo ayudarte hoy? Si necesitas ayuda, escribe "ayuda" o "menú".';
        } else if (userMessage.includes('ayuda') || userMessage.includes('menú')) {
            return 'Aquí tienes un menú de opciones:\n' +
                   '- Horario: Consulta nuestro horario de atención.\n' +
                   '- Servicios: Conoce nuestros servicios legales.\n' +
                   '- Cita: Aprende cómo agendar una cita.\n' +
                   '- Costo: Información sobre los costos de nuestros servicios.\n' +
                   '- Documentos: Pregunta sobre documentos necesarios.\n' +
                   '- Libros: Recomendaciones de libros de derecho.\n' +
                   '- Teléfono: Obtén nuestro número de contacto.\n' +
                   '- Divorcio: Información sobre servicios de divorcio.\n' +
                   '- Herencia: Asesoramiento sobre herencias y testamentos.\n' +
                   '- Accidente: Ayuda en casos de accidentes de tráfico.\n' +
                   '- Despido: Asesoramiento en casos de despido laboral.\n' +
                   '- Privacidad: Información sobre protección de datos personales.\n' +
                   'Escribe la palabra clave para obtener más información. Por ejemplo, escribe "horario" para ver nuestro horario de atención.';
        } else if (userMessage.includes('horario') || userMessage.includes('horas')) {
            return 'Nuestro horario de atención es de lunes a viernes de 9:00 a 18:00.';
        } else if (userMessage.includes('servicios') || userMessage.includes('qué hacen')) {
            return 'Ofrecemos servicios en derecho civil, penal, laboral y administrativo. ¿En cuál estás interesado?';
        } else if (userMessage.includes('cita') || userMessage.includes('agendar')) {
            return 'Para agendar una cita, por favor visita nuestra página de contacto o llama al 555-1234.';
        } else if (userMessage.includes('costo') || userMessage.includes('precio')) {
            return 'El costo de nuestros servicios varía según el caso. Te recomiendo agendar una consulta para evaluarlo.';
        } else if (userMessage.includes('documentos') || userMessage.includes('necesito')) {
            return '¿Qué tipo de documentos necesitas? Por ejemplo, "necesito un contrato de arrendamiento".';
        } else if (userMessage.includes('contrato de arrendamiento')) {
            return 'Para un contrato de arrendamiento, necesitarás identificación oficial, comprobante de domicilio y los datos del inmueble.';
        } else if (userMessage.includes('libros') || userMessage.includes('recomienda')) {
            return 'Aquí tienes algunas recomendaciones de libros de derecho: \n- "El Derecho Civil" de Carlos Lasarte \n- "Derecho Penal Esquematizado" de Muñoz Conde \n- "Introducción al Derecho Laboral" de Américo Plá Rodríguez';
        } else if (userMessage.includes('telefono') || userMessage.includes('contacto')) {
            return 'Puedes contactarnos al número de atención al cliente: #52-271-125-6841. Nuestros abogados están disponibles para ayudarte.';
        } else if (userMessage.includes('divorcio') || userMessage.includes('separación')) {
            return 'Para divorcios, ofrecemos asesoría legal, representación en el proceso y gestión de acuerdos. ¿Necesitas más información?';
        } else if (userMessage.includes('herencia') || userMessage.includes('testamento')) {
            return 'En temas de herencias, podemos ayudarte con la redacción de testamentos, la gestión de herencias y la resolución de conflictos.';
        } else if (userMessage.includes('accidente') || userMessage.includes('tráfico')) {
            return 'Si has tenido un accidente de tráfico, podemos asesorarte sobre tus derechos, reclamación de indemnizaciones y defensa legal.';
        } else if (userMessage.includes('despido') || userMessage.includes('laboral')) {
            return 'En casos de despido, te asesoramos sobre la legalidad del despido, la reclamación de indemnizaciones y la defensa de tus derechos laborales.';
        } else if (userMessage.includes('datos personales') || userMessage.includes('privacidad')) {
            return 'Para proteger tus datos personales, cumplimos con todas las normativas de privacidad y protección de datos. Puedes consultar nuestra política de privacidad en la web.';
        } else {
            return 'Lo siento, no entiendo tu pregunta. Por favor, sé más específico o consulta nuestra sección de preguntas frecuentes en la página web.';
        }
    }
});