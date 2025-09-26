// Interaksi Modal Login
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const loginModal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');
const loginForm = document.getElementById('loginForm');
const mainApp = document.getElementById('mainApp');

loginBtn.addEventListener('click', () => {
	loginModal.style.display = 'block';
	loginModal.setAttribute('aria-hidden', 'false');
});

closeModal.addEventListener('click', () => {
	loginModal.style.display = 'none';
	loginModal.setAttribute('aria-hidden', 'true');
});

loginForm.addEventListener('submit', function(e) {
	e.preventDefault();
	// Dummy login, bisa diganti dengan validasi
	loginModal.style.display = 'none';
	mainApp.style.display = 'block';
	loginBtn.style.display = 'none';
	logoutBtn.style.display = 'inline-block';
});

logoutBtn.addEventListener('click', function() {
	mainApp.style.display = 'none';
	loginBtn.style.display = 'inline-block';
	logoutBtn.style.display = 'none';
});

// Navigasi smooth scroll
document.querySelectorAll('.nav-link').forEach(link => {
	link.addEventListener('click', function(e) {
		const href = this.getAttribute('href');
		if (href.startsWith('#')) {
			e.preventDefault();
			const target = document.querySelector(href);
			if (target) {
				window.scrollTo({
					top: target.offsetTop - 60,
					behavior: 'smooth'
				});
			}
		}
	});
});

// Tahun otomatis di footer
document.getElementById('year').textContent = new Date().getFullYear();
