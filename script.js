
        let audioPlaying = false;
        let audio = null;

        function openInvitation() {
            document.getElementById('main').style.display = 'block';
            document.querySelector('.cover').style.display = 'none';
            
            // Start background music
            playBackgroundMusic();
            
            // Start floating hearts
            createFloatingHearts();
            
            // Start countdown
            startCountdown();
        }

        function playBackgroundMusic() {
            // Create audio context for background music
            // Note: Using a simple beep sequence as placeholder
            audioPlaying = true;
            document.getElementById('audioBtn').innerHTML = '🔊';
        }

        function toggleAudio() {
            if (audioPlaying) {
                audioPlaying = false;
                document.getElementById('audioBtn').innerHTML = '🔇';
            } else {
                audioPlaying = true;
                document.getElementById('audioBtn').innerHTML = '🔊';
            }
        }

        function createFloatingHearts() {
            const heartsContainer = document.getElementById('floatingHearts');
            
            setInterval(() => {
                const heart = document.createElement('div');
                heart.className = 'heart';
                heart.innerHTML = '❤️';
                heart.style.left = Math.random() * 100 + '%';
                heart.style.animationDelay = Math.random() * 2 + 's';
                heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
                
                heartsContainer.appendChild(heart);
                
                // Remove heart after animation
                setTimeout(() => {
                    heart.remove();
                }, 4000);
            }, 2000);
        }

        function startCountdown() {
            const weddingDate = new Date('2025-02-15T08:00:00').getTime();
            
            const countdownInterval = setInterval(() => {
                const now = new Date().getTime();
                const distance = weddingDate - now;
                
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
                document.getElementById('days').innerHTML = days.toString().padStart(2, '0');
                document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0');
                document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0');
                document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');
                
                if (distance < 0) {
                    clearInterval(countdownInterval);
                    document.getElementById('countdown').innerHTML = "<h3>Selamat! Hari Bahagia Telah Tiba!</h3>";
                }
            }, 1000);
        }

        function openMaps() {
            // Example coordinates for Jakarta
            const lat = -3.4581612349002797;
            const lng = 114.84415654623166;
            window.open(`https://www.google.com/maps?q=${lat},${lng}`, '_blank');
        }

        // RSVP Form Handler
        document.getElementById('rsvpForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Show success message
            alert('Terima kasih! Konfirmasi kehadiran Anda telah diterima.');
            
            // Reset form
            this.reset();
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Add scroll animations
        window.addEventListener('scroll', function() {
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    section.style.opacity = '1';
                    section.style.transform = 'translateY(0)';
                }
            }
         ) }
        )