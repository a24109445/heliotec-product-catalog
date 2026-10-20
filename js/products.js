/**
 * 產品資料集中管理
 * ------------------------------------------------------------
 * 新增產品時，只需複製一筆物件並修改欄位：
 * - id: 唯一英文識別碼，會出現在網址 Hash 中
 * - category: 左側選單分類名稱
 * - name / description: 顯示文字
 * - translations: 英文與日文的產品名稱、說明（選填）
 * - type: "images" 或 "pdf"
 * - files: 相對於 index.html 的檔案路徑陣列
 * - previewFiles: PDF 的無工具列預覽圖，可放每一頁轉出的 PNG（選填）
 */
const productCategories = [
  {
    name: "智慧自動化設備",
    subtitle: "Smart Automation",
    translations: {
      en: { name: "Smart Automation", subtitle: "" },
      ja: { name: "スマートオートメーション", subtitle: "Smart Automation" }
    }
  },
  {
    name: "工業切割設備",
    subtitle: "Industrial Cutting Equipment",
    translations: {
      en: { name: "Industrial Cutting Equipment", subtitle: "" },
      ja: { name: "産業用切断設備", subtitle: "Industrial Cutting Equipment" }
    }
  },
  {
    name: "砂磨設備",
    subtitle: "Sanding Equipment",
    translations: {
      en: { name: "Sanding Equipment", subtitle: "" },
      ja: { name: "研磨設備", subtitle: "Sanding Equipment" }
    }
  },
  {
    name: "空氣淨化與集塵設備",
    subtitle: "Air Filtration & Dust Collection",
    translations: {
      en: { name: "Air Filtration & Dust Collection", subtitle: "" },
      ja: { name: "空気清浄・集塵設備", subtitle: "Air Filtration & Dust Collection" }
    }
  }
];

