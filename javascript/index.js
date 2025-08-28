document.addEventListener('DOMContentLoaded', () => {

    // Efeito de Entrada Suave no Título
    const title = document.querySelector('.hero-text h1');
    const originalText = "Trade Smarter, Earn Better";
    
    title.textContent = originalText;

    setTimeout(() => {
        title.classList.add('animate-in');
    }, 500);

    // Animação de Análise de Mercado (Card do Telefone)
    const balanceAmount = document.querySelector('.phone-balance-amount');
    const balanceChange = document.querySelector('.phone-balance-change span:last-child');
    const stats = [
        { amount: '$523,237', change: '+8.7% today', positive: true },
        { amount: '$545,112', change: '+2.1% today', positive: true },
        { amount: '$518,995', change: '-1.5% today', positive: false },
        { amount: '$531,780', change: '+3.9% today', positive: true }
    ];
    let statIndex = 0;

    function updateStats() {
        statIndex = (statIndex + 1) % stats.length;
        const currentStat = stats[statIndex];
        
        balanceAmount.textContent = currentStat.amount;
        balanceChange.textContent = currentStat.change;

        if (currentStat.positive) {
            balanceChange.style.color = '#4ade80';
        } else {
            balanceChange.style.color = '#dc3545';
        }
    }

    setInterval(updateStats, 3000);

    // Animação de Ícones no Telefone (Efeito de Hover)
    const quickActionIcons = document.querySelectorAll('.phone-quick-action-icon');

    quickActionIcons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.style.transform = 'translateY(-5px)';
            icon.style.transition = 'transform 0.2s ease-out';
        });

        icon.addEventListener('mouseout', () => {
            icon.style.transform = 'translateY(0)';
        });
    });

    // Animação dos Elementos Flutuantes (Aleatórios)
    const floatingElements = document.querySelectorAll('.floating-element');

    floatingElements.forEach(el => {
        const randomX = Math.random() * 20 - 10;
        const randomY = Math.random() * 20 - 10;
        const randomRotate = Math.random() * 6 - 3;

        el.style.setProperty('--random-x', `${randomX}px`);
        el.style.setProperty('--random-y', `${randomY}px`);
        el.style.setProperty('--random-rotate', `${randomRotate}deg`);
        
        el.style.animation = `floatRandom 8s ease-in-out infinite alternate`;
    });

    const styleSheet = document.styleSheets[0];
    const keyframes = `@keyframes floatRandom {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { 
            transform: translateY(var(--random-y)) translateX(var(--random-x)) rotate(var(--random-rotate)); 
        }
    }`;
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);


    // Lógica do Menu Hambúrguer
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navWrapper = document.querySelector('.nav-wrapper');
    const navLinks = document.querySelectorAll('.nav-wrapper a'); // Seleciona todos os links dentro do nav-wrapper

    hamburgerMenu.addEventListener('click', () => {
        navWrapper.classList.toggle('open');
        // Alterna o ícone do hambúrguer
        if (navWrapper.classList.contains('open')) {
            hamburgerMenu.querySelector('i').classList.remove('fa-bars');
            hamburgerMenu.querySelector('i').classList.add('fa-times'); // Ícone de "X"
        } else {
            hamburgerMenu.querySelector('i').classList.remove('fa-times');
            hamburgerMenu.querySelector('i').classList.add('fa-bars'); // Ícone de hambúrguer
        }
    });

    // Fechar o menu quando um link é clicado (útil no mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navWrapper.classList.contains('open')) {
                navWrapper.classList.remove('open');
                hamburgerMenu.querySelector('i').classList.remove('fa-times');
                hamburgerMenu.querySelector('i').classList.add('fa-bars');
            }
        });
    });

});