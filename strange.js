var delta  = 0.5,
    start = 0,
    stop = 10000,
    canvas = document.getElementById('test'),
    ctx = canvas.getContext('2d'),
    sin = Math.sin,
    rnd = Math.random,
    getRGBRnd = (function() {

        var min = 0,
            max = 255;

        return function() {
            return ~~(rnd() * (max - min + 1) + min); 
        }

    }()),
    getFillStyle = function() {
        return [
            getRGBRnd(),
            getRGBRnd(),
            getRGBRnd(),
            1
        ].join(',');
    },    
    draw = (function() {

        var x = 1,
            y = 1,
            size = 1,
            a = -0.966918,
            b = 2.879879,
            c = 0.765145,
            d = 0.744728,
            xnew, ynew;

        console.log('width: ', canvas.width, 'height: ', canvas.height);

        var z = 4,
            k = Math.min(canvas.width, canvas.height) / z,
            shiftX = canvas.width / (k * z) + 1.7,
            shiftY = canvas.height / (k * z) + 1;

        return function() {

            setTimeout(function() {

                ctx.fillStyle = 'rgba(' + getFillStyle() + ')';

                for(var i = 0; i < 256; i++) {

                    // x, y: -1, -1, 1, 1
                    // left: (-1 + shift) * k
                    // right: (1 + shift) * k
                    // 
                    xnew = sin(y * b) + c * sin(x * b);
                    ynew = sin(x * a) + d * sin(y * a);

                    ctx.fillRect((xnew + shiftX) * k, (ynew + shiftY) * k, size, size);

                    x = xnew;
                    y = ynew;

                }

                // console.log('x: ', (x + shiftX) * k, 'y:', (y + shiftY  ) * k);

                ctx.fillStyle = 'rgba(0, 0, 0, 0.01)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                start += delta;

                if (start < stop) {
                    draw();
                }

            }, 42 / 4.2);

        }

    }());

draw();
