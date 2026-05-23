/*********************************
 * GLOBAL LANGUAGE TOGGLE
 *********************************/
let currentLang = "en";

const langToggle = document.querySelector(".lang-toggle");

if (langToggle) {
  langToggle.addEventListener("click", () => {

    currentLang = currentLang === "en" ? "zh" : "en";

    /* data-en / data-zh elements */
    document.querySelectorAll("[data-en]").forEach(el => {
      el.innerHTML = el.dataset[currentLang];
    });

    /* custom language blocks */
    document.querySelectorAll(".lang-en").forEach(el => {
      el.style.display = currentLang === "en" ? "block" : "none";
    });

    document.querySelectorAll(".lang-zh").forEach(el => {
      el.style.display = currentLang === "zh" ? "block" : "none";
    });

    /* button text */
    langToggle.textContent =
      currentLang === "en"
        ? "中文 | EN"
        : "EN | 中文";
  });
}

/*********************************
 * MAP (Leaflet)
 *********************************/
if (document.getElementById("project-map")) {
  const map = L.map("project-map").setView([31.2304, 121.4737], 11);

  L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
    {
      attribution: "&copy; OpenStreetMap & Carto",
      subdomains: "abcd",
      maxZoom: 20
    }
  ).addTo(map);  
  
  

  const projectPoints = [

    { coords: [31.25956781700016, 121.4402300830569], titleEN: "Yichuan New Village (Former Workers’ Housing)", titleZH: "宜川新村（原工人新村建筑）", student: "Fall 2025", image: "images/yichuan.jpg" },
  
    { coords: [31.244321905123297, 121.49082740000824], titleEN: "Astor House Hotel (Pujiang Hotel)", titleZH: "浦江饭店（原Astor House历史建筑）", student: "Fall 2025", image: "images/astor-house.jpg" },
  
    { coords: [31.150186526005573, 121.46934843773327], titleEN: "Qiantan Leisure Park", titleZH: "前滩休闲公园（城市的公共空间）", student: "Fall 2025", image: "images/qiantan-park.jpg" },
  
    { coords: [31.22565768815017, 121.53442218357358], titleEN: "NYU Shanghai – Century Ave & Qiantan Campuses", titleZH: "上海纽约大学世纪大道老校园和前滩新校园", student: "Fall 2025", image: "images/nyu-centur-qiantan.jpg" },
  
    { coords: [31.202106127221118, 121.45284807597925], titleEN: "CAS Institute of Life Sciences (320 Yueyang Rd)", titleZH: "上海市徐汇区岳阳路320号（中国科学院生命科学研究院建筑）", student: "Fall 2025", image: "images/cas.jpg" },
  
    { coords: [31.21603872653385, 121.45719055393249], titleEN: "Middle Huaihai Road", titleZH: "淮海中路——上海的网红街区", student: "Fall 2025", image: "images/huaihai.jpg" },
  
    { coords: [31.223357694179402, 121.45287710024645], titleEN: "Shanghai Exhibition Center", titleZH: "上海展览中心建筑", student: "Fall 2025", image: "images/exhibition-center.jpg" },
  
    { coords: [31.222145751548, 121.47724852914995], titleEN: "First National Congress Site (Xintiandi)", titleZH: "上海原一大会址建筑（新天地）", student: "Fall 2025", image: "images/first-congress.jpg" },
  
    { coords: [31.191248113589076, 121.437123530173], titleEN: "Xujiahui Catholic Cathedral", titleZH: "徐家汇天主教堂", student: "Fall 2025", image: "images/xujiahui-cathedral.jpg" },
  
    { coords: [31.174833793993923, 121.4537131817447], titleEN: "Longhua Temple", titleZH: "龙华寺", student: "Fall 2025", image: "images/longhua.jpg" },
  
    { coords: [31.222380861799138, 121.47544242528453], titleEN: "Shikumen Museum", titleZH: "上海石库门博物馆", student: "Fall 2025", image: "images/shikumen.jpg" },
  
    { coords: [31.2435459126885, 121.48887364124629], titleEN: "Old Shanghai Rowing Club (76 South Suzhou Rd)", titleZH: "上海市南苏州路76号（原老上海赛艇俱乐部）", student: "Fall 2025", image: "images/rowing-club.jpg" },
  
    { coords: [31.2146479576715, 121.45422805996573], titleEN: "Music Castle (1209 Huaihai Rd)", titleZH: "淮海中路1209号（音乐城堡）", student: "Fall 2025", image: "images/music-castle.jpg" },
  
    { coords: [31.231783150088077, 121.45321206585304], titleEN: "Seymour Church (500 North Shaanxi Rd)", titleZH: "陕西北路500号上海西摩教堂", student: "Fall 2025", image: "images/seymour-church.jpg" },
  
    { coords: [31.255032361173985, 121.49170848353002], titleEN: "1933 Old Millfun", titleZH: "上海市虹口区沙泾路29号（上海1933老场坊建筑）", student: "Fall 2025", image: "images/1933.jpg" },
  
    { coords: [31.23991175293413, 121.48443833875452], titleEN: "West Nanjing Road", titleZH: "南京西路商业街", student: "Fall 2025", image: "images/west-nanjing.jpg" },
  
    { coords: [31.236376049171792, 121.47190702965639], titleEN: "Park Hotel Shanghai", titleZH: "国际饭店", student: "Fall 2025", image: "images/park-hotel.jpg" },
  
    { coords: [31.23916720009463, 121.48958561241011], titleEN: "Fairmont Peace Hotel", titleZH: "和平饭店（邬达克设计的老上海建筑）", student: "Fall 2025", image: "images/peace-hotel.jpg" },
  
    { coords: [31.24403640900014, 121.5078244485111], titleEN: "Pudong Riverside Park", titleZH: "浦东滨江公园（城市的公共空间）", student: "Fall 2025", image: "images/pudong-riverside.jpg" },
  
    { coords: [31.228466320340033, 121.47800962142821], titleEN: "Nanjing East Road Teahouses & Cafés", titleZH: "南京东路上的茶馆与咖啡", student: "Fall 2025", image: "images/nanjing-east.jpg" },
  
    { coords: [31.222657247667037, 121.44544347326317], titleEN: "Paramount Ballroom", titleZH: "南京路上的百乐门舞厅", student: "Fall 2025", image: "images/paramount.jpg" },
  
    { coords: [31.20470021318444, 121.4388087946883], titleEN: "Wukang Mansion", titleZH: "武康大楼", student: "Fall 2025", image: "images/wukang.jpg" },
  
    { coords: [31.208545082006648, 121.44032156046376], titleEN: "Wukang Road Historic Residences", titleZH: "武康路建筑", student: "Fall 2025", image: "images/wukang-road.jpg" },
  
    { coords: [31.24154372036142, 121.44537809207414], titleEN: "Jade Buddha Temple", titleZH: "玉佛寺", student: "Fall 2025", image: "images/jade-buddha.jpg" },
  
    { coords: [31.23679947691029, 121.46164282231106], titleEN: "Gongdelin Vegetarian Restaurant", titleZH: "功德林素食馆", student: "Fall 2025", image: "images/gongdelin.jpg" },
  
    { coords: [31.213509259213094, 121.45144716770498], titleEN: "Huating Road Market", titleZH: "徐家汇华亭路小市场历史", student: "Fall 2025", image: "images/huating-market.jpg" },
  
    { coords: [31.077232193959127, 121.06026225461383], titleEN: "Fangsheng Bridge (Zhujiajiao)", titleZH: "青浦朱家角古镇放生桥", student: "Fall 2025", image: "images/fangsheng-bridge.jpg" },
  
    { coords: [31.194568177149357, 121.65272751460623], titleEN: "Shanghai Disneyland", titleZH: "上海迪士尼", student: "Fall 2025", image: "images/disney.jpg" },
  
    { coords: [31.14910786796648, 121.48124406227507], titleEN: "NYU Shanghai Qiantan Campus", titleZH: "上海纽约大学校园建筑", student: "Fall 2025", image: "images/nyu-qiantan.jpg" },
  
    { coords: [31.22686496788824, 121.45591827378696], titleEN: "Rong Zhai (Prada Mansion)", titleZH: "上海陕西北路186号荣宅", student: "Fall 2025", image: "images/rong-zhai.jpg" },
  
    { coords: [31.15509462657114, 121.48262083974406], titleEN: "Taikoo Li Qiantan", titleZH: "前滩太古里", student: "Fall 2025", image: "images/taikoo-li.jpg" },
  
    { coords: [31.22302654720069, 121.4563378047375], titleEN: "Moller Villa", titleZH: "上海陕西南路30号马勒别墅", student: "Fall 2025", image: "images/moller-villa.jpg" },
  
    { coords: [31.243606030417606, 121.4894462427069], titleEN: "Bund No. 27", titleZH: "上海外滩27号（中山东一路27号建筑）", student: "Fall 2025", image: "images/bund-27.jpg" },
  
    { coords: [31.235951793184018, 121.480159879345], titleEN: "Nanjing Road Pedestrian Street", titleZH: "上海南京路步行街", student: "Fall 2025", image: "images/nanjing-pedestrian.jpg" },
  
    { coords: [31.204148331072417, 121.4396551849018], titleEN: "Soong Ching Ling Memorial Residence", titleZH: "上海宋庆龄故居博物馆", student: "Fall 2025", image: "images/soong-ching-ling.jpg" },
  
    { coords: [31.195916440438303, 121.47711753855727], titleEN: "Huangpu Riverside Green Space", titleZH: "上海黄浦江边的公共绿地", student: "Fall 2025", image: "images/huangpu-riverside.jpg" },
  
    { coords: [31.196050161913234, 121.43986699111562], titleEN: "Grand Gateway 66", titleZH: "上海港汇恒隆广场", student: "Fall 2025", image: "images/grand-gateway.jpg" },
  
    { coords: [31.224301818072508, 121.43310781055716], titleEN: "1251 Wuding West Road Lane Residences", titleZH: "上海长宁区武定西路1251弄", student: "Fall 2025", image: "images/wuding.jpg" },
  
    { coords: [31.207310295282078, 121.4583512710936], titleEN: "Lane 165 Taiyuan Road Residences", titleZH: "太原路165弄", student: "Fall 2025", image: "images/taiyuan-lane.jpg" },
    { coords: [31.22275860932375, 121.4445960086012], titleEN: "Paramount Ballroom", titleZH: "百乐门", student: "Spring 2026", image: "" },
    { coords: [31.222793596579383, 121.47432732600473], titleEN: "Xintiandi", titleZH: "新天地", student: "Spring 2026", image: "" },
    { coords: [31.171375490300427, 121.46177383424242], titleEN: "West Bund Dream Center", titleZH: "西岸梦中心", student: "Spring 2026", image: "" },
    { coords: [31.173930420624835, 121.4519225490719], titleEN: "Longhua Pagoda", titleZH: "龙华塔", student: "Spring 2026", image: "" },
    { coords: [31.227192114024163, 121.47781726833152], titleEN: "Shanghai Concert Hall", titleZH: "上海音乐厅", student: "Spring 2026", image: "" },
    { coords: [31.22297895853075, 121.54145955092804], titleEN: "Shanghai Oriental Art Center", titleZH: "上海东方艺术中心", student: "Spring 2026", image: "" },
    { coords: [31.211478717676247, 121.45203147898408], titleEN: "Shanghai Jaguar Symphony Hall", titleZH: "上海捷豹交响音乐厅", student: "Spring 2026", image: "" },
    { coords: [31.22983498033318, 121.47182645484143], titleEN: "Shanghai Grand Theatre", titleZH: "上海大剧院", student: "Spring 2026", image: "" },
    { coords: [31.23583539475158, 121.48415060687027], titleEN: "Shanghai Shenbao Café The Press", titleZH: "上海申报咖啡馆", student: "Spring 2026", image: "" },
    { coords: [31.235028677652085, 121.50663487902646], titleEN: "Lujiazui Trio — Shanghai World Financial Center, Jin Mao Tower, Shanghai Tower", titleZH: "陆家嘴三件套—环球金融中心，金茂大厦，上海中心大厦", student: "Spring 2026", image: "" },
    { coords: [31.23161066209815, 121.45270928436585], titleEN: "Ho Tung Mansion, 457 North Shaanxi Road", titleZH: "上海陕西北路457号何东公馆", student: "Spring 2026", image: "" }
  
  ];

  const purpleIcon = L.icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png",
    shadowUrl:
      "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [22, 36],
    iconAnchor: [11, 36],
    popupAnchor: [1, -34]
  });

  projectPoints.forEach(point => {
    const popupContent = `
      <div class="map-popup">
        <img src="${point.image}" alt="">
        <h4 data-en="${point.titleEN}" data-zh="${point.titleZH}">
          ${currentLang === "en" ? point.titleEN : point.titleZH}
        </h4>
        <p>${point.student}</p>
        <a href="${point.pdf}" target="_blank">View PDF</a>
      </div>
    `;

    L.marker(point.coords, { icon: purpleIcon })
  .addTo(map)
  .bindPopup(popupContent);
  });
}
/*********************************
 * LOCATION DROPDOWNS
 *********************************/
