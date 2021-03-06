import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="hero" role="banner">
      <div className="container">
        <div className="row ">
          <div className="col-md-5 col-xs-12">
            <h2 style={{ paddingTop: '1em' }}>Espace entreprise</h2>
            <h4 style={{ paddingTop: '1em', paddingBottom: '1em', color: 'grey' }}>Recrutez un collaborateur avec les compétences qu'il vous faut !
            </h4>

            <img alt="espace entreprise" width="100%" src="https://l.traitdunion.grandest.fr/candidats/images/deal_handshakes.svg"/>

            <div style={{ paddingTop: '1em', paddingBottom: '1em' }}>
              <Link to="/entreprises" className="button large btn-xl"
                    style={{
                      width: '100%',
                      display: 'inline-block',
                      textDecoration: 'none',
                      backgroundColor: '#0053B3',
                      color: 'white',
                      cursor: 'pointer',
                      fontFamily: 'Helvetica,Arial,sans-serif',
                      fontSize: '24px',
                      lineHeight: '60px',
                      textAlign: 'center',
                      margin: 0,
                      height: '60px',
                      padding: '0px 40px',
                      borderRadius: '6px',
                      maxWidth: '100%',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      fontWeight: 'bold',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale'
                    }}>
                <i className="fas fa-building"/> POSTEZ UNE OFFRE DE STAGE
              </Link>
            </div>
          </div>
          <div className="col-md-2 col-xs-1"></div>
          <div className="col-md-5  col-xs-12" style={{ marginLeft: '0px' }}>
            <h2 style={{ paddingTop: '1em' }}>Espace candidat</h2>
            <h4 style={{ paddingTop: '1em', paddingBottom: '1em', color: 'grey' }}>Trouvez un emploi grâce à une formation qualifiante.
            </h4>
            <center>
              <img alt="espace candidats" width="64.4%" src="https://l.traitdunion.grandest.fr/candidats/images/decide.svg"/>
            </center>
            <div style={{ paddingTop: '1em', paddingBottom: '1em' }}>
              <Link to="/candidats" className="button large btn-xl" style={{
                width: '100%',
                display: 'inline-block',
                textDecoration: 'none',
                backgroundColor: '#0053B3',
                color: 'white',
                cursor: 'pointer',
                fontFamily: 'Helvetica,Arial,sans-serif',
                fontSize: '24px',
                lineHeight: '60px',
                textAlign: 'center',
                margin: 0,
                height: '60px',
                padding: '0px 40px',
                borderRadius: '6px',
                maxWidth: '100%',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                fontWeight: 'bold',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale'
              }}>
                <i className="fas fa-user"/> RENCONTREZ UNE ENTREPRISE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
