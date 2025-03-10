
const sidebar = document.getElementById('sidebar');
        const sidebarCollapse = document.getElementById('sidebarCollapse');
        const sidebarCollapseClose = document.getElementById('sidebarCollapseClose');
    
        sidebarCollapse.addEventListener('click', function() {
            sidebar.classList.add('active');
            sidebarCollapse.style.opacity = '0';
            sidebarCollapse.style.visibility = 'hidden';
            sidebarCollapseClose.style.opacity = '1';
            sidebarCollapseClose.style.visibility = 'visible'
        });
    
        sidebarCollapseClose.addEventListener('click', function() {
            sidebarCollapse.style.opacity = '1';
            sidebarCollapse.style.visibility = 'visible';
            sidebarCollapseClose.style.opacity = '0';
            sidebarCollapseClose.style.visibility = 'hidden';
            sidebar.classList.remove('active');
        });

       /*  document.getElementById('ContactButton').addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('contact-section').scrollIntoView({
            behavior: 'smooth'
            });
        }); */



        (function() {
            emailjs.init("rY-L8669B4tyIKgh-"); // Cseréld ki a saját publikus kulcsoddal
        })();

        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();

            emailjs.sendForm('service_jqe6z9f', 'template_og306x7', this, 'rY-L8669B4tyIKgh-')
                .then(function() {
                    console.log('SUCCESS!');
                    alert('Köszönjük! Fel fogjuk venni önnel a kapcsolatot!');
                    document.getElementById('contact-form').reset();
                }, function(error) {
                    console.log('FAILED...', error);
                    alert('Hiba történt az üzenet küldése közben. Kérjük, próbálja újra később.');
                });
        });


           






