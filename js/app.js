(() => {
  "use strict";

  const state = {
    product: null,
    page: 0,
    openCategories: new Set(products.map((product) => product.category)),
    lastFocusedElement: null
  };

  const elements = {
    menuButton: document.querySelector("#menu-button"),
    closeSidebar: document.querySelector("#close-sidebar"),
    sidebar: document.querySelector("#sidebar"),
    drawerBackdrop: document.querySelector("#drawer-backdrop"),
    search: document.querySelector("#product-search"),
    productNav: document.querySelector("#product-nav"),
    breadcrumbName: document.querySelector("#breadcrumb-name"),
    productTitle: document.querySelector("#product-title"),
    productDescription: document.querySelector("#product-description"),
    productCategory: document.querySelector("#product-category"),
    toolbarProductName: document.querySelector("#toolbar-product-name"),
    pageIndicator: document.querySelector("#page-indicator"),
    pageControls: document.querySelector("#page-controls"),
    prevPage: document.querySelector("#prev-page"),
    nextPage: document.querySelector("#next-page"),
    zoomButton: document.querySelector("#zoom-button"),
    openButton: document.querySelector("#open-button"),
    downloadButton: document.querySelector("#download-button"),
    catalogStage: document.querySelector("#catalog-stage"),
    thumbnailStrip: document.querySelector("#thumbnail-strip"),
    lightbox: document.querySelector("#lightbox"),
    lightboxBody: document.querySelector("#lightbox-body"),
    lightboxTitle: document.querySelector("#lightbox-title"),
    lightboxPage: document.querySelector("#lightbox-page"),
    lightboxClose: document.querySelector("#lightbox-close"),
    lightboxPrev: document.querySelector("#lightbox-prev"),
    lightboxNext: document.querySelector("#lightbox-next")
  };

  const categories = [...new Set(products.map((product) => product.category))];

  function getProductFromHash() {
    const id = decodeURIComponent(window.location.hash.slice(1));
    return products.find((product) => product.id === id) || products[0];
  }

  function renderNavigation(filter = "") {
    const query = filter.trim().toLocaleLowerCase("zh-Hant");
    let visibleCount = 0;

    elements.productNav.innerHTML = categories.map((category, categoryIndex) => {
      const categoryProducts = products.filter((product) => {
        const isCategory = product.category === category;
        const matches = !query || `${product.name} ${product.description} ${product.category}`.toLocaleLowerCase("zh-Hant").includes(query);
        return isCategory && matches;
      });

      if (!categoryProducts.length) return "";
      visibleCount += categoryProducts.length;
      const isOpen = query ? true : state.openCategories.has(category);
      const categoryId = `category-${categoryIndex}`;

      return `
        <section class="nav-category">
          <button class="category-toggle" type="button" aria-expanded="${isOpen}" aria-controls="${categoryId}" data-category="${category}">
            <span>${category}</span>
            <span class="category-count">${categoryProducts.length}</span>
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m7 10 5 5 5-5"/></svg>
          </button>
          <div class="category-products" id="${categoryId}" ${isOpen ? "" : "hidden"}>
            ${categoryProducts.map((product) => `
              <a class="product-link${state.product?.id === product.id ? " active" : ""}" href="#${product.id}" data-product-id="${product.id}" ${state.product?.id === product.id ? 'aria-current="page"' : ""}>
                <span class="product-dot" aria-hidden="true"></span>
                <span>${highlightMatch(product.name, query)}</span>
                <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>
              </a>`).join("")}
          </div>
        </section>`;
    }).join("");

    if (!visibleCount) {
      elements.productNav.innerHTML = `
        <div class="empty-search">
          <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m16.5 16.5 4 4"/></svg>
          <strong>找不到符合的產品</strong>
          <span>請嘗試其他關鍵字</span>
        </div>`;
    }
  }

  function highlightMatch(text, query) {
    if (!query) return text;
    const index = text.toLocaleLowerCase("zh-Hant").indexOf(query);
    if (index < 0) return text;
    return `${text.slice(0, index)}<mark>${text.slice(index, index + query.length)}</mark>${text.slice(index + query.length)}`;
  }

  function selectProduct(product, options = {}) {
    if (!product) return;
    state.product = product;
    state.page = 0;

    elements.breadcrumbName.textContent = product.name;
    elements.productTitle.textContent = product.name;
    elements.productDescription.textContent = product.description;
    elements.productCategory.textContent = product.category;
    elements.toolbarProductName.textContent = product.name;
    document.title = `${product.name}｜SUNNY CATALOG`;

    renderNavigation(elements.search.value);
    renderCatalog();

    if (window.location.hash !== `#${product.id}`) {
      history.replaceState(null, "", `#${product.id}`);
    }
    if (options.closeDrawer !== false) closeDrawer();
  }

  function renderCatalog() {
    const product = state.product;
    if (product.type === "pdf") renderPdf(product);
    else renderImageCatalog(product);
  }

  function renderImageCatalog(product) {
    const currentFile = product.files[state.page];
    const pageNumber = state.page + 1;
    const totalPages = product.files.length;

    elements.pageIndicator.textContent = `第 ${pageNumber} / ${totalPages} 頁`;
    elements.pageControls.hidden = false;
    elements.prevPage.disabled = state.page === 0;
    elements.nextPage.disabled = state.page === totalPages - 1;
    elements.openButton.hidden = true;
    elements.downloadButton.hidden = false;
    elements.downloadButton.href = currentFile;
    const extension = currentFile.split(".").pop().split(/[?#]/)[0] || "file";
    elements.downloadButton.download = `${product.id}-page-${String(pageNumber).padStart(2, "0")}.${extension}`;
    elements.downloadButton.setAttribute("aria-label", `下載 ${product.name} 第 ${pageNumber} 頁`);
    elements.zoomButton.setAttribute("aria-label", `放大檢視 ${product.name} 第 ${pageNumber} 頁`);
    elements.zoomButton.innerHTML = `<svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m16.5 16.5 4 4M11 8v6M8 11h6"/></svg><span>放大</span>`;

    elements.catalogStage.className = "catalog-stage image-mode";
    elements.catalogStage.innerHTML = `
      <button class="catalog-image-button" type="button" aria-label="放大檢視 ${product.name} 第 ${pageNumber} 頁">
        <img src="${currentFile}" alt="${product.name} 型錄第 ${pageNumber} 頁" width="1200" height="800">
        <span class="image-zoom-hint" aria-hidden="true">
          <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m16.5 16.5 4 4M11 8v6M8 11h6"/></svg>
          點擊放大
        </span>
      </button>`;

    elements.catalogStage.querySelector(".catalog-image-button").addEventListener("click", openLightbox);
    elements.catalogStage.querySelector("img").addEventListener("error", handleAssetError, { once: true });

    elements.thumbnailStrip.hidden = totalPages <= 1;
    elements.thumbnailStrip.innerHTML = product.files.map((file, index) => `
      <button class="thumbnail${index === state.page ? " active" : ""}" type="button" data-page="${index}" aria-label="前往第 ${index + 1} 頁" ${index === state.page ? 'aria-current="true"' : ""}>
        <img src="${file}" alt="" loading="lazy">
        <span>${String(index + 1).padStart(2, "0")}</span>
      </button>`).join("");
  }

  function renderPdf(product) {
    const pdfFile = product.files[0];
    const previewFiles = product.previewFiles || [];
    const hasPreview = previewFiles.length > 0;
    const previewPage = Math.min(state.page, Math.max(previewFiles.length - 1, 0));
    state.page = previewPage;

    elements.pageIndicator.textContent = hasPreview
      ? `第 ${previewPage + 1} / ${previewFiles.length} 頁・PDF`
      : "PDF 文件";
    elements.pageControls.hidden = !hasPreview || previewFiles.length <= 1;
    elements.prevPage.disabled = previewPage === 0;
    elements.nextPage.disabled = previewPage === previewFiles.length - 1;
    elements.openButton.hidden = false;
    elements.openButton.href = pdfFile;
    elements.openButton.setAttribute("aria-label", `在新分頁開啟 ${product.name} PDF 型錄`);
    elements.downloadButton.hidden = false;
    elements.downloadButton.href = pdfFile;
    elements.downloadButton.download = `${product.id}-catalog.pdf`;
    elements.downloadButton.setAttribute("aria-label", `下載 ${product.name} PDF 型錄`);
    elements.zoomButton.setAttribute("aria-label", `全螢幕檢視 ${product.name} PDF 型錄`);
    elements.zoomButton.innerHTML = `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"/></svg><span>全螢幕</span>`;

    if (hasPreview) {
      elements.catalogStage.className = "catalog-stage pdf-preview-mode";
      elements.catalogStage.innerHTML = `
        <button class="pdf-preview-button" type="button" aria-label="放大檢視 ${product.name} PDF 第 ${previewPage + 1} 頁">
          <img src="${previewFiles[previewPage]}" alt="${product.name} PDF 型錄第 ${previewPage + 1} 頁完整預覽">
          <span class="image-zoom-hint" aria-hidden="true">
            <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m16.5 16.5 4 4M11 8v6M8 11h6"/></svg>
            點擊放大
          </span>
        </button>`;
      elements.catalogStage.querySelector(".pdf-preview-button").addEventListener("click", openLightbox);
    } else {
      elements.catalogStage.className = "catalog-stage pdf-mode";
      elements.catalogStage.innerHTML = `
        <object class="pdf-viewer" data="${pdfFile}#view=FitH&pagemode=none" type="application/pdf" aria-label="${product.name} PDF 型錄預覽">
          <div class="pdf-fallback">
            <div class="pdf-fallback-icon" aria-hidden="true">PDF</div>
            <h3>此瀏覽器無法直接顯示 PDF</h3>
            <p>您仍可下載檔案，或在新分頁中開啟完整型錄。</p>
            <div>
              <a class="fallback-button" href="${pdfFile}" target="_blank" rel="noopener">另開 PDF</a>
              <a class="fallback-button primary" href="${pdfFile}" download>下載 PDF</a>
            </div>
          </div>
        </object>`;
    }
    elements.thumbnailStrip.hidden = true;
    elements.thumbnailStrip.innerHTML = "";
  }

  function changePage(delta) {
    if (!state.product) return;
    const pageFiles = state.product.type === "images" ? state.product.files : state.product.previewFiles;
    if (!pageFiles?.length) return;
    const nextPage = Math.min(Math.max(state.page + delta, 0), pageFiles.length - 1);
    if (nextPage === state.page) return;
    state.page = nextPage;
    renderCatalog();
    if (!elements.lightbox.hidden) updateLightbox();
  }

  function goToPage(index) {
    if (index === state.page) return;
    state.page = index;
    renderImageCatalog(state.product);
  }

  function openDrawer() {
    elements.sidebar.classList.add("open");
    elements.drawerBackdrop.classList.add("visible");
    elements.menuButton.setAttribute("aria-expanded", "true");
    document.body.classList.add("drawer-open");
    window.setTimeout(() => elements.closeSidebar.focus(), 100);
  }

  function closeDrawer() {
    elements.sidebar.classList.remove("open");
    elements.drawerBackdrop.classList.remove("visible");
    elements.menuButton.setAttribute("aria-expanded", "false");
    document.body.classList.remove("drawer-open");
  }

  function openLightbox() {
    state.lastFocusedElement = document.activeElement;
    elements.lightbox.hidden = false;
    document.body.classList.add("lightbox-open");
    updateLightbox();
    elements.lightboxClose.focus();
  }

  function updateLightbox() {
    const product = state.product;
    elements.lightboxTitle.textContent = `${product.name}・放大檢視`;

    if (product.type === "pdf") {
      const previewFiles = product.previewFiles || [];
      if (previewFiles.length) {
        elements.lightboxPage.textContent = `第 ${state.page + 1} / ${previewFiles.length} 頁・PDF`;
        elements.lightboxBody.innerHTML = `<img src="${previewFiles[state.page]}" alt="${product.name} PDF 型錄第 ${state.page + 1} 頁放大檢視">`;
        elements.lightboxPrev.hidden = previewFiles.length <= 1;
        elements.lightboxNext.hidden = previewFiles.length <= 1;
        elements.lightboxPrev.disabled = state.page === 0;
        elements.lightboxNext.disabled = state.page === previewFiles.length - 1;
      } else {
        elements.lightboxPage.textContent = "PDF 文件";
        elements.lightboxBody.innerHTML = `<iframe class="lightbox-pdf" src="${product.files[0]}#view=FitH&pagemode=none" title="${product.name} PDF 全螢幕預覽"></iframe>`;
        elements.lightboxPrev.hidden = true;
        elements.lightboxNext.hidden = true;
      }
    } else {
      elements.lightboxPage.textContent = `第 ${state.page + 1} / ${product.files.length} 頁`;
      elements.lightboxBody.innerHTML = `<img src="${product.files[state.page]}" alt="${product.name} 型錄第 ${state.page + 1} 頁放大檢視">`;
      elements.lightboxPrev.hidden = product.files.length <= 1;
      elements.lightboxNext.hidden = product.files.length <= 1;
      elements.lightboxPrev.disabled = state.page === 0;
      elements.lightboxNext.disabled = state.page === product.files.length - 1;
    }
  }

  function closeLightbox() {
    if (elements.lightbox.hidden) return;
    elements.lightbox.hidden = true;
    elements.lightboxBody.innerHTML = "";
    document.body.classList.remove("lightbox-open");
    state.lastFocusedElement?.focus();
  }

  function handleAssetError(event) {
    event.currentTarget.closest(".catalog-image-button").innerHTML = `
      <span class="asset-error"><strong>型錄檔案暫時無法顯示</strong><span>請確認 products.js 中的檔案路徑是否正確。</span></span>`;
  }

  elements.menuButton.addEventListener("click", openDrawer);
  elements.closeSidebar.addEventListener("click", closeDrawer);
  elements.drawerBackdrop.addEventListener("click", closeDrawer);
  elements.prevPage.addEventListener("click", () => changePage(-1));
  elements.nextPage.addEventListener("click", () => changePage(1));
  elements.zoomButton.addEventListener("click", openLightbox);
  elements.lightboxClose.addEventListener("click", closeLightbox);
  elements.lightboxPrev.addEventListener("click", () => changePage(-1));
  elements.lightboxNext.addEventListener("click", () => changePage(1));

  elements.productNav.addEventListener("click", (event) => {
    const categoryButton = event.target.closest(".category-toggle");
    if (categoryButton) {
      const category = categoryButton.dataset.category;
      const isOpen = categoryButton.getAttribute("aria-expanded") === "true";
      if (isOpen) state.openCategories.delete(category);
      else state.openCategories.add(category);
      renderNavigation(elements.search.value);
      return;
    }

    const productLink = event.target.closest(".product-link");
    if (productLink) {
      const product = products.find((item) => item.id === productLink.dataset.productId);
      selectProduct(product);
    }
  });

  elements.thumbnailStrip.addEventListener("click", (event) => {
    const thumbnail = event.target.closest(".thumbnail");
    if (thumbnail) goToPage(Number(thumbnail.dataset.page));
  });

  elements.search.addEventListener("input", (event) => renderNavigation(event.target.value));

  window.addEventListener("hashchange", () => selectProduct(getProductFromHash(), { closeDrawer: false }));
  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) closeDrawer();
  });

  document.addEventListener("keydown", (event) => {
    const isTyping = ["INPUT", "TEXTAREA"].includes(document.activeElement.tagName);
    if (event.key === "/" && !isTyping && elements.lightbox.hidden) {
      event.preventDefault();
      elements.search.focus();
      return;
    }
    if (event.key === "Escape") {
      if (!elements.lightbox.hidden) closeLightbox();
      else closeDrawer();
      return;
    }
    if (!isTyping && state.product?.type === "images") {
      if (event.key === "ArrowLeft") changePage(-1);
      if (event.key === "ArrowRight") changePage(1);
    }
  });

  document.querySelector("#current-year").textContent = new Date().getFullYear();
  selectProduct(getProductFromHash(), { closeDrawer: false });
})();
