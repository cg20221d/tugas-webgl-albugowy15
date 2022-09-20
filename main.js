var canvas, gl, shaderProgram;

function main() {
    canvas = document.getElementById("glcanvas");
    gl = canvas.getContext("webgl");

    var vertCode = `
    attribute vec4 aPosition;

    void main() {
        gl_Position = aPosition;
        gl_PointSize = 10.0;
    }
    `
    var fragCode = `
    void main(){
        gl_FragColor = vec4(0.0, 1.0, 1.0, 1.0);    
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
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);


    drawNumber5()
    drawNumber3()
    drawLetterW()
    drawLetterI()
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

    var vertex_buffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 0.0, 0.0);

    gl.enableVertexAttribArray(aPosition)
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