document.querySelectorAll(".location-toggle").forEach(button => {
    button.addEventListener("click", () => {
      button.parentElement.classList.toggle("open");
    });
  });
  
  document.querySelectorAll(".district").forEach(district => {

    const slides = district.querySelectorAll(".slides img");
    const caption = district.querySelector(".caption");
    const prevBtn = district.querySelector(".prev");
    const nextBtn = district.querySelector(".next");
    const leftZone = district.querySelector(".hover-zone.left");
    const rightZone = district.querySelector(".hover-zone.right");
  
    let index = 0;
    let interval;
  
    // ✅ FIX: portrait detection INSIDE loop
  
    function showSlide(i) {
      slides.forEach(slide => slide.classList.remove("active"));
      slides[i].classList.add("active");
  
      if (caption) {
        caption.textContent = slides[i].dataset.caption || "";
      }
    }
  
    function nextSlide() {
      index = (index + 1) % slides.length;
      showSlide(index);
    }
  
    function prevSlide() {
      index = (index - 1 + slides.length) % slides.length;
      showSlide(index);
    }
  
    function startAutoSlide() {
      interval = setInterval(nextSlide, 5000);
    }
  
    function resetAutoSlide() {
      clearInterval(interval);
      startAutoSlide();
    }
  
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        nextSlide();
        resetAutoSlide();
      });
    }
  
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        prevSlide();
        resetAutoSlide();
      });
    }
  
    if (rightZone) {
      rightZone.addEventListener("click", () => {
        nextSlide();
        resetAutoSlide();
      });
    }
  
    if (leftZone) {
      leftZone.addEventListener("click", () => {
        prevSlide();
        resetAutoSlide();
      });
    }
  
    showSlide(index);
    startAutoSlide();
  });