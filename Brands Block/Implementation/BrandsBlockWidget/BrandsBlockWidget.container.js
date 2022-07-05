/* eslint-disable no-magic-numbers */
import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import { connect } from 'react-redux';

import BrandsBlockWidget from './BrandsBlockWidget.component';

/** @namespace Scandipwa/Component/BrandsBlockWidget/Container/mapStateToProps */
export const mapStateToProps = () => ({});

/** @namespace Scandipwa/Component/BrandsBlockWidget/Container/mapDispatchToProps */
export const mapDispatchToProps = () => ({});

/** @namespace Scandipwa/Component/BrandsBlockWidget/Container */
export class BrandsBlockWidgetContainer extends PureComponent {
    static propTypes = {
        'block-title': PropTypes.string.isRequired,
        'first-brand-link': PropTypes.string.isRequired,
        'first-brand-image': PropTypes.string.isRequired,
        'second-brand-link': PropTypes.string.isRequired,
        'second-brand-image': PropTypes.string.isRequired,
        'third-brand-link': PropTypes.string.isRequired,
        'third-brand-image': PropTypes.string.isRequired,
        'button-link': PropTypes.string.isRequired,
        'button-text': PropTypes.string.isRequired
    };

    featuredBrands = [
        {
            link: '',
            image: ''
        },
        {
            link: '',
            image: ''
        },
        {
            link: '',
            image: ''
        }
    ];

    __construct(props) {
        super.__construct(props);

        const {
            'first-brand-link': firstBrandLink,
            'second-brand-link': secondBrandLink,
            'third-brand-link': thirdBrandLink,

            'first-brand-image': firstBrandImage,
            'second-brand-image': secondBrandImage,
            'third-brand-image': thirdBrandImage
        } = this.props;

        this.featuredBrands[0].link = firstBrandLink;
        this.featuredBrands[1].link = secondBrandLink;
        this.featuredBrands[2].link = thirdBrandLink;

        this.featuredBrands[0].image = firstBrandImage;
        this.featuredBrands[1].image = secondBrandImage;
        this.featuredBrands[2].image = thirdBrandImage;
    }

    render() {
        const {
            'block-title': blockTitle,
            'button-link': buttonLink,
            'button-text': buttonText
        } = this.props;

        return (
            <BrandsBlockWidget
              blockTitle={ blockTitle }
              buttonLink={ buttonLink }
              buttonText={ buttonText }
              featuredBrands={ this.featuredBrands }
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BrandsBlockWidgetContainer);
