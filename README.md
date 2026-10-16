# SUNNY CATALOG 線上產品型錄

一個可直接部署到 GitHub Pages 的靜態產品型錄網站。使用 HTML、CSS 與原生 JavaScript 製作，不需要後端、資料庫、API Key 或安裝任何套件。

## 功能摘要

- 分類式產品選單，可展開、收合與即時搜尋
- 圖片型錄支援 JPG、JPEG、PNG、SVG 與多頁切換
- PDF 型錄支援內嵌預覽、全螢幕檢視、下載與另開分頁
- 圖片燈箱放大、縮圖切換與鍵盤左右鍵操作
- 網址 Hash 記住產品，例如 `#product-a`，可直接分享
- 響應式版面：桌面固定側欄、手機抽屜式選單
- 基本無障礙支援：鍵盤焦點、語意標籤、替代文字與減少動態效果偏好
- 所有路徑皆為相對路徑，適用 GitHub Pages 專案子路徑

## 專案結構

```text
product-catalog/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── products.js
│   └── app.js
├── assets/
│   ├── logo/
│   │   └── sunny-logo.svg
│   └── catalogs/
│       ├── product-a/
│       ├── product-b/
│       ├── product-c/
│       ├── product-d/
│       ├── product-e/
│       └── product-f/
└── README.md
```

## 本機預覽

### 建議方式：啟動本機靜態伺服器

PDF 預覽在 `file://` 模式下可能會被部分瀏覽器限制，因此建議使用電腦內建或已安裝的 Python 啟動靜態伺服器。

在終端機進入 `product-catalog` 資料夾後執行：

```bash
python -m http.server 8000
```

如果 Windows 使用 `py` 指令：

```bash
py -m http.server 8000
```

接著在瀏覽器開啟：

```text
http://localhost:8000/
```

結束預覽時，在終端機按 `Ctrl + C`。

### 快速方式

也可直接雙擊 `index.html` 開啟。圖片與選單功能可正常使用，但某些瀏覽器可能不允許本機檔案模式直接內嵌 PDF。

## 上傳專案至 GitHub

### 使用 Git 指令

1. 在 GitHub 建立新的空白 Repository，例如 `product-catalog`。
2. 在本專案資料夾開啟終端機。
3. 依序執行（請把網址換成你的 Repository 網址）：

```bash
git init
git add .
git commit -m "Create product catalog website"
git branch -M main
git remote add origin https://github.com/你的帳號/product-catalog.git
git push -u origin main
```

### 不使用 Git 指令

1. 進入 GitHub Repository。
2. 選擇 **Add file → Upload files**。
3. 將 `product-catalog` 資料夾內的所有檔案與資料夾拖曳上傳。
4. 填寫提交訊息後按 **Commit changes**。

請確認 `index.html` 位於 Repository 根目錄，而不是多包一層資料夾。

## 啟用 GitHub Pages

1. 進入 GitHub Repository。
2. 點擊 **Settings**。
3. 左側選擇 **Pages**。
4. 在 **Build and deployment** 的 **Source** 選擇 **Deploy from a branch**。
5. **Branch** 選擇 `main`，資料夾選擇 `/ (root)`。
6. 按下 **Save**。
7. 等待約 1–3 分鐘，重新整理 Pages 設定頁面即可看到公開網址。

## 取得公開網址

GitHub Pages 的專案網站網址通常為：

```text
https://你的帳號.github.io/product-catalog/
```

特定產品可直接分享 Hash 網址，例如：

```text
https://你的帳號.github.io/product-catalog/#product-a
```

如果剛部署後出現 404，請稍候一至三分鐘再重新整理，並確認 Pages 的來源分支與資料夾設定正確。

## 新增產品

### 1. 建立型錄資料夾

在 `assets/catalogs/` 下建立新資料夾，例如：

```text
assets/catalogs/product-g/
```

### 2. 放入型錄檔案

圖片型錄可放入多個 JPG、JPEG、PNG 或 SVG：

```text
assets/catalogs/product-g/page-01.jpg
assets/catalogs/product-g/page-02.jpg
```

PDF 型錄則放入 PDF：

```text
assets/catalogs/product-g/catalog.pdf
```

檔名建議只使用小寫英文字母、數字與連字號，避免空格與特殊符號。

### 3. 編輯 `js/products.js`

圖片型錄範例：

```javascript
{
  id: "product-g",
  category: "新產品分類",
  name: "產品 G",
  description: "產品 G 的簡短介紹。",
  type: "images",
  files: [
    "assets/catalogs/product-g/page-01.jpg",
    "assets/catalogs/product-g/page-02.jpg"
  ]
}
```

PDF 型錄範例：

```javascript
{
  id: "product-h",
  category: "新產品分類",
  name: "產品 H",
  description: "產品 H 的簡短介紹。",
  type: "pdf",
  files: [
    "assets/catalogs/product-h/catalog.pdf"
  ],
  previewFiles: [
    "assets/catalogs/product-h/preview-page-01.png"
  ]
}
```

`previewFiles` 是選填欄位。加入由 PDF 各頁轉出的 PNG 後，網站會以乾淨、無工具列、無左側縮圖的方式完整顯示頁面；原始 PDF 仍供下載與另開分頁使用。若不設定，網站會改用瀏覽器內建 PDF 預覽器。

每個 `id` 必須唯一。`category` 名稱相同的產品會自動歸在同一分類，不需要修改 HTML。

## 更換產品 JPG、PNG 或 PDF

有兩種方式：

1. **沿用原檔名**：直接以新檔案覆蓋舊檔案，不需要修改程式。
2. **使用新檔名**：將檔案放入對應資料夾，並同步更新 `js/products.js` 的 `files` 路徑。

圖片會完整依原始比例顯示，不會裁切。建議型錄圖片：

- 使用清晰的 JPG 或 PNG
- 單張寬度建議 1200–2000px
- 單檔建議小於 2MB，以提升手機載入速度
- 多頁型錄依希望顯示的順序排列在 `files` 陣列中

PDF 建議先壓縮，並確認檔案在 Chrome、Edge、Safari 或 Firefox 中可正常開啟。

## 修改公司名稱與副標題

開啟 `index.html`，搜尋下列文字後替換：

- 公司名稱：`SUNNY CATALOG`
- 副標題：`探索我們的產品系列`

頁尾與瀏覽器標題也包含 `SUNNY CATALOG`，可一併搜尋替換。

## 更換公司 LOGO

目前網頁左上角 LOGO 位於：

```text
assets/logo/heliotec-logo-transparent.png
```

你可以：

1. 直接以新的透明 PNG 覆蓋此檔案；或
2. 放入 PNG/JPG，然後修改 `index.html` 中的圖片路徑：

```html
<img src="assets/logo/你的-logo.png" alt="公司名稱標誌">
```

建議使用正方形或接近正方形、透明背景的 SVG 或 PNG。

## 更新網站

修改資料與檔案後推送到 GitHub：

```bash
git add .
git commit -m "Update product catalog"
git push
```

GitHub Pages 會自動重新部署，通常數分鐘內即可看到更新。

## 鍵盤操作

- `/`：將游標移至產品搜尋框
- `←` / `→`：切換圖片型錄上一頁／下一頁
- `Esc`：關閉放大檢視或手機選單
- `Tab` / `Shift + Tab`：依序移動到互動元件

## 瀏覽器支援

建議使用目前版本的 Chrome、Edge、Safari 或 Firefox。PDF 內嵌顯示能力由瀏覽器決定；不支援時，網站會顯示下載與另開檔案的替代操作。
