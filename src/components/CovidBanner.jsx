/** @jsx jsx */
import {jsx} from 'theme-ui'

const CovidBanner = () => {
  return (
    <div
      sx={{
        backgroundColor: 'rgb(253, 236, 234)',
        bg: 'primary',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        px: 25,
        py: 15,
        boxShadow:
          '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
      }}
    >
      <p sx={{my: 0, maxWidth: 800, fontSize: 15}}>
        Suite à la pandémie COVID19 et aux mesures fédérales en cours, le
        workshop du WUALIB sera reporté ultérieurement. Les inscriptions sont
        possibles, nous vous tiendrons informé des dates choisies pour
        l'événement.
      </p>
    </div>
  )
}

export default CovidBanner
