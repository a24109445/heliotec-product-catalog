(() => {
  "use strict";

  const supportedLanguages = ["zh-Hant", "en", "ja"];
  const uiText = {
    "zh-Hant": {
      skipLink: "跳到主要內容",
      openMenu: "開啟產品選單",
      closeMenu: "關閉產品選單",
      currentPageCatalog: "目前頁面：產品型錄",
      catalogLabel: "產品型錄",
      language: "語言",
      productMenu: "產品選單",
      productCatalog: "產品型錄",
      totalProducts: "{count} 項產品",
      searchProducts: "搜尋產品",
      searchPlaceholder: "搜尋產品名稱…",
      productCategories: "產品分類",
      needHelp: "需要產品協助？",
      contactSpecialist: "歡迎與我們的專員聯繫",
      currentCatalog: "目前型錄",
      catalogToolbar: "型錄操作工具列",
      previousPage: "上一頁",
      nextPage: "下一頁",
      openNew: "另開",
      download: "下載",
      catalogThumbnails: "型錄頁面縮圖",
      footerTagline: "精選產品・清楚呈現・隨時瀏覽",
      catalogZoomView: "型錄放大檢視",
      closeZoomView: "關閉放大檢視",
      noResults: "找不到符合的產品",
      tryAnotherKeyword: "請嘗試其他關鍵字",
      pageInfo: "第 {page} / {total} 頁",
      pdfPageInfo: "第 {page} / {total} 頁・PDF",
      pdfDocument: "PDF 文件",
      zoom: "放大",
      fullScreen: "全螢幕",
      clickToZoom: "點擊放大",
      downloadProductPage: "下載 {product} 第 {page} 頁",
      zoomProductPage: "放大檢視 {product} 第 {page} 頁",
      catalogPageAlt: "{product} 型錄第 {page} 頁",
      goToPage: "前往第 {page} 頁",
      openPdf: "在新分頁開啟 {product} PDF 型錄",
      downloadPdf: "下載 {product} PDF 型錄",
      fullScreenPdf: "全螢幕檢視 {product} PDF 型錄",
      zoomPdfPage: "放大檢視 {product} PDF 第 {page} 頁",
      pdfPreviewAlt: "{product} PDF 型錄第 {page} 頁完整預覽",
      pdfViewerLabel: "{product} PDF 型錄預覽",
      pdfUnsupported: "此瀏覽器無法直接顯示 PDF",
      pdfFallbackText: "您仍可下載檔案，或在新分頁中開啟完整型錄。",
      openPdfShort: "另開 PDF",
      downloadPdfShort: "下載 PDF",
      zoomViewTitle: "{product}・放大檢視",
      pdfZoomAlt: "{product} PDF 型錄第 {page} 頁放大檢視",
      pdfFullScreenTitle: "{product} PDF 全螢幕預覽",
      catalogZoomAlt: "{product} 型錄第 {page} 頁放大檢視",
      assetUnavailable: "型錄檔案暫時無法顯示",
      assetPathHint: "請確認 products.js 中的檔案路徑是否正確。"
    },
    en: {
      skipLink: "Skip to main content",
      openMenu: "Open product menu",
      closeMenu: "Close product menu",
      currentPageCatalog: "Current page: Product Catalog",
      catalogLabel: "Product Catalog",
      language: "Language",
      productMenu: "Product menu",
      productCatalog: "Product Catalog",
      totalProducts: "{count} products",
      searchProducts: "Search products",
      searchPlaceholder: "Search products…",
      productCategories: "Product categories",
      needHelp: "Need product assistance?",
      contactSpecialist: "Contact our product specialists",
      currentCatalog: "Current catalog",
      catalogToolbar: "Catalog toolbar",
      previousPage: "Previous",
      nextPage: "Next",
      openNew: "Open",
      download: "Download",
      catalogThumbnails: "Catalog page thumbnails",
      footerTagline: "Selected products・Clearly presented・Always available",
      catalogZoomView: "Enlarged catalog view",
      closeZoomView: "Close enlarged view",
      noResults: "No matching products",
      tryAnotherKeyword: "Try another keyword",
      pageInfo: "Page {page} of {total}",
      pdfPageInfo: "Page {page} of {total}・PDF",
      pdfDocument: "PDF document",
      zoom: "Zoom",
      fullScreen: "Full screen",
      clickToZoom: "Click to zoom",
      downloadProductPage: "Download page {page} of {product}",
      zoomProductPage: "Enlarge page {page} of {product}",
      catalogPageAlt: "Page {page} of the {product} catalog",
      goToPage: "Go to page {page}",
      openPdf: "Open the {product} PDF catalog in a new tab",
      downloadPdf: "Download the {product} PDF catalog",
      fullScreenPdf: "View the {product} PDF catalog full screen",
      zoomPdfPage: "Enlarge page {page} of the {product} PDF",
      pdfPreviewAlt: "Full preview of page {page} of the {product} PDF catalog",
      pdfViewerLabel: "{product} PDF catalog preview",
      pdfUnsupported: "This browser cannot display the PDF directly",
      pdfFallbackText: "You can still download the file or open the full catalog in a new tab.",
      openPdfShort: "Open PDF",
      downloadPdfShort: "Download PDF",
      zoomViewTitle: "{product}・Enlarged view",
      pdfZoomAlt: "Enlarged page {page} of the {product} PDF catalog",
      pdfFullScreenTitle: "Full-screen {product} PDF preview",
      catalogZoomAlt: "Enlarged page {page} of the {product} catalog",
      assetUnavailable: "The catalog file is temporarily unavailable",
      assetPathHint: "Please verify the file path in products.js."
    },
    ja: {
      skipLink: "メインコンテンツへ移動",
      openMenu: "製品メニューを開く",
      closeMenu: "製品メニューを閉じる",
      currentPageCatalog: "現在のページ：製品カタログ",
      catalogLabel: "製品カタログ",
      language: "言語",
      productMenu: "製品メニュー",
      productCatalog: "製品カタログ",
      totalProducts: "{count} 製品",
      searchProducts: "製品を検索",
      searchPlaceholder: "製品名を検索…",
      productCategories: "製品カテゴリー",
      needHelp: "製品についてお困りですか？",
      contactSpecialist: "担当スタッフへお問い合わせください",
      currentCatalog: "現在のカタログ",
      catalogToolbar: "カタログ操作ツールバー",
      previousPage: "前のページ",
      nextPage: "次のページ",
      openNew: "別タブ",
      download: "ダウンロード",
      catalogThumbnails: "カタログページのサムネイル",
      footerTagline: "厳選製品・わかりやすい表示・いつでも閲覧",
      catalogZoomView: "カタログ拡大表示",
      closeZoomView: "拡大表示を閉じる",
      noResults: "該当する製品がありません",
      tryAnotherKeyword: "別のキーワードをお試しください",
      pageInfo: "{page} / {total} ページ",
      pdfPageInfo: "{page} / {total} ページ・PDF",
      pdfDocument: "PDF ドキュメント",
      zoom: "拡大",
      fullScreen: "全画面",
      clickToZoom: "クリックして拡大",
      downloadProductPage: "{product} の {page} ページをダウンロード",
      zoomProductPage: "{product} の {page} ページを拡大表示",
      catalogPageAlt: "{product} カタログの {page} ページ",
      goToPage: "{page} ページへ移動",
      openPdf: "{product} のPDFカタログを新しいタブで開く",
      downloadPdf: "{product} のPDFカタログをダウンロード",
      fullScreenPdf: "{product} のPDFカタログを全画面で表示",
      zoomPdfPage: "{product} PDFの {page} ページを拡大表示",
      pdfPreviewAlt: "{product} PDFカタログの {page} ページ全体プレビュー",
      pdfViewerLabel: "{product} PDFカタログプレビュー",
      pdfUnsupported: "このブラウザではPDFを直接表示できません",
      pdfFallbackText: "ファイルをダウンロードするか、新しいタブでカタログ全体を開くことができます。",
      openPdfShort: "PDFを開く",
      downloadPdfShort: "PDFをダウンロード",
      zoomViewTitle: "{product}・拡大表示",
      pdfZoomAlt: "{product} PDFカタログの {page} ページ拡大表示",
      pdfFullScreenTitle: "{product} PDF全画面プレビュー",
      catalogZoomAlt: "{product} カタログの {page} ページ拡大表示",
      assetUnavailable: "カタログファイルを一時的に表示できません",
      assetPathHint: "products.js のファイルパスをご確認ください。"
    }
  };

  const state = {
    product: null,
    page: 0,
    language: getInitialLanguage(),
    openCategories: new Set(products.map((product) => product.category)),
    lastFocusedElement: null
  };

  const elements = {
    menuButton: document.querySelector("#menu-button"),
    closeSidebar: document.querySelector("#close-sidebar"),
    sidebar: document.querySelector("#sidebar"),
    drawerBackdrop: document.querySelector("#drawer-backdrop"),
    languageSelect: document.querySelector("#language-select"),
    search: document.querySelector("#product-search"),
    productNav: document.querySelector("#product-nav"),
    productTotal: document.querySelector("#product-total"),
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

  const categories = typeof productCategories !== "undefined"
    ? productCategories
    : [...new Set(products.map((product) => product.category))].map((name) => ({ name, subtitle: "" }));

  function getInitialLanguage() {
    try {
      const savedLanguage = window.localStorage.getItem("catalog-language");
      if (supportedLanguages.includes(savedLanguage)) return savedLanguage;
    } catch (error) {
      // file:// 預覽環境可能停用 localStorage，維持預設語言即可。
    }
    return "zh-Hant";
  }

  function saveLanguage(language) {
    try {
      window.localStorage.setItem("catalog-language", language);
    } catch (error) {
      // localStorage 不可用時仍可在本次瀏覽期間切換語言。
    }
  }

  function t(key, variables = {}) {
    const template = uiText[state.language]?.[key] || uiText["zh-Hant"][key] || key;
    return template.replace(/\{(\w+)\}/g, (match, name) => variables[name] ?? match);
  }

  function getProductCopy(product) {
    const translation = product.translations?.[state.language];
    return {
      name: translation?.name || product.name,
      description: translation?.description || product.description
    };
  }

  function getCategoryCopy(categoryInfo) {
    const translation = categoryInfo.translations?.[state.language];
    return {
      name: translation?.name || categoryInfo.name,
      subtitle: translation?.subtitle ?? categoryInfo.subtitle ?? ""
    };
  }

  function getLocalizedCategoryName(categoryName) {
    const categoryInfo = categories.find((category) => category.name === categoryName);
    return categoryInfo ? getCategoryCopy(categoryInfo).name : categoryName;
  }

  function applyStaticTranslations() {
    document.documentElement.lang = state.language;
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = t(element.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
      element.setAttribute("aria-label", t(element.dataset.i18nAria));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
    });
    document.querySelectorAll("[data-i18n-title]").forEach((element) => {
      element.setAttribute("title", t(element.dataset.i18nTitle));
    });
    elements.productTotal.textContent = t("totalProducts", { count: products.length });
    elements.languageSelect.value = state.language;
  }

  function changeLanguage(language) {
    if (!supportedLanguages.includes(language) || language === state.language) return;
    state.language = language;
    saveLanguage(language);
    applyStaticTranslations();
    renderNavigation(elements.search.value);
    if (state.product) {
      updateProductCopy(state.product);
      renderCatalog();
      if (!elements.lightbox.hidden) updateLightbox();
    }
  }

  function updateProductCopy(product) {
    const copy = getProductCopy(product);
    elements.breadcrumbName.textContent = copy.name;
    elements.productTitle.textContent = copy.name;
    elements.productDescription.textContent = copy.description;
    elements.productCategory.textContent = getLocalizedCategoryName(product.category);
    elements.toolbarProductName.textContent = copy.name;
    document.title = `${copy.name}｜${t("productCatalog")}`;
  }

  function getProductFromHash() {
    const id = decodeURIComponent(window.location.hash.slice(1));
    return products.find((product) => product.id === id) || products[0];
  }

  function renderNavigation(filter = "") {
    const query = filter.trim().toLocaleLowerCase(state.language);
    let visibleCount = 0;

    elements.productNav.innerHTML = categories.map((categoryInfo, categoryIndex) => {
      const category = categoryInfo.name;
      const categoryCopy = getCategoryCopy(categoryInfo);
      const categoryProducts = products.filter((product) => {
        const isCategory = product.category === category;
        const productTranslations = Object.values(product.translations || {}).flatMap((translation) => [translation.name, translation.description]);
        const categoryTranslations = Object.values(categoryInfo.translations || {}).flatMap((translation) => [translation.name, translation.subtitle]);
        const searchText = [product.name, product.description, product.category, categoryInfo.subtitle, ...productTranslations, ...categoryTranslations].join(" ");
        const matches = !query || searchText.toLocaleLowerCase(state.language).includes(query);
        return isCategory && matches;
      });

      if (!categoryProducts.length) return "";
      visibleCount += categoryProducts.length;
      const isOpen = query ? true : state.openCategories.has(category);
      const categoryId = `category-${categoryIndex}`;

      return `
        <section class="nav-category">
          <button class="category-toggle" type="button" aria-expanded="${isOpen}" aria-controls="${categoryId}" data-category="${category}">
            <span class="category-heading">
              <span class="category-name">${categoryCopy.name}</span>
              ${categoryCopy.subtitle ? `<span class="category-subtitle">${categoryCopy.subtitle}</span>` : ""}
            </span>
            <span class="category-count">${categoryProducts.length}</span>
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m7 10 5 5 5-5"/></svg>
          </button>
          <div class="category-products" id="${categoryId}" ${isOpen ? "" : "hidden"}>
            ${categoryProducts.map((product) => {
              const productCopy = getProductCopy(product);
              return `
              <a class="product-link${state.product?.id === product.id ? " active" : ""}" href="#${product.id}" data-product-id="${product.id}" ${state.product?.id === product.id ? 'aria-current="page"' : ""}>
                <span class="product-dot" aria-hidden="true"></span>
                <span>${highlightMatch(productCopy.name, query)}</span>
                <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>
              </a>`;
            }).join("")}
          </div>
        </section>`;
    }).join("");

    if (!visibleCount) {
      elements.productNav.innerHTML = `
        <div class="empty-search">
          <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m16.5 16.5 4 4"/></svg>
          <strong>${t("noResults")}</strong>
          <span>${t("tryAnotherKeyword")}</span>
        </div>`;
    }
  }

  function highlightMatch(text, query) {
    if (!query) return text;
    const index = text.toLocaleLowerCase(state.language).indexOf(query);
    if (index < 0) return text;
    return `${text.slice(0, index)}<mark>${text.slice(index, index + query.length)}</mark>${text.slice(index + query.length)}`;
  }

  function selectProduct(product, options = {}) {
    if (!product) return;
    state.product = product;
    state.page = 0;

    updateProductCopy(product);

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
    const productName = getProductCopy(product).name;

    elements.pageIndicator.textContent = t("pageInfo", { page: pageNumber, total: totalPages });
    elements.pageControls.hidden = false;
    elements.prevPage.disabled = state.page === 0;
    elements.nextPage.disabled = state.page === totalPages - 1;
    elements.openButton.hidden = true;
    elements.downloadButton.hidden = false;
    elements.downloadButton.href = currentFile;
    const extension = currentFile.split(".").pop().split(/[?#]/)[0] || "file";
    elements.downloadButton.download = `${product.id}-page-${String(pageNumber).padStart(2, "0")}.${extension}`;
    elements.downloadButton.setAttribute("aria-label", t("downloadProductPage", { product: productName, page: pageNumber }));
    elements.zoomButton.setAttribute("aria-label", t("zoomProductPage", { product: productName, page: pageNumber }));
    elements.zoomButton.innerHTML = `<svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m16.5 16.5 4 4M11 8v6M8 11h6"/></svg><span>${t("zoom")}</span>`;

    elements.catalogStage.className = "catalog-stage image-mode";
    elements.catalogStage.innerHTML = `
      <button class="catalog-image-button" type="button" aria-label="${t("zoomProductPage", { product: productName, page: pageNumber })}">
        <img src="${currentFile}" alt="${t("catalogPageAlt", { product: productName, page: pageNumber })}" width="1200" height="800">
        <span class="image-zoom-hint" aria-hidden="true">
          <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m16.5 16.5 4 4M11 8v6M8 11h6"/></svg>
          ${t("clickToZoom")}
        </span>
      </button>`;

    elements.catalogStage.querySelector(".catalog-image-button").addEventListener("click", openLightbox);
    elements.catalogStage.querySelector("img").addEventListener("error", handleAssetError, { once: true });

    elements.thumbnailStrip.hidden = totalPages <= 1;
    elements.thumbnailStrip.innerHTML = product.files.map((file, index) => `
      <button class="thumbnail${index === state.page ? " active" : ""}" type="button" data-page="${index}" aria-label="${t("goToPage", { page: index + 1 })}" ${index === state.page ? 'aria-current="true"' : ""}>
        <img src="${file}" alt="" loading="lazy">
        <span>${String(index + 1).padStart(2, "0")}</span>
      </button>`).join("");
  }

  function renderPdf(product) {
    const pdfFile = product.files[0];
    const previewFiles = product.previewFiles || [];
    const hasPreview = previewFiles.length > 0;
    const previewPage = Math.min(state.page, Math.max(previewFiles.length - 1, 0));
    const productName = getProductCopy(product).name;
    state.page = previewPage;

    elements.pageIndicator.textContent = hasPreview
      ? t("pdfPageInfo", { page: previewPage + 1, total: previewFiles.length })
      : t("pdfDocument");
    elements.pageControls.hidden = !hasPreview || previewFiles.length <= 1;
    elements.prevPage.disabled = previewPage === 0;
    elements.nextPage.disabled = previewPage === previewFiles.length - 1;
    elements.openButton.hidden = false;
    elements.openButton.href = pdfFile;
    elements.openButton.setAttribute("aria-label", t("openPdf", { product: productName }));
    elements.downloadButton.hidden = false;
    elements.downloadButton.href = pdfFile;
    elements.downloadButton.download = `${product.id}-catalog.pdf`;
    elements.downloadButton.setAttribute("aria-label", t("downloadPdf", { product: productName }));
    elements.zoomButton.setAttribute("aria-label", t("fullScreenPdf", { product: productName }));
    elements.zoomButton.innerHTML = `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"/></svg><span>${t("fullScreen")}</span>`;

    if (hasPreview) {
      elements.catalogStage.className = "catalog-stage pdf-preview-mode";
      elements.catalogStage.innerHTML = `
        <button class="pdf-preview-button" type="button" aria-label="${t("zoomPdfPage", { product: productName, page: previewPage + 1 })}">
          <img src="${previewFiles[previewPage]}" alt="${t("pdfPreviewAlt", { product: productName, page: previewPage + 1 })}">
          <span class="image-zoom-hint" aria-hidden="true">
            <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m16.5 16.5 4 4M11 8v6M8 11h6"/></svg>
            ${t("clickToZoom")}
          </span>
        </button>`;
      elements.catalogStage.querySelector(".pdf-preview-button").addEventListener("click", openLightbox);
    } else {
      elements.catalogStage.className = "catalog-stage pdf-mode";
      elements.catalogStage.innerHTML = `
        <object class="pdf-viewer" data="${pdfFile}#view=FitH&pagemode=none" type="application/pdf" aria-label="${t("pdfViewerLabel", { product: productName })}">
          <div class="pdf-fallback">
            <div class="pdf-fallback-icon" aria-hidden="true">PDF</div>
            <h3>${t("pdfUnsupported")}</h3>
            <p>${t("pdfFallbackText")}</p>
            <div>
              <a class="fallback-button" href="${pdfFile}" target="_blank" rel="noopener">${t("openPdfShort")}</a>
              <a class="fallback-button primary" href="${pdfFile}" download>${t("downloadPdfShort")}</a>
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
    const productName = getProductCopy(product).name;
    elements.lightboxTitle.textContent = t("zoomViewTitle", { product: productName });

    if (product.type === "pdf") {
      const previewFiles = product.previewFiles || [];
      if (previewFiles.length) {
        elements.lightboxPage.textContent = t("pdfPageInfo", { page: state.page + 1, total: previewFiles.length });
        elements.lightboxBody.innerHTML = `<img src="${previewFiles[state.page]}" alt="${t("pdfZoomAlt", { product: productName, page: state.page + 1 })}">`;
        elements.lightboxPrev.hidden = previewFiles.length <= 1;
        elements.lightboxNext.hidden = previewFiles.length <= 1;
        elements.lightboxPrev.disabled = state.page === 0;
        elements.lightboxNext.disabled = state.page === previewFiles.length - 1;
      } else {
        elements.lightboxPage.textContent = t("pdfDocument");
        elements.lightboxBody.innerHTML = `<iframe class="lightbox-pdf" src="${product.files[0]}#view=FitH&pagemode=none" title="${t("pdfFullScreenTitle", { product: productName })}"></iframe>`;
        elements.lightboxPrev.hidden = true;
        elements.lightboxNext.hidden = true;
      }
    } else {
      elements.lightboxPage.textContent = t("pageInfo", { page: state.page + 1, total: product.files.length });
      elements.lightboxBody.innerHTML = `<img src="${product.files[state.page]}" alt="${t("catalogZoomAlt", { product: productName, page: state.page + 1 })}">`;
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
      <span class="asset-error"><strong>${t("assetUnavailable")}</strong><span>${t("assetPathHint")}</span></span>`;
  }

  elements.menuButton.addEventListener("click", openDrawer);
  elements.closeSidebar.addEventListener("click", closeDrawer);
  elements.drawerBackdrop.addEventListener("click", closeDrawer);
  elements.languageSelect.addEventListener("change", (event) => changeLanguage(event.target.value));
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
    const isTyping = ["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName);
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
  applyStaticTranslations();
  selectProduct(getProductFromHash(), { closeDrawer: false });
})();
