function createChart() {
  const ctx = document.getElementById('lineChart').getContext('2d');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['AGO', 'SET', 'OUT', 'NOV', 'DEZ'],
      datasets: [
        {
          label: 'VENDAS',
          data: [40, 80, 85, 95, 110],
          borderColor: '#FFD700',
          fill: false,
          tension: 0.4
        },
        {
          label: 'ENGAJAMENTO',
          data: [30, 70, 80, 100, 110],
          borderColor: '#FF69B4',
          fill: false,
          tension: 0.4
        },
        {
          label: 'CAPTACÂO',
          data: [35, 90, 65, 90, 100],
          borderColor: '#DA70D6',
          fill: false,
          tension: 0.4
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 3000,
        easing: 'easeInOutQuart'
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { color: '#aaa' },
          grid: { color: '#222' }
        },
        x: {
          ticks: { color: '#aaa' },
          grid: { display: false }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: '#ddd'
          }
        }
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const chartCanvas = document.getElementById('lineChart');
  let chartLoaded = false;  

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !chartLoaded) {
        createChart();
        chartLoaded = true;
        observer.unobserve(chartCanvas); // para não chamar de novo
      }
    });
  }, {
    threshold: 0.5 // 50% visível
  });

  observer.observe(chartCanvas);
});


/*MEUNNN*/


  function toggleMenu() {
    const menu = document.getElementById('nav-links');
    menu.classList.toggle('open');
  }




