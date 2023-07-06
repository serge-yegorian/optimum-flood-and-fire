import './Hero.scss'
function Hero() {
  return (
    <section className="hero">
      <div className="hero__disaster">
        <h2 className="hero__heading">🔥 Fire</h2>
        <p className="hero__description">
          When fire strikes, our dedicated experts guide you through the process
          of comprehensive fire restoration with precision and care. Assessing
          the extent of damage, salvaging what can be saved, and efficiently
          removing debris, we bring extensive knowledge and expertise to the
          table.<br/><br/>

          Our team diligently tackles smoke and soot damage, ensuring
          every surface is restored. With skilled craftsmanship, we repair and
          rebuild affected areas, seamlessly integrating new elements with the
          existing structure. From start to finish, we are committed to renewing
          your home, offering solace and renewal after a fire.
        </p>
        <div className="hero__images">
          <div className="hero__image-div">
            <img className="hero__image" src={require("../square.jpeg")} alt="burned house before we fixed it"/>
            <p className="hero__status">😨 Before</p>
          </div>
          <div className="hero__image-div">
            <img className="hero__image" src={require("../square.jpeg")} alt="burned house after we fixed it"/>
            <p className="hero__status">✅ After</p>
          </div>
        </div>
      </div>
      <div className="hero__disaster">
        <h2 className="hero__heading">💧 Flood</h2>
        <p className="hero__description">
          In the aftermath of a flood, our experienced team works diligently to
          restore your home to its pre-disaster condition with unwavering
          professionalism. Armed with advanced techniques and cutting-edge
          equipment, we swiftly extract water, thoroughly dry affected areas,
          and prevent further damage.<br/><br/>

          Our meticulous approach ensures
          comprehensive restoration, including structural integrity repairs,
          material replacements, and effective mitigation against mold or
          mildew. Trust us to navigate the complexities of flood restoration,
          providing you with peace of mind and a beautifully revived home.
        </p>
        <div className="hero__images">
          <div className="hero__image-div">
            <img className="hero__image" src={require("../square.jpeg")} alt="flooded house before we fixed it"/>
            <p className="hero__status">😨 Before</p>
          </div>
          <div className="hero__image-div">
            <img className="hero__image" src={require("../square.jpeg")} alt="flooded house after we fixed it"/>
            <p className="hero__status">✅ After</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
