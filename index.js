
function main() {

    drawNumber3()
    drawNumber5()
    drawLetterW()
    drawLetterI()
}

function drawNumber5() {
    const canvas = document.getElementById("canvas_1");
    const gl = canvas.getContext("webgl");

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

    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertshader);
    gl.attachShader(shaderProgram, fragShader);

    gl.linkProgram(shaderProgram);

    gl.useProgram(shaderProgram);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    var vertices = [
        0.25, 0.5, 0.0,
        -0.5, 0.5, 0.0,
        -0.5, 0.0, 0.0,
        0.25, 0.0, 0.0,
        0.25, -0.5, 0.0,
        -0.5, -0.5, 0.0
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
    const canvas = document.getElementById("canvas_2");
    const gl = canvas.getContext("webgl");

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

    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertshader);
    gl.attachShader(shaderProgram, fragShader);

    gl.linkProgram(shaderProgram);

    gl.useProgram(shaderProgram);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    var vertices = [
        -0.25, 0.5, 0.0,
        0.5, 0.5, 0.0,
        0.5, 0.0, 0.0,
        -0.25, 0.0, 0.0,
        0.5, 0.0, 0.0,
        0.5, -0.5, 0.0,
        -0.25, -0.5, 0.0,
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
    const canvas = document.getElementById("canvas_3");
    const gl = canvas.getContext("webgl");

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

    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertshader);
    gl.attachShader(shaderProgram, fragShader);

    gl.linkProgram(shaderProgram);

    gl.useProgram(shaderProgram);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    var vertices = [
        0.0, 0.0, 0.0,
        -0.5, 0.5, 0.0,
        -0.3, -0.4, 0.0,
        0.0, -0.2, 0.0,
        0.3, -0.4, 0.0,
        0.5, 0.5, 0.0,
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
    const canvas = document.getElementById("canvas_4");
    const gl = canvas.getContext("webgl");

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

    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertshader);
    gl.attachShader(shaderProgram, fragShader);

    gl.linkProgram(shaderProgram);

    gl.useProgram(shaderProgram);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    var vertices = [
        -0.1, 0.4, 0.0,
        0.1, 0.4, 0.0,
        0.1, -0.4, 0.0,
        -0.1, -0.4, 0.0
    ]

    var vertex_buffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 0.0, 0.0);

    gl.enableVertexAttribArray(aPosition)
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
}