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
]

export const PRODUCTS = [
  {
    id: '10000080001',
    title: 'Conjunto Infantil Menino Kyly',
    brand: 'Kyly',
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
    variants: [
      {
        id: '10000080001',
        name: 'Astro Boy',
        thumb: '/products/astro-boy/image01.jpg',
      },
      {
        id: '10000080002',
        name: 'Dog Fun',
        thumb: '/products/dog-fun/image01.jpg',
      },
      {
        id: '10000080003',
        name: 'Fast Boy',
        thumb: '/products/fast-boy/image01.jpg',
      },
    ],
  },
  {
    id: '10000080002',
    title: 'Conjunto Infantil Menino Kyly',
    brand: 'Kyly',
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
    variants: [
      {
        id: '10000080001',
        name: 'Astro Boy',
        thumb: '/products/astro-boy/image01.jpg',
      },
      {
        id: '10000080002',
        name: 'Dog Fun',
        thumb: '/products/dog-fun/image01.jpg',
      },
      {
        id: '10000080003',
        name: 'Fast Boy',
        thumb: '/products/fast-boy/image01.jpg',
      },
    ],
  },
  {
    id: '10000080003',
    title: 'Conjunto Infantil Menino Kyly',
    brand: 'Kyly',
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
      'Estampa frontal com carro F1',
      'Calça de moletom com elástico ajustável',
      'Tecido leve e respirável',
      'Ideal para brincadeiras ao ar livre',
      'Costura reforçada',
      'Proteção UV no tecido',
    ],
    variants: [
      {
        id: '10000080001',
        name: 'Astro Boy',
        thumb: '/products/astro-boy/image01.jpg',
      },
      {
        id: '10000080002',
        name: 'Dog Fun',
        thumb: '/products/dog-fun/image01.jpg',
      },
      {
        id: '10000080003',
        name: 'Fast Boy',
        thumb: '/products/fast-boy/image01.jpg',
      },
    ],
  },
  {
    id: '755',
    title:
      'Conjunto Infantil Menina, Blusa Rosa Manga Longa Meia Malha com Estampa de Raposa, Calça Legging Floral Azul Marinho',
    brand: 'Kyly',
    name: 'Flower Fox',
    price: 75.9,
    installments: {
      times: 12,
      value: 6.4,
    },
    sizes: ['1', '2', '3', '4', '6', '8'],
    images: [
      '/products/flower-fox/image01.jpg',
      '/products/flower-fox/image02.jpg',
      '/products/flower-fox/image03.jpg',
      '/products/flower-fox/image04.jpg',
      '/products/flower-fox/image05.jpg',
    ],
    details: [
      'CONJUNTO COMPLETO: Conjunto infantil feminino composto por blusa manga longa rosa e calça legging estampada, ideal para uso diário e conforto',
      'BLUSA ESTILOSA: Confeccionada em meia malha com estampa adorável de raposa e flores, proporcionando visual delicado e charmoso',
      'CALÇA VERSÁTIL: Legging azul marinho com estampa floral em tons de rosa, oferecendo flexibilidade e liberdade de movimento',
      'MATERIAL: Tecidos selecionados que garantem conforto e durabilidade, adequados para o dia a dia das crianças',
      'DESIGN COORDENADO: Combinação harmoniosa de cores e estampas que permite múltiplas combinações no guarda-roupa infantil',
    ],
  },
] as Product[]
