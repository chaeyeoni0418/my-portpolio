class ProjectDetail extends HTMLElement {
  connectedCallback() {
    const data = this.getProjectData();

    this.innerHTML =
      data.variant === "design"
        ? this.renderDesignDetail(data)
        : this.renderBasicDetail(data);
  }

  getProjectData() {
    const tags = (this.getAttribute("tags") || "HTML,CSS")
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);

    return {
      variant: this.getAttribute("variant") || "basic",
      image: this.getAttribute("image"),
      imageAlt: this.getAttribute("image-alt") || "",
      imageLayout: this.getAttribute("image-layout") || "landscape-contain",
      label: this.getAttribute("label"),
      title: this.getAttribute("title"),
      subtitle: this.getAttribute("subtitle"),
      summary: this.getAttribute("summary"),
      problem:
        this.getAttribute("problem") ||
        "화면 크기에 따라 레이아웃이 자연스럽게 보이도록 조정하는 과정이 어려웠습니다.",
      lesson:
        this.getAttribute("lesson") ||
        "페이지 구조를 나누고 공통 스타일을 관리하는 방법을 배웠습니다.",
      process:
        this.getAttribute("process") ||
        "아이디어를 정리한 뒤 필요한 화면을 나누고, HTML로 구조를 만든 다음 CSS로 레이아웃과 분위기를 맞추며 완성했습니다.",
      link: this.getAttribute("link"),
      buttonText: this.getAttribute("button-text") || "실제 프로젝트 보기 →",
      detailSchedule: this.getAttribute("detail-schedule") || "2024.03 - 2024.04",
      detailRole: this.getAttribute("detail-role") || "개인 프로젝트",
      tags,
    };
  }

  renderBasicDetail(data) {
    return `
      <section class="project-detail">
        <a href="../index/index.html#projects" class="back">
          <img src="../img/Caret_Circle_Left.svg" alt="">
          <span>프로젝트 목록으로 돌아가기</span>
        </a>

        <div class="detail-main">
          <div class="detail-media">
            <div class="detail-img ${data.imageLayout}">
              <img src="${data.image}" alt="${data.imageAlt}">
            </div>
          </div>

          <div class="detail-text">
            <p class="section-label">${data.label}</p>
            <h2>${data.title}</h2>
            <p>${data.subtitle}</p>

            <div class="tag-box">
              ${data.tags.map((tag) => `<span>${tag}</span>`).join("")}
            </div>

            <h3>프로젝트 개요</h3>
            <p>${data.summary}</p>

            <div class="btn-box">
              <a href="${data.link}" class="black-btn">${data.buttonText}</a>
            </div>
          </div>
        </div>

        ${this.renderDetailMore(data)}
        ${this.renderInfoBox(data)}
      </section>
    `;
  }

  renderDesignDetail(data) {
    return `
      <section class="project-detail design-detail">
        <a href="../index/index.html#projects" class="back">
          <img src="../img/Caret_Circle_Left.svg" alt="">
          <span>프로젝트 목록으로 돌아가기</span>
        </a>

        <div class="design-layout">
          <aside class="design-side">
            <a href="#intro" class="active">프로젝트 소개</a>
            <a href="#process">개발 과정</a>
            <a href="${data.link}">페이지 보기</a>
          </aside>

          <main class="design-content">
            <p class="section-label">${data.label}</p>
            <h2>${data.title}</h2>
            <p>${data.subtitle}</p>

            <div class="design-showcase" id="intro">
              <div class="design-card preview-card">
                <img src="${data.image}" alt="${data.imageAlt}">
              </div>

              <div class="design-info">
                <h3>핵심 정보</h3>
                <p>${data.summary}</p>
                <div class="tag-box">
                  ${data.tags.map((tag) => `<span>${tag}</span>`).join("")}
                </div>
                <a href="${data.link}" class="black-btn design-link">${data.buttonText}</a>
              </div>
            </div>

            <div class="design-card wide-card">
              <h3>프로젝트 소개</h3>
              <p>
                ${data.summary}
                사용자가 정보를 쉽게 이해하고 이동할 수 있도록 화면 구조와 시각적 흐름을 정리했습니다.
              </p>
            </div>

            <div class="design-card wide-card">
              <h3>어려웠던 점</h3>
              <p>${data.problem}</p>
            </div>

            <div class="design-card wide-card">
              <h3>배운 점</h3>
              <p>${data.lesson}</p>
            </div>

            <div class="design-process" id="process">
              <h3>개발 과정</h3>
              <p>${data.process}</p>
            </div>

            ${this.renderInfoBox(data)}
          </main>
        </div>
      </section>
    `;
  }

  renderDetailMore(data) {
    return `
      <div class="detail-more">
        <h3>프로젝트 상세</h3>

        <div class="detail-more-item">
          <h4>프로젝트 소개</h4>
          <p>
            ${data.summary}
            <br>
            ${data.tags.join(", ")}를 사용하여 화면을 구성했고, 실제 사용자가 보는 UI/UX를 구현하며 완성도를 높였습니다.
          </p>
        </div>

        <div class="detail-more-item">
          <h4>어려웠던 점</h4>
          <p>${data.problem}</p>
        </div>

        <div class="detail-more-item">
          <h4>배운 점</h4>
          <p>${data.lesson}</p>
        </div>
      </div>
    `;
  }

  renderInfoBox(data) {
    return `
      <div class="info-box">
        <div>
          <strong>작업 기간</strong>
          <p>${data.detailSchedule}</p>
        </div>

        <div>
          <strong>참여 형태</strong>
          <p>${data.detailRole}</p>
        </div>

        <div>
          <strong>사용 기술</strong>
          <p>${data.tags.join(", ")}</p>
        </div>
      </div>
    `;
  }
}

if (!customElements.get("project-detail")) {
  customElements.define("project-detail", ProjectDetail);
}
