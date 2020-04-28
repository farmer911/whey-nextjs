import globalStyle from '../globalStyle';
import numeral from 'numeral';
import localization from '../localization/localization-en.json';
import generalSettings from '../settings/generalSettings.json'

function _map(cssName, styles) {
  const cssNameMap = (cssName || '');
  const classes = Object.keys(styles).filter(item => Boolean(styles[item][cssNameMap])).map(item => styles[item][cssNameMap]);
  const css = classes.join(' ');
  return Boolean(css) ? css : cssNameMap;
}

function mapCss(styles) {
  const css_list = this.split(' ');
  return css_list.map(item => _map(item, styles)).join(' ');
}

String.prototype.css = function () {
  return mapCss.bind(this)(globalStyle)
}

String.prototype.T = function () {
  return localization[this] || this;
}

Number.prototype.format = function (formatPatern) {
  const number = numeral(this || 0);
  if (formatPatern)
    return number.format(formatPatern)
  return number.format();
}

String.prototype.buildQuery = function (data, prefixQuery = '?') {

  // If the data is already a string, return it as-is
  if (typeof (data) === 'string') return data;

  // Create a query array to hold the key/value pairs
  var query = [];

  // Loop through the data object
  for (var key in data) {
    if (data.hasOwnProperty(key)) {

      // Encode each key and value, concatenate them into a string, and push them to the array
      query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key] || ''));
    }
  }

  // Join each item in the array with a `&` and return the resulting string
  return `${this}${prefixQuery}${query.join('&')}`;

};

String.prototype.buildParams = function (data, prefixParams = ':') {
  let str = this || '';
  // If the data is already a string, return it as-is
  if (typeof (data) === 'string')
    return data;

  // Create a query array to hold the key/value pairs


  // Loop through the data object
  for (var key in data) {
    str = str.replace(`${prefixParams}${key}`, data[key] || '')
  }

  // Join each item in the array with a `&` and return the resulting string
  return str

};

if (typeof (document) !== "undefined") {
  Storage.prototype.get = key => {
    return JSON.parse((localStorage.getItem(key) || "null"));
  }

  Storage.prototype.set = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value || '{}'));
  }
}

function changeAlias(alias, replaceString = "-") {
  var str = alias || '';
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, "");
  str = str.replace(/ + /g, "");
  str = str.replace(/ /g, replaceString);
  str = str.trim();
  return str;
}

String.prototype.seo = function () {
  return changeAlias(this);
}


String.prototype.textIndex = function () {
  return changeAlias(this).split('-');
}

function createGuid() {
  function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
  return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0, 3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
}

String.prototype.toGuid = function () {
  return createGuid();
};

String.prototype.staticImage = function () {
  return `/images/${this}`
}

String.prototype.imageSrc = function (dirpath = '') {
  if (Boolean(dirpath))
    return `${generalSettings.remoteResourceUrl}/images/${dirpath}/${this}`
  return `${generalSettings.remoteResourceUrl}/images/${this}`
}

String.prototype.resize = function (width, height) {
  if (!Boolean(height))
    height = parseInt(width / (16 / 9));


  return `${generalSettings.remoteResourceUrl}/api/module/upload/image/resize/?imageUrl=${this}&width=${width}&height=${height}`;
}