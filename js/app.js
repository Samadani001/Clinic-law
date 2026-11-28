// 1A. FACULTY PATRONS & STAFF ADVISERS DATA
const patrons = [
  {
    name: "Prof. KABIRU GARBA MUHAMMAD",
    subtitle: "Faculty of Law, UDUSOK",
    role: "Dean of Law",
    photo: "../Asset/Dean.jpeg",
    bio: "Provides institutional leadership, policy guidance, and faculty support for clinical legal education at Usmanu Danfodiyo University, Sokoto."
  },
  /*{
    name: "[Dr. / Barr. Coordinator Name]",
    subtitle: "Senior Lecturer & Legal Practitioner",
    role: "Staff Adviser & Clinic Coordinator",
    photo: "https://placehold.co/400x450/1b4332/ffffff?text=Staff+Adviser",
    bio: "Supervises student clinicians on case intake, ethical compliance, legal drafting, and NULAI Nigeria clinical standards."
  },*/
  {
    name: "Dr. M.M Aliyu",
    subtitle: "Lecturer, Faculty of Law",
    role: "Staff Adviser & Clinic Coordinator",
    photo: "../Asset/mansur.jpeg",
    bio: "Mentors clinicians on Alternative Dispute Resolution (ADR), community outreach programs, and human rights advocacy."
  }
];

// 1B. STUDENT EXECUTIVE COUNCIL DATA (Edit names, levels, positions & photos here)
const executives = [
  {
    name: "Aisha Qasim Maijega",
    subtitle: "500 Level, Faculty of Law",
    role: "Deputy Director General",
    photo: "../Asset/maijega.jpeg",
    bio: "Coordinates internal clinical operations, student clinician schedules, and case file supervision."
  },
  {
   name: "Alaro Abdullahi M",
    subtitle: "500 Level, Faculty of Law",
    role: "Director of Programs",
    photo: "../Asset/alaro.jpeg",
    bio: "Oversees prison decongestion exercises, court observation duties, and client intake assessments."
  },
  {
    name: "Bello Saifnasr Ajibade",
    subtitle: "500 Level, Faculty of Law",
    role: "Dept Dir Street Law",
    photo: "Asset/saif.jpeg",
    bio: "Leads the strategic vision, external partnerships, and overall administration of the UDUSOK Law Clinic."
  },
   {
    name: "Aisha Ali Isah",
    subtitle: "400 Level, Faculty of Law",
    role: "Deputy Director Freedom and Information",
    photo: "../Asset/Aiaha ali.jpeg",
    bio: "Maintains transparent financial records, project budgets, and grant accountability for clinic initiatives."
  },
  {
    name: "Naziru Sulaiman",
    subtitle: "400 Level, Faculty of Law",
    role: "Deputy Director, Pre-Trial Detention",
    photo: "../Asset/naxiru.jpeg",
    bio: "Heads legal research teams, editorial publications, and empirical access-to-justice reports."
  },
  {
    name: "Muhammad Ndagi Usman",
    subtitle: "400 Level, Faculty of Law",
    role: "Deputy Director Human Right",
    photo: "../Asset/ndagi.jpeg",
    bio: "Maintains transparent financial records, project budgets, and grant accountability for clinic initiatives."
  },
  {
    name: "Marufdeen Muhammed Director, ADR",
    subtitle: "400 Level, Faculty of Law",
    role: "Assistant Deputy Director, ADR",
    photo: "../Asset/yasin.jpeg",
    bio: "Heads legal research teams, editorial publications, and empirical access-to-justice reports."
  }, 
   {
    name: "Zainab Babangida Maidabino",
    subtitle: "300 Level, Faculty of Law",
    role: "Asst. Director Pre-trial Detention",
    photo: "../Asset/maidabino.jpeg",
    bio: "Directs public enlightenment campaigns, Street Law media coverage, and stakeholder communications."
  },
  {
    name: "Zainab Wali",
    subtitle: "500 Level, Faculty of Law",
    role: "Facilaltator",
    photo: "../Asset/wali.jpeg",
    bio: "Supervises community mediation sessions, conflict resolution clinics, and amicable settlement drafting."
  },
  {
    name: "Safiyya Abubakar Matazu",
    subtitle: "400 Level, Faculty of Law",
    role: "Deputy Facilaltator",
    photo: "../Asset/mtz.jpeg",
    bio: "Supervises community mediation sessions, conflict resolution clinics, and amicable settlement drafting."
  },
   {
    name: "Muhammad Nasiru Junju",
    subtitle: "500 Level, Faculty of Law",
    role: "Fininacial Secretary",
    photo: "../Asset/junju.jpeg",
    bio: "Manages official correspondence, minutes of executive meetings, and institutional record keeping."
  },
  {
    name: "Suleiman Raudat Mohammed",
    subtitle: "300 Level, Faculty of Law",
    role: "Public Relations Officer",
    photo: "../Asset/raudat.jpeg",
    bio: "Directs public enlightenment campaigns, Street Law media coverage, and stakeholder communications."
  },
  {
    name: "muazu Samaila",
    subtitle: "300 Level, Faculty of Law",
    role: "Publication manager  Ⅱ",
    photo: "../Asset/muazu.jpeg",
    bio: "Supervises community mediation sessions, conflict resolution clinics, and amicable settlement drafting."
  },
  {
    name: "Muhammad Dahir",
    subtitle: "400 Level, Faculty of Law",
    role: "Publication manager",
    photo: "../Asset/dahiru.jpeg",
    bio: "Heads legal research teams, editorial publications, and empirical access-to-justice reports."
  },
];

