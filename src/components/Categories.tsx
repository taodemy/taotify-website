import PopIcon from '../assets/PopIcon.svg';
import FolkIcon from '../assets/FolkIcon.svg';
import InstrumentalIcon from '../assets/InstrumentalIcon.svg';
import RockIcon from '../assets/RockIcon.svg';
import JazzIcon from '../assets/JazzIcon.svg';

const Categories = () => {
  return (
    <section className='Categories'>
        {/* title */}
        <div className="Categories--title">
            <h2 className="font_h2_headline primary-colored-text">Explore </h2>
            <h2 className="font_h2_headline dark-colored-text">By Category</h2>
        </div>

        {/* categories */}
        <div className="Categories--cards">
            {/* pop category */}
            <div className="Categories--card Categories--cards-popcard">
                <PopIcon />
                <div className="Categories--cards-content Categories--cards-popcard-content">
                    <h3 className="font_h3_headline dark-colored-text">Pop</h3>
                    <p className="font_main_regular dark-colored-text">Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae</p>
                </div>
            </div>

            {/* folk category */}
            <div className="Categories--card Categories--cards-folkcard">
                <FolkIcon />
                <div className="Categories--cards-content Categories--cards-folkcard-content">
                    <h3 className="font_h3_headline dark-colored-text">Folk</h3>
                    <p className="font_main_regular dark-colored-text">Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae</p>
                </div>
            </div>

            {/* instrumental category */}
            <div className="Categories--card Categories--cards-instrumentalcard">
                <InstrumentalIcon />
                <div className="Categories--cards-content Categories--cards-instrumentalcard-content">
                    <h3 className="font_h3_headline dark-colored-text">Instrumental</h3>
                    <p className="font_main_regular dark-colored-text">Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae</p>
                </div>
            </div>

            {/* rock category */}
            <div className="Categories--card Categories--cards-rockcard">
                <RockIcon />
                <div className="Categories--cards-content Categories--cards-rockcard-content">
                    <h3 className="font_h3_headline dark-colored-text">Rock</h3>
                    <p className="font_main_regular dark-colored-text">Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae</p>
                </div>
            </div>

            {/* jazz category */}
            <div className="Categories--card Categories--cards-jazzcard">
                <JazzIcon />
                <div className="Categories--cards-content Categories--cards-jazzcard-content">
                    <h3 className="font_h3_headline dark-colored-text">Jazz</h3>
                    <p className="font_main_regular dark-colored-text">Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Categories