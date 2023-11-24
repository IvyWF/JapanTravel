uniform sampler2D uTexture;
uniform float uAlpha;
uniform vec2 uOffset;
varying vec2 vUv;

vec3 rgbShift(sampler2D textureimage, vec2 uv, vec2 offset) {
    float r = texture2D(textureimage, uv + offset).r;
    vec2 gb = texture2D(textureimage, uv).gb;
    return vec3(r, gb);
}

void main() {
    // vec3 color = texture2D(uTexture, vUv).rgb;
    vec3 color = rgbShift(uTexture, vUv, uOffset);
    gl_FragColor = vec4(color, uAlpha);
}

// void main() {
//     vec4 imageView = texture2D(uTexture, vUv);

//     gl_FragColor = vec4(imageView);
//     //gl_FragColor = vec4(vUv, 0., 1.);
// }

// varying float vNoise;
// varying vec2 vUv;
// uniform sampler2D beachTexture;
// uniform float time;

// void main() {
//     // vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);
//     // vec3 color1 = vec3(1., 0., 0.);
//     // vec3 color2 = vec3(1., 1., 1.);
//     // vec3 finalColor = mix(color1, color2, 0.5 * (vNoise + 1.));

//     // vec2 newUV = vUv;

//     // newUV = vec2(newUV.x, newUV.y + 0.01 * sin(newUV.x * 10. + time));
//     //vec4 beachView = texture2D(beachTexture, vUv);

//     //gl_FragColor = vec4(finalColor, 1.);
//     gl_FragColor = vec4(vUv, 0., 1.);
//     //gl_FragColor = beachView;
//     //gl_FragColor = vec4(vNoise);
// }