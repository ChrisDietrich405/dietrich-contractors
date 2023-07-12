import React from "react";

import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";

import styles from "./styles.module.css";

export default class SlideShow extends React.Component {
  constructor(props) {
    super(props);
    this.siSlideshow = null;
    this.state = { position: 0, select: this.props.images[0] };
  }

  render() {
    const nextSlideShow = () => {
      let nextSlide = this.state.position + 1;
      if (nextSlide >= this.props.images.length) {
        nextSlide = 0;
      }
      this.setState({
        position: nextSlide,
        select: this.props.images[nextSlide],
      });
    };

    const prevSlideShow = () => {
      let prevSlide = this.state.position - 1;
      if (prevSlide < 0) {
        prevSlide = this.props.images.length - 1;
      }
      this.setState({
        position: prevSlide,
        select: this.props.images[prevSlide],
      });
    };

    return (
      <div className={styles.slide_show_container}>
        <div className={styles.darken} />
        <div
          className={styles.slide_show}
          style={{ backgroundImage: `url(${this.state.select.url})` }}
        >
          <div className={styles.arrow_left_container}>
            <AiOutlineArrowLeft
              className={styles.arrow_left}
              onClick={prevSlideShow}
            />
          </div>
          <div className={styles.gradient}>
            <h3 className={styles.slideshow_h3}>{this.state.select.title}</h3>
          </div>

          <div className={styles.arrow_right_container}>
            <AiOutlineArrowRight
              className={styles.arrow_right}
              onClick={nextSlideShow}
            />
          </div>
          <div className={styles.contact_container}>
            <div className={styles.contain}>
              <AiFillPhone className={styles.hello} />
              <p className={styles.hello}>(443) 306-5270</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.siSlideshow = setInterval(() => {
      this.slideshow();
    }, this.props.timeOut);
  }

  componentWillUnmount() {
    clearInterval(this.siSlideshow);
  }

  slideshow() {
    let positionPlace = this.state.position;
    positionPlace++;
    if (positionPlace > this.props.images.length - 1) {
      positionPlace = 0;
    }
    this.setState({
      position: positionPlace,
      select: this.props.images[positionPlace],
    });
  }
}
