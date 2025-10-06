import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: ['class'],
    content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			// Metallic Market Inspired Colors
  			'primary-pink': 'var(--color-primary-pink)',
  			'primary-pink-light': 'var(--color-primary-pink-light)',
  			'primary-pink-dark': 'var(--color-primary-pink-dark)',
  			'gray-50': 'var(--color-gray-50)',
  			'gray-100': 'var(--color-gray-100)',
  			'gray-200': 'var(--color-gray-200)',
  			'gray-300': 'var(--color-gray-300)',
  			'gray-400': 'var(--color-gray-400)',
  			'gray-500': 'var(--color-gray-500)',
  			'gray-600': 'var(--color-gray-600)',
  			'gray-700': 'var(--color-gray-700)',
  			'red': 'var(--color-red)',
  			'red-dark': 'var(--color-red-dark)',
  			'green': 'var(--color-green)',
  			'orange': 'var(--color-orange)',
  			'info': 'var(--color-info)',
  			// KC Brand Colors (maintained for compatibility)
  			'kc-blue': '#0066CC',
  			'kc-red': '#CC0000',
  			'love-pink': 'var(--color-primary-pink)',
  			'chiefs-red': '#FF0000',
  			'royals-blue': '#004687'
  		},
  		fontFamily: {
  			sans: [
  				'var(--font-family-sans)',
  				'system-ui',
  				'sans-serif'
  			],
  			serif: [
  				'var(--font-family-serif)',
  				'Georgia',
  				'serif'
  			],
  			script: [
  				'var(--font-family-script)',
  				'cursive'
  			],
  			heading: [
  				'var(--font-family-serif)',
  				'Georgia',
  				'serif'
  			]
  		},
  		fontSize: {
  			'xs': 'var(--font-size-xs)',
  			'sm': 'var(--font-size-sm)',
  			'base': 'var(--font-size-base)',
  			'lg': 'var(--font-size-lg)',
  			'xl': 'var(--font-size-xl)',
  			'2xl': 'var(--font-size-2xl)',
  			'3xl': 'var(--font-size-3xl)',
  			'4xl': 'var(--font-size-4xl)',
  			'5xl': 'var(--font-size-5xl)',
  			'6xl': 'var(--font-size-6xl)'
  		},
  		fontWeight: {
  			light: 'var(--font-weight-light)',
  			normal: 'var(--font-weight-normal)',
  			medium: 'var(--font-weight-medium)',
  			semibold: 'var(--font-weight-semibold)',
  			bold: 'var(--font-weight-bold)',
  			extrabold: 'var(--font-weight-extrabold)',
  			black: 'var(--font-weight-black)'
  		},
  		spacing: {
  			'0': 'var(--space-0)',
  			'1': 'var(--space-1)',
  			'2': 'var(--space-2)',
  			'3': 'var(--space-3)',
  			'4': 'var(--space-4)',
  			'5': 'var(--space-5)',
  			'6': 'var(--space-6)',
  			'8': 'var(--space-8)',
  			'10': 'var(--space-10)',
  			'12': 'var(--space-12)',
  			'16': 'var(--space-16)',
  			'20': 'var(--space-20)',
  			'24': 'var(--space-24)',
  			'32': 'var(--space-32)',
  			'18': '4.5rem',
  			'88': '22rem',
  			'128': '32rem'
  		},
  		borderRadius: {
  			'none': 'var(--radius-none)',
  			'sm': 'var(--radius-sm)',
  			'base': 'var(--radius-base)',
  			'md': 'var(--radius-md)',
  			'lg': 'var(--radius-lg)',
  			'xl': 'var(--radius-xl)',
  			'2xl': 'var(--radius-2xl)',
  			'3xl': 'var(--radius-3xl)',
  			'full': 'var(--radius-full)'
  		},
  		boxShadow: {
  			'sm': 'var(--shadow-sm)',
  			'base': 'var(--shadow-base)',
  			'md': 'var(--shadow-md)',
  			'lg': 'var(--shadow-lg)',
  			'xl': 'var(--shadow-xl)',
  			'2xl': 'var(--shadow-2xl)'
  		},
  		zIndex: {
  			'dropdown': 'var(--z-index-dropdown)',
  			'sticky': 'var(--z-index-sticky)',
  			'fixed': 'var(--z-index-fixed)',
  			'modal-backdrop': 'var(--z-index-modal-backdrop)',
  			'modal': 'var(--z-index-modal)',
  			'popover': 'var(--z-index-popover)',
  			'tooltip': 'var(--z-index-tooltip)',
  			'toast': 'var(--z-index-toast)'
  		},
  		transitionDuration: {
  			'75': 'var(--duration-75)',
  			'100': 'var(--duration-100)',
  			'150': 'var(--duration-150)',
  			'200': 'var(--duration-200)',
  			'300': 'var(--duration-300)',
  			'500': 'var(--duration-500)',
  			'700': 'var(--duration-700)',
  			'1000': 'var(--duration-1000)'
  		},
  		transitionTimingFunction: {
  			'linear': 'var(--ease-linear)',
  			'in': 'var(--ease-in)',
  			'out': 'var(--ease-out)',
  			'in-out': 'var(--ease-in-out)',
  			'bounce': 'var(--ease-bounce)',
  			'elastic': 'var(--ease-elastic)'
  		},
  		animation: {
  			'fade-in': 'fadeIn 0.5s ease-in-out',
  			'slide-up': 'slideUp 0.5s ease-out',
  			'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
  			'heart-pulse': 'heartPulse 1.5s ease-in-out infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		keyframes: {
  			fadeIn: {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			slideUp: {
  				'0%': {
  					transform: 'translateY(20px)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			},
  			bounceGentle: {
  				'0%, 100%': {
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					transform: 'translateY(-10px)'
  				}
  			},
  			heartPulse: {
  				'0%, 100%': {
  					transform: 'scale(1)'
  				},
  				'50%': {
  					transform: 'scale(1.1)'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		}
  	}
  },
  plugins: [],
}
export default config
