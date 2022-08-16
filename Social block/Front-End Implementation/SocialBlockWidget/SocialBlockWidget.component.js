import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import './SocialBlockWidget.style';

/** @namespace Scandipwa/Component/SocialBlockWidget/Component */
export class SocialBlockWidgetComponent extends PureComponent {
    static propTypes = {
        blockTitle: PropTypes.string.isRequired,
        blockSlogan: PropTypes.string.isRequired,
        firstIconSrc: PropTypes.string.isRequired,
        firstIconAlt: PropTypes.string.isRequired,
        firstIconTitle: PropTypes.string.isRequired,
        firstUrl: PropTypes.string.isRequired,
        firstCaption: PropTypes.string.isRequired,
        secondIconSrc: PropTypes.string.isRequired,
        secondIconAlt: PropTypes.string.isRequired,
        secondIconTitle: PropTypes.string.isRequired,
        secondUrl: PropTypes.string.isRequired,
        secondCaption: PropTypes.string.isRequired,
        thirdIconSrc: PropTypes.string.isRequired,
        thirdIconAlt: PropTypes.string.isRequired,
        thirdIconTitle: PropTypes.string.isRequired,
        thirdUrl: PropTypes.string.isRequired,
        thirdCaption: PropTypes.string.isRequired,
        fourthIconSrc: PropTypes.string.isRequired,
        fourthIconAlt: PropTypes.string.isRequired,
        fourthIconTitle: PropTypes.string.isRequired,
        fourthUrl: PropTypes.string.isRequired,
        fourthCaption: PropTypes.string.isRequired,
        fifthIconSrc: PropTypes.string.isRequired,
        fifthIconAlt: PropTypes.string.isRequired,
        fifthIconTitle: PropTypes.string.isRequired,
        fifthUrl: PropTypes.string.isRequired,
        fifthCaption: PropTypes.string.isRequired
    };

    renderBlockTitle() {
        const {
            blockTitle
        } = this.props;

        return (
            <div block="SocialBlock" elem="SocialMediaTitle">
                <span>{ blockTitle }</span>
            </div>
        );
    }

    renderBlockSlogan() {
        const {
            blockSlogan
        } = this.props;

        return (
            <div block="SocialBlock" elem="SocialMediaSlogan">
                <span>{ blockSlogan }</span>
            </div>
        );
    }

    renderSocialMedia() {
        const {
            firstIconSrc,
            firstIconAlt,
            firstIconTitle,
            firstUrl,
            firstCaption,
            secondIconSrc,
            secondIconAlt,
            secondIconTitle,
            secondUrl,
            secondCaption,
            thirdIconSrc,
            thirdIconAlt,
            thirdIconTitle,
            thirdUrl,
            thirdCaption,
            fourthIconSrc,
            fourthIconAlt,
            fourthIconTitle,
            fourthUrl,
            fourthCaption,
            fifthIconSrc,
            fifthIconAlt,
            fifthIconTitle,
            fifthUrl,
            fifthCaption
        } = this.props;

        return (
            <div block="SocialBlock" elem="SocialMediaList">
                <div block="SocialBlock" elem="SocialMediaListWrapper">
                    <div block="SocialBlock" elem="SocialMediaListContent">
                        <div block="SocialBlock" elem="SocialMediaListFigure">
                            <a href={ firstUrl }>
                                <img
                                  block="SocialBlock"
                                  elem="SocialMediaListImg"
                                  src={ firstIconSrc }
                                  alt={ firstIconAlt }
                                  title={ firstIconTitle }
                                />
                            </a>
                        </div>
                        <p block="SocialBlock" elem="SocialMediaListTextHolder">
                            <strong>
                                <span block="SocialBlock" elem="SocialMediaListText">
                                    { firstCaption }
                                </span>
                            </strong>
                        </p>
                    </div>
                    <div block="SocialBlock" elem="SocialMediaListContent">
                        <div block="SocialBlock" elem="SocialMediaListFigure">
                            <a href={ secondUrl }>
                                <img
                                  block="SocialBlock"
                                  elem="SocialMediaListImg"
                                  src={ secondIconSrc }
                                  alt={ secondIconAlt }
                                  title={ secondIconTitle }
                                />
                            </a>
                        </div>
                        <p block="SocialBlock" elem="SocialMediaListTextHolder">
                            <strong>
                                <span block="SocialBlock" elem="SocialMediaListText">
                                    { secondCaption }
                                </span>
                            </strong>
                        </p>
                    </div>
                    <div block="SocialBlock" elem="SocialMediaListContent">
                        <div block="SocialBlock" elem="SocialMediaListFigure">
                            <a href={ thirdUrl }>
                                <img
                                  block="SocialBlock"
                                  elem="SocialMediaListImg"
                                  src={ thirdIconSrc }
                                  alt={ thirdIconAlt }
                                  title={ thirdIconTitle }
                                />
                            </a>
                        </div>
                        <p block="SocialBlock" elem="SocialMediaListTextHolder">
                            <strong>
                                <span block="SocialBlock" elem="SocialMediaListText">
                                    { thirdCaption }
                                </span>
                            </strong>
                        </p>
                    </div>
                    <div block="SocialBlock" elem="SocialMediaListContent">
                        <div block="SocialBlock" elem="SocialMediaListFigure">
                            <a href={ fourthUrl }>
                                <img
                                  block="SocialBlock"
                                  elem="SocialMediaListImg"
                                  src={ fourthIconSrc }
                                  alt={ fourthIconAlt }
                                  title={ fourthIconTitle }
                                />
                            </a>
                        </div>
                        <p block="SocialBlock" elem="SocialMediaListTextHolder">
                            <strong>
                                <span block="SocialBlock" elem="SocialMediaListText">
                                    { fourthCaption }
                                </span>
                            </strong>
                        </p>
                    </div>
                    <div block="SocialBlock" elem="SocialMediaListContent">
                        <div block="SocialBlock" elem="SocialMediaListFigure">
                            <a href={ fifthUrl }>
                                <img
                                  block="SocialBlock"
                                  elem="SocialMediaListImg"
                                  src={ fifthIconSrc }
                                  alt={ fifthIconAlt }
                                  title={ fifthIconTitle }
                                />
                            </a>
                        </div>
                        <p block="SocialBlock" elem="SocialMediaListTextHolder">
                            <strong>
                                <span block="SocialBlock" elem="SocialMediaListText">
                                    { fifthCaption }
                                </span>
                            </strong>
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    renderBlockDescription() {
        return (
            <div block="SocialBlock" elem="SocialMedia">
                { this.renderBlockTitle() }
                { this.renderBlockSlogan() }
                { this.renderSocialMedia() }
            </div>
        );
    }

    render() {
        return (
            <div block="SocialBlock">
                { this.renderBlockDescription() }
            </div>
        );
    }
}

export default SocialBlockWidgetComponent;
