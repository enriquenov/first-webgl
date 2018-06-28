var vertexShaderText =
[
  'precision mediump float;',
  '',
  'attribute vec2 vertPosition;',
  '',
  'void main()',
  '{',
  '  gl_Position = vec4(vertPosition, 0.0, 1.0);',
  '}'
].join('\n');

var fragmentShaderText =
[
  'precision mediump float;',
  '',
  'void main()',
  '{',
  '  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);',
  '}'
].join('\n');

var InitDemo = function() {
  console.log(vertexShaderText);

  var canvas = document.getElementById('game-surface');
  var gl = canvas.getContext('webgl');

  if (!gl) {
    gl = canvas.getContext('experimental-webgl');
  }

  if (!gl) {
    alert("Your browser does not support WebGL");
  }

  // canvas.width = window.innerWidth;
  // canvas.height = window.innerHeight;
  // gl.viewport(0, 0, window.innerWidth, window.innerHeight);

  gl.clearColor(0.75, 0.85, 0.8, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  var vertexShader = gl.createShader(gl.VERTEX_SHADER);
  var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

  gl.shaderSource(vertexShader, vertexShaderText);
  gl.shaderSource(fragmentShader, fragmentShaderText);

  gl.compileShader(vertexShader);
  gl.compileShader(fragmentShader);
};
