const PriceTier = () => {
  return (
    <section className="priceTier light-colored-background">
      <div className="priceTier--title font_h2_headline dark-colored-text">
        Choose a Tier that’s right for you
      </div>
      <div className="priceTier--cards">
        {/* Basic Tier which is free */}
        <div className="priceTier--card priceTier--cards-Basic dark-colored-text">
          <div className="borderTop-basic"></div>
          <div className="priceTier--card-title">
            <p className="priceTier--card-title-content font_h3_headline">
              Basic
            </p>
            <p className="priceTier--card-title-content font_h1_headline_bold">
              FREE
            </p>
          </div>
          <div className="priceTier--card-content font_main_regular">
            <ul className="priceTier--card-content-list">
              <li className="dark-colored-text">1 Seat Available</li>
              <li className="unavailable">Access to Wifi Router</li>
              <li className="unavailable">Free Food & Coffee</li>
            </ul>
          </div>
          <button className="priceTier--card-button font_h5_headline">
            TRY NOW
          </button>
        </div>

        {/* Standard Tier which is 10/month */}
        <div className="priceTier--card priceTier--cards-standard">
          <div className="borderTop-standard"></div>
          <div className="priceTier--card-title  primary-colored-text">
            <p className="priceTier--card-title-content font_h3_headline">
              Standard
            </p>
            <div className="priceTier--card-title-price">
              <p className="priceTier--cards-number font_h1_headline_regular">
                $10
              </p>
              <p className="font_h5_headline">/month</p>
            </div>
          </div>
          <div className="priceTier--card-content font_main_regular">
            <ul className="priceTier--card-content-list">
              <li className="dark-colored-text">1 Seat Available</li>
              <li className="dark-colored-text">Access to Wifi Router</li>
              <li className="unavailable">Free Food & Coffee</li>
            </ul>
          </div>
          <button className="priceTier--card-button font_h5_headline">
            Subscribe
          </button>
        </div>

        {/* Premium Tier which is 25/month */}
        <div className="priceTier--card priceTier--cards-premium">
          <div className="borderTop-premium"></div>
          <div className="priceTier--card-title secondary-colored-text">
            <p className="priceTier--card-title-content font_h3_headline">
              Premium
            </p>
            <div className="priceTier--card-title-price">
              <p className="priceTier--cards-number font_h1_headline_regular">
                $25
              </p>
              <p className="font_h5_headline">/month</p>
            </div>
          </div>
          <div className="priceTier--card-content font_main_regular">
            <ul className="priceTier--card-content-list">
              <li className="dark-colored-text">1 Seat Available</li>
              <li className="dark-colored-text">Access to Wifi Router</li>
              <li className="dark-colored-text">Free Food & Coffee</li>
            </ul>
          </div>
          <button className="priceTier--card-button font_h5_headline">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default PriceTier;
