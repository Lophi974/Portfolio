import { useRef, useEffect } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const parent = canvas.parentElement;

    const resize = () => {
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    };

    resize();
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        canvas.width = width;
        canvas.height = height;
      }
    });
    resizeObserver.observe(parent);

    const squares = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      size: Math.random() * 100,
      rotate: Math.random() * Math.PI,
      rotateSpeed: (Math.random() - 0.5) * 0.02,
      minSize: 20,
      maxSize: 80
    }));

    let animationId;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

        squares.forEach(sqr => {

            sqr.x += sqr.vx;
            sqr.y += sqr.vy;

            if (sqr.x - sqr.size / 2 < 0 || sqr.x - sqr.size / 2 > canvas.width) sqr.vx *= -1;
            if (sqr.y - sqr.size / 2 < 0 || sqr.y - sqr.size / 2 > canvas.height) sqr.vy *= -1;
            });

        
        squares.forEach((sqr, i) => {
            for (let j = i + 1; j < squares.length; j++) {
                let other = squares[j]

                const dx = Math.abs(sqr.x - other.x);
                const dy = Math.abs(sqr.y - other.y);
                const minDist = (sqr.size + other.size) / 2;

                if (dx < minDist && dy < minDist) {
                    [sqr.vx, other.vx] = [other.vx, sqr.vx];
                    [sqr.vy, other.vy] = [other.vy, sqr.vy];
                }
            }
        })


        squares.forEach(sqr => {

            let size = sqr.size;

            if (sqr.size < sqr.minSize) size = sqr.minSize
            if (sqr.size > sqr.maxSize) size = sqr.maxSize
            
            sqr.rotate += sqr.rotateSpeed;

            ctx.save();
            ctx.translate(sqr.x, sqr.y);
            ctx.rotate(sqr.rotate);
            ctx.strokeStyle = "white";
            ctx.lineWidth = 1;
            ctx.strokeRect(size / 2, size / 2, size, size);
            ctx.restore();

        })

        


      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="canvas-bg" />;
}
