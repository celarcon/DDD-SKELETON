import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import esJSON from './translations/es/global.json'
import enJSON from './translations/en/global.json'

i18n.use(initReactI18next).init({
	interpolation: {
		escapeValue: false,
	},
	lng: 'es',
	resources: {
		es: { global: esJSON },
		en: { global: enJSON },
	},
})

export default i18n
