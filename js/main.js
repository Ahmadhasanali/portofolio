(function () {
  "use strict";

  /* ==============================
     DARK MODE
     ============================== */

  const themeToggle = document.getElementById("theme-toggle");
  const html = document.documentElement;

  function getPreferredTheme() {
    const stored = localStorage.getItem("theme");
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function setTheme(theme) {
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }

  setTheme(getPreferredTheme());

  themeToggle.addEventListener("click", function () {
    const current = html.getAttribute("data-theme");
    setTheme(current === "dark" ? "light" : "dark");
  });

  /* ==============================
     MOBILE HAMBURGER MENU
     ============================== */

  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  hamburger.addEventListener("click", function () {
    const isActive = navMenu.classList.toggle("navbar__links--active");
    hamburger.setAttribute("aria-expanded", isActive);
  });

  /* ==============================
     CLOSE MENU ON LINK CLICK
     ============================== */

  navMenu.querySelectorAll(".navbar__link").forEach(function (link) {
    link.addEventListener("click", function () {
      navMenu.classList.remove("navbar__links--active");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });

  /* ==============================
     SMOOTH SCROLL FOR ANCHOR LINKS
     ============================== */

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = 70;
        const top =
          target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: "smooth" });
      }
    });
  });

  /* ==============================
     SCROLL REVEAL ANIMATIONS
     ============================== */

  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".section").forEach(function (section) {
    section.classList.add("reveal");
    observer.observe(section);
  });

  document
    .querySelectorAll(".skills__category, .portfolio__card, .education__card")
    .forEach(function (el) {
      el.classList.add("reveal");
      observer.observe(el);
    });

  /* ==============================
     NAVBAR BACKGROUND ON SCROLL
     ============================== */

  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 50) {
      navbar.style.background =
        html.getAttribute("data-theme") === "dark"
          ? "rgba(10, 25, 47, 0.95)"
          : "rgba(248, 249, 250, 0.95)";
    } else {
      navbar.style.background =
        html.getAttribute("data-theme") === "dark"
          ? "rgba(10, 25, 47, 0.85)"
          : "rgba(248, 249, 250, 0.85)";
    }
  });

  /* ==============================
     MULTI-LANGUAGE
     ============================== */

  var translations = {
    en: {
      "page.title": "Ahmad Hasan Ali — Backend Developer",
      "nav.about": "About",
      "nav.experience": "Experience",
      "nav.skills": "Skills",
      "nav.portfolio": "Portfolio",
      "nav.contact": "Contact",
      "lang.toggle": "ID",
      "hero.greeting": "Hi, my name is",
      "hero.description": "Software engineer with 3+ years of experience in back-end development, specializing in PHP, Laravel, Go, and PostgreSQL. Passionate about building scalable APIs, designing robust database architectures, and crafting maintainable systems.",
      "hero.downloadCv": "Download CV",
      "hero.contactMe": "Contact Me",
      "about.title": "About Me",
      "about.p1": "Software engineer with approximately three years of professional and internship experience in web development, with a specialization in back-end development. Highly motivated to advance my career in the back-end space, leveraging skills gained from multiple professional courses and real-world projects.",
      "about.p2": "Experienced in designing PostgreSQL database architectures, building and managing cross-platform APIs (Android, iOS, Web) serving thousands of registered users, implementing zero-downtime deployment strategies, and strengthening server security through hardening and mitigation configurations.",
      "about.p3": "Outside of software, I run a small hydroponic lettuce farm since August 2025. This hands-on experience led me to build my own farm management system — bridging the gap between code and real-world agriculture. It also gives me a deeper understanding of the domain I'm coding for.",
      "about.location": "Location:",
      "about.phone": "Phone:",
      "about.email": "Email:",
      "about.availability": "Availability:",
      "about.availabilityVal": "Open to opportunities",
      "experience.title": "Experience",
      "experience.farmer.company": "Self-Employed — Sragen, Jawa Tengah",
      "experience.farmer.description": "Running a small hydroponic NFT (Nutrient Film Technique) lettuce farm. Managing daily operations including PPM/pH monitoring, nutrient mixing, planting cycles, and harvest scheduling. Built my own farm management system to digitize operational recording and tracking.",
      "experience.stevor.description": "Designed optimal PostgreSQL database architectures to support growing application needs. Built and managed cross-platform APIs (Android, iOS, Web) serving 1,000+ registered users with 100+ active users. Implemented zero-downtime deployment and strengthened server security through hardening and attack mitigation.",
      "experience.gmp.description": "Developed web-based sales and inventory management platform using PHP, Laravel, and MySQL to streamline partner operations. Collaborated in cross-functional teams with modular development approach, fully responsible for Super Admin module. Delivered core product on schedule while contributing to post-launch feature development.",
      "experience.uns.description": "Collaborated in a two-person development team to design and build a modern, high-performance company profile website for Sekolah Vokasi Universitas Sebelas Maret within a 5-month timeframe. Built multi-tenant CMS architecture using PHP (Laravel).",
      "education.title": "Education",
      "education.degree": "Associate Expert Degree, Informatics Engineering",
      "skills.title": "Skills & Technologies",
      "skills.expert": "Expert",
      "skills.intermediate": "Intermediate",
      "portfolio.title": "Featured Projects",
      "portfolio.qurban.description": "Offline-First Qurban Fund Ledger System for Muhammadiyah Branches (PRM). Ledger-based fund management tracking seluruh perpindahan dana dari peserta hingga LAZIS dengan dukungan offline synchronization dan audit trail.",
      "portfolio.hydro.description": "Farm management system I built for my own hydroponic lettuce farm. Tracks daily PPM/pH readings, nutrient and pH Down usage, tank conditions, and planting cycles. Built with Laravel 12 + Livewire 3.",
      "contact.title": "Get In Touch",
      "contact.intro": "I'm currently open to new opportunities. Whether you have a project idea, a job offer, or just want to say hi — feel free to reach out!",
      "contact.name": "Name",
      "contact.namePlaceholder": "Your name",
      "contact.email": "Email",
      "contact.emailPlaceholder": "your@email.com",
      "contact.message": "Message",
      "contact.messagePlaceholder": "Your message...",
      "contact.send": "Send Message",
      "contact.connectTitle": "Let's Connect",
      "contact.connectText": "Feel free to reach out through any of these platforms:",
      "footer.copyright": "\u00a9 2026 Ahmad Hasan Ali. Built with love.",
    },
    id: {
      "page.title": "Ahmad Hasan Ali — Backend Developer",
      "nav.about": "Tentang",
      "nav.experience": "Pengalaman",
      "nav.skills": "Keahlian",
      "nav.portfolio": "Portofolio",
      "nav.contact": "Kontak",
      "lang.toggle": "EN",
      "hero.greeting": "Hai, nama saya",
      "hero.description": "Rekayasa perangkat lunak dengan pengalaman 3+ tahun di pengembangan back-end, mengkhususkan diri dalam PHP, Laravel, Go, dan PostgreSQL. Bersemangat membangun API yang skalabel, merancang arsitektur database yang kokoh, dan menciptakan sistem yang mudah dipelihara.",
      "hero.downloadCv": "Unduh CV",
      "hero.contactMe": "Hubungi Saya",
      "about.title": "Tentang Saya",
      "about.p1": "Rekayasa perangkat lunak dengan sekitar tiga tahun pengalaman profesional dan magang di pengembangan web, dengan spesialisasi di pengembangan back-end. Sangat termotivasi untuk memajukan karir di bidang back-end, memanfaatkan keterampilan yang diperoleh dari berbagai kursus profesional dan proyek nyata.",
      "about.p2": "Berpengalaman dalam merancang arsitektur database PostgreSQL, membangun dan mengelola API lintas platform (Android, iOS, Web) yang melayani ribuan pengguna terdaftar, menerapkan strategi deployment tanpa downtime, dan memperkuat keamanan server melalui konfigurasi hardening dan mitigasi.",
      "about.p3": "Di luar perangkat lunak, saya menjalankan peternakan selada hidroponik sejak Agustus 2025. Pengalaman langsung ini mendorong saya untuk membangun sistem manajemen peternakan sendiri — menjembatani kesenjangan antara kode dan pertanian nyata. Ini juga memberi saya pemahaman yang lebih dalam tentang domain yang saya buat kodenya.",
      "about.location": "Lokasi:",
      "about.phone": "Telepon:",
      "about.email": "Email:",
      "about.availability": "Ketersediaan:",
      "about.availabilityVal": "Terbuka untuk peluang",
      "experience.title": "Pengalaman",
      "experience.farmer.company": "Wirausaha — Sragen, Jawa Tengah",
      "experience.farmer.description": "Menjalankan peternakan selada hidroponik NFT (Nutrient Film Technique) skala kecil. Mengelola operasi harian termasuk pemantauan PPM/pH, pencampuran nutrisi, siklus tanam, dan jadwal panen. Membangun sistem manajemen peternakan sendiri untuk mendigitalkan pencatatan dan pelacakan operasional.",
      "experience.stevor.description": "Merancang arsitektur database PostgreSQL yang optimal untuk mendukung kebutuhan aplikasi yang berkembang. Membangun dan mengelola API lintas platform (Android, iOS, Web) yang melayani 1.000+ pengguna terdaftar dengan 100+ pengguna aktif. Menerapkan deployment tanpa downtime dan memperkuat keamanan server melalui hardening dan mitigasi serangan.",
      "experience.gmp.description": "Mengembangkan platform penjualan dan manajemen inventaris berbasis web menggunakan PHP, Laravel, dan MySQL untuk menyederhanakan operasi mitra. Berkolaborasi dalam tim lintas fungsi dengan pendekatan pengembangan modular, bertanggung jawab penuh atas modul Super Admin. Menyelesaikan produk inti tepat waktu sambil berkontribusi pada pengembangan fitur pasca-peluncuran.",
      "experience.uns.description": "Berkolaborasi dalam tim pengembangan dua orang untuk merancang dan membangun website profil perusahaan yang modern dan berkinerja tinggi untuk Sekolah Vokasi Universitas Sebelas Maret dalam jangka waktu 5 bulan. Membangun arsitektur CMS multi-tenant menggunakan PHP (Laravel).",
      "education.title": "Pendidikan",
      "education.degree": "Ahli Madya, Teknik Informatika",
      "skills.title": "Keahlian & Teknologi",
      "skills.expert": "Ahli",
      "skills.intermediate": "Menengah",
      "portfolio.title": "Proyek Unggulan",
      "portfolio.qurban.description": "Sistem Buku Besar Dana Qurban Offline-First untuk Cabang Muhammadiyah (PRM). Manajemen dana berbasis buku besar yang melacak seluruh perpindahan dana dari peserta hingga LAZIS dengan dukungan sinkronisasi offline dan audit trail.",
      "portfolio.hydro.description": "Sistem manajemen peternakan yang saya bangun untuk peternakan selada hidroponik saya sendiri. Melacak pembacaan PPM/pH harian, penggunaan nutrisi dan pH Down, kondisi tangki, dan siklus tanam. Dibangun dengan Laravel 12 + Livewire 3.",
      "contact.title": "Hubungi Saya",
      "contact.intro": "Saat ini saya terbuka untuk peluang baru. Apakah Anda memiliki ide proyek, tawaran pekerjaan, atau hanya ingin menyapa — jangan ragu untuk menghubungi!",
      "contact.name": "Nama",
      "contact.namePlaceholder": "Nama Anda",
      "contact.email": "Email",
      "contact.emailPlaceholder": "email@anda.com",
      "contact.message": "Pesan",
      "contact.messagePlaceholder": "Pesan Anda...",
      "contact.send": "Kirim Pesan",
      "contact.connectTitle": "Mari Terhubung",
      "contact.connectText": "Jangan ragu untuk menghubungi melalui platform berikut:",
      "footer.copyright": "\u00a9 2026 Ahmad Hasan Ali. Dibuat dengan cinta.",
    },
  };

  var langToggle = document.getElementById("lang-toggle");
  var currentLang = localStorage.getItem("lang") || "id";

  function setLang(lang) {
    currentLang = lang;
    localStorage.setItem("lang", lang);

    var t = translations[lang];
    var els = document.querySelectorAll("[data-i18n]");

    els.forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (t[key]) {
        el.textContent = t[key];
      }
    });

    var placeholders = document.querySelectorAll("[data-i18n-placeholder]");
    placeholders.forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (t[key]) {
        el.setAttribute("placeholder", t[key]);
      }
    });

    html.setAttribute("lang", lang);
  }

  setLang(currentLang);

  langToggle.addEventListener("click", function () {
    setLang(currentLang === "id" ? "en" : "id");
  });

})();
