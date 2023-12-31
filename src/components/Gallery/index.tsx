import React from "react";
import style from "./index.module.scss";
import GalleryHeartIcon from "../../assets/GalleryHeartIcon.svg";
import GalleryCommentIcon from "../../assets/GalleryCommentIcon.svg";
import GalleryInstagramIcon from "../../assets/GalleryInstagramIcon.svg";

const Gallery = () => {
  return (
    <section className={style.Gallery}>
      <div className={style.instagram_icon}>
        <GalleryInstagramIcon className={style.galleryInstagramIcon} />
      </div>
      <h2 className="font_h2_headline dark-colored-text">See our Best Shots</h2>
      <article className={style.media}>
        <figure className={style.instashot1}>
          <img src="/gallery_img1.jpg" alt="poster"></img>
          <figcaption className={style.title_tags}>
            <ul className={style.likes_comments}>
              <GalleryHeartIcon />
              <li>
                <h5 className="font_h5_headline dark-colored-text">412</h5>
              </li>
              <GalleryCommentIcon />
              <li>
                <h5 className="font_h5_headline dark-colored-text">140</h5>
              </li>
            </ul>
            <p className={`${style.tag} font_main_regular dark-colored-text`}>
              Lorem Ipsum Amet
            </p>
            <p
              className={`${style.comment} font_main_regular dark-colored-text`}
            >
              #music #concert #conference #london #event #artist #dj #soundtrack
              #dance
            </p>
          </figcaption>
        </figure>
        <figure className={style.instashot2}>
          <img src="/gallery_img2.jpg" alt="poster"></img>
          <figcaption className={style.title_tags}>
            <ul className={style.likes_comments}>
              <GalleryHeartIcon />
              <li>
                <h5 className="font_h5_headline dark-colored-text">412</h5>
              </li>
              <GalleryCommentIcon />
              <li>
                <h5 className="font_h5_headline dark-colored-text">140</h5>
              </li>
            </ul>
            <p className={`${style.tag} font_main_regular dark-colored-text`}>
              Lorem Ipsum Amet
            </p>
            <p
              className={`${style.comment} font_main_regular dark-colored-text`}
            >
              #music #concert #conference #london #event #artist #dj #soundtrack
              #dance
            </p>
          </figcaption>
        </figure>
        <figure className={style.instashot3}>
          <img src="/gallery_img3.jpg" alt="poster"></img>
          <figcaption className={style.title_tags}>
            <ul className={style.likes_comments}>
              <GalleryHeartIcon />
              <li>
                <h5 className="font_h5_headline dark-colored-text">412</h5>
              </li>
              <GalleryCommentIcon />
              <li>
                <h5 className="font_h5_headline dark-colored-text">140</h5>
              </li>
            </ul>
            <p className={`${style.tag} font_main_regular dark-colored-text`}>
              Lorem Ipsum Amet
            </p>
            <p
              className={`${style.comment} font_main_regular dark-colored-text`}
            >
              #music #concert #conference #london #event #artist #dj #soundtrack
              #dance
            </p>
          </figcaption>
        </figure>
        <figure className={style.instashot4}>
          <img src="/gallery_img4.jpg" alt="poster"></img>
          <figcaption className={style.title_tags}>
            <ul className={style.likes_comments}>
              <GalleryHeartIcon />
              <li>
                <h5 className="font_h5_headline dark-colored-text">412</h5>
              </li>
              <GalleryCommentIcon />
              <li>
                <h5 className="font_h5_headline dark-colored-text">140</h5>
              </li>
            </ul>
            <p className={`${style.tag} font_main_regular dark-colored-text`}>
              Lorem Ipsum Amet
            </p>
            <p
              className={`${style.comment} font_main_regular dark-colored-text`}
            >
              #music #concert #conference #london #event #artist #dj #soundtrack
              #dance
            </p>
          </figcaption>
        </figure>
        <figure className={style.instashot5}>
          <img src="/gallery_img5.jpg" alt="poster"></img>
          <figcaption className={style.title_tags}>
            <ul className={style.likes_comments}>
              <GalleryHeartIcon />
              <li>
                <h5 className="font_h5_headline dark-colored-text">412</h5>
              </li>
              <GalleryCommentIcon />
              <li>
                <h5 className="font_h5_headline dark-colored-text">140</h5>
              </li>
            </ul>
            <p className={`${style.tag} font_main_regular dark-colored-text`}>
              Lorem Ipsum Amet
            </p>
            <p
              className={`${style.comment} font_main_regular dark-colored-text`}
            >
              #music #concert #conference #london #event #artist #dj #soundtrack
              #dance
            </p>
          </figcaption>
        </figure>
      </article>
    </section>
  );
};

export default Gallery;
