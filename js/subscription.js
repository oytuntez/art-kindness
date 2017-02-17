var Subscription = function() {
    /**
     * @var {Function}
     */
    var onCloseAction;
    var subText = '';
    var html;

    function create() {
        html = document.createElement('div');
        html.classList.add('subscriptionContainer');
        html.style = "position: absolute;height: 100px;width: 550px;background-color: white;z-index: 999;text-align: center;border: 5px solid black;font-family: arial;padding: 50px;margin: auto;left: 50%; margin-left: -330px;";

        var title = document.createElement('h1');
        title.textContent = 'Want to be notified of new work?';

        var paragraph = document.createElement('p');
        var link = document.createElement('a');
        link.textContent = 'Click here to subscribe';
        link.href = 'https://www.oytuntez.com/follow?source='+(encodeURIComponent(location.href));
        link.target = '_blank';
        link.onclick = close;
        link.style = 'padding: 10px; background-color: black; color: white; text-decoration: none;';

        paragraph.appendChild(link);
        html.appendChild(title);
        html.appendChild(paragraph);

        if(subText.length > 0) {
            var subParagraph = document.createElement('p');
            subParagraph.textContent = subText;
            subParagraph.style = 'font-size: 12px; font-style: italic;';

            html.appendChild(subParagraph);
        }

        return html;
    }

    function open() {
        document.body.appendChild(create());
    }

    function close() {
        if(html) {
            document.body.removeChild(html);
        }

        if(typeof(onCloseAction) === 'function') {
            onCloseAction();
        }
    }

    // @todo Emit modal open and close events
    // @todo Close button

    return {
        open: open,
        close: close,
        setOnClose: function(fn) {
            if(typeof(fn) === 'function') {
                onCloseAction = fn;
            }
        },
        setSubText: function(text) {
            if(text.length > 0) {
                subText = text;
            }
        }
    };
}();