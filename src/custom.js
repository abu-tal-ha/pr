  const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });



// settime real 
    function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    document.getElementById('realtime').textContent = timeString;
  }

  setInterval(updateTime, 1000)
  updateTime(); 



// footer er
  const text = document.getElementById("animatedText");

  function animateLoop() {
    text.style.bottom = "0";
    text.style.opacity = 1;

    setTimeout(() => {
      text.style.bottom = "-100%";
      text.style.opacity = 0;
    }, 2500); // show for 2.5s
  }

  // run initially
  animateLoop();

  // repeat every 4 seconds
  setInterval(() => {
    animateLoop();
  }, 4000);