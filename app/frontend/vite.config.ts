import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig(configEnv => {
	const isDevelopment = configEnv.mode === 'development'

	return {
		plugins: [react()],
		server: {
			port: 3000,
			host: '0.0.0.0',
		},
		preview: {
			port: 3000,
			host: '0.0.0.0',
		},
		define: {
			'process.env': {},
		},
		css: {
			modules: {
				generateScopedName: isDevelopment
					? '[name]__[local]__[hash:base64:5]'
					: '[hash:base64:5]',
			},
		},
	}
})
