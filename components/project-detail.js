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
        "생각한 화면을 실제 코드로 옮기면서 간격과 크기를 맞추는 부분이 조금 어려웠습니다.",
      lesson:
        this.getAttribute("lesson") ||
        "화면을 작은 영역으로 나누고, 공통 스타일을 정리해서 쓰는 방법을 배웠습니다.",
      process:
        this.getAttribute("process") ||
        "먼저 필요한 화면을 나누고 HTML로 구조를 만든 뒤, CSS로 간격과 분위기를 맞추며 완성했습니다.",
      link: this.getAttribute("link"),
      buttonText: this.getAttribute("button-text") || "프로젝트 보기 →",
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

            <h3>프로젝트 소개</h3>
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
            <a href="${data.link}">프로젝트 보기</a>
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
                <h3>한눈에 보기</h3>
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
                사용자가 편하게 볼 수 있도록 화면 흐름과 정보 배치를 신경 써서 만들었습니다.
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
            ${data.tags.join(", ")}를 사용해서 화면을 구성했습니다.
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
