import styles from './footer.module.css'
import { FaGithub, FaTwitterSquare, FaLinkedin } from 'react-icons/fa'
import {AiFillMail} from 'react-icons/ai'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div className={styles.foot}>
        <div id={styles.footer}>
          <div id={styles.footer_name}>
            <h2>David Bodunrin</h2>
            <p>&copy; 2022 Built and designed by David Bodunrin</p>
          </div>

          <div id={styles.footer_links}>
            <h3>Links</h3>
            <ul id={styles.links}>
              <li>
                <Link to="/about"> About </Link>
              </li>
              <li>
                <Link to="/blog"> Blog </Link>
              </li>
              <li>
                <a href="/#all_projects"> Projects </a>
              </li>
              <li>
                <a href="/#contact_section"> Contact </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.icons}>
          <h4>Get in touch </h4>
          <div id={styles.social}>
            <a href="https://www.github.com/davieoba">
              <FaGithub
                size={24}
                fill="#fafaff"
                style={{ cursor: 'pointer' }}
              />
            </a>
            <a href="https://www.linkedin.com/in/david-bodunrin-oluwaseun">
              <FaLinkedin
                size={24}
                fill="#fafaff"
                style={{ cursor: 'pointer' }}
              />
            </a>

            <a href="https://www.twitter.com/bodunrindavid">
              <FaTwitterSquare
                size={24}
                fill="#fafaff"
                style={{ cursor: 'pointer' }}
              />
            </a>

            <a href="mailto:bodunrindavidbond@gmail.com">
              <AiFillMail
                size={30}
                fill="#fafaff"
                style={{ cursor: 'pointer' }}
              />
            </a>
          </div>
        </div>
      </div>
      <p className={styles.text}>&copy; David Bodunrin - All Rights reserved</p>
    </footer>
  )
}

export default Footer
