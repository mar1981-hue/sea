
const chatInput = document.getElementById('chat-input');
const chatBody = document.getElementById('chat-body');

const respostas = {
    "serviços": "Oferecemos: redação, revisão de trabalhos, orientações de TCCs, traduções, mentorias e mais! 🚀",
    "valores": "Nossos valores variam conforme o serviço. Redação infantil a partir de R$50, TCCs a partir de R$800. Consulte para orçamento personalizado! 💬",
    "pagamento": "Aceitamos cartões de crédito, boleto, Pix e transferência bancária. ✅",
    "certificado": "Sim! Emitimos certificados digitais ao final dos serviços. 📜",
    "mentoria": "Oferecemos mentorias personalizadas para provas, concursos, redação acadêmica e orientação profissional. 📚",
    "contato": "Você pode entrar em contato pelo nosso WhatsApp clicando no ícone verde! 📱",
    "tradução": "Fazemos tradução geral, juramentada e de resumos! 🌎",
    "horário": "Atendemos de segunda a sexta, das 8h às 18h. ⏰"
};

function adicionarMensagem(mensagem, tipo) {
    const p = document.createElement('p');
    p.textContent = mensagem;
    p.className = tipo;
    chatBody.appendChild(p);
    chatBody.scrollTop = chatBody.scrollHeight;
}

chatInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const pergunta = chatInput.value.toLowerCase();
        adicionarMensagem("Você: " + pergunta, 'pergunta');
        chatInput.value = '';

        let respostaEncontrada = false;
        for (let chave in respostas) {
            if (pergunta.includes(chave)) {
                adicionarMensagem("SEA: " + respostas[chave], 'resposta');
                respostaEncontrada = true;
                break;
            }
        }

        if (!respostaEncontrada) {
            adicionarMensagem("SEA: Desculpe, não entendi. Por favor, entre em contato pelo WhatsApp para mais detalhes. 📱", 'resposta');
        }
    }
});
