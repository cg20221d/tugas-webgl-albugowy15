var canvas, gl, shaderProgram;
var theta = 0.0;
var freeze = false;
var horizontalDelta = 0.0;
var verticalDelta = 0.0;
var horizontalSpeed = 0.0;
var verticalSpeed = 0.0;

function main() {
    canvas = document.getElementById("glcanvas");
    gl = canvas.getContext("webgl");

    var vertCode = `
    attribute vec3 aPosition;
    uniform mat4 uModel;
    varying vec3 vColor;
    void main() {
        gl_Position = uModel * vec4(aPosition, 1.0);
        gl_PointSize = 10.0;
    }
    `
    var fragCode = `
    precision mediump float;
    varying vec3 vColor;
    void main() {
        gl_FragColor = vec4(vColor, 1.0);
    }
    `

    var vertshader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertshader, vertCode);
    gl.compileShader(vertshader);

    var fragShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragShader, fragCode);
    gl.compileShader(fragShader);

    shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertshader);
    gl.attachShader(shaderProgram, fragShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    // var uModel = gl.getUniformLocation(shaderProgram, "uModel");

    var cameraX = 0.0;
    var cameraZ = 5.0

    var view = glMatrix.mat4.create()
    glMatrix.mat4.lookAt(view, [cameraX, 0.0, cameraZ], [cameraX, 0.0, -10], [0.0, 1.0, 0.0])
    var perspective = glMatrix.mat4.create();
    glMatrix.mat4.perspective(perspective, Math.PI / 3, 1.0, 0.5, 10.0)

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    function onMouseClick(event) {
        freeze = !freeze;
    }
    document.addEventListener("click", onMouseClick);
    // Papan ketuk
    function onKeydown(event) {
        if (event.keyCode == 32) freeze = !freeze;  // spasi
        // Gerakan horizontal: a ke kiri, d ke kanan
        if (event.keyCode == 65) {  // a
            horizontalSpeed = -0.01;
        } else if (event.keyCode == 68) {   // d
            horizontalSpeed = 0.01;
        }
        // Gerakan vertikal: w ke atas, s ke bawah
        if (event.keyCode == 87) {  // w
            verticalSpeed = -0.01;
        } else if (event.keyCode == 83) {   // s
            verticalSpeed = 0.01;
        }
    }
    function onKeyup(event) {
        if (event.keyCode == 32) freeze = !freeze;
        if (event.keyCode == 65 || event.keyCode == 68) horizontalSpeed = 0.0;
        if (event.keyCode == 87 || event.keyCode == 83) verticalSpeed = 0.0;
    }
    document.addEventListener("keydown", onKeydown);
    document.addEventListener("keyup", onKeyup);

    function render() {
        gl.enable(gl.DEPTH_TEST);
        gl.clearColor(1.0, 0.65, 0.0, 1.0);  // Oranye
        //            Merah     Hijau   Biru    Transparansi
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        if (!freeze) {
            theta += 0.1;
        }

        drawNumber5()
        drawNumber3()
        drawLetterW()
        drawLetterI()
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}

function drawNumber5() {
    var vertices = [
        -0.25, 0.8, 0.0,
        -0.5, 0.8, 0.0,
        -0.5, 0.5, 0.0,
        -0.25, 0.5, 0.0,
        -0.25, 0.2, 0.0,
        -0.5, 0.2, 0.0
    ]
    var uModel = gl.getUniformLocation(shaderProgram, "uModel");

    var vertex_buffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 0.0, 0.0);

    gl.enableVertexAttribArray(aPosition)

    horizontalDelta += horizontalSpeed;
    verticalDelta -= verticalSpeed;

    horizontalDelta = 0.56;
    verticalDelta -= verticalSpeed;
    var model = glMatrix.mat4.create(); // Membuat matriks identitas
    glMatrix.mat4.translate(
        model, model, [horizontalDelta, verticalDelta, 0.0]
    );
    // glMatrix.mat4.rotateX(
    //     model, model, theta
    // );
    // glMatrix.mat4.rotateY(
    //     model, model, theta
    // );
    // glMatrix.mat4.rotateZ(
    //     model, model, theta
    // );
    gl.uniformMatrix4fv(uModel, false, model);
    gl.drawArrays(gl.LINE_STRIP, 0, 6);
}

function drawNumber3() {

    var vertices = [
        0.25, 0.8, 0.0,
        0.5, 0.8, 0.0,
        0.5, 0.5, 0.0,
        0.25, 0.5, 0.0,
        0.5, 0.5, 0.0,
        0.5, 0.2, 0.0,
        0.25, 0.2, 0.0,
    ]

    var vertex_buffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 0.0, 0.0);

    gl.enableVertexAttribArray(aPosition)
    gl.drawArrays(gl.LINE_STRIP, 0, 7);
}

function drawLetterW() {
    var vertices = [
        -0.5, -0.6, 0.0,
        -0.8, -0.2, 0.0,
        -0.6, -0.8, 0.0,
        -0.5, -0.7, 0.0,
        -0.4, -0.8, 0.0,
        -0.2, -0.2, 0.0,
    ]

    var vertex_buffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 0.0, 0.0);

    gl.enableVertexAttribArray(aPosition)
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 6);
}

function drawLetterI() {
    var vertices = [
        0.4, 0.0, 0.0,
        0.5, 0.0, 0.0,
        0.5, -0.8, 0.0,
        0.4, -0.8, 0.0
    ]

    var vertex_buffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 0.0, 0.0);

    gl.enableVertexAttribArray(aPosition)
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
}