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
        'block-title': PropTypes.string.isRequired,
        'block-subtitle': PropTypes.string.isRequired,
        'block-image': PropTypes.string.isRequired,
        'block-image-url': PropTypes.string.isRequired,
        'block-button-text': PropTypes.string.isRequired,
        'block-button-url': PropTypes.string.isRequired,
        'first-category-image': PropTypes.string.isRequired,
        'first-category-url': PropTypes.string.isRequired,
        'first-category-caption': PropTypes.string.isRequired,
        'second-category-image': PropTypes.string.isRequired,
        'second-category-url': PropTypes.string.isRequired,
        'second-category-caption': PropTypes.string.isRequired,
        'third-category-image': PropTypes.string.isRequired,
        'third-category-url': PropTypes.string.isRequired,
        'third-category-caption': PropTypes.string.isRequired,
        'fourth-category-image': PropTypes.string.isRequired,
        'fourth-category-url': PropTypes.string.isRequired,
        'fourth-category-caption': PropTypes.string.isRequired,
        'shop-button-text': PropTypes.string.isRequired,
        'shop-button-url': PropTypes.string.isRequired
    };

    categoriesFirstColumn = [
        {
            link: '',
            image: '',
            caption: ''
        },
        {
            link: '',
            image: '',
            caption: ''
        }
    ];

    categoriesSecondColumn = [
        {
            link: '',
            image: '',
            caption: ''
        },
        {
            link: '',
            image: '',
            caption: ''
        }
    ];

    __construct(props) {
        super.__construct(props);

        const {
            'first-category-image': firstCategoryImage,
            'second-category-image': secondCategoryImage,
            'third-category-image': thirdCategoryImage,
            'fourth-category-image': fourthCategoryImage,
            'first-category-url': firstCategoryUrl,
            'second-category-url': secondCategoryUrl,
            'third-category-url': thirdCategoryUrl,
            'fourth-category-url': fourthCategoryUrl,
            'first-category-caption': firstCategoryCaption,
            'second-category-caption': secondCategoryCaption,
            'third-category-caption': thirdCategoryCaption,
            'fourth-category-caption': fourthCategoryCaption
        } = this.props;

        this.categoriesFirstColumn[0].link = firstCategoryUrl;
        this.categoriesFirstColumn[1].link = secondCategoryUrl;
        this.categoriesSecondColumn[0].link = thirdCategoryUrl;
        this.categoriesSecondColumn[1].link = fourthCategoryUrl;

        this.categoriesFirstColumn[0].image = firstCategoryImage;
        this.categoriesFirstColumn[1].image = secondCategoryImage;
        this.categoriesSecondColumn[0].image = thirdCategoryImage;
        this.categoriesSecondColumn[1].image = fourthCategoryImage;

        this.categoriesFirstColumn[0].caption = firstCategoryCaption;
        this.categoriesFirstColumn[1].caption = secondCategoryCaption;
        this.categoriesSecondColumn[0].caption = thirdCategoryCaption;
        this.categoriesSecondColumn[1].caption = fourthCategoryCaption;
    }

    render() {
        const {
            'block-image': blockImage,
            'block-image-url': blockImageUrl,
            'block-title': blockTitle,
            'block-subtitle': blockSubtitle,
            'block-button-text': blockButtonText,
            'block-button-url': blockButtonUrl,
            'shop-button-url': shopButtonUrl,
            'shop-button-text': shopButtonText
        } = this.props;

        return (
            <CategoryBlockWidget
              blockImage={ blockImage }
              blockImageUrl={ blockImageUrl }
              blockTitle={ blockTitle }
              blockSubtitle={ blockSubtitle }
              blockButtonText={ blockButtonText }
              blockButtonUrl={ blockButtonUrl }
              shopButtonUrl={ shopButtonUrl }
              shopButtonText={ shopButtonText }
              categoriesFirstColumn={ this.categoriesFirstColumn }
              categoriesSecondColumn={ this.categoriesSecondColumn }
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryBlockWidgetContainer);
