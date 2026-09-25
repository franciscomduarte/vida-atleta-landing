"""Gera texturas próprias de reflexos de luz na água (cáusticas), sem foto de terceiros.
Tileáveis (FFT é periódica) e com canal alfa: linhas claras sobre transparente.
Saída: site/assets/img/caustics-light.webp (linhas azul-claro, para fundos escuros)
       site/assets/img/caustics-ink.webp   (linhas royal, para fundos claros)
"""
import numpy as np
from PIL import Image

N = 512
rng = np.random.default_rng(20260925)


def field(seed, low, high):
    r = np.random.default_rng(seed)
    w = r.standard_normal((N, N))
    F = np.fft.fft2(w)
    fy = np.fft.fftfreq(N)[:, None]
    fx = np.fft.fftfreq(N)[None, :]
    k = np.sqrt(fx**2 + fy**2)
    band = np.exp(-((k - (low + high) / 2) ** 2) / (2 * ((high - low) / 3) ** 2))
    f = np.real(np.fft.ifft2(F * band))
    f -= f.min(); f /= f.max()
    return f


# duas camadas de "ondas" combinadas e transformadas em cristas (rede de cáusticas)
a = field(1, 0.010, 0.035)
b = field(2, 0.018, 0.050)
h = 0.6 * a + 0.4 * b
ridge = 1.0 - np.abs(2.0 * h - 1.0)          # 0..1, cristas em 1
ridge = np.clip((ridge - 0.80) / 0.20, 0, 1) ** 1.5   # só as linhas mais brilhantes
ridge = np.array(Image.fromarray((ridge * 255).astype('uint8')).filter(__import__('PIL.ImageFilter', fromlist=['x']).GaussianBlur(0.9)))
alpha = ridge.astype('float32') / 255.0


def save(rgb, name, gain):
    img = np.zeros((N, N, 4), dtype='uint8')
    img[..., 0], img[..., 1], img[..., 2] = rgb
    img[..., 3] = np.clip(alpha * gain * 255, 0, 255).astype('uint8')
    Image.fromarray(img, 'RGBA').save(f'site/assets/img/{name}', quality=55, method=6)
    print(name)


save((150, 226, 255), 'caustics-light.webp', 0.95)
save((3, 79, 207), 'caustics-ink.webp', 0.9)
