var loc = document.URL;
var link = "";
for (let i = 0; i < loc.length; i++) {
  if (loc[i] == "?") {
    break;
  } else {
    link += loc[i];
  };
};

function setPage(id) {
  let page = pages.get(id) ?? pages.get("404");
  let body = document.body;
  body = "";
  switch (page.type) {
    case "main" :
      body += `<header>
        <b class="header">
          Приключения хомяка, кличка когорого начинается на "Рыт" и оканчивается на "ик"
        </b>
      </header>
      <p class="border">`;
      for (let i = 0; i < page.images.length; i++) {
        let img = getContent(page.images[i]);
        body += img.type == "image" ? `<div class="img-div">
          <img class="img" src="${img.src}">
          <p class="label">${img.discription}</p>
        </div>`:`<div class="vid-div">
          <video class="vid" src="${img.src}" no-controls autoplay loop playsinline muted></video>
          <p class="label">${img.discription}</p>
        </div>`;
      };
      body += `<p class="border"></p>
      <p class="text">${page.text}</p>`;
      for (let i = 0; i < page.links.length; i++) {
        let lnk = page.links[i];
        body += `<div class="link-div">
          <a class="link" href="${link+"?page="+lnk.href}"><b>${lnk.text}</b></a>
        </div>`;
      };
      body += `<p class="megospace">
        <img src="images/megospace.png" class="megospace-img">
        <b>
          Megospace ${page.date}
        </b>
      </p>`
      break;
    case "adventure" :
      body += `<header>
        <b class="header">
          ${page.title}
        </b>
        <div></div>
        <a href="${link+"?page=main"}" class="link">
          <b>на главную страницу</b>
        </a>
      </header>
      <p class="border">`;
      for (let i = 0; i < page.images.length; i++) {
        let img = getContent(page.images[i]);
        body += img.type == "image" ? `<div class="img-div">
          <img class="img" src="${img.src}">
          <p class="label">${img.discription}</p>
        </div>`:`<div class="vid-div">
          <video class="vid" src="${img.src}" no-controls autoplay loop playsinline muted></video>
          <p class="label">${img.discription}</p>
        </div>`;
      };
      body += `<p class="border"></p>
      <p class="text">${page.text}</p>`;
      for (let i = 0; i < page.links.length; i++) {
        let lnk = page.links[i];
        body += `<div class="link-div">
          <a class="link" href="${link+"?page="+lnk.href}"><b>${lnk.text}</b></a>
        </div>`;
      };
      body += `<div style="height: 10px;"></div>
      <p class="megospace">
        <img src="images/megospace.png" class="megospace-img">
        <b>
          Megospace ${page.date}
        </b>
      </p>`;
      break;
    case "part":
      body += `<header>
        <b class="header">
          ${page.title}
        </b>
        <div></div>
        <a href="${link+"?page=main"}" class="link">
          <b>на главную страницу</b>
        </a>
      </header>
      <p class="border">`;
      for (let i = 0; i < page.images.length; i++) {
        let img = getContent(page.images[i]);
        body += img.type == "image" ? `<div class="img-div">
          <img class="img" src="${img.src}">
          <p class="label">${img.discription}</p>
        </div>`:`<div class="vid-div">
          <video class="vid" src="${img.src}" no-controls autoplay loop playsinline muted></video>
          <p class="label">${img.discription}</p>
        </div>`;
      };
      body += `<p class="border"></p>
      <p class="text">${page.text}</p>`;
      if (page.next) {
        body += `<div style="height: 5px;"></div><p class="text"><b>ПРОДОЛЖЕНИЕ СЛЕДУЕТ</b></p><div style="height: 5px;"></div>`;
      };
      body += `<p class="border"></p>`;
      if (page.previous) {
        body += `<a class="link" href="${link+"?page="+page.previous}"><b>(назад)</b></a>`;
      };
      body += `<a class="link" href="${link+"?page="+page.adventure}"><b>на страницу приключения</b></a>`;
      if (page.next) {
        body += `<a class="link" href="${link+"?page="+page.next}"><b>(вперёд)</b></a>`;
      };
      body += `<div style="height: 10px;"></div>
      <p class="megospace">
        <img src="images/megospace.png" class="megospace-img">
        <b>
          Megospace ${page.date}
        </b>
      </p>`;
      break;
    case "media":
      body += `<header>
        <b class="header">
          Фото и видео с хомяком Рытиком
        </b>
        <div></div>
        <a href="${link+"?page=main"}" class="link">
          <b>на главную страницу</b>
        </a>
      </header>
      <p class="border"></p>`;
      for (let i = 0; i < content.length; i++) {
        let img = content[i];
        body += img.type == "image" ? `<a class="img-link" href="${link+"?page=content:"+img.src}">
          <img class="img" src="${img.src}">
          <p class="label">${img.discription}</p>
        </a>`:`<a class="vid-link" href="${link+"?page=content:"+img.src}">
          <video src="${img.src}" class="vid"  no-controls autoplay loop playsinline muted></video>
          <p class="label">${img.discription}</p>
        </a>`;
      };
      body += `<div style="height: 10px;"></div>
      <p class="megospace">
        <img src="images/megospace.png" class="megospace-img">
        <b>
          Megospace ${page.date}
        </b>
      </p>`;
      break;
    case "content":
      let img = page.content;
      body += `<header>
        <b class="header">
          ${page.id}
        </b>
        <div></div>
        <a href="${link+"?page=main"}" class="link">
          <b>на главную страницу</b>
        </a>
        <a href="${link+"?page=media"}" class="link">
          <b>к медиа</b>
        </a>
      </header>
      <p class="border"></p>`;
      body += img.type == "image" ? `<div class="img-div" href="${link+"?page="+img.src}">
        <img class="img" src="${img.src}">
      </div>`:`<div class="vid-div" href="${link+"?page="+img.src}">
        <video class="vid" src="${img.src}" no-controls autoplay loop playsinline muted></video>
      </div>`;
      body += `<p class="hidden"></p>
      <p class="text"><b>Подпись: </b>${img.discription}</p>
      <p class="text"><b>Имя файла: </b>${img.id+img.format}</p>
      <p class="text"><b>Размер файла: </b>${img.size}</p>
      <p class="text"><b>Формат файла: </b>${img.format}</p>
      <p class="text"><b>Загруженно: </b>${img.date}</p>
      <p class="text"><b>Ширина: </b>${img.width}px</p> 
      <p class="text"><b>Высота: </b>${img.height}px</p>
      <a download="${img.id+img.format}" href="${img.src}" class="link"><b>скачать</b></a>`
      break;
    case "cycle":
      body += `<header>
        <b class="header">
          ${page.title}
        </b>
        <div></div>
        <a href="${link+"?page=main"}" class="link">
          <b>на главную страницу</b>
        </a>
      </header>
      <p class="border">`;
      for (let i = 0; i < page.images.length; i++) {
        let img = getContent(page.images[i]);
        body += img.type == "image" ? `<div class="img-div">
          <img class="img" src="${img.src}">
          <p class="label">${img.discription}</p>
        </div>`:`<div class="vid-div">
          <video class="vid" src="${img.src}" no-controls autoplay loop playsinline muted></video>
          <p class="label">${img.discription}</p>
        </div>`;
      };
      body += `<p class="border"></p>
      <p class="text">${page.text}</p>
      <p class="border"></p>`;
      body += `<a class="link" href="${link+"?page=stories"}"><b>к циклам</b></a>`;
      body += `<div style="height: 10px;"></div>
      <p class="megospace">
        <img src="images/megospace.png" class="megospace-img">
        <b>
          Megospace ${page.date}
        </b>
      </p>`;
      break;
    case "error":
      body += `<b class="header">${page.number}</b><p class="text">${page.text}</p><a class="link" href="${link+"?page=main"}"><b>на главную страницу</b></a>`
      break;
  };
  dom('body').innerHTML=body;
};

function getPage() {
  const page = (new URL(document.location)).searchParams.get("page") ?? "main";
  setPage(page);
};

getPage();
