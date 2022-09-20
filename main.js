function NormalisedToDevice(coord, axisSize) {
    var halfAxisSize = axisSize / 2;
    var deviceCoord = (coord + 1) * halfAxisSize;

    return deviceCoord;
}

function DeviceToNormalised(coord, axisSize) {
    var halfAxisSize = axisSize / 2;
    var normalisedCoord = (coord / halfAxisSize) - 1;

    return normalisedCoord;
}

function main() {
    const canvas = document.getElementById("kanvas");
    const gl = canvas.getContext("webgl");

    if (!gl) {
        alert("Unable to set up WebGL");
        return
    }

    var vertices = [
        -0.5, -0.2, 0.0,
        -0.1, 0.7, 0.0,
        -0.3, -0.3, 0.0,
        0.2, 0.6, 0.0,
        0.7, -0.9, 0.0,
        0.7, 0.9, 0.0,
    ]

    // var indices = [0, 1, 2];

    var vertex_buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    // var index_buffer = gl.createBuffer();
    // gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, index_buffer);
    // gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
    // gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

    var vertCode = `
    attribute vec3 coordinates;
    void main() {
        gl_Position = vec4(coordinates, 1.0);
    }
    `

    var vertshader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertshader, vertCode);
    gl.compileShader(vertshader);

    var fragCode = `
    void main() {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.1);
    }
    `

    var fragShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragShader, fragCode);
    gl.compileShader(fragShader);

    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertshader);
    gl.attachShader(shaderProgram, fragShader);

    gl.linkProgram(shaderProgram);

    gl.useProgram(shaderProgram);
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    // gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, index_buffer);
    var coord = gl.getAttribLocation(shaderProgram, "coordinates");

    gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0.0, 0.0);

    gl.enableVertexAttribArray(coord)

    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    gl.enable(gl.DEPTH_TEST);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.drawArrays(gl.LINE_LOOP, 0, 6);
    // gl.drawArrays(gl.LINES, 0, 6);
    // gl.drawArrays(gl.LINE_STRIP, 0, 6);
    // gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0)
}