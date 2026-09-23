# 爬山規劃

每次爬山的行程頁，發布在 GitHub Pages：https://ryuichl.github.io/mountain100/

## 檔案架構

```
index.html              首頁，列出所有行程
assets/
  trip.css              所有行程頁共用的樣式
  trip.js               共用互動：照片輪播、裝備清單打勾、導覽列高亮
2026-11-mianyue/        一次行程一個資料夾，命名為「年-月-路線」
  index.html
  images/               這次行程的照片（WebP）
```

## 新增一次行程

1. 複製最近一次的行程資料夾，改名為 `年-月-路線`，例如 `2027-03-hehuan`。
2. 修改新資料夾裡的 `index.html`，照片放到 `images/`。
3. 在首頁 `index.html` 的 `<ul class="trips">` 最上面加一筆行程。

## 注意

- 照片請存成獨立檔案，不要用 base64 嵌進 HTML，否則頁面會變得很慢。建議寬度 1400px 以內、WebP 格式。
- 裝備清單的打勾狀態只存在各自的瀏覽器，不會同步給其他人。
