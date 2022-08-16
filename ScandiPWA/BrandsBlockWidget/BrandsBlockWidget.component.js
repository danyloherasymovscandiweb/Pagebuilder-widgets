/* eslint-disable arrow-body-style */
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import Link from 'Component/Link';

import './BrandsBlockWidget.style';

/** @namespace Scandipwa/Component/BrandsBlockWidget/Component */
export class BrandsBlockWidgetComponent extends PureComponent {
    static propTypes = {
        blockTitle: PropTypes.string.isRequired,
        buttonUrl: PropTypes.string.isRequired,
        buttonText: PropTypes.string.isRequired,
        firstBrandUrl: PropTypes.string.isRequired,
        firstBrandImgSrc: PropTypes.string.isRequired,
        firstBrandImgAlt: PropTypes.string.isRequired,
        firstBrandImgTitle: PropTypes.string.isRequired,
        secondBrandUrl: PropTypes.string.isRequired,
        secondBrandImgSrc: PropTypes.string.isRequired,
        secondBrandImgAlt: PropTypes.string.isRequired,
        secondBrandImgTitle: PropTypes.string.isRequired,
        thirdBrandUrl: PropTypes.string.isRequired,
        thirdBrandImgSrc: PropTypes.string.isRequired,
        thirdBrandImgAlt: PropTypes.string.isRequired,
        thirdBrandImgTitle: PropTypes.string.isRequired
    };

    renderBlockTitle() {
        const {
            blockTitle
        } = this.props;

        return (
            <h2 block="BrandsBlock" elem="Title">
                { blockTitle }
            </h2>
        );
    }

    renderFeaturedBrands() {
        const {
            firstBrandUrl,
            firstBrandImgSrc,
            firstBrandImgAlt,
            firstBrandImgTitle,
            secondBrandUrl,
            secondBrandImgSrc,
            secondBrandImgAlt,
            secondBrandImgTitle,
            thirdBrandUrl,
            thirdBrandImgSrc,
            thirdBrandImgAlt,
            thirdBrandImgTitle
        } = this.props;

        return (
            <div block="BrandsBlock" elem="FeaturedBrands">
                <div block="BrandsBlock" elem="FeaturedBrandsWrapper">
                    <div block="BrandsBlock" elem="FeaturedBrandsColumn">
                        <div block="BrandsBlock" elem="FeaturedBrandsContent">
                            <div block="BrandsBlock" elem="FeaturedBrandsFigure">
                                <Link block="BrandsBlock" elem="FeaturedBrandsLink" to={ firstBrandUrl }>
                                    <img
                                      block="BrandsBlock"
                                      elem="FeaturedBrandsFigureImg"
                                      src={ firstBrandImgSrc }
                                      alt={ firstBrandImgAlt }
                                      title={ firstBrandImgTitle }
                                    />
                                </Link>
                            </div>
                        </div>
                        <div block="BrandsBlock" elem="FeaturedBrandsContent">
                            <div block="BrandsBlock" elem="FeaturedBrandsFigure">
                                <Link block="BrandsBlock" elem="FeaturedBrandsLink" to={ secondBrandUrl }>
                                    <img
                                      block="BrandsBlock"
                                      elem="FeaturedBrandsFigureImg"
                                      src={ secondBrandImgSrc }
                                      alt={ secondBrandImgAlt }
                                      title={ secondBrandImgTitle }
                                    />
                                </Link>
                            </div>
                        </div>
                        <div block="BrandsBlock" elem="FeaturedBrandsContent">
                            <div block="BrandsBlock" elem="FeaturedBrandsFigure">
                                <Link block="BrandsBlock" elem="FeaturedBrandsLink" to={ thirdBrandUrl }>
                                    <img
                                      block="BrandsBlock"
                                      elem="FeaturedBrandsFigureImg"
                                      src={ thirdBrandImgSrc }
                                      alt={ thirdBrandImgAlt }
                                      title={ thirdBrandImgTitle }
                                    />
                                </Link>
                            </div>
                        </div>
                        <div block="BrandsBlock" elem="FeaturedBrandsContent">
                            { this.renderBlockTitle() }
                            { this.renderBlockActions() }
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderBlockActions() {
        const {
            buttonUrl,
            buttonText
        } = this.props;

        return (
            <div block="BrandsBlock" elem="Actions">
                <div block="BrandsBlock" elem="ActionsItem">
                    <Link to={ buttonUrl } block="BrandsBlock" elem="ActionsButton">
                        <span block="BrandsBlock" elem="ActionsButtonText">{ buttonText }</span>
                    </Link>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div block="BrandsBlock">
                { this.renderFeaturedBrands() }
            </div>
        );
    }
}

export default BrandsBlockWidgetComponent;
