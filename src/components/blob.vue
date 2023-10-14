<template>
    <div>
      <canvas id="c"></canvas>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        n: 50,
        speed: 10,
        startSize: 600,
        randomValues: [],
        c: null,
        ctx: null,
        cw: 0,
        ch: 0,
        mousePos: { x: '', y: '' },
        img: new Image(),
        particles: [],
      };
    },
    methods: {
      rand(min, max) {
        min = min || 0;
        max = max || 1;
        return min + (max - min) * Math.random();
      },
      setParticle(p, firstRun) {
        let startProps = {
          x: this.cw / 2 + this.rand(0, 60) - 30,
          y: this.ch / 2 + this.rand(0, 60) - 30,
          size: this.startSize,
          alpha: 0,
        };
        if (this.rand(0, 1) > 0.3 && this.mousePos.x !== '') {
          startProps = { x: this.mousePos.x, y: this.mousePos.y, size: this.startSize / 10, alpha: 0 };
        }
        let _tl = new TimelineMax().fromTo(p, p.dur, startProps, {
          size: '+=' + String(this.rand(200, 400)),
          bezier: [{ alpha: this.rand(0.15, 0.65) }, { alpha: 0 }],
          ease: Power0.easeNone,
          onComplete: () => this.setParticle(p),
        });
        if (firstRun) _tl.seek(p.dur * this.rand());
      },
      init() {
        this.cw = this.c.width = window.innerWidth;
        this.ch = this.c.height = window.innerHeight;
        for (let i = 0; i < this.n; i++) {
          TweenMax.killTweensOf(this.particles[i]);
          this.setParticle(this.particles[i], true);
        }
        TweenMax.fromTo(this.c, 0.4, { alpha: 0 }, { alpha: 1, ease: Power2.easeInOut });
      },
    },
    mounted() {
      this.c = document.getElementById('c');
      this.ctx = this.c.getContext('2d');
  
      this.img.src =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAACXBIWXMAAAsTAAALEwEAmpwYAAABXFBMVEVHcEwN2uAM1dkO2N0L1NkF1toL2N8Ay9ABx8kG09cFzNMZ6u0I3OIP190DvsQCvsMN0dgW6/EGw8kGwsgQ2d8O2+EP1tsP0dgM4OYGw8kH2N4P190Ex84GwsgZ3uRL9/0N2N4G09kOzdMf7/UQ2d8FwcgFxMsGwsgi4ugG0tkO2uEI09oNz9UIzNEO2eAJ0NYW5OoS5+wHzNIGwcgN4+oEvsUp7vQJx80O3eQN2uEb6O8P3OIj5usT4OYU3OJM8vdX+Pwt5+0CvsYDvcMOztUO4eYP0tgR190HxMoO2+Ej6e8U2+EO0tgP3OIKzNIFwMYHyc838/kQ3OIHw8kQ0tcb4eYQ190Jxs0FwsgM1tsJx84U3OI/7fMOzdMO2OAEv8YO2uAKydAW4uhl+PwQ1dsM09k16/FD9/wEwMY48PYFw8kw7fMJxcoFwshh+v419vyD/P8o8vh3+/5w+/6toXD7AAAAbnRSTlMAHxErCQMXAgEG9g38VSUvM/5Uw6AlOUr8Q/lp8tnX/kH7W/6+fOmh6fZx7q/D19/3/ex0/k/7pkzz++jw88L7/vMbOnQvlH/QkvfNxTzTaN/9q7mi4rWWi+Rt4fmPXpOIfuz9e9T3/q775fmyYVC4UJcAAANTSURBVDjLhdVnU+pAFAZg0hORIppEQAGpIlUUBQVERUCahd5UBMGK7f/P3LNU6/WdCZ+eOWd3szlIJN/Cokj+CAOhUP6wIDiOI0n4AfsjYVmKI3Ea4wklRCHHDnCSY75blqFIKc0TglpUQfzqQ4Uc6LeqyOEYIYjGk9qGxWLZqD2p1IfyAyTZr44HttGqlG0olxXLiUqtkJMU89URamOtVbY95udR8re2S8uJ/1D+qTuLnGiMNbcf55PJ5UGS83lbZUP1WcI+eIOxVd7OJ5dP760o9/dAby8Hctqck2KCLNZ0unKnVt/SKNb7ZST9igNuIkn6SNQOnM83M87SEpKVE7Ucp8YQx4SLTsGV8wCzrwyDqHV53mZRKQ7I8Z5pQtTGnRmPz2Ff0WhmUTQrK/YZ32kyfzktyVKYUtYpZG6qDjuoxcVNyCJYJKGkX0GPNk7x2YsrKOgIBmcXN9fnUNaBauwOT/Kx8nQ42g5DEQZtvAQFwa3PmUym11cTUCR9uXwZeo8gdxRYOza7q8Ewcq/PKEBB2h2nLhuc0BCyCC6Y3btB7/oOuJ5er+8huTmrcXhc27BIclKxg2DYi5w+2u/3o/rnVygZHEAVQHbcegS3znrR/vvb23u0d2baGUH/BBIfoL7//vLy8tbWn23teBGcrpHheIP2uOSuh70pBN8+wOqNq1wb7xoOXLi4Ok/Xr4dwULGvv9vaCQerOef0HCUUTcBuIu7d69TWXS/ahjW2o3t3KW9415PZbqkUNDd8Mww+6A0lQ6mHu71ouw2u8ZAK71ZvnKjz5PrANZPBAemKILuNPZRGdz90Xb/JFFpGJUaO7zgFFxxWGdEVV0P73W6j0eiCW627M85mTU3g3GSOcDR6i0MZ2kcJrRaRi8dUSnp6wyUUR2dlIM1pXbG4ilKs69JmcEYD9vHrgnGCgbxaOI+kdYOk0+ZSoQmOl36aFvDBYtmANnG8cG42RyIRc6lUiCe0MuSYLyOFwwRRpk1cHS9ACvFmInYhZnmc+jqooDt9hOhaJ5HodGJao5iFgwH3w5yCaaY0BAIyoywgGgSCp0mK+WlIMpR0OB8FQUnwGI1zzK9TlyJJ6TAwdf87mxlulN8m84elMrBahvnzbwHZ0fM5/wCsDLyQI/IavwAAAABJRU5ErkJggg==';
  
      this.c.onmousemove = (e) => {
        this.mousePos = { x: e.clientX, y: e.clientY };
      };
  
      document.onmouseleave = document.ontouchend = (e) => {
        this.mousePos = { x: '', y: '' };
      };
  
      for (let i = 0; i < this.n; i++) {
        this.randomValues.push({
          size: this.rand(99, 300),
          x: this.cw / 2 + this.rand(0, 60) - 30,
          y: this.ch / 2 + this.rand(0, 60) - 30,
          alpha: 0,
          dur: (100 - this.rand(9, 90)) / this.speed,
        });
      }
  
      // Initialize particles
      for (let i = 0; i < this.n; i++) {
        this.particles.push(this.randomValues[i]);
      }
  
      // Initialize canvas and particles
      window.addEventListener('resize', this.init);
      this.init();
    },
  };
  </script>
  