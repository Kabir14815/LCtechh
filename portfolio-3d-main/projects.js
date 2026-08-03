(function () {
  const grid = document.getElementById("projects-grid");
  const countEl = document.getElementById("projects-count");
  const projects = window.PORTFOLIO_PROJECTS || [];
  const tags = window.PORTFOLIO_TAGS || {};

  if (!grid) return;

  if (countEl) {
    countEl.textContent =
      projects.length === 1
        ? "1 project delivered"
        : `${projects.length} projects delivered`;
  }

  const renderTags = (tagKeys) =>
    (tagKeys || [])
      .map((key) => {
        const tag = tags[key];
        if (!tag) return "";
        return `<span class="project-card-tag" style="background:${tag.background};color:${tag.color}">${tag.label}</span>`;
      })
      .join("");

  grid.innerHTML = projects
    .map(
      (project) => `
      <article class="project-card">
        <div class="project-card-image-wrap">
          <img src="${project.image}" alt="${project.alt || project.name}" loading="lazy" decoding="async" width="400" height="300" />
        </div>
        <div class="project-card-body">
          <h2>${project.name}</h2>
          <div class="project-card-tags">${renderTags(project.tags)}</div>
          <p>${project.description}</p>
          ${
            project.liveview
              ? `<a class="project-card-link" href="${project.liveview}" target="_blank" rel="noopener noreferrer">Live View</a>`
              : `<span class="project-card-link" style="background:#a7adb8;cursor:default">Work in progress</span>`
          }
        </div>
      </article>
    `
    )
    .join("");
})();
