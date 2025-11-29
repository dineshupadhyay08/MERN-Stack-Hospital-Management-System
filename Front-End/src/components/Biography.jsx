import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="aboutImg" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>
          PBM Care is a trusted healthcare institution dedicated to delivering
          compassionate, reliable, and advanced medical services. Our vision is
          to create a place where every patient feels supported, valued, and
          cared for with the highest clinical standards. <br /> For years, PBM
          Care has combined medical expertise with modern technology to ensure
          accurate diagnosis, effective treatment, and a seamless healthcare
          experience. <br /> We believe that great care begins with trust,
          transparency, and a commitment to human well-being.
        </p>

        <p>
          At PBM Care, we don’t just treat illnesses — we build lifelong
          relationships based on empathy, excellence, and integrity. Your health
          will always be our priority, today and every day.
        </p>
      </div>
    </div>
  );
};

export default Biography;
