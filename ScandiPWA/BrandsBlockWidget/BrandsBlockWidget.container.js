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
        'data-block-title': PropTypes.string.isRequired,
        'data-first-brand-url': PropTypes.string.isRequired,
        'data-first-brand-img-src': PropTypes.string.isRequired,
        'data-first-brand-img-alt': PropTypes.string.isRequired,
        'data-first-brand-img-title': PropTypes.string.isRequired,
        'data-second-brand-url': PropTypes.string.isRequired,
        'data-second-brand-img-src': PropTypes.string.isRequired,
        'data-second-brand-img-alt': PropTypes.string.isRequired,
        'data-second-brand-img-title': PropTypes.string.isRequired,
        'data-third-brand-url': PropTypes.string.isRequired,
        'data-third-brand-img-src': PropTypes.string.isRequired,
        'data-third-brand-img-alt': PropTypes.string.isRequired,
        'data-third-brand-img-title': PropTypes.string.isRequired,
        'data-button-url': PropTypes.string.isRequired,
        'data-button-text': PropTypes.string.isRequired
    };

    render() {
        const {
            'data-block-title': blockTitle,
            'data-button-url': buttonUrl,
            'data-button-text': buttonText,
            'data-first-brand-url': firstBrandUrl,
            'data-first-brand-img-src': firstBrandImgSrc,
            'data-first-brand-img-alt': firstBrandImgAlt,
            'data-first-brand-img-title': firstBrandImgTitle,
            'data-second-brand-url': secondBrandUrl,
            'data-second-brand-img-src': secondBrandImgSrc,
            'data-second-brand-img-alt': secondBrandImgAlt,
            'data-second-brand-img-title': secondBrandImgTitle,
            'data-third-brand-url': thirdBrandUrl,
            'data-third-brand-img-src': thirdBrandImgSrc,
            'data-third-brand-img-alt': thirdBrandImgAlt,
            'data-third-brand-img-title': thirdBrandImgTitle
        } = this.props;

        return (
            <BrandsBlockWidget
              blockTitle={ blockTitle }
              buttonUrl={ buttonUrl }
              buttonText={ buttonText }
              firstBrandUrl={ firstBrandUrl }
              firstBrandImgSrc={ firstBrandImgSrc }
              firstBrandImgAlt={ firstBrandImgAlt }
              firstBrandImgTitle={ firstBrandImgTitle }
              secondBrandUrl={ secondBrandUrl }
              secondBrandImgSrc={ secondBrandImgSrc }
              secondBrandImgAlt={ secondBrandImgAlt }
              secondBrandImgTitle={ secondBrandImgTitle }
              thirdBrandUrl={ thirdBrandUrl }
              thirdBrandImgSrc={ thirdBrandImgSrc }
              thirdBrandImgAlt={ thirdBrandImgAlt }
              thirdBrandImgTitle={ thirdBrandImgTitle }
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BrandsBlockWidgetContainer);
