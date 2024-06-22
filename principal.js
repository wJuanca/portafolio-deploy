
//Desplazamiento del portfolio
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const menuLinks = document.querySelectorAll(".menu a");
    menuLinks.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        const offsetTop = targetSection.offsetTop;
        const currentPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        const distance = offsetTop - currentPosition;
        const duration = 800;
        const steps = 60;
        const interval = duration / steps;
        const increment = distance / steps;
        function smoothScrollStep(step) {
          if (step >= steps) {
            window.scrollTo(0, offsetTop);
          } else {
            const scrollTop = currentPosition + increment * step;
            window.scrollTo(0, scrollTop);
            setTimeout(function() {
              smoothScrollStep(step + 1);
            }, interval);
          }
        }
        smoothScrollStep(0);
      });
    });
  });
  

//Validacion del Formulario
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var statusMessage = document.getElementById('statusMessage');
  
    //Mensaje despues de mandar el formulario
    if (name.trim() && email.trim() && message.trim()) {
      statusMessage.innerHTML = 'Gracias por contactarme';
      statusMessage.style.color = 'green';
      document.getElementById('contactForm').reset();
    } else {
      statusMessage.innerHTML = 'Complete todos los campos';
      statusMessage.style.color = 'red';
    }
    statusMessage.style.display = 'block';
    setTimeout(function() {
      statusMessage.style.display = 'none';
    }, 3000);
  });
  