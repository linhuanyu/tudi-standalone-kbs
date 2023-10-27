// widget.js version 1.1.5

let cn = {
  tudihis: {}
};
cn.tudihis.widget = {
  url: 'http://34.80.37.72/widget',
  // url: 'https://module.tudihis.cn/widget',
  setUrl: (url) => {
    cn.tudihis.widget.url = url;
  },
  init: (config) => {
    if (
      config['width'] === null ||
      config['height'] === null ||
      config['domain'] === null ||
      config['callback'] === null ||
      config['element'] === null ||
      config['type'] === null || 
      config['token'] === null) {
      throw 'Please pass the config {width: [width of the widget], height: [height of the widget], domain: [domain of the caller, e.g. https://test.tudihis.cn], callback: [the callback function to return value], element: [the element to draw the widget], type: [the type of widget, e.g. simpleformula], token: [the token for authorization]}';
    } else {
      const subPathMap = {
        'simpleformula': 'simpleformula',
        'classicformula': 'classicformula',
        'hisstore': 'hisstore',
        'review-single': 'review-single',
        'review-batch-analysis': 'review-batch-analysis',
        'review-batch-clinic': 'review-batch-clinic',
        'review-batch-doctors': 'review-batch-doctors',
        'review-batch-patients': 'review-batch-patients',
        'review-batch-record': 'review-batch-record',
        'recommend-formula': 'recommend-formula'
      };
      let param = [];
      for (const key in config) {
        if (['callback', 'element', 'type'].indexOf(key) === -1) {
          param.push(key + '=' + config[key]);
        }
      }
      if (!subPathMap[config['type']]) {
        throw 'illegal type: ' + config['type'];
      }
      const url = cn.tudihis.widget.url + '/#/' + subPathMap[config['type']] + '/?' + param.join('&');
      config['element'].innerHTML = '<iframe style="border:none" width="'+config['width']+'" height="'+config['height']+'" src="' + url + '"></iframe>';
      window.addEventListener('message', (event) => {
        //if (event.origin.startsWith(cn.tudihis.widget.url)) {
        config['callback'](event.data);
        //}
      });
    }
  }
};
