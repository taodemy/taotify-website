const PriceTier = () => {
    return (
        <section className="priceTier light-colored-background">
            <div className="priceTier--Title font_h2_headline dark-colored-text">Choose a Tier that’s right for you</div>
            <div className="priceTier--Cards">
                {/* Basic Tier which is free */}
                <div className="priceTier--Card priceTier--Cards-Basic dark-colored-text">
                    <div className="borderTop-basic"></div>
                    <div className="title">
                        <p className="font_h3_headline">Basic</p>
                        <p className="font_h1_headline_bold">FREE</p>
                    </div>
                    <div className="content font_main_regular">
                        <ul>
                            <li className="dark-colored-text">1 Seat Available</li>
                            <li className="unavailable">Access to Wifi Router</li>
                            <li className="unavailable">Free Food & Coffee</li>
                        </ul>
                    </div>
                    <button className="priceTier--Card-Button font_h5_headline">TRY NOW</button>
                </div>

                {/* Standard Tier which is 10/month */}
                <div className="priceTier--Card priceTier--Cards-Standard">
                    <div className="borderTop-standard"></div>
                    <div className="title  primary-colored-text">
                        <p className="font_h3_headline">Standard</p>
                        <div className="price">
                            <p  className="priceTier--Cards-Number font_h1_headline_regular">$10</p>
                            <p className="font_h5_headline">/month</p>
                        </div>
                    </div>
                    <div className="content font_main_regular">
                        <ul>
                            <li className="dark-colored-text">1 Seat Available</li>
                            <li className="dark-colored-text">Access to Wifi Router</li>
                            <li className="unavailable">Free Food & Coffee</li>
                        </ul>
                    </div>
                    <button className="priceTier--Card-Button font_h5_headline">Subscribe</button>
                </div>

                {/* Premium Tier which is 25/month */}
                <div className="priceTier--Card priceTier--Cards-Premium">
                    <div className="borderTop-premium"></div>
                    <div className="title secondary-colored-text">
                        <p className="font_h3_headline">Premium</p>
                        <div className="price">
                            <p  className="priceTier--Cards-Number font_h1_headline_regular">$25</p>
                            <p  className="font_h5_headline">/month</p>
                        </div>
                    </div>
                    <div className="content font_main_regular">
                        <ul>
                            <li className="dark-colored-text">1 Seat Available</li>
                            <li className="dark-colored-text">Access to Wifi Router</li>
                            <li className="dark-colored-text">Free Food & Coffee</li>
                        </ul>
                    </div>
                    <button className="priceTier--Card-Button font_h5_headline">Subscribe</button>
                </div>
            </div>    
        </section>
    );
}

export default PriceTier;