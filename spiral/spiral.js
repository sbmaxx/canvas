var radius = 1,
    delta  = 0.1,
    k = 5,
    r = 0, x, y,
    size = 1,
    stop = 100,
    canvas = document.getElementById('test'),
    ctx = canvas.getContext('2d'),
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
    draw = function() {

        ctx.fillStyle = 'rgba(' + getFillStyle() + ')';

        setTimeout(function() {

            x = r * Math.cos(k * r);
            y = r * Math.sin(k * r);

            ctx.fillRect(x, y, size, size);

            r += delta;

            if (r < stop) {
                draw();
            }

        }, 42 / 4.2);

    };
ctx.translate(250, 250);
ctx.scale(2, 2);

draw();
