    var x, y,
        size = 1,
        canvas = document.getElementById('test'),
        ctx = canvas.getContext('2d'),
        draw = function() {

            ctx.translate(250, 250);
            ctx.scale(4, -4);
            //
            //x = 16sin^3t
            // y 13cost - 5cos2t - 2cos3t - cos4t
            ctx.fillStyle = 'rgba(234,55,12,0.1)';

            for (var i = 0; i < 8 * 1024; i++) {
                x = 16 * Math.pow(Math.sin(i), 3);
                y = 13 * Math.cos(i) - 5 * Math.cos(2 * i) - 2 * Math.cos(3 * i) - Math.cos(4 * i);

                ctx.fillRect(x, y, size, size);
            }

            ctx.beginPath();
            ctx.strokeStyle = 'rgba(234,55,12,1)';
            ctx.moveTo(-15, -15);
            ctx.lineTo(0, 0);
            ctx.stroke();

            ctx.moveTo(12, 12);
            ctx.lineTo(20, 20);
            ctx.stroke();

            ctx.moveTo(-15, -15);
            ctx.lineTo(-15, -10);

            ctx.moveTo(-15, -15);
            ctx.lineTo(-10, -15);

            ctx.stroke();

            ctx.save();

        };

draw();
