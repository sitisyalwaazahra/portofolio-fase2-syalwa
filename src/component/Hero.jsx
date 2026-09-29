function Hero({ title, subtitle }) {
  return (
    <section className="hero">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <img src="/image/syalwa.jpg" alt="Foto Profil" className="profil-photo" />
    </section>
  );
}

export default Hero;