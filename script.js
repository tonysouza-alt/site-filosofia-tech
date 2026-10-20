// 1. Seleciona o botão de alternar tema e o elemento body
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// 2. Verifica se o usuário já tinha salvo uma preferência anteriormente
const currentTheme = localStorage.getItem('theme');

// Se o tema salvo for 'dark', aplica ao carregar a página
if (currentTheme === 'dark') {
    body.classList.add('dark-theme');
    themeToggleBtn.textContent = '☀️'; // Muda o ícone para sol
}

// 3. Adiciona um evento de clique no botão
themeToggleBtn.addEventListener('click', () => {
    // Alterna a classe 'dark-theme' no body (se tem, tira; se não tem, coloca)
    body.classList.toggle('dark-theme');

    // Verifica se a classe está ativa agora e atualiza o botão / salvamento
    if (body.classList.contains('dark-theme')) {
        themeToggleBtn.textContent = '☀️';
        localStorage.setItem('theme', 'dark'); // Salva a escolha
    } else {
        themeToggleBtn.textContent = '🌙';
        localStorage.setItem('theme', 'light'); // Salva a escolha
    }
});
// ==========================================
// FILTRO DE ARTIGOS POR CATEGORIA
// ==========================================

const filterButtons = document.querySelectorAll('.filter-btn');
const articleCards = document.querySelectorAll('.card');

filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault(); // Impede a página de recarregar/pular ao clicar no link

        // 1. Remove a classe 'active' de todos os botões e adiciona no clicado
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // 2. Pega o nome da categoria selecionada (ex: 'filosofia', 'tecnologia', 'all')
        const filterValue = button.getAttribute('data-filter');

        // 3. Percorre todos os cards de artigos
        articleCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');

            // Se for 'all' ou a categoria do card for igual ao filtro selecionado
            if (filterValue === 'all' || filterValue === cardCategory) {
                card.classList.remove('hide'); // Mostra o card
            } else {
                card.classList.add('hide'); // Oculta o card
            }
        });
    });
});
// ==========================================
// 3. BUSCA DINÂMICA POR TÍTULO
// ==========================================
// ==========================================
// 3. BUSCA DINÂMICA POR TÍTULO (VERSÃO REFORÇADA)
// ==========================================
// ==========================================
// BUSCA DINÂMICA
// ==========================================
const searchInput = document.getElementById('search-input');

if (searchInput) {
    // Escuta a digitação no campo
    ['input', 'keyup'].forEach(eventType => {
        searchInput.addEventListener(eventType, () => {
            const filterText = searchInput.value.toLowerCase().trim();
            const cards = document.querySelectorAll('.card');

            cards.forEach(card => {
                const cardText = card.textContent.toLowerCase();

                // Se o texto digitado estiver dentro do card (ou se a busca estiver vazia)
                if (filterText === '' || cardText.includes(filterText)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}
// ==========================================
// 4. ENVIO DO FORMULÁRIO DE NEWSLETTER
// ==========================================
const newsletterForm = document.getElementById('newsletter-form');
const newsletterMessage = document.getElementById('newsletter-message');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o recarregamento da página ao enviar

        const emailInput = document.getElementById('newsletter-email');
        const userEmail = emailInput.value;

        // Exibe mensagem de sucesso
        newsletterMessage.textContent = `Obrigado! O e-mail ${userEmail} foi cadastrado com sucesso.`;
        newsletterMessage.style.display = 'block';

        // Limpa o campo
        emailInput.value = '';
    });
}