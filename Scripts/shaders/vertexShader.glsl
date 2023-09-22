uniform sampler2D uTexture;
uniform vec2 uOffset;
varying vec2 vUv;

float M_PI = 3.141529;

vec3 deformationCurve(vec3 position, vec2 uv, vec2 offset) {
    position.x = position.x + (sin(uv.y * M_PI) * offset.x * 5.);
    position.y = position.y + (sin(uv.x * M_PI) * offset.y * 5.);
    return position;
}

void main() {
    //vUv = uv + (uOffset * 2.);
    vUv = uv;
    vec3 newPosition = position;
    newPosition = deformationCurve(position, uv, uOffset);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}