document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
 // document.getElementById("year").textContent = new Date().getFullYear();

  // 2. Mobile Navigation Toggle
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  menuToggle?.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });

  // Helper function to generate portrait card HTML
  const createCardHTML = (person, index, type, cardClass) => `
    <article class="${cardClass}" data-type="${type}" data-index="${index}">
      <div class="exec-photo-wrap">
        <img src="${person.photo}" alt="${person.name}" loading="lazy" />
      </div>
      <div class="exec-info">
        <div>
          <h3 class="exec-name">${person.name}</h3>
          <span class="exec-level">${person.subtitle}</span>
          <span class="exec-role">${person.role}</span>
        </div>
        <span class="exec-footer-link">View Full Profile &rarr;</span>
      </div>
    </article>
  `;

  // 3A. Render Faculty Patrons & Staff Advisers
  const patronGrid = document.getElementById("patronGrid");
  if (patronGrid) {
    patronGrid.innerHTML = patrons
      .map((patron, index) => createCardHTML(patron, index, "patron", "patron-card"))
      .join("");
  }

   // 3B. Render Student Executive Council (with Mobile "Show More" toggle)
  const execGrid = document.getElementById("execGrid");
  if (execGrid) {
    execGrid.innerHTML = executives
      .map((exec, index) => createCardHTML(exec, index, "exec", "exec-card"))
      .join("");

    // Create "Show More" button for mobile view if more than 3 executives exist
    if (executives.length > 3) {
      const toggleWrap = document.createElement("div");
      toggleWrap.className = "exec-more-wrap";

      const moreBtn = document.createElement("button");
      moreBtn.type = "button";
      moreBtn.className = "btn btn-primary exec-more-btn";
      moreBtn.textContent = `View All Executives (${executives.length - 3} More)`;

      moreBtn.addEventListener("click", () => {
        const isExpanded = execGrid.classList.toggle("show-all");
        moreBtn.textContent = isExpanded
          ? "Show Less"
          : `View All Executives (${executives.length - 3} More)`;
      });

      toggleWrap.appendChild(moreBtn);
      execGrid.insertAdjacentElement("afterend", toggleWrap);
    }
  }


  // 4. Interactive Modal for Both Patrons & Executives
  const modal = document.getElementById("bioModal");
  const closeModal = document.getElementById("closeModal");

  const openProfileModal = (e) => {
    const card = e.target.closest("[data-type]");
    if (!card) return;

    const list = card.dataset.type === "patron" ? patrons : executives;
    const person = list[card.dataset.index];

    document.getElementById("modalImg").src = person.photo;
    document.getElementById("modalName").textContent = person.name;
    document.getElementById("modalLevel").textContent = person.subtitle;
    document.getElementById("modalRole").textContent = person.role;
    document.getElementById("modalBio").textContent = person.bio;

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
  };

  patronGrid?.addEventListener("click", openProfileModal);
  execGrid?.addEventListener("click", openProfileModal);

  const hideModal = () => {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  };

  closeModal?.addEventListener("click", hideModal);
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) hideModal();
  });

  // 5. Animated Impact Counters on Scroll
  const counters = document.querySelectorAll(".counter");
  let counted = false;

  const animateCounters = () => {
    counters.forEach((counter) => {
      const target = +counter.dataset.target;
      const duration = 1500;
      const stepTime = 20;
      const increment = target / (duration / stepTime);
      let current = 0;

      const updateCount = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.ceil(current) + "+";
          setTimeout(updateCount, stepTime);
        } else {
          counter.textContent = target + (target === 100 ? "%" : "+");
        }
      };
      updateCount();
    });
  };

  const statsSection = document.getElementById("statsSection");
  if (statsSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.isIntersecting && !counted) {
          animateCounters();
          counted = true;
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(statsSection);
  }

  // 6. Save as Official PDF Trigger
  const handlePrint = () => window.print();
  document.getElementById("printBtn")?.addEventListener("click", handlePrint);
  document.getElementById("footerPrintBtn")?.addEventListener("click", handlePrint);
});