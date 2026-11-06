/* 서비스 유형 요금 카드 — 카드 아래쪽에서 피어오르는 불꽃(WebGL 프래그먼트 셰이더) */
(function () {
  'use strict';

  var cards = document.querySelectorAll('#pricing .plan');
  if (!cards.length) return;

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  var VERT = 'attribute vec2 aPos;void main(){gl_Position=vec4(aPos,0.0,1.0);}';

  var FRAG = [
    'precision highp float;',
    'uniform vec2 uRes;',
    'uniform float uTime;',
    'uniform vec3 uColor;',
    'uniform float uPower;',
    'uniform float uHeight;',
    'uniform float uRise;',
    'uniform float uIntro;',
    'uniform float uSeed;',
    'const float SCALE = 4.0;',
    'const float EFFECT_RADIUS = 0.9;',
    'const float EFFECT_BOOST = 0.5;',
    'const float NOISE_SCALE = 1.5;',
    'const float WIDTH_FACTOR = 1.5;',
    'const float WAVE_AMOUNT = 0.15;',
    'const float BRANCH_INTENSITY = 2.0;',
    'const float BLOOM = 0.8;',
    'const float GRAIN = 0.25;',
    'const float FADE = 0.6;',
    'const vec3 BG = vec3(0.059, 0.059, 0.063);',
    'float hash(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}',
    'float noise(vec2 p){vec2 i=floor(p);vec2 f=fract(p);vec2 u=f*f*(3.0-2.0*f);',
    '  return mix(mix(hash(i),hash(i+vec2(1.0,0.0)),u.x),mix(hash(i+vec2(0.0,1.0)),hash(i+vec2(1.0,1.0)),u.x),u.y);}',
    'float fbm(vec2 p){float v=0.0;float a=0.5;mat2 m=mat2(1.6,1.2,-1.2,1.6);',
    '  for(int i=0;i<5;i++){v+=a*noise(p);p=m*p;a*=0.5;}return v;}',
    'void main(){',
    '  vec2 uv=gl_FragCoord.xy/uRes;',
    '  float aspect=uRes.x/uRes.y;',
    '  vec2 p=vec2((uv.x-0.5)*aspect,uv.y);',
    '  float t=uTime*0.5+uSeed;',
    '  float h=uHeight*(0.35+0.65*uIntro)*(1.0+0.22*uRise);',
    '  float y=p.y/max(h,0.001);',
    '  float sway=sin(p.y*5.0-t*1.7)*WAVE_AMOUNT*p.y+sin(t*0.6)*0.05*p.y;',
    '  vec2 q=vec2((p.x+sway)*NOISE_SCALE,p.y*NOISE_SCALE-t*1.1);',
    '  float n=fbm(q*SCALE*0.5);',
    '  float n2=fbm(q*SCALE*0.5+vec2(n*1.8,-t*0.4)+uSeed);',
    '  float ridge=1.0-abs(noise(vec2((p.x+sway)*3.2,p.y*2.2-t*1.4)+n)*2.0-1.0);',
    '  float branch=pow(ridge,BRANCH_INTENSITY*2.0);',
    '  float halfW=0.36*WIDTH_FACTOR*EFFECT_RADIUS*min(aspect,1.4)*(1.0-0.55*clamp(y,0.0,1.0));',
    '  float dx=abs(p.x+sway+(n2-0.5)*0.55*p.y);',
    '  float body=1.0-smoothstep(0.0,halfW,dx);',
    '  float tip=1.0-smoothstep(0.15,1.0,y+(n-0.5)*0.55);',
    '  float shape=body*tip;',
    '  float flame=shape*(0.55+0.9*n2)+branch*shape*0.35;',
    '  flame*=uPower*(1.0+EFFECT_BOOST*0.5+0.18*uRise);',
    '  flame=max(flame,0.0);',
    '  float glow=(1.0-smoothstep(0.0,halfW*2.2,dx))*(1.0-smoothstep(0.0,1.5,y))*0.42*uPower;',
    '  vec3 col=uColor*(flame*1.9+glow);',
    '  col+=mix(uColor,vec3(1.0),0.35)*pow(clamp(flame,0.0,1.4),3.0)*BLOOM*0.5;',
    '  col=vec3(1.0)-exp(-col*1.5);',
    '  float fade=pow(1.0-smoothstep(0.04,0.04+FADE,uv.y),1.15);',
    '  col*=fade*uIntro;',
    '  col+=(hash(gl_FragCoord.xy+fract(uTime)*91.7)-0.5)*GRAIN*0.09*(0.25+fade);',
    '  gl_FragColor=vec4(BG+max(col,0.0),1.0);',
    '}'
  ].join('\n');

  function hexToRgb(hex) {
    var v = parseInt(hex.replace('#', ''), 16);
    return [((v >> 16) & 255) / 255, ((v >> 8) & 255) / 255, (v & 255) / 255];
  }

  function compile(gl, type, src) {
    var s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      gl.deleteShader(s);
      return null;
    }
    return s;
  }

  function createFlame(card, index) {
    var best = card.classList.contains('plan--best');
    var canvas = document.createElement('canvas');
    canvas.className = 'plan__flame';
    canvas.setAttribute('aria-hidden', 'true');
    card.insertBefore(canvas, card.firstChild);

    var gl = canvas.getContext('webgl', { antialias: false, alpha: false, premultipliedAlpha: false, powerPreference: 'low-power' });
    if (!gl) { canvas.remove(); return null; }

    var vs = compile(gl, gl.VERTEX_SHADER, VERT);
    var fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) { canvas.remove(); return null; }
    var prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) { canvas.remove(); return null; }
    gl.useProgram(prog);

    var buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    var aPos = gl.getAttribLocation(prog, 'aPos');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    var u = {};
    ['uRes', 'uTime', 'uColor', 'uPower', 'uHeight', 'uRise', 'uIntro', 'uSeed'].forEach(function (k) {
      u[k] = gl.getUniformLocation(prog, k);
    });
    var rgb = hexToRgb(best ? '#5227FF' : '#56628f');
    gl.uniform3f(u.uColor, rgb[0], rgb[1], rgb[2]);
    gl.uniform1f(u.uPower, best ? 1.0 : 0.55);
    gl.uniform1f(u.uHeight, best ? 0.7 : 0.52);
    gl.uniform1f(u.uSeed, index * 17.3);

    card.classList.add('is-gl');

    var state = {
      card: card, canvas: canvas, gl: gl, u: u,
      visible: false, introStart: -1, intro: reduceMotion ? 1 : 0,
      rise: 0, riseTarget: 0, time: 0, last: 0, raf: 0
    };

    function resize() {
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      var w = Math.max(1, Math.round(card.clientWidth * dpr));
      var h = Math.max(1, Math.round(card.clientHeight * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
      if (reduceMotion || !state.raf) draw();
    }

    function draw() {
      gl.uniform2f(u.uRes, canvas.width, canvas.height);
      gl.uniform1f(u.uTime, reduceMotion ? 4.0 : state.time);
      gl.uniform1f(u.uRise, state.rise);
      gl.uniform1f(u.uIntro, state.intro);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }

    function frame(now) {
      state.raf = 0;
      if (!state.visible || document.hidden) return;
      var dt = state.last ? Math.min((now - state.last) / 1000, 0.1) : 0;
      state.last = now;
      state.time += dt;
      if (state.introStart < 0) state.introStart = now;
      var k = Math.min((now - state.introStart) / 1600, 1);
      state.intro = 1 - Math.pow(1 - k, 3);
      state.rise += (state.riseTarget - state.rise) * Math.min(dt * 5, 1);
      draw();
      state.raf = requestAnimationFrame(frame);
    }

    state.start = function () {
      if (reduceMotion || state.raf || !state.visible || document.hidden) return;
      state.last = 0;
      state.raf = requestAnimationFrame(frame);
    };
    state.stop = function () {
      if (state.raf) cancelAnimationFrame(state.raf);
      state.raf = 0;
    };

    canvas.addEventListener('webglcontextlost', function (e) {
      e.preventDefault();
      state.stop();
      card.classList.remove('is-gl');
    });

    if ('ResizeObserver' in window) {
      new ResizeObserver(resize).observe(card);
    } else {
      window.addEventListener('resize', resize);
    }
    resize();

    if (!reduceMotion && finePointer) {
      card.addEventListener('pointermove', function (e) {
        var r = card.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = 'perspective(1000px) rotateX(' + (-y * 16).toFixed(2) + 'deg) rotateY(' + (x * 16).toFixed(2) + 'deg)';
      });
      card.addEventListener('pointerenter', function () { state.riseTarget = 1; });
      card.addEventListener('pointerleave', function () {
        state.riseTarget = 0;
        card.style.transform = '';
      });
    }

    return state;
  }

  var flames = [];
  Array.prototype.forEach.call(cards, function (card, i) {
    var f = createFlame(card, i);
    if (f) flames.push(f);
  });
  if (!flames.length) return;

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        flames.forEach(function (f) {
          if (f.card !== entry.target) return;
          f.visible = entry.isIntersecting;
          if (f.visible) f.start(); else f.stop();
        });
      });
    }, { threshold: 0.05 });
    flames.forEach(function (f) { io.observe(f.card); });
  } else {
    flames.forEach(function (f) { f.visible = true; f.start(); });
  }

  document.addEventListener('visibilitychange', function () {
    flames.forEach(function (f) { if (document.hidden) f.stop(); else f.start(); });
  });
})();
