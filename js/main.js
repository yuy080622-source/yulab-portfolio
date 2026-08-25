const projects = window.PORTFOLIO_PROJECTS || [];
const tags = (items) => items.map((item) => `<span>${item}</span>`).join("");

const featuredCard = (p) => `
  <article class="work-card">
    <div class="visual ${p.tone}"><span class="grid"></span><strong>${p.mark}</strong><small>${p.type}</small></div>
    <div class="work-body">
      <div class="meta"><span class="status">公開中</span><span>${p.id}</span></div>
      <h3>${p.title}</h3><p>${p.summary}</p>
      <aside><b>解決したかったこと</b><span>${p.problem}</span></aside>
      <ul>${p.features.map((f) => `<li>${f}</li>`).join("")}</ul>
      <div class="tags">${tags(p.tech)}</div>
      <div class="actions"><a class="button small" href="${p.url}" target="_blank" rel="noopener noreferrer">使ってみる →</a>${p.github ? `<a class="text-link" href="${p.github}" target="_blank" rel="noopener noreferrer">GitHubを見る</a>` : ""}</div>
    </div>
  </article>`;

const miniCard = (p) => `
  <article class="mini-card">
    <div class="visual mini ${p.tone}"><span class="grid"></span><strong>${p.mark}</strong></div>
    <div class="mini-body"><div class="meta"><span class="status">公開中</span><span>${p.id}</span></div><h3>${p.title}</h3><p>${p.summary}</p><div class="tags">${tags(p.tech)}</div><a class="arrow-link" href="${p.url}" target="_blank" rel="noopener noreferrer">使ってみる →</a></div>
  </article>`;

document.querySelector("#featured-projects").innerHTML = projects.filter((p) => p.featured).map(featuredCard).join("");
document.querySelector("#more-projects").innerHTML = projects.filter((p) => !p.featured).map(miniCard).join("");
