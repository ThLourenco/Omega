function createChart() {
  const ctx = document.getElementById('lineChart').getContext('2d');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
      datasets: [
        {
          label: 'Series 1',
          data: [0, 10, 20, 30, 40],
          borderColor: '#FFD700',
          fill: false,
          tension: 0.4
        },
        {
          label: 'Series 2',
          data: [10, 20, 10, 30, 50],
          borderColor: '#FF69B4',
          fill: false,
          tension: 0.4
        },
        {
          label: 'Series 3',
          data: [20, 30, 15, 40, 30],
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
        duration: 2000,
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



