var radius = 1,
    delta  = 0.1,
    k = 5,
    r = 0, x, y,
    size = 2,
    shift  = 150 - size/2,
    stop = 150,
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
        ].join('');
    },
    draw = function() {

        setTimeout(function() {

            x = r * Math.cos(k * r) + shift;
            y = r * Math.sin(k * r) + shift;

            ctx.fillStyle = getFillStyle();
            ctx.fillRect(x,y,size,size);

            r += delta;

            if (r < stop) {
                draw();
            }

        }, 42 / 4.2);

    };

draw();
