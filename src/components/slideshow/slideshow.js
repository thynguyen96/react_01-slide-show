import React from 'react'
import ReactDOM from 'react-dom'
import './slideshow.scss'

export default class Slideshow extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            slideIndex: 0
        }

        const ratioWHArray = this.props.ratio.split(":");
        this.ratioWH = ratioWHArray[0] / ratioWHArray[1];
    }

    getNewSlideIndex = (step) => {
        const slideIndex = this.state.slideIndex
        const numberSlide = this.props.input.length

        let newSlideIndex = slideIndex + step

        if (newSlideIndex >= numberSlide) newSlideIndex = 0
        else if (newSlideIndex < 0) newSlideIndex = numberSlide - 1

        return newSlideIndex
    }

    backward = () => {
        this.setState({
          slideIndex: this.getNewSlideIndex(-1)
        });
      }
    
    forward = () => {
        this.setState({
            slideIndex: this.getNewSlideIndex(1)
        });
    }

    setSlideIndex = (index) => {
        this.setState({
            slideIndex: index
        })
    }

    updateDimensions = () => {
        this.containerElm.style.height
            = `${this.containerElm.offsetWidth / this.ratioWH}px`;
    }

    runAutomatic = () => {
        this.setState({
            slideIndex: this.getNewSlideIndex(1)
        });
    }

    componentDidMount() {
        this.rootElm = ReactDOM.findDOMNode(this);
        this.containerElm = this.rootElm.querySelector(".slide-show__container");

        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);

        if (this.props.mode === "automatic") {
            const timeout = this.props.timeout || 5000;

            this.automaticInterval = setInterval(
                () => this.runAutomatic(),
                Number.parseInt(timeout)
            );
        }
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
        if (this.automaticInterval) clearInterval(this.automaticInterval);
    }

    render() {
        const owlClass = 'slide-show';
        return (
            <div className={`${owlClass}`}>
                <div className={`${owlClass}__container`}>
                    {
                        this.props.input.map((image, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`${this.state.slideIndex === index ? `${owlClass}__container-slide--active` : ""} ${owlClass}__container-slide`}>
                                    <div className={`${owlClass}__container-slide--number-text`}>
                                        {`${index + 1} / ${this.props.input.length}`}
                                    </div>
                                    <img className={`${owlClass}__container-slide--image`} src={image.src} alt={image.caption} />
                                    <div className={`${owlClass}__container-slide--caption-text`}>{image.caption}</div>
                                </div>
                            )
                        })
                    }

                    <span className={`${owlClass}__container-slide--next`} onClick={this.forward}>❮</span>
                    <span className={`${owlClass}__container-slide--prev`} onClick={this.backward}>❯</span>
                </div>

                {/* <div className={`${owlClass}__dot-container`}>
                    {
                        this.props.input.map((_, index) => {
                            return (
                                <span
                                    key={index}
                                    className={`${owlClass}__dot-container--item ${this.state.slideIndex === index ? `${owlClass}__dot-container--item--active` : ""}`}
                                    onClick={() => this.setSlideIndex(index)}
                                >
                                </span>
                            )
                        })
                    }
                </div> */}

                <div className={`${owlClass}__cotainer-bottom`}>
                    {
                        this.props.input.map((image, index) => {
                            return (
                                <img
                                  key={index}
                                  src={image.src}
                                  alt={image.caption}
                                  className={`${owlClass}__container-bottom-item ${this.state.slideIndex === index ? `${owlClass}__container-bottom-item--active` : ""}`}
                                  onClick={() => this.setSlideIndex(index)}
                                  style={{
                                    width: `${1 / this.props.input.length * 100}%`,
                                    height: `100%`
                                  }}
                                />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
