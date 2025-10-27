// Menu mobile
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileNav = document.getElementById('mobile-nav');
        const overlay = document.getElementById('overlay');
        const menuIcon = mobileMenu.querySelector('i');

        function toggleMenu() {
            mobileNav.classList.toggle('active');
            overlay.classList.toggle('active');
            
            // Alternar ícone do menu
            if (mobileNav.classList.contains('active')) {
                menuIcon.classList.remove('ri-menu-line');
                menuIcon.classList.add('ri-close-line');
                document.body.style.overflow = 'hidden'; // Impedir scroll quando menu está aberto
            } else {
                menuIcon.classList.remove('ri-close-line');
                menuIcon.classList.add('ri-menu-line');
                document.body.style.overflow = 'auto';
            }
        }

        mobileMenu.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);

        // Fechar menu ao clicar em um link
        document.querySelectorAll('.mobile-nav a').forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('active');
                overlay.classList.remove('active');
                menuIcon.classList.remove('ri-close-line');
                menuIcon.classList.add('ri-menu-line');
                document.body.style.overflow = 'auto';
            });
        });

        // Modal
        const modal = document.getElementById('modal');
        const closeModal = document.querySelector('.close-modal');
        const formCNV = document.getElementById('form-cnv');

        // Fechar modal
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // Fechar modal ao clicar fora
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        // Processar formulário
        formCNV.addEventListener('submit', (e) => {
            e.preventDefault();
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            
            alert(`Obrigado, ${nome}! Em breve você receberá materiais sobre CNV no e-mail ${email}.`);
            modal.style.display = 'none';
            formCNV.reset();
        });

        // Scroll suave para links internos
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Navegação por bolinhas
        const dots = document.querySelectorAll('.dot');
        const dotsMobile = document.querySelectorAll('.dot-mobile');
        const sections = document.querySelectorAll('section');

        // Atualizar bolinhas ativas conforme scroll
        function updateActiveDot() {
            const scrollPosition = window.scrollY + 100;
            
            sections.forEach((section, index) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    // Atualizar bolinhas desktop
                    dots.forEach(dot => dot.classList.remove('active'));
                    dots[index].classList.add('active');
                    
                    // Atualizar bolinhas mobile
                    dotsMobile.forEach(dot => dot.classList.remove('active'));
                    dotsMobile[index].classList.add('active');
                }
            });
        }

        // Navegação por clique nas bolinhas desktop
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                const targetSection = sections[index];
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            });
        });

        // Navegação por clique nas bolinhas mobile
        dotsMobile.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                const targetSection = sections[index];
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            });
        });

        // Observar scroll para atualizar bolinhas ativas
        window.addEventListener('scroll', updateActiveDot);
        
        // Inicializar bolinhas ativas
        updateActiveDot();

        // Prevenir que imagens quebrem o layout
        document.querySelectorAll('.imagem-placeholder img').forEach(img => {
            img.addEventListener('error', function() {
                // Se a imagem não carregar, exibir um placeholder
                this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRTVFQ0VGIi8+CjxwYXRoIGQ9Ik0xNTAgMTUwTDE3NSAxNzVMMjUwIDEwMCIgc3Ryb2tlPSIjNEE2RkE1IiBzdHJva2Utd2lkdGg9IjIiLz4KPGNpcmNsZSBjeD0iMTUwIiBjeT0iMTUwIiByPSIyNSIgc3Ryb2tlPSIjNEE2RkE1IiBzdHJva2Utd2lkdGg9IjIiLz4KPGNpcmNsZSBjeD0iMjUwIiBjeT0iMTAwIiByPSIyNSIgc3Ryb2tlPSIjNEE2RkE1IiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+';
                this.alt = "Imagem não disponível";
            });
        });