/* eslint-disable arrow-body-style */
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import Link from 'Component/Link';

import './SocialBlockWidget.style';

/** @namespace Scandipwa/Component/SocialBlockWidget/Component */
export class SocialBlockWidgetComponent extends PureComponent {
    static propTypes = {
        blockTitle: PropTypes.string.isRequired,
        blockSlogan: PropTypes.string.isRequired,
        socialMedia: PropTypes.arrayOf(
            PropTypes.shape({
                text: PropTypes.string.isRequired,
                icon: PropTypes.string.isRequired
            }).isRequired
        ).isRequired
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
            socialMedia
        } = this.props;

        return (
            <div block="SocialBlock" elem="SocialMediaList">
                { socialMedia.map(({ text, link, icon }, index) => {
                    return (
                        <div block="SocialBlock" elem="SocialMediaListWrapper" key={ `${ index + 1 }.` }>
                            <div block="SocialBlock" elem="SocialMediaListContent">
                                <figure block="SocialBlock" elem="SocialMediaListFigure">
                                    <Link to={ link }>
                                        <img block="SocialBlock" elem="SocialMediaListImg" src={ icon } alt={ icon } />
                                    </Link>
                                </figure>
                                <p block="SocialBlock" elem="SocialMediaListTextHolder">
                                    <strong>
                                        <span block="SocialBlock" elem="SocialMediaListText">
                                            { text }
                                        </span>
                                    </strong>
                                </p>
                            </div>
                        </div>
                    );
                }) }
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
