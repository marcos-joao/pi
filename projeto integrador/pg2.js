
  // Variáveis globais para o carrossel
  let currentIndex = 0;
  let carouselInterval;

  // Funções para controlar o carrossel
  function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-inner img');
    if (index >= slides.length) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = slides.length - 1;
    } else {
      currentIndex = index;
    }
    const newTransformValue = `translateX(-${currentIndex * 100}%)`;
    document.querySelector('.carousel-inner').style.transform = newTransformValue;
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
    resetInterval();
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
    resetInterval();
  }

  function startCarousel() {
    carouselInterval = setInterval(nextSlide, 3000); // Troca a imagem a cada 3 segundos (3000 milissegundos)
  }

  function stopCarousel() {
    clearInterval(carouselInterval);
  }

  // Inicia o carrossel automaticamente ao carregar a página
  startCarousel();

  // Eventos para parar o carrossel se o usuário interagir manualmente
  document.querySelector('.prev').addEventListener('click', function() {
    prevSlide();
    stopCarousel();
  });

  document.querySelector('.next').addEventListener('click', function() {
    nextSlide();
    stopCarousel();
  });

  // Função para resetar o intervalo do carrossel após navegação manual
  function resetInterval() {
    clearInterval(carouselInterval);
    carouselInterval = setInterval(nextSlide, 3000);
  }

  // Função para atualizar o relógio
  function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
  }

  // Atualiza o relógio a cada segundo
  setInterval(updateClock, 1000);

  // Inicia o relógio imediatamente ao carregar a página
  updateClock();