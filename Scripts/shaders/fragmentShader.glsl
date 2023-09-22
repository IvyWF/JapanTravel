uniform sampler2D uTexture;
varying vec2 vUv;

void main() {
    vec4 imageView = texture2D(uTexture, vUv);

    gl_FragColor = imageView;
}