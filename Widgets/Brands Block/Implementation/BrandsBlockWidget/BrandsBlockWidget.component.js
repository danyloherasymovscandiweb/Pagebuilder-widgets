/* eslint-disable arrow-body-style */
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import Link from 'Component/Link';

import './BrandsBlockWidget.style';

/** @namespace Scandipwa/Component/BrandsBlockWidget/Component */
export class BrandsBlockWidgetComponent extends PureComponent {
    static propTypes = {
        blockTitle: PropTypes.string.isRequired,
        buttonLink: PropTypes.string.isRequired,
        buttonText: PropTypes.string.isRequired,
        featuredBrands: PropTypes.arrayOf(
            PropTypes.shape({
                link: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired
            }).isRequired
        ).isRequired
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
            featuredBrands
        } = this.props;

        return (
            <div block="BrandsBlock" elem="FeaturedBrands">
                <div block="BrandsBlock" elem="FeaturedBrandsWrapper">
                    <div block="BrandsBlock" elem="FeaturedBrandsColumn">
                        { featuredBrands.map(({ link, image }, index) => {
                            return (
                            <div block="BrandsBlock" elem="FeaturedBrandsContent" key={ `${ index + 1 }.` }>
                                <figure block="BrandsBlock" elem="FeaturedBrandsFigure">
                                    <Link block="BrandsBlock" elem="FeaturedBrandsLink" to={ link }>
                                        <img
                                          block="BrandsBlock"
                                          elem="FeaturedBrandsFigureImg"
                                          src={ image }
                                          alt={ image }
                                        />
                                    </Link>
                                </figure>
                            </div>
                            );
                        }) }
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
            buttonLink,
            buttonText
        } = this.props;

        return (
            <div block="BrandsBlock" elem="Actions">
                <div block="BrandsBlock" elem="ActionsItem">
                    <Link to={ buttonLink } block="BrandsBlock" elem="ActionsButton">
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
