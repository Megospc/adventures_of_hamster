var dom = (id) => document.getElementById(id);
var create = (type) => document.createElement(type);
var css = {};
function generateCSS() {
  let w = window.innerWidth;
  if (w <= 266) {
    css.width = w*0.95;
    css.height = w*0.7125;
    css.width = w*0.95;
    css.height = w*0.7125;
  };
  if (w <= 396 && w > 266) {
    css.width = w*0.46;
    css.height = w*0.345;
  };
  if (w <= 992 && w > 396) {
    css.width = w*0.3;
    css.height = w*0.225;
  };
  if (w > 992) {
    w = 992;
    css.width = w*0.3;
    css.height = w*0.225;
  };
  css.font = w/50;
  css.header = w/40;
  css.label = w/80;
  css.border = w/400;
  css.small = w/80;
  css.margin = w/40;
  css.body = w*0.96;
  css.px = w/400;
  setCSS();
};
function setCSS() {
  let e = create('style');
  e.innerHTML += `
.text {
  font-family: Monospace, Arial, sans-serif;
  margin-bottom: ${css.margin/2}px;
  font-size: ${css.font}px;
}
.label {
  font-family: Monospace, Arial, sans-serif;
  margin: 0;
  font-size: ${css.label}px;
  color: #a0a0a0;
}
.header {
  font-family: Monospace, Arial, sans-serif;
  margin: 0;
  font-size: ${css.header}px;
}
.border {
  border-bottom: ${css.border}px dashed #808080;
  font-size: ${css.small}px;
}
.link {
  font-size: ${css.small}px;
  font-family: Monospace, Arial, sans-serif;
  margin-bottom: 0;
  margin-right: ${css.margin}px;
}
.link-div {
  margin-bottom: ${css.margin/2}px;
}
.inline {
  display: inline-block;
  color: #00000000;
}
.img {
  border: ${css.border}px dashed #404040;
  width: ${css.width}px;
  height: ${css.height}px;
}
.img-div {
  display: inline-block;
  margin-right: ${css.small}px;
}
.img-link {
  text-decoration: none;
  display: inline-block;
  margin-right: ${css.small}px;
}
.vid {
  border: ${css.border}px dashed #404040;
  width: ${css.width}px;
  height: ${css.height}px;
}
.vid-div {
  display: inline-block;
  margin-right: ${css.small}px;
}
.vid-link {
  text-decoration: none;
  display: inline-block;
  margin-right: ${css.small}px;
}
.megospace {
  text-align: center;
  font-family: 'Courier new', Monospace, Arial;
  margin: 0;
  font-size: ${css.font}px;
  position: relative;
  top: ${css.px*3}px;
}
.megospace-img {
  position: relative;
  top: ${css.px*2}px;
  left: ${css.px*2}px;
  width: ${css.px*8}px;
  height: ${css.px*8}px;
}
body {
  background-color: #f0f0f0;
  width: ${css.body}px;
  position: absolute;
  top: ${(css.px*8)-8}px;
  left: ${(css.px*8)-8}px;
}`;
dom('head').appendChild(e);
};
generateCSS();
addEventListener('resize', generateCSS);
