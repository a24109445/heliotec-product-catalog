/**
 * 產品資料集中管理
 * ------------------------------------------------------------
 * 新增產品時，只需複製一筆物件並修改欄位：
 * - id: 唯一英文識別碼，會出現在網址 Hash 中
 * - category: 左側選單分類名稱
 * - name / description: 顯示文字
 * - type: "images" 或 "pdf"
 * - files: 相對於 index.html 的檔案路徑陣列
 * - previewFiles: PDF 的無工具列預覽圖，可放每一頁轉出的 PNG（選填）
 */
const products = [
  {
    id: "product-a",
    category: "機械設備",
    name: "產品 A",
    description: "高效率智慧加工設備，兼具穩定精度與直覺操作，適合多元製造場景。",
    type: "images",
    files: [
      "assets/catalogs/product-a/page-01.svg",
      "assets/catalogs/product-a/page-02.svg",
      "assets/catalogs/product-a/page-03.svg"
    ]
  },
  {
    id: "product-b",
    category: "機械設備",
    name: "產品 B",
    description: "模組化自動化設備，以彈性配置協助產線提升效率與維護便利性。",
    type: "images",
    files: [
      "assets/catalogs/product-b/page-01.svg",
      "assets/catalogs/product-b/page-02.svg"
    ]
  },
  {
    id: "product-c",
    category: "機械設備",
    name: "AI Vision Guardian",
    description: "AI 視覺手部追蹤與機械安全系統，提供即時偵測與危險區域防護。",
    type: "pdf",
    files: ["assets/catalogs/product-c/ai-vision-guardian.pdf"],
    previewFiles: ["assets/catalogs/product-c/preview-page-01.png"]
  },
  {
    id: "product-d",
    category: "五金零件",
    name: "產品 D",
    description: "耐用可靠的精密五金組件，滿足日常維修與專業裝配需求。",
    type: "images",
    files: ["assets/catalogs/product-d/page-01.svg"]
  },
  {
    id: "product-e",
    category: "五金零件",
    name: "產品 E",
    description: "多規格工業連接零件，提供穩固接合與長時間使用的安心品質。",
    type: "images",
    files: [
      "assets/catalogs/product-e/page-01.svg",
      "assets/catalogs/product-e/page-02.svg"
    ]
  },
  {
    id: "product-f",
    category: "其他產品",
    name: "產品 F",
    description: "精選周邊工具與配件，讓工作流程更順手、完整且有效率。",
    type: "images",
    files: ["assets/catalogs/product-f/page-01.svg"]
  }
];
