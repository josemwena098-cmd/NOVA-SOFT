
// PARTICLES ZA NYUMA ZA HERO
const hero = document.querySelector('.hero');
for(let i=0; i<30; i++){
  let particle = document.createElement('div');
  particle.style.position = 'absolute';
  particle.style.width = '3px';
  particle.style.height = '3px';
  particle.style.background = '#3b82f6';
  particle.style.borderRadius = '50%';
  particle.style.left = Math.random() * 100 + '%';
  particle.style.top = Math.random() * 100 + '%';
  particle.style.opacity = Math.random() * 0.6;
  particle.style.animation = `float ${5 + Math.random()*5}s ease-in-out infinite`;
  hero.appendChild(particle);
}

// ANIMATION YA FLOAT
const style = document.createElement('style');
style.innerHTML = `
@keyframes float{
  0%,100%{transform:translateY(0)}
  50%{transform:translateY(-20px)}
}
`;
document.head.appendChild(style);

// MENU YA SIMU - INABONDEKA
const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', () => {
  alert('Menu itafunguka hapa. Unaweza kuongeza links zako');
});

// SCROLL SMOOTH
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// ANIMATION YA CARDS ZINAPOINGIA SCREEN
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if(entry.isIntersecting){
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, index * 150);
    }
  });
});

cards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = '0.6s';
  observer.observe(card);
});