const products = [
  {
    id: "product-c",
    category: "智慧自動化設備",
    name: "AI Vision Guardian",
    description: "AI 視覺手部追蹤與機械安全系統，提供即時偵測與危險區域防護。",
    translations: {
      en: {
        name: "AI Vision Guardian",
        description: "An AI vision-based hand tracking and machine safety system for real-time detection and hazardous-zone protection."
      },
      ja: {
        name: "AI Vision Guardian",
        description: "リアルタイム検知と危険区域の保護を実現する、AIビジョンによるハンドトラッキング・機械安全システムです。"
      }
    },
    type: "pdf",
    files: ["assets/catalogs/product-c/ai-vision-guardian.pdf"],
    previewFiles: ["assets/catalogs/product-c/preview-page-01.png"]
  },
  {
    id: "amr",
    category: "智慧自動化設備",
    name: "Automation Sweeper",
    description: "自動化清掃機解決方案，適用於工廠、倉儲與商業空間的智慧清潔作業。",
    translations: {
      en: {
        name: "Automation Sweeper",
        description: "An automated sweeper solution for smart cleaning in factories, warehouses, and commercial spaces."
      },
      ja: {
        name: "Automation Sweeper",
        description: "工場、倉庫、商業施設のスマート清掃に適した自動清掃機ソリューションです。"
      }
    },
    type: "pdf",
    files: ["assets/catalogs/amr/catalog.pdf"],
    previewFiles: ["assets/catalogs/amr/preview-page-01.png"]
  },
  {
    id: "band-saw-50",
    category: "工業切割設備",
    name: "Band Saw KV-50",
    description: "Band Saw KV-50 工業帶鋸機產品型錄與設備資訊。",
    translations: {
      en: { name: "Band Saw KV-50", description: "Product catalog and equipment information for the Band Saw KV-50 industrial band saw." },
      ja: { name: "Band Saw KV-50", description: "Band Saw KV-50 産業用バンドソーの製品カタログと設備情報です。" }
    },
    type: "pdf",
    files: ["assets/catalogs/band-saw-50/catalog.pdf"],
    previewFiles: ["assets/catalogs/band-saw-50/preview-page-01.png"]
  },
  {
    id: "band-saw-15-18",
    category: "工業切割設備",
    name: "Band Saw 15\"~18\"",
    description: "Band Saw 15\"~18\" 工業帶鋸機產品型錄與設備資訊。",
    translations: {
      en: { name: "Band Saw 15\"~18\"", description: "Product catalog and equipment information for the Band Saw 15\"~18\" industrial band saw." },
      ja: { name: "Band Saw 15\"~18\"", description: "Band Saw 15\"~18\" 産業用バンドソーの製品カタログと設備情報です。" }
    },
    type: "pdf",
    files: ["assets/catalogs/band-saw-15-18/catalog.pdf"],
    previewFiles: ["assets/catalogs/band-saw-15-18/preview-page-01.png"]
  },
  {
    id: "oscillating-edge-sander",
    category: "砂磨設備",
    name: "Oscillating Edge Sander",
    description: "變速振盪式邊緣砂磨機，支援多角度砂磨與數位變頻調速。",
    translations: {
      en: {
        name: "Oscillating Edge Sander",
        description: "A variable-speed oscillating edge sander with multi-angle sanding and digital VFD speed control."
      },
      ja: {
        name: "Oscillating Edge Sander",
        description: "多角度研磨とデジタルインバーターによる速度制御に対応した、可変速オシレーティングエッジサンダーです。"
      }
    },
    type: "pdf",
    files: ["assets/catalogs/oscillating-edge-sander/catalog.pdf"],
    previewFiles: ["assets/catalogs/oscillating-edge-sander/preview-page-01.png"]
  },
  {
    id: "cti65",
    category: "空氣淨化與集塵設備",
    name: "CTI65 空氣清淨機",
    description: "CTI65 工業空氣清淨機產品型錄與設備資訊。",
    translations: {
      en: { name: "CTI65 Air Purifier", description: "Product catalog and equipment information for the CTI65 industrial air purifier." },
      ja: { name: "CTI65 空気清浄機", description: "CTI65 産業用空気清浄機の製品カタログと設備情報です。" }
    },
    type: "pdf",
    files: ["assets/catalogs/cti65/catalog.pdf"],
    previewFiles: ["assets/catalogs/cti65/preview-page-01.png"]
  },
  {
    id: "dt600",
    category: "空氣淨化與集塵設備",
    name: "DT600 下吸式集塵工作台",
    description: "DT600 下吸式集塵工作台產品型錄與設備資訊。",
    translations: {
      en: { name: "DT600 Downdraft Dust Collection Table", description: "Product catalog and equipment information for the DT600 downdraft dust collection table." },
      ja: { name: "DT600 ダウンドラフト集塵作業台", description: "DT600 ダウンドラフト集塵作業台の製品カタログと設備情報です。" }
    },
    type: "pdf",
    files: ["assets/catalogs/dt600/catalog.pdf"],
    previewFiles: ["assets/catalogs/dt600/preview-page-01.png"]
  },
  {
    id: "dt900",
    category: "空氣淨化與集塵設備",
    name: "DT900 下吸式集塵工作台",
    description: "DT900 下吸式集塵工作台產品型錄與設備資訊。",
    translations: {
      en: { name: "DT900 Downdraft Dust Collection Table", description: "Product catalog and equipment information for the DT900 downdraft dust collection table." },
      ja: { name: "DT900 ダウンドラフト集塵作業台", description: "DT900 ダウンドラフト集塵作業台の製品カタログと設備情報です。" }
    },
    type: "pdf",
    files: ["assets/catalogs/dt900/catalog.pdf"],
    previewFiles: ["assets/catalogs/dt900/preview-page-01.png"]
  },
  {
    id: "dust-collector",
    category: "空氣淨化與集塵設備",
    name: "Dust Collector",
    description: "工業集塵設備產品型錄與系統資訊。",
    translations: {
      en: { name: "Dust Collector", description: "Product catalog and system information for this industrial dust collector." },
      ja: { name: "集塵機", description: "産業用集塵設備の製品カタログとシステム情報です。" }
    },
    type: "pdf",
    files: ["assets/catalogs/dust-collector/catalog.pdf"],
    previewFiles: ["assets/catalogs/dust-collector/preview-page-01.png"]
  },
  {
    id: "dust-collector-2",
    category: "空氣淨化與集塵設備",
    name: "Dust Collector 2",
    description: "工業集塵設備系列二產品型錄與系統資訊。",
    translations: {
      en: { name: "Dust Collector 2", description: "Product catalog and system information for the second industrial dust collector series." },
      ja: { name: "集塵機 2", description: "産業用集塵設備シリーズ2の製品カタログとシステム情報です。" }
    },
    type: "pdf",
    files: ["assets/catalogs/dust-collector-2/catalog.pdf"],
    previewFiles: ["assets/catalogs/dust-collector-2/preview-page-01.png"]
  }
];
