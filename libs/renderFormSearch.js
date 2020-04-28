import htmlHelpers from "./htmlHelpers";

export const vemaybayFormScript = 'http://vmbweb.datacom.vn/Resources/Js/vemaybay.js?v=' + (new Date().getTime())

export default function renderFormSearch(visible) {
  if (htmlHelpers.isBrowser()) {
    window.vemaybay = {
      path: 'http://vmbweb.datacom.vn/',
      url: 'http://vemaybay.vastbit.com/flight-result',
      language: 'vi'
    };

    document.querySelectorAll('.ftl-none').forEach(item => item.remove());
    document.querySelectorAll('script').forEach(item => {
      if (item.src.includes('vmbweb.datacom.vn'))
        item.remove();
    });


    var ftl_head = document.getElementById('vmb-script');
    if (!Boolean(ftl_head))
      return;

    ftl_head.innerHTML = ''
    var ftl_script = document.createElement('script');
    ftl_script.async = true;
    ftl_script.src = vemaybayFormScript;
    ftl_script.charset = 'UTF-8';
    ftl_head.appendChild(ftl_script);
  }
}