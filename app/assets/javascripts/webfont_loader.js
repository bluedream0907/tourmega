WebFontConfig = {
  google: {
    // families: [ 'Circular,"Helvetica Neue",Helvetica,Arial,sans-serif' ]
    families: [ 'Varela+Round::latin' ]
  },
  timeout: 2000
};

(function(d) {
   var wf = d.createElement('script'), s = d.scripts[0];
   wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js';
   s.parentNode.insertBefore(wf, s);
})(document);
