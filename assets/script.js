const dataSearch = [//khai bao du lieu tim kiem
    { keywords: ["west", "test"], name: 'West', href: 'west.html' },//tu khoa tim kiem, name ten hien thi, href link lk
    { keywords: ["east"], name: 'East', href: 'EAST.html' },
    { keywords: ["booktour", "data"], name: 'Booktour', href: 'booktour.html' },
]

function handleShowSearch() {//click icon search de hien thi input search
    document.querySelector(".nav.navbar-nav").classList.add("none")//an menu(nav)
    document.querySelector("#search-input").classList.remove("none")//hien thi input search
    document.querySelector("#search-input input").focus()//focus vao o input search tranh click them lan nua vao o search
}

function focusOutSearch() {//an input search va hien menu(nguoc voi phan ben tren)
    document.querySelector(".nav.navbar-nav").classList.remove("none")//hien thi menu
    document.querySelector("#search-input").classList.add("none")//an input search 
}

function handleSearch(event) {//xu ly du lieu khi nhap vao o search 
    const value = event.target.value?.toLowerCase() ?? '';//lay ra gia tri input search
    if (value === "") {//neu gia tri rong
        document.querySelector(".search-suggest").classList.add("none")//an o suggest search
    } else {//nguoc lai
        document.querySelector(".search-suggest").classList.remove("none")//hien suggest search
        const res = dataSearch.filter(i => i.keywords.some(keyword => keyword.includes(value)))//lay ra list du lieu phu hop voi keyword ben tren
        //filter: loc trong mang ra nhung du lieu phu hop, some la tim trong mang co it nhat 1 phan tu phu hop, includes: tim trong string co keyword hay khong
        document.querySelector(".search-suggest").innerHTML = ""//xoa du lieu suggest cu de tim suggest moi
        if (res && res.length) {//kiem tra co du lieu phu hop hay khong
            for (const data of res) {//duyet tung phan tu trong mang
                const aElement = document.createElement("a");//tao the a 
                aElement.href = data.href;//them link lien ket the a (a chua link lket href)
                aElement.innerHTML = data.name//ten hien thi cua the a 
                document.querySelector(".search-suggest").appendChild(aElement)//them the a vao trong o suggest
            }
        } else {
            document.querySelector(".search-suggest").innerHTML = "Not found"
        }
    }
}

window.addEventListener('click', function (e) {//xu ly su kien moi khi click
    if (document.querySelector('.header').contains(e.target)) {//kiem tra xem co click vao header hay k, neu click vao header thi giu nguyen input search
        // Clicked in box
    } else {//neu click ra ngoai header thi an input search di
        focusOutSearch()
        // Clicked outside the box
    }
});