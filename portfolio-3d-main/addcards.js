const oM = [
  {
    id: 0,
    name: "Jas&Mey Ice Cream",
    description: "Premium ice cream brand website with 50+ flavors showcase, online ordering system, and home delivery integration for Baba Dairy.",
    image: "images/projects/jm-logo.png",
    tags: ["javascript", "react", "videoEditing", "css"],
    liveview: "https://babadairy.com",
    alt: "Jas&Mey Ice Cream - Baba Dairy Website",
  },
  {
    id: 1,
    name: "Pooja Furniture",
    description: "Full-featured e-commerce store with product catalog, categories, and seamless shopping experience for a furniture and decor brand.",
    image: "images/projects/pf-logo.png",
    tags: ["javascript", "html", "css", "videoEditing"],
    liveview: "https://poojafurniture.com",
    alt: "Pooja Furniture E-Commerce Website",
  },
  {
    id: 2,
    name: "Mindsurve",
    description: "Modern survey and research platform with data collection, analytics, and insights dashboard for market research.",
    image: "images/projects/ms-logo.png",
    tags: ["react", "javascript", "mongodb", "express"],
    liveview: "https://mindsurve.com",
    alt: "Mindsurve Research Platform",
  },
  {
    id: 3,
    name: "GrowWell",
    description: "Growth-focused digital platform with marketing tools, analytics, and business management features to help businesses scale.",
    image: "images/projects/gw-logo.png",
    tags: ["react", "mongodb", "express", "javascript"],
    liveview: "https://growwell.com",
    alt: "GrowWell Business Platform",
  },
  {
    id: 4,
    name: "Dr. KPS Clinic",
    description: "Multispeciality hospital website with doctor profiles, appointment booking, 24/7 emergency info, and patient services for Kharar, Chandigarh.",
    image: "images/projects/kps-logo.png",
    tags: ["react", "javascript", "videoEditing", "css"],
    liveview: "https://drkpsclinic.com",
    alt: "Dr. KPS Clinic - Multispeciality Hospital",
  },
];

class lM {
  constructor() {
    he(this, "domElements", {
      renderContainer: document.getElementById("work-render-container"),
    });
    (this.experience = new ye()),
      (this.sounds = this.experience.sounds),
      (this.items = oM),
      (this.tags = aM),
      this.renderItems();
  }

  renderItems() {
    this.items.forEach((e) => {
      this.domElements.renderContainer.insertAdjacentHTML(
        "beforeend",
        `
              <div id="work-item-${e.id}" class="work-item-container column">
                  <img class="work-item-image" src="${e.image}" alt="${e.alt
        }" height="300" width="334" loading="lazy" decoding="async"/>
                  <div class="work-item-content-container">
                      <h3>${e.name}</h3>
                      <div class="work-item-tag-container row">
                          ${this.renderTags(e.tags)}
                      </div>
                      <span>${e.description}</span>
                  </div>
                  <div class="work-item-button-container row">
                      ${this.renderButtons(e)}
                  </div>
                  ${e.bannerIcons ? this.renderBanner(e) : ""}
              </div>
              `
      ),
        this.addEventListenersToCard(e);
    });
  }

  renderBanner(e) {
    let t = "";
    return (
      (t = `
              <div class="work-banner-container row center">
                  ${e.bannerIcons.map(
        (n) =>
          `<img src="${n.src}" alt="${n.alt}" height="64" width="64"/>`
      )}
                  <span>Website Of<br>The Day</span>
              </div>
          `),
      t
    );
  }

  renderButtons(e) {
    // Only the Live View button will be rendered if available
    let t = "";
    if (e.liveview) {
      t = `
          <div id="work-item-orange-button-${e.id}" class="work-item-orange-button small-button center orange-hover" style="width: 100%; margin: 0;">
              Live View
          </div>`;
    } else {
      t = `
          <div id="work-item-gray-button-${e.id}" class="work-item-gray-button center" style="width: 100%; background: #a7adb8; cursor: unset;">
              Work in progress
          </div>`;
    }
    return t;
  }

  renderTags(e) {
    let t = "";
    for (let n = 0; n < e.length; n++) t += this.tags[e[n]];
    return t;
  }

  addEventListenersToCard(e) {
    const t = document.getElementById("work-item-" + e.id);
    t.addEventListener("click", () => {
      t.classList.contains("work-inactive-item-container") &&
        document
          .getElementById("work-item-0")
          .classList.contains("work-item-container-transition") &&
        ((this.experience.ui.work.cards.currentItemIndex = -e.id + 4),
          this.experience.ui.work.cards.updatePositions(),
          this.sounds.play("buttonClick"));
    });

    if (e.liveview) {
      document
        .getElementById("work-item-orange-button-" + e.id)
        .addEventListener("click", () => {
          window.open(e.liveview, "_blank").focus();
        });
    }
  }
}
