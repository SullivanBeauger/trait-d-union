import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';



class Footer extends React.Component {
  render() {

    var _mtm = window._mtm = window._mtm || [];
    _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.src='https://piwik.grandest.fr/piwik/js/container_oEm2AfRf.js'; s.parentNode.insertBefore(g,s);
      
    return (
      <div className="footer-bg">
        <div className="footer-widget-wrapper padding-bottom-60 padding-top-80">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-sm-7 col-xs-12">
                <div className="footer-widget footer-shortcut-link">
                  <h4>Qui sommes nous ?</h4>
  
                  <p>
                    Trait d'union est un service qui permet aux demandeurs d'emploi de la Région Grand Est d'essayer pendant quelques jours des métiers qui recrutent et forment à côté de chez eux.
                    Nous proposons par ailleurs aux entreprises qui le souhaitent de faire découvrir leurs métiers pour mieux recruter par la suite.
  
                  </p>
  
                  <p>
                    Trait d'Union est un service créé par la Région Grand-Est compétente en Formation Professionnelle, qui a financé la formation de 49 400 personnes en recherche d'emploi en 2020. Trait d'union est un service qui offre la possibilité de cumuler formation certifiante et immersion en entreprise, renforçant les possibilités de signer un contrat de travail à l'issue.
                  </p>
                </div>
              </div>
              <div className="col-md-1 col-sm-1  col-xs-12 " />
              <div className="col-md-4 col-sm-4  col-xs-12 ">
                <div className="footer-widget footer-shortcut-link">
                  <h4>Liens</h4>
                  <ul>
                  <li><Link smooth to="/candidats#root">Espace candidat</Link></li>
                  <li> <Link smooth to="/entreprises#root">Espace entreprise</Link></li>
                  <li><a target="_blank" rel="noopener noreferrer" href="https://www.grandest.fr">Région Grand Est</a></li>
                    <li>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/traitdunion.beta.gouv.fr/" title="Facebook">
                        <i className="fab fa-facebook-square" style={{fontSize: "4rem",  marginRight:"1rem" }}></i>
                      </a>
                      <a href="https://twitter.com/TraitdunionBeta" title="Twitter" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-twitter-square" style={{fontSize: "4rem", marginRight:"1rem" }}></i>
                      </a>
                      <a href="https://www.linkedin.com/company/trait-d-union-beta/" title="Linkedin" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin" style={{fontSize: "4rem", marginRight:"1rem" }}></i>
                      </a>
                      <a href="mailto:contact@traitdunion.grandest.fr" title="Nous écrire un mail" rel="noopener noreferrer">
                      <i className="fas fa-envelope-square" style={{fontSize: "4rem"}}></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

  

export default Footer
