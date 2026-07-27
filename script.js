// MENU YA SIMU
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

// Funga menu ukibonyeza link
document.querySelectorAll('.menu-links a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
  });
});

// DATA YA MAKALA ZOTE 6 KAMILI
const blogData = {
 1: {
    content: `
      <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800" class="blog-full-img">
      <div class="blog-full-body">
        <div class="blog-tag">Tips & Tricks</div>
        <h1>Jinsi ya Kuongeza Battery Life ya Simu Yako kwa Mara Mbili</h1>
        <div class="blog-meta"><span><i class="fa-regular fa-calendar"></i> Julai 26, 2026</span><span><i class="fa-regular fa-clock"></i> 5 dakika</span></div>
        <p>Battery ya simu yako inaisha haraka? Usijali. Katika makala hii tutakufundisha mbinu 15 zilizothibitishwa za kisayansi za kuongeza muda wa battery yako.</p>
        <p><b>1. Punguza Brightness</b><br>Screen inakula 40% ya battery. Washa Auto-Brightness au punguza kwa mkono hadi 50%.</p>
        <p><b>2. Zima Background App Refresh</b><br>Nenda Settings > Apps > zima "Background data" kwa apps zisizo muhimu kama Facebook, TikTok, Instagram.</p>
        <p><b>3. Tumia Dark Mode</b><br>Kama simu yako ina OLED screen, Dark Mode inaweza kuokoa hadi 30% ya battery kwa siku.</p>
        <p><b>4. Zima Location na Bluetooth</b><br>Zima GPS na Bluetooth ukiwa hutumii. Vinakula battery kimya kimya.</p>
        <p><b>Hitimisho:</b> Kwa kufuata hatua hizi, battery yako itadumu hadi masaa 8-10 zaidi kwa siku moja.</p>
      </div>
    `
  },
 2: {
    content: `
      <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800" class="blog-full-img">
      <div class="blog-full-body">
        <div class="blog-tag">Uchambuzi</div>
        <h1>Android vs iOS: Mfumo Upi ni Bora Kwako Mwaka 2026?</h1>
        <div class="blog-meta"><span><i class="fa-regular fa-calendar"></i> Julai 25, 2026</span><span><i class="fa-regular fa-clock"></i> 8 dakika</span></div>
        <p>Unataka kununua simu mpya lakini umepata shida kati ya Android na iPhone? Makala hii inakupa uchambuzi kamili wa tofauti zote 20 muhimu.</p>
        <p><b>1. Bei na Upatikanaji</b><br>Android inashinda hapa kwa mbali. Unaweza kupata simu ya Android nzuri kwa Tsh 200,000 tu. Lakini iPhone ya chini kabisa ni Tsh 1.5M.</p>
        <p><b>2. Ubora wa Camera</b><br>Mwaka 2026 iPhone 16 Pro Max bado inongoza kwenye video. Lakini Samsung S25 Ultra na Pixel 9 Pro wameikaribia sana kwenye picha.</p>
        <p><b>3. Muda wa Updates</b><br>Apple inashinda hapa. iPhone inapata updates za miaka 6-7. Android nyingi zinapata miaka 3-4 tu.</p>
        <p><b>4. Customization</b><br>Android inakupa uhuru wa kubadilisha kila kitu. iOS ni restricted lakini ni stable zaidi.</p>
        <p><b>Hitimisho:</b> Kama unataka customization, games na bei nafuu chagua Android. Kama unataka simu idumu, camera nzuri na ecosystem chagua iPhone.</p>
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
        <p>Simu yako inakwenda polepole? Inatoa matangazo mengi? Inaweza kuwa na virusi. Fuata hatua hizi 12 za kuondoa na kuzuia.</p>
        <p><b>Hatua ya 1: Ingia Safe Mode</b><br>Bonyeza kitufe cha Power > bonyeza na kushika "Power Off" > chagua Safe Mode. Hii inazima apps zote za nje.</p>
        <p><b>Hatua ya 2: Futa Apps za Kutiliwa Shaka</b><br>Nenda Settings > Apps > tafuta app uliyoiinstall hivi karibuni na usiyoijua > Uninstall.</p>
        <p><b>Hatua ya 3: Install Antivirus</b><br>Tunapendekeza: Bitdefender, Avast, au Malwarebytes. Zote zina version ya bure nzuri sana.</p>
        <p><b>Hatua ya 4: Fanya Factory Reset</b><br>Kama tatizo bado lipo, backup data zako na fanya reset. Hii itafuta kila kitu.</p>
      </div>
    `
  },
  4: {
    content: `
      <img src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800" class="blog-full-img">
      <div class="blog-full-body">
        <div class="blog-tag">Apps</div>
        <h1>Apps 20 Bora za Kuhariri Picha na Video 2026</h1>
        <div class="blog-meta"><span><i class="fa-regular fa-calendar"></i> Julai 23, 2026</span><span><i class="fa-regular fa-clock"></i> 10 dakika</span></div>
        <p>Unataka kuwa content creator? Hapa kuna orodha yetu ya apps 20 bora zilizojaribiwa na timu ya NOVA SOFT.</p>
        <p><b>Kwa Kupiga Picha - Bure:</b> Snapseed, Lightroom Mobile, PicsArt</p>
        <p><b>Kwa Kupiga Picha - Pro:</b> VSCO, Afterlight, TouchRetouch</p>
        <p><b>Kwa Video - Bure:</b> CapCut, VN Video Editor, InShot</p>
        <p><b>Kwa Video - Pro:</b> Premiere Rush, LumaFusion, Alight Motion</p>
        <p>Tip: Anza na CapCut na Snapseed kama wewe ni beginner. Ni rahisi na zina features nyingi za bure.</p>
      </div>
    `
  },
 5: {
    content: `
      <img src="https://images.unsplash.com/photo-1515879218367-8464d910af4e?w=800" class="blog-full-img">
      <div class="blog-full-body">
        <div class="blog-tag">Tutorial</div>
        <h1>Jinsi ya Ku-Transfer Data Kutoka Simu ya Zamani Kwenda Mpya</h1>
        <div class="blog-meta"><span><i class="fa-regular fa-calendar"></i> Julai 22, 2026</span><span><i class="fa-regular fa-clock"></i> 12 dakika</span></div>
        <p>Umenunua simu mpya lakini unahofia kupoteza contacts, picha na WhatsApp chats? Hii ni njia rahisi zaidi ya kuhamisha kila kitu kwa dakika 10 tu.</p>
        <p><b>Njia ya 1: Google Account</b><br>Kwa Android to Android. Ingia na akaunti ileile ya Google. Contacts, Apps na Settings zitajihamisha zenyewe.</p>
        <p><b>Njia ya 2: iPhone Quick Start</b><br>Weka simu mbili karibu. Fuata maelekezo yanayotokea kwenye screen. Ni rahisi sana.</p>
        <p><b>Njia ya 3: Samsung Smart Switch</b><br>App ya bure ya Samsung. Inahamisha kila kitu hata WhatsApp chats.</p>
        <p><b>Njia ya 4: ShareIt / Xender</b><br>Kwa kuhamisha picha na video nyingi haraka bila internet.</p>
        <p><b>Muhimu:</b> Usisahau kuhamisha WhatsApp. Nenda Settings > Chats > Chat Backup kwanza.</p>
      </div>
    `
  },
  6: {
    content: `
      <img src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800" class="blog-full-img">
      <div class="blog-full-body">
        <div class="blog-tag">Troubleshooting</div>
        <h1>Kwa Nini Simu Yako Inaenda Polepole na Jinsi ya Kutatua</h1>
        <div class="blog-meta"><span><i class="fa-regular fa-calendar"></i> Julai 21, 2026</span><span><i class="fa-regular fa-clock"></i> 7 dakika</span></div>
        <p>Simu yako inahang? Inachukua muda kufungua app? Sababu kubwa ni hizi 10 na suluhisho lake.</p>
        <p><b>1. Storage imejaa</b><br>Suluhisho: Futa picha, video na files zisizohitajika. Acha angalau 2GB free.</p>
        <p><b>2. RAM imejaa</b><br>Suluhisho: Funga apps zote za background. Bonyeza kitufe cha square na swipe zote.</p>
        <p><b>3. Cache imejaa</b><br>Suluhisho: Nenda Settings > Storage > Cached Data > Clear Cache.</p>
        <p><b>4. App nyingi za background</b><br>Suluhisho: Zima "Auto-start" kwa apps zisizo muhimu.</p>
        <p><b>5. Simu imechakaa</b><br>Kama simu ina miaka 3+, inaweza kuwa processor imechoka. Fikiria kubadilisha.</p>
        <p>Baada ya dakika 15 za kufuata mwongozo huu, simu yako itarudi kuwa ya kasi kama ilivyokuwa mpya.</p>
      </div>
    `
  }
};

// FUNKSHENI ZA KUFUNGUA/FUNGA POPUP
function openBlog(id){
  document.getElementById('blogModal').classList.add('active');
  document.getElementById('blogFullContent').innerHTML = blogData[id].content;
  document.body.style.overflow = 'hidden';
}

function closeBlog(){
  document.getElementById('blogModal').classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Kufunga ukibonyeza nje ya popup
window.onclick = function(event) {
  if (event.target == document.getElementById('blogModal')) {
    closeBlog();
  }
}

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});