import PopIcon from "../assets/PopIcon.svg";
import FolkIcon from "../assets/FolkIcon.svg";
import InstrumentalIcon from "../assets/InstrumentalIcon.svg";
import RockIcon from "../assets/RockIcon.svg";
import JazzIcon from "../assets/JazzIcon.svg";

const Categories = () => {
  return (
    <section className="categories">
      {/* title */}
      <div className="categories--title">
        <h2 className="font_h2_headline primary-colored-text">Explore </h2>
        <h2 className="font_h2_headline dark-colored-text">By Category</h2>
      </div>

      {/* categories */}
      <div className="categories--cards">
        {/* pop category */}
        <div className="categories--card categories--cards-popCard">
          <PopIcon />
          <div className="categories--cards-content categories--cards-popCard-content">
            <h3 className="font_h3_headline dark-colored-text">Pop</h3>
            <p className="font_main_regular dark-colored-text">
              Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae
            </p>
          </div>
        </div>

        {/* folk category */}
        <div className="categories--card categories--cards-folkCard">
          <FolkIcon />
          <div className="categories--cards-content categories--cards-folkCard-content">
            <h3 className="font_h3_headline dark-colored-text">Folk</h3>
            <p className="font_main_regular dark-colored-text">
              Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae
            </p>
          </div>
        </div>

        {/* instrumental category */}
        <div className="categories--card categories--cards-instrumentalCard">
          <InstrumentalIcon />
          <div className="categories--cards-content categories--cards-instrumentalCard-content">
            <h3 className="font_h3_headline light-colored-text">Instrumental</h3>
            <p className="font_main_regular light-colored-text">
              Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae
            </p>
          </div>
        </div>

        {/* rock category */}
        <div className="categories--card categories--cards-rockCard">
          <RockIcon />
          <div className="categories--cards-content categories--cards-rockCard-content">
            <h3 className="font_h3_headline dark-colored-text">Rock</h3>
            <p className="font_main_regular dark-colored-text">
              Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae
            </p>
          </div>
        </div>

        {/* jazz category */}
        <div className="categories--card categories--cards-jazzCard">
          <JazzIcon />
          <div className="categories--cards-content categories--cards-jazzCard-content">
            <h3 className="font_h3_headline dark-colored-text">Jazz</h3>
            <p className="font_main_regular dark-colored-text">
              Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
