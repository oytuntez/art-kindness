var Subscription = function() {
  var html = document.createElement('div');
  html.classList.add('subscriptionContainer');
  html.style = "position: absolute;/*! top: 30%; */height: 100px;width: 550px;background-color: white;z-index: 999;text-align: center;border: 5px solid black;font-family: arial;padding: 50px;margin: auto;/*! margin-top: 10%; */";
  
  var title = document.createElement('h1');
  title.textContent = 'Want to be notified of new work?';
  
  var paragraph = document.createElement('p');
  var link = document.createElement('a');
  link.textContent = 'Click here to subscribe';
  link.href = 'https://www.oytuntez.com/follow?source='+(encodeURIComponent(location.href));
  link.target = '_blank';
  link.onclick = close;
  
  paragraph.appendChild(link);
  html.appendChild(title);
  html.appendChild(paragraph);
  
  function open() {
    document.body.appendChild(html);
  }
  
  function close() {
    document.body.removeChild(html);
  }
  
  // @todo Emit modal open and close events
  // @todo Close button
  
  return {
    open: open,
    close: close
  };
}();