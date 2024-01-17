import { useTranslation } from 'react-i18next'
import { EnFlagIcon, EsFlagIcon } from './../icons/flags'
import {
	LANGUAJE,
	ENGLISH_EN,
	SPANISH_ES,
} from '../i18n/translations/constants/Translates'

const changeLenguage = {
	es: ENGLISH_EN,
	en: SPANISH_ES,
}
export const TranslationButton = () => {
	const [t, it8n] = useTranslation('global')
	const changeLanguage = () => {
		it8n.changeLanguage(changeLenguage[it8n.language])
	}

	return (
		<div>
			<button className='tranlation-button' onClick={changeLanguage}>
				{t(LANGUAJE)}
				{it8n.language == ENGLISH_EN ? <EnFlagIcon /> : <EsFlagIcon />}
			</button>
		</div>
	)
}
