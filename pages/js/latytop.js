window.onload = function () {
  let url = "../data/categories.json";
  let request = new XMLHttpRequest();
  request.open("get", url);
  request.send(null);
  request.onload = function () {
    if (request.status == 200) var json = JSON.parse(request.responseText);
    for (let i = 0; i < json.length; i++) {
      // console.log(json[i], name);
    }
    // console.log(json.laptop[1].id);
    let itemsbox = document.querySelector(".producesall");
    function displayproducts(prod) {
      let display = prod.map(function (item) {
        return `
    <div class="prod-container"  data-id="${item.id}">
        <div class="prod-img"  >
        <a href="javascript:;">
        <img
                    src="${item.url}"
                    alt="">
                    </a>
                    </div>
        <div class="prod-info">
            <div class="info-p">
                <a href="" title='${item.name}'>${item.name}</a>
            </div>
            <div class="info-price">
                <b>$</b>
                <p>${item.price}</p>
            </div>
        </div>
    </div>
    `;
      });

      display = display.join("");
      itemsbox.innerHTML = display;
    }
    // window.addEventListener("DOMContentLoaded", function () {
    //   displayproducts(json);

    // });
    // displayproducts(json);

    let filter = json.filter(function (item) {
      // 方法一

      // return item.name.match('1')
      //方法二
      if (item.type.includes("laptop")) {
        return item;
      }
    });

    // console.log(filter);
    displayproducts(filter);

    // -------------
    tabPage({
      pageMain: "pageMain",
      pageNav: "pageNav",
      pagePrev: "prev",
      pageNext: "next",
      curNum: 16,
      activeClass: "active",
      ini: 0,
    });

    function tabPage(tabPage) {
      let pageMain = document.getElementById(tabPage.pageMain);
      let pageNav = document.getElementById(tabPage.pageNav);
      let pagePrev = document.getElementById(tabPage.pagePrev);
      let pageNext = document.getElementById(tabPage.pageNext);

      let curNum = tabPage.curNum;
      let len = Math.ceil(pageMain.children.length / curNum);
      let pageList = "";
      let iNum = 0;

      for (let index = 0; index < len; index++) {
        pageList += '<a href="javascript:;">' + (index + 1) + "</a>";
      }
      pageNav.innerHTML = pageList;

      pageNav.children[0].className = tabPage.activeClass;

      for (let index = 0; index < pageNav.children.length; index++) {
        pageNav.children[index].index = index;
        pageNav.children[index].onclick = function () {
          for (let t = 0; t < pageNav.children.length; t++) {
            pageNav.children[t].className = "";
          }
          this.className = tabPage.activeClass;
          iNum = this.index;
          ini(iNum);
        };
      }

      //下一頁
      pageNext.onclick = function () {
        if (iNum == len - 1) {
          alert("已經是最後一頁");
          return false;
        } else {
          for (let t = 0; t < pageNav.children.length; t++) {
            pageNav.children[t].className = "";
          }
          iNum++;
          pageNav.children[iNum].className = tabPage.activeClass;
          ini(iNum);
        }
      };

      //上一頁
      pagePrev.onclick = function () {
        if (iNum == 0) {
          alert("當前是第一頁");
          return false;
        } else {
          for (let t = 0; t < pageNav.children.length; t++) {
            pageNav.children[t].className = "";
          }
          iNum--;
          pageNav.children[iNum].className = tabPage.activeClass;
          ini(iNum);
        }
      };

      function ini(iNum) {
        for (let index = 0; index < pageMain.children.length; index++) {
          pageMain.children[index].style.display = "none";
        }

        for (let index = 0; index < curNum; index++) {
          if (pageMain.children[iNum * curNum + index] == undefined) {
            break;
          }
          pageMain.children[iNum * curNum + index].style.display = "block";
        }
      }
      ini(iNum);
    }
    // overlay show
    let produce = document.querySelectorAll(".prod-container");
    for (let i = 0; i < produce.length; i++) {
      produce[i].addEventListener("click", function () {
        document.querySelector(".prodoverlay").style.display = "block";

        // overlay show content
        showprodinfo(filter[i]);
      });
    }
    let prodoverlay = document.querySelector(".prodoverlay");
    prodoverlay.addEventListener(
      "click",
      function () {
        document.querySelector(".prodoverlay").style.display = "none";
      },
      false
    );
    let prodoverlayc = document.querySelector(".prodoverlay-container");
    prodoverlayc.addEventListener(
      "click",
      function (e) {
        e.preventDefault();
        e.stopPropagation();
      },
      false
    );
    // overlay show content

    function showprodinfo(prod) {
      let img = document.querySelector("#img");
      let name = document.querySelector("#name");
      let info = document.querySelector("#info");
      let price = document.querySelector("#price");
      let add = document.querySelector("#add");
      img.src = prod.url;
      name.innerHTML = prod.name;
      // info.innerHTML=prod.info;
      price.innerHTML = prod.price;
      imageZoom("img", "imgresult");
    }
    // over*******************************************


  function imageZoom(imgID, resultID) {
    
    var img, lens, result, cx, cy;
    img = document.querySelector(`#${imgID}`);
    result = document.getElementById(resultID);
    // 
    // lens = document.createElement("DIV");
     lens = document.querySelector(".img-zoom-lens");
    /*insert lens:*/
    img.parentElement.insertBefore(lens, img);
    /*calculate the ratio between result DIV and lens:*/
    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;
    /*set background properties for the result DIV:*/
    result.style.backgroundImage = `url(${img.src})`;
   console.log(img);

    result.style.backgroundSize = (img.width * cx) + "px " + (img.height  *cy) + "px";
    /*execute a function when someone moves the cursor over the image, or the lens:*/
    // lens.addEventListener("mouseout", leave);
    // img.addEventListener("mouseout", leave);
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
  
    /*and also for touch screens:*/
    // lens.addEventListener("touchmove", moveLens);
    // img.addEventListener("touchmove", moveLens);
    function leave(){
      result.classList.add("dpnone");
   
    }
    function moveLens(e) {
      result.classList.remove("dpnone");
      
      var pos, x, y;
      /*prevent any other actions that may occur when moving over the image:*/
      e.preventDefault();
      /*get the cursor's x and y positions:*/
      pos = getCursorPos(e);
      /*calculate the position of the lens:*/
      x = pos.x - (lens.offsetWidth / 2);
      y = pos.y - (lens.offsetHeight / 2);
      /*prevent the lens from being positioned outside the image:*/
      if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
      if (x < 0) {x = 0;}
      if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
      if (y < 0) {y = 0;}
      /*set the position of the lens:*/
      lens.style.left = x + "px";
      lens.style.top = y + "px";
      /*display what the lens "sees":*/
      result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
      
    }
    
    function getCursorPos(e) {
      var a, x = 0, y = 0;
      e = e || window.event;
      /*get the x and y positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x and y coordinates, relative to the image:*/
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return {x : x, y : y};
    } 
    
  }
 
    // ----------------------------------------------------
  };
};
