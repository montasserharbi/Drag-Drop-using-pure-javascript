let btn = document.getElementById("btn");
let inp = document.getElementById("inp");
let boxs = document.querySelectorAll(".box");
let drag = null;
// إضافة العنصر
btn.onclick = function () {
  if (inp.value != "") {
    boxs[0].innerHTML += `
    <p class="item" draggable="true">${inp.value}</p>


    `;
    inp.value = "";
  }
  //drag & drop
  dragItem();
};

function dragItem() {
  let items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("dragstart", function () {
      drag = item;
      item.style.opacity = "0.5";
      //console.log('drag start');
    });
    item.addEventListener("dragend", function () {
      drag = null;
      item.style.opacity = "1";

      //console.log('drag end')
    });
    boxs.forEach((box) => {
      box.addEventListener("dragover", function (e) {
        e.preventDefault(); // تفعيل الدروب
        //console.log('drag over')
        this.style.background = "#6699ff";
        this.style.color = "#fff";
      });
      box.addEventListener("dragleave", function () {
        this.style.background = "#fff";
        this.style.color = "#000";
      });
      box.addEventListener("drop", function () {
        this.append(drag);
        this.style.background = "#fff";
        this.style.color = "#000";
      });
    });
  });
}
