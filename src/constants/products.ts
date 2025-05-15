import { type Product } from '@/types/products'

export const products = [
  {
    id: '10000080001',
    title: 'Conjunto Infantil Menino Kyly',
    variants: [
      {
        id: 'astro-boy',
        name: 'Astro Boy',
        price: 129,
        installments: {
          times: 12,
          value: 6.19,
        },
        sizes: ['P', 'M', 'G', 'GG'],
        images: [
          '/products/astro-boy/image01.jpg',
          '/products/astro-boy/image02.jpg',
          '/products/astro-boy/image03.jpg',
          '/products/astro-boy/image04.jpg',
          '/products/astro-boy/image05.jpg',
        ],
        details: [
          'Blusa com estampa espacial',
          'Calça de moletom confortável',
          'Tecido 100% algodão',
          'Ideal para dias frios',
          'Lavável na máquina',
          'Não desbota facilmente',
        ],
      },
      {
        id: 'dog-fun',
        name: 'Dog Fun',
        price: 115,
        installments: {
          times: 12,
          value: 5.52,
        },
        sizes: ['P', 'M', 'G'],
        images: [
          '/products/dog-fun/image01.jpg',
          '/products/dog-fun/image02.jpg',
          '/products/dog-fun/image03.jpg',
          '/products/dog-fun/image04.jpg',
          '/products/dog-fun/image05.jpg',
        ],
        details: [
          'Camiseta com bolso de urso',
          'Bermuda jeans flexível',
          'Fechamento com botão',
          'Ideal para passeios',
          'Alta durabilidade',
          'Toque macio',
        ],
      },
      {
        id: 'fast-boy',
        name: 'Fast Boy',
        price: 149,
        installments: {
          times: 12,
          value: 7.19,
        },
        sizes: ['M', 'G', 'GG'],
        images: [
          '/products/fast-boy/image01.jpg',
          '/products/fast-boy/image02.jpg',
          '/products/fast-boy/image03.jpg',
          '/products/fast-boy/image04.jpg',
          '/products/fast-boy/image05.jpg',
        ],
        details: [
          'Estampa frontal de cachorro',
          'Shorts com elástico ajustável',
          'Tecido leve e respirável',
          'Ideal para brincadeiras ao ar livre',
          'Costura reforçada',
          'Proteção UV no tecido',
        ],
      },
    ],
  },
] as Product[]
