/** @jsx jsx */
import {jsx} from 'theme-ui'
import Img from 'gatsby-image'
import {Helmet} from 'react-helmet'
import {graphql} from 'gatsby'
import CovidBanner from '../components/CovidBanner'
import 'normalize.css'

const HomePage = ({data}) => {
  const currentYear = new Date().getFullYear()
  return (
    <div
      sx={{
        fontSize: 16,
        fontFamily: `-apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial, sans-serif`,
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>WUALIB</title>
        <link rel="canonical" href="https://wualib.be" />
      </Helmet>
      <CovidBanner />
      <h1
        sx={{
          pt: ['3rem', '4rem'],
          textAlign: 'center',
          py: '2rem',
          fontSize: [30, 40],
          fontWeight: 700,
          maxWidth: 250,
          mx: 'auto',
        }}
      >
        <Img fluid={data.logo.childImageSharp.fluid} alt="WUALIB" />
      </h1>
      <section
        className="introduction"
        sx={{
          pb: '2rem',
          maxWidth: 800,
          px: '2rem',
          mx: 'auto',
          lineHeight: 1.5,
        }}
      >
        <h2
          sx={{
            textAlign: ['left', 'center'],
            fontSize: [21, 28],
            mb: '2.5rem',
          }}
        >
          Bienvenue sur le site du WUALIB, dédié au Workshop Interventionnel
          d’Algologie ULB
        </h2>
        <p>
          L’organisation de ce workshop spécialisé dans le domaine de
          l’algologie, à Bruxelles, veut répondre à une demande de
          perfectionnement en connaissances et actes techniques intéressant les
          patients souffrant de douleur chronique.
        </p>
        <p>
          La qualité de ces workshop, organisés par le WUALIB, réside dans le
          choix des sujets traités au cours des sessions théoriques du
          symposium, par des orateurs de qualité. A cela s'ajoute ce qui est
          proposé à travers les points d’intérêts au cours des sessions
          pratiques. Celles-ci sont sous repérage échographique et sous guidage
          fluoroscopique.
        </p>
        <p>
          L’ensemble du programme proposé permet de consolider des bases dans
          les connaissances en algologie, de présenter les actualités
          spécifiques des sujets et permettra un temps pratique d’apprentissage
          adapté pour poursuivre ces actes techniques dans les centres et
          cliniques de chaque participant.
        </p>
        <p
          sx={{
            fontWeight: 600,
            fontSize: 20,
            mt: 60,
            textAlign: 'center',
          }}
        >
          Pour vous inscrire:{' '}
          <a href="https://wualib.typeform.com/to/R2ZuoO">Cliquez ici</a>
        </p>
      </section>
      <section
        className="affiches"
        sx={{
          maxWidth: 800,
          px: [0, '2rem'],
          mx: 'auto',
        }}
      >
        <Img fluid={data.affiche.childImageSharp.fluid} alt="" />
        {/* <Img
          sx={{ mt: '3rem' }}
          fluid={data.programme.childImageSharp.fluid}
          alt=""
        /> */}

        <p
          sx={{
            fontWeight: 600,
            fontSize: 20,
            mt: 60,
            mb: 60,
            textAlign: 'center',
          }}
        >
          Pour vous inscrire:{' '}
          <a href="https://wualib.typeform.com/to/R2ZuoO">Cliquez ici</a>
        </p>
      </section>
      <footer
        sx={{
          bg: 'primary',
          color: 'white',
          mt: '3rem',
          py: '1rem',
        }}
      >
        <div
          sx={{
            maxWidth: 800,
            px: '2rem',
            mx: 'auto',
            display: 'flex',
            flexDirection: ['column', 'row'],
            justifyContent: 'space-between',
            a: {
              color: 'white',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
          }}
        >
          <div>
            <h3
              sx={{
                fontWeight: 500,
              }}
            >
              WUALIB
            </h3>
            <ul
              sx={{
                paddingLeft: 0,
                listStyle: 'none',
                li: {
                  mb: '.5rem',
                },
              }}
            >
              <li>Symposium & Cadaver Workshop</li>
              <li>2&egrave;me &eacute;dition</li>
              <li>Bruxelles</li>
              <li>
                <a href="mailto:info@wualib.be">info@wualib.be</a>
              </li>
            </ul>
          </div>
          <div>
            <h3
              sx={{
                fontWeight: 500,
              }}
            >
              Coordonnées d’inscriptions
            </h3>
            <ul
              sx={{
                paddingLeft: 0,
                listStyle: 'none',
                li: {
                  mb: '.5rem',
                },
              }}
            >
              <li>
                <a href="https://asbab.typeform.com/to/R2ZuoO">
                  Formulaire d'inscription
                </a>
              </li>
              <li>
                <a href="mailto:inscription@wualib.be">inscription@wualib.be</a>
              </li>
              <li>
                <a href="tel:+3225353593">+32 2 535 35 93</a>
              </li>
            </ul>
          </div>
        </div>
        <div
          sx={{
            textAlign: 'center',
            fontSize: 10,
            mt: 30,
          }}
        >
          ©{currentYear} Tous droits reservés - WUALIB
        </div>
      </footer>
    </div>
  )
}

HomePage.propTypes = {}

export default HomePage

export const query = graphql`
  query {
    logo: file(relativePath: {eq: "logo.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    affiche: file(relativePath: {eq: "affiche2020.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    # programme: file(relativePath: { eq: "programme.jpg" }) {
    #   childImageSharp {
    #     fluid(maxWidth: 800) {
    #       ...GatsbyImageSharpFluid_withWebp_tracedSVG
    #     }
    #   }
    # }
  }
`
