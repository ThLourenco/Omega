const animarElementos = document.querySelectorAll('.animar');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visivel');
        }
    });
}, {
    threshold: 0.1
});

animarElementos.forEach(el => observer.observe(el));

// Exemplo básico: animação ao carregar
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('.image-section img').classList.add('slide-in-left');
  document.querySelector('.text-section').classList.add('slide-in-right');
});

function animarAoScroll() {
  const elementosEsquerda = document.querySelectorAll('.animar-esquerda');
  const elementosDireita = document.querySelectorAll('.animar-direita');

  const posicaoScroll = window.innerHeight;

  elementosEsquerda.forEach(el => {
    const posicaoElemento = el.getBoundingClientRect().top;
    if (posicaoElemento < posicaoScroll - 100) {
      el.classList.add('aparecer');
    }
  });

  elementosDireita.forEach(el => {
    const posicaoElemento = el.getBoundingClientRect().top;
    if (posicaoElemento < posicaoScroll - 100) {
      el.classList.add('aparecer');
    }
  });
}

window.addEventListener('scroll', animarAoScroll);
window.addEventListener('load', animarAoScroll);

 /* animaçao de entrada */
 document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.ecossistema-section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.1
  });

  sections.forEach(section => {
    observer.observe(section);
  });
});