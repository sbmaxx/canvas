var delta  = 0.5,
    start = 0,
    stop = 10000,
    canvas = document.getElementById('test'),
    ctx = canvas.getContext('2d'),
    sin = Math.sin,
    draw = (function() {

        var x = 1,
            y = 1,
            size = 1,
            a = -0.966918,
            b = 2.879879,
            c = 0.765145,
            d = 0.744728,
            xnew, ynew;

        return function() {

            setTimeout(function() {

                ctx.fillStyle = 'rgba(227, 255, 255, 0.6)';

                for(var i = 0; i < 256; i++) {

                    xnew = sin(y * b) + c * sin(x * b);
                    ynew = sin(x * a) + d * sin(y * a);

                    ctx.fillRect((xnew + 2) * 75, (ynew + 2) * 75, size, size);

                    x = xnew;
                    y = ynew;
                }

                ctx.fillStyle = 'rgba(0, 0, 0, 0.01)';
                ctx.fillRect(0,0,300,300);

                start += delta;

                if (start < stop) {
                    draw();
                }

            }, 42 / 4.2);

        }

    }());

draw();
