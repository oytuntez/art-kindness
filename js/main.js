(function() {
    var canvas;
    var text = "I have been exploring the nature of kindness for a while now, mostly to justify that we be kind to beings (including statics, which are presumably non-alive beings) around us. I set off with this because I liked how good the act of kindness makes me feel and I wanted to come up with a foundation for what I feel. I always do this: what is the point of a concept, of a state or an act without its deliberate or unconscious meaning behind itself? One may argue mingling with the reasons of acts and states changes the very self of these acts and states, but well, who cares. This is a statement of why you should be kind to beings."+
        "\n\n"+
        "First of all, you have to understand the evolutionary, thus historical, accumulation of everything around us. Humans, animals, plants, bacteria and any other organism and non-alive beings such as earth, ocean, air and fire have an unbelievable scientific history. They also happen to have gathered up a romantic history once the humans began having subjective thoughts about them, but let’s ignore it for now. During this ongoing journey of change (evolution), we cannot put one being on a higher worth than another being, because nature does not have a distinction between the values of these beings and the value of change factors. So humans having evolved mentally “more” than other animals doesn’t mean anything to the nature. Nature is a stateful, but significance-less mechanism. This is why you must be kind towards every being in the existence, because they acquired properties and became themselves just like you did on the same evolutionary journey. "+
        "\n\n"+
        "You are no different than other beings in the sense of cruising from one state to another. That you have reached to a mental level does not mean you are worth more than other beings. Nature does not have a purpose at the end of its existence, so it cannot have values and it cannot assign values to its elements (such as humans versus animals). To cover some of the rejections: No, surviving is not a value or a rateable attribute, as it is the condition of staying within existence and nature. Apart from that, nature does not have any values against any of its elements. It is solely a state in which everything floats without any (moral) values. No values mean you cannot be better than others, objectively. Simply written, you are not the boss of existence. So be kind to others."+
        "\n\n"+
        "But let’s go on to another attribute of nature, that it is objective. Existence (interchangeable with nature in this context) behaves the same to every being. If sea waves impact the coast, they impact everything on the coast at the same strength. Sand may be affected more than trees, but it doesn’t mean the wave was being unfair to sand and hit trees softer. Looking from this perspective, nature is always objective: it does not have purposeful acts, so it cannot be kind or malicious. While nature won’t be kind (or malevolent) to anything, why would you? You wouldn’t. But if you are being sincere, you would also not be malevolent to anything. "+
        "\n\n"+
        "Of course you are not going to be satisfied with just being non-malicious to beings, you will want to be kind. Let’s get this on a more social level, “up” to human societies. You want to be kind to your surroundings, because you wouldn’t want to be the subject of “trouble”. Being kind prevents this. ";

    var signature = "Oytun Tez © 2017, Manhattan";
    var fontFamily = '"Times New Roman", serif, system';
    var textOptions = {
        width: 100,
        fontFamily: fontFamily,
        fontSize: fabric.util.parseUnit('1.2em'),
        lineHeight: 1.6,
        selectable: false,
        hoverCursor: 'default',
        moveCursor: 'default',
        hasControls: false,
        hasBorders: false
    };
    var shockImage = "this.jpg";
    var shockAudio = "shock.mp3";
    var shockDelay = 200; //seconds

    function initialize() {
        fabric.Object.prototype.selectable = false;
        canvas = new fabric.Canvas('c', {
            selection: false
        });

        (function(){
            window.addEventListener('resize', resizeCanvas, false);

            function resizeCanvas() {
                canvas.setHeight(window.innerHeight);
                canvas.setWidth(window.innerWidth);
                canvas.renderAll();
            }

            // resize on init
            resizeCanvas();
        })();

        placeSignature();
        placeText();
        startShock();
    }

    function placeText() {
        var textObject = new fabric.Textbox(text, textOptions);
        //textObject.scaleToHeight(canvas.height);
        //textObject.scaleToWidth(canvas.width);
        textObject.set({
            width: canvas.width,
            height: canvas.height
        });
        textObject.scaleX = 1;

        canvas.on('text:changed', function(opt) {
            var t1 = opt.target;
            if (t1.height > canvas.height) {
                t1.fontSize *= 1.2;
                //t1.width = t1.fixedWidth;
            }
        });

        canvas.add(textObject);
    }

    function placeSignature() {
        var textOptions = {
            left: 350,
            top: 980,
            fontFamily: 'Arial',
            fontSize: 10,
            fontWeight: "100",
            lineHeight: 1.6,
            fill: "#ddd",
            selectable: false,
            hoverCursor: 'default',
            moveCursor: 'default',
            hasControls: false,
            hasBorders: false
        };
        var text = new fabric.Text(signature, textOptions);

        canvas.add(text);
    }

    function startShock() {
        setTimeout(function() {
            fabric.Image.fromURL("/img/"+shockImage, function(image) {
                image.setWidth(canvas.width);
                image.setHeight(canvas.height);

                canvas.add(image);

                var audio = new Audio("/audio/"+shockAudio);
                audio.loop = true;
                audio.play();
            }, {
                selectable: false,
                hoverCursor: 'default',
                moveCursor: 'default',
                hasControls: false,
                hasBorders: false
            });
        }, (shockDelay*1000));
    }

    initialize();
})();