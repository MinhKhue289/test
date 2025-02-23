const menu = document.querySelector('nav ul')
const menuBtn = document.querySelector('.menu-open')
const menuClose = document.querySelector('.menu-close')

menuBtn.addEventListener('click', () => {
    menu.classList.add('open')
})
menuClose.addEventListener('click', () => {
    menu.classList.remove('open')
})

function loadPage(page, cssFile) {
  fetch(page)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("content").innerHTML = data;

      // Xóa CSS cũ nếu có
      let oldLink = document.getElementById("dynamic-css");
      if (oldLink) oldLink.remove();

      // Nếu có file CSS mới, thêm vào trang
      if (cssFile) {
        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = cssFile;
        link.id = "dynamic-css"; // Gán ID để sau này có thể xóa
        document.head.appendChild(link);
      }
    })
    .catch((error) => console.error("Lỗi tải trang:", error));
}


