// MENU
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  document.body.style.overflow = 'hidden';
});
closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  document.body.style.overflow = 'auto';
});

// DATA YA MAKALA KAMILI
const blogData = {
  1: {
    content: `
      <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800" class="blog-full-img">
      <div class="blog-full-body">
        <div class="blog-tag">Uchambuzi</div>
        <h1>Android vs iOS: Mfumo Upi ni Bora Kwako Mwaka 2026?</h1>
        <div class="blog-meta"><span><i class="fa-regular fa-calendar"></i> Julai 25, 2026</span><span><i class="fa-regular fa-clock"></i> 8 dakika</span></div>
        <p>Unataka kununua simu mpya lakini umepata shida kati ya Android na iPhone? Usiwe na wasiwasi. Katika makala hii ya kina tutakupa uchambuzi kamili wa tofauti zote 20 muhimu.</p>
        <p><b>1. Bei na Upatikanaji</b><br>Android inashinda hapa kwa mbali. Unaweza kupata simu ya Android nzuri kwa Tsh 200,000 tu. Lakini iPhone ya chini kabisa ni Tsh 1.5M.</p>
        <p><b>2. Ubora wa Camera</b><br>Mwaka 2026 iPhone 16 Pro Max bado inongoza kwenye video. Lakini Samsung S25 Ultra wameikaribia sana.</p>
        <p><b>3. Muda wa Updates</b><br>Apple inashinda hapa. iPhone inapata updates za miaka 6-7. Android nyingi zinapata miaka 3-4 tu.</p>
        <p><b>Hitimisho:</b> Kama unataka customization na bei nafuu chagua Android. Kama unataka simu idumu chagua iPhone.</p>
      </div>
    `
  },
 2: {
    content: `
      <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800" class="blog-full-img">
      <div class="blog-full-body">
        <div class="blog-tag">Tips & Tricks</div>
        <h1>Jinsi ya Kuongeza Battery Life ya Simu Yako kwa Mara Mbili</h1>
        <div class="blog-meta"><span><i class="fa-regular fa-calendar"></i> Julai 26, 2026</span><span><i class="fa-regular fa-clock"></i> 5 dakika</span></div>
        <p>Battery ya simu yako inaisha haraka? Fuata mbinu hizi 15 na utaona tofauti kubwa:</p>
        <p><b>1. Punguza Brightness</b><br>Screen inakula 40% ya battery. Washa Auto-Brightness.</p>
        <p><b>2. Zima Background App Refresh</b><br>Nenda Settings > Apps > zima "Background data" kwa apps zisizo muhimu.</p>
        <p><b>3. Tumia Dark Mode</b><br>Kama simu yako ina OLED screen, Dark Mode inaweza kuokoa hadi 30% ya battery.</p>
      </div>
    `
  },
  3: {
    content: `
      <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800" class="blog-full-img">
      <div class="blog-full-body">
        <div class="blog-tag">Security</div>
        <h1>Jinsi ya Kuondoa Virusi na Malware kwenye Simu Yako</h1>
        <div class="blog-meta"><span><i class="fa-regular fa-calendar"></i> Julai 24, 2026</span><span><i class="fa-regular fa-clock"></i> 6 dakika</span></div>
        <p>Dalili za simu kuwa na virusi: inapata moto, battery inaisha haraka, kuna pop-ups nyingi. Fuata hatua hizi:</p>
        <p><b>Hatua ya 1: Ingia Safe Mode</b><br>Bonyeza kitufe cha Power > bonyeza na kushika "Power Off" > chagua Safe Mode.</p>
        <p><b>Hatua ya 2: Futa Apps za Kutiliwa Shaka</b><br>Nenda Settings > Apps > tafuta app usiyoijua > Uninstall.</p>
      </div>
    `
  }
};

// FUNKSHENI ZA POPUP
function openBlog(id){
  document.getElementById('blogModal').classList.add('active');
  document.getElementById('blogFullContent').innerHTML = blogData[id].content;
  document.body.style.overflow = 'hidden';
}
function closeBlog(){
  document.getElementById('blogModal').classList.remove('active');
  document.body.style.overflow = 'auto';
}
window.onclick = function(event) {
  if (event.target == document.getElementById('blogModal')) {
    closeBlog();
  }
}

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
  });
});