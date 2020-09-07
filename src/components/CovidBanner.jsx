/** @jsx jsx */
import {jsx} from 'theme-ui'

const CovidBanner = () => {
  return (
    <div
      sx={{
        backgroundColor: 'rgb(253, 236, 234)',
        color: 'rgb(97, 26, 21)',
        display: 'flex',
        justifyContent: 'center',
        px: 25,
        py: 15,
        boxShadow:
          '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
      }}
    >
      <p sx={{my: 0, maxWidth: 1000}}>
        Important: Suite au contexte actuel du <b>COVID 19</b> la
        deuxi&egrave;me edition du Symposium & Cadaver Workshop WUALIB sera{' '}
        <b>postpos&eacute;e dans le courant du mois d'avril</b>. La date
        pr&eacute;cise sera communiqu&eacute;e sur le site en fonction de
        l'&eacute;volution de la situation.
      </p>
    </div>
  )
}

export default CovidBanner
