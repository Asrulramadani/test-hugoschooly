// menampilkan atau menghilangkan header pada tampilan mobile

let showHeaderBtn = document.querySelector("#show-header .col .fa");
let header = document.querySelector("#header")
showHeaderBtn.addEventListener("click", function(){
    this.parentElement.classList.toggle("active");
    header.classList.toggle("active")
})

// mengubah tampilan header pada tampilan mobile

let headerMobile = document.querySelector(".row.mobile")
let headerPc = document.querySelector(".row.pc")

if(window.innerWidth <= 768) {
    headerMobile.classList.remove("d-none")
    headerPc.classList.add("d-none")
}
else {
    headerMobile.classList.add("d-none")
    headerPc.classList.remove("d-none")
}