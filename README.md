# 個人程式庫整理
## app-scaffoldimg
  建置 ES6 環境，使用如 `Arrow Functions`、`Classes`、 `Import` 等語法，更進一步使用 `async/await`，
  另有一份 scss 起手檔案，提供如何引入字體的參考
  > `#webpack` `#gulp 3` `#SASS` `font import`

## countrypicker
  jQuery 套件重構，使用在表單填選擇國碼前綴的方便套件
  > `#Vue` `#CSS Sprite`
  + 參考資料
  [Country Select JS](https://github.com/mrmarkfrench/country-select-js)

## datepicker
  參考 jQuery 著名套件 *Datepicker*，以 Vue compoment 的方式重構
  > `#Vue`
  + 參考資料
  [Datepicker](https://jqueryui.com/datepicker/)
  [vue-date](http://www.showonne.com/vue-date/dist/browser/)

## datatable
  自製資料表格，實現前端呈現、排序、過濾器以及分頁功能的 Vue 組件
  > `#Vue`

## FirstHeadIntoVuex
  透過 Vuex 聊天室範例管理不同組件間的共同狀態，並整理基本 Vue SPA 套件，`Vue-router` 的基本結構
  > `#Vuex` `#Vue-router`
  + 參考資料
  [DATA FLOW IN VUE AND VUEX](https://benjaminlistwon.com/blog/data-flow-in-vue-and-vuex/)

## carousel
  自製具 transition 的 carousel vue component，`<carousel>` 支持下列屬性:

| attribute | type | description
| --- | --- | ---
| `src` | String | 圖源URI， E.g. `"//cdn.shopify.com/s/files/1/0254/0393/t/5/assets/slide-image-3.jpg?7985256824123693536"`
| `ind` | Number | 顯示順序
| `title` | String *optional* | 大標題
| `tagline` | String *optional* | 副標題
| `call` | String *optional* | call to action 文字

  + 樣式參考網站
  [citiesocial](http://www.citiesocial.com/)

## counter
  基於 [moment.js](http://momentjs.com/) 的 vue component，`<counter>` 支持下列屬性:

| attribute | type | description
| --- | --- | ---
| `duedate` | String | 到期的時間，`default: '13-04-2017 00:00:00'`
