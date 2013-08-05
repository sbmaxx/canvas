var delta  = 1,
    r = 0,
    stop = 10000,
    canvas = document.getElementById('test'),
    ctx = canvas.getContext('2d'),
    sin = Math.sin,
    rnd = Math.random,
    getFillStyle = function(r) {
        return [
            ~~(255 * (1 - 0.5 * sin(r * 5))),
            ~~(255 * (1 - 0.5 * sin(r * 7))),
            ~~(255 * (1 - 0.5 * sin(r * 11))),
            0.3
        ].join(',');
    },
    getTime = (function() {
        var start = new Date();
        return function() {
            return ((new Date() - start) & 0xfffffff) / 20000;
        }
    }()),
    draw = (function() {

        var x = 1,
            y = 1,
            size = 1,
            a = -0.966918 - 0.3 + 0.5 * sin(r + 1.0),
            b = 2.879879 + 1.1 + 0.8 * sin(r * 2.0 + 3.0),
            c = 0.765145 - 0.3 + 0.2 * sin(r * 3.0 + 5.0),
            d = 0.744728 - 0.3 + 0.4 * sin(r * 1.4 + 7.0),
            xnew, ynew;

        var z = 4,
            k = Math.min(canvas.width, canvas.height) / z,
            shiftX = canvas.width / (k * z) + 1.7,
            shiftY = canvas.height / (k * z) + 1;

        return function() {

            setTimeout(function() {

                ctx.fillStyle = 'rgba(' + getFillStyle(getTime()) + ')';
                //ctx.fillStyle = 'rgba(255,255,255,0.5)';
                // console.log('getFillStyle', getFillStyle(getTime()));

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

                r += delta;

                if (r < stop) {
                    draw();
                }

            }, 42 / 4.2);

        }

    }());

draw();
