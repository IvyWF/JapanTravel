uniform sampler2D uTexture;
// uniform float uAlpha;
// uniform vec2 uOffset;
varying vec2 vUv;

// vec2 scaleUV(vec2 uv, float scale) {
//     float center = 0.5;
//     return ((uv-center) * scale) + center;
// }

// vec3 rgbShift(sampler2D textureimage, vec2 uv, vec2 offset) {
//     float r = texture2D(textureimage, uv + offset).r;
//     vec2 gb = texture2D(textureimage, uv).gb;
//     return vec3(r, gb); 
// }

void main() {
    //vec4 imageView = texture2D(uTexture, vUv);

    //gl_FragColor = imageView;
    //gl_FragColor = vec4(uTexture, vUv);
    gl_FragColor = vec4(vUv, 0., 1.);
}