/* eslint-disable no-magic-numbers */
import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import { connect } from 'react-redux';

import CategoryBlockWidget from './CategoryBlockWidget.component';

/** @namespace Scandipwa/Component/CategoryBlockWidget/Container/mapStateToProps */
export const mapStateToProps = () => ({});

/** @namespace Scandipwa/Component/CategoryBlockWidget/Container/mapDispatchToProps */
export const mapDispatchToProps = () => ({});

/** @namespace Scandipwa/Component/CategoryBlockWidget/Container */
export class CategoryBlockWidgetContainer extends PureComponent {
    static propTypes = {
        'data-block-title': PropTypes.string.isRequired,
        'data-block-subtitle': PropTypes.string.isRequired,
        'data-block-image-src': PropTypes.string.isRequired,
        'data-block-image-alt': PropTypes.string.isRequired,
        'data-block-image-title': PropTypes.string.isRequired,
        'data-block-image-url': PropTypes.string.isRequired,
        'data-block-button-text': PropTypes.string.isRequired,
        'data-block-button-url': PropTypes.string.isRequired,
        'data-first-category-image-src': PropTypes.string.isRequired,
        'data-first-category-image-alt': PropTypes.string.isRequired,
        'data-first-category-image-title': PropTypes.string.isRequired,
        'data-first-category-url': PropTypes.string.isRequired,
        'data-first-category-caption': PropTypes.string.isRequired,
        'data-second-category-image-src': PropTypes.string.isRequired,
        'data-second-category-image-alt': PropTypes.string.isRequired,
        'data-second-category-image-title': PropTypes.string.isRequired,
        'data-second-category-url': PropTypes.string.isRequired,
        'data-second-category-caption': PropTypes.string.isRequired,
        'data-third-category-image-src': PropTypes.string.isRequired,
        'data-third-category-image-alt': PropTypes.string.isRequired,
        'data-third-category-image-title': PropTypes.string.isRequired,
        'data-third-category-url': PropTypes.string.isRequired,
        'data-third-category-caption': PropTypes.string.isRequired,
        'data-fourth-category-image-src': PropTypes.string.isRequired,
        'data-fourth-category-image-alt': PropTypes.string.isRequired,
        'data-fourth-category-image-title': PropTypes.string.isRequired,
        'data-fourth-category-url': PropTypes.string.isRequired,
        'data-fourth-category-caption': PropTypes.string.isRequired,
        'data-shop-button-text': PropTypes.string.isRequired,
        'data-shop-button-url': PropTypes.string.isRequired
    };

    render() {
        const {
            'data-block-title': blockTitle,
            'data-block-subtitle': blockSubtitle,
            'data-block-image-src': blockImageSrc,
            'data-block-image-alt': blockImageAlt,
            'data-block-image-title': blockImageTitle,
            'data-block-image-url': blockImageUrl,
            'data-block-button-text': blockButtonText,
            'data-block-button-url': blockButtonUrl,
            'data-first-category-image-src': firstCategoryImageSrc,
            'data-first-category-image-alt': firstCategoryImageAlt,
            'data-first-category-image-title': firstCategoryImageTitle,
            'data-first-category-url': firstCategoryUrl,
            'data-first-category-caption': firstCategoryCaption,
            'data-second-category-image-src': secondCategoryImageSrc,
            'data-second-category-image-alt': secondCategoryImageAlt,
            'data-second-category-image-title': secondCategoryImageTitle,
            'data-second-category-url': secondCategoryUrl,
            'data-second-category-caption': secondCategoryCaption,
            'data-third-category-image-src': thirdCategoryImageSrc,
            'data-third-category-image-alt': thirdCategoryImageAlt,
            'data-third-category-image-title': thirdCategoryImageTitle,
            'data-third-category-url': thirdCategoryUrl,
            'data-third-category-caption': thirdCategoryCaption,
            'data-fourth-category-image-src': fourthCategoryImageSrc,
            'data-fourth-category-image-alt': fourthCategoryImageAlt,
            'data-fourth-category-image-title': fourthCategoryImageTitle,
            'data-fourth-category-url': fourthCategoryUrl,
            'data-fourth-category-caption': fourthCategoryCaption,
            'data-shop-button-text': shopButtonText,
            'data-shop-button-url': shopButtonUrl
        } = this.props;

        return (
            <CategoryBlockWidget
              blockImageSrc={ blockImageSrc }
              blockImageAlt={ blockImageAlt }
              blockImageTitle={ blockImageTitle }
              blockImageUrl={ blockImageUrl }
              blockTitle={ blockTitle }
              blockSubtitle={ blockSubtitle }
              blockButtonText={ blockButtonText }
              blockButtonUrl={ blockButtonUrl }
              shopButtonUrl={ shopButtonUrl }
              shopButtonText={ shopButtonText }
              firstCategoryImageSrc={ firstCategoryImageSrc }
              firstCategoryImageAlt={ firstCategoryImageAlt }
              firstCategoryImageTitle={ firstCategoryImageTitle }
              firstCategoryUrl={ firstCategoryUrl }
              firstCategoryCaption={ firstCategoryCaption }
              secondCategoryImageSrc={ secondCategoryImageSrc }
              secondCategoryImageAlt={ secondCategoryImageAlt }
              secondCategoryImageTitle={ secondCategoryImageTitle }
              secondCategoryUrl={ secondCategoryUrl }
              secondCategoryCaption={ secondCategoryCaption }
              thirdCategoryImageSrc={ thirdCategoryImageSrc }
              thirdCategoryImageAlt={ thirdCategoryImageAlt }
              thirdCategoryImageTitle={ thirdCategoryImageTitle }
              thirdCategoryUrl={ thirdCategoryUrl }
              thirdCategoryCaption={ thirdCategoryCaption }
              fourthCategoryImageSrc={ fourthCategoryImageSrc }
              fourthCategoryImageAlt={ fourthCategoryImageAlt }
              fourthCategoryImageTitle={ fourthCategoryImageTitle }
              fourthCategoryUrl={ fourthCategoryUrl }
              fourthCategoryCaption={ fourthCategoryCaption }
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryBlockWidgetContainer);
