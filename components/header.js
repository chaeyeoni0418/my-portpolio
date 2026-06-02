class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        site-header {
          display: block;
        }

        .site-header {
          width: 100%;
          padding: 24px 8%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #f8f3eb;
          border-bottom: 1px solid #e2d5c4;
          box-sizing: border-box;
        }

        .site-logo {
          color: #2b241f;
          font-size: 26px;
          font-weight: bold;
          text-decoration: none;
        }

        .site-nav {
          display: flex;
          gap: 28px;
        }

        .site-nav a {
          color: #2b241f;
          font-size: 13px;
          font-weight: bold;
          text-decoration: none;
        }

        @media (max-width: 700px) {
          .site-header {
            flex-direction: column;
            gap: 14px;
          }
        }
      </style>

      <header class="site-header">
        <a class="site-logo" href="../index/index.html">portfolio.</a>
        <nav class="site-nav">
          <a href="../about/about.html">ABOUT</a>
          <a href="../index/index.html#projects">PROJECTS</a>
          <a href="../visitor/visitor.html">VISITOR</a>
          <a href="../index/index.html#contact">CONTACT</a>
        </nav>
      </header>
    `;
  }
}

if (!customElements.get("site-header")) {
  customElements.define("site-header", SiteHeader);
}
