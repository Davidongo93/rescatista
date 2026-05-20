import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebook,
  faYoutube,
  faTiktok,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import styles from './Social.module.css';

const Social = () => {
  const links = [
    {
      icon: faInstagram,
      href: 'https://www.instagram.com/judasgaleano/?hl=es',
      label: 'Instagram',
    },
    {
      icon: faFacebook,
      href: 'https://www.facebook.com/judas.a.galeano',
      label: 'Facebook',
    },
    {
      icon: faYoutube,
      href: 'https://www.youtube.com/channel/UCicAuv0Aylu-BldY8OAkB3A',
      label: 'YouTube',
    },
    {
      icon: faTiktok,
      href: 'https://www.tiktok.com/@judasgaleano',
      label: 'TikTok',
    },
    {
      icon: faWhatsapp,
      href: 'https://wa.me/573003485579',
      label: 'WhatsApp',
    },
  ];

  return (
    <div className={styles.socialContainer}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.customIconLink}
          title={link.label}
        >
          <FontAwesomeIcon icon={link.icon} className={styles.customIcon} />
        </a>
      ))}
    </div>
  );
};

export default Social;
