import '@fortawesome/fontawesome-free/css/all.css'; 

const Social = () => {
  return (
    <div className="socialContainer">
      <a
        href="https://www.instagram.com/judasgaleano/?hl=es"
        target="_blank"
        rel="noopener noreferrer"
        className="customIconLink"
      >
        <i className="fab fa-instagram customIcon"></i> {/* Icono de Instagram */}
      </a>
      <a
        href="https://www.facebook.com/judas.a.galeano"
        target="_blank"
        rel="noopener noreferrer"
        className="customIconLink"
      >
        <i className="fab fa-facebook customIcon"></i> {/* Icono de Facebook */}
      </a>
      <a
        href="https://www.youtube.com/channel/UCicAuv0Aylu-BldY8OAkB3A"
        target="_blank"
        rel="noopener noreferrer"
        className="customIconLink"
      >
        <i className="fab fa-youtube customIcon"></i> {/* Icono de YouTube */}
      </a>
      <a
        href="https://www.tiktok.com/@judasgaleano"
        target="_blank"
        rel="noopener noreferrer"
        className="customIconLink"
      >
        <i className="fab fa-tiktok customIcon"></i> {/* Icono de TikTok */}
      </a>
      <a
        href="https://wa.me/573003485579"
        target="_blank"
        rel="noopener noreferrer"
        className="customIconLink"
      >
        <i className="fab fa-whatsapp customIcon"></i> {/* Icono de WhatsApp */}
      </a>
    </div>
  );
};

export default Social;
