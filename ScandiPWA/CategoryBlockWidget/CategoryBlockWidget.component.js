/* eslint-disable max-lines */
/* eslint-disable arrow-body-style */
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import Link from 'Component/Link';

import './CategoryBlockWidget.style';

/** @namespace Scandipwa/Component/CategoryBlockWidget/Component */
export class CategoryBlockWidgetComponent extends PureComponent {
    static propTypes = {
        blockTitle: PropTypes.string.isRequired,
        blockSubtitle: PropTypes.string.isRequired,
        blockImageSrc: PropTypes.string.isRequired,
        blockImageAlt: PropTypes.string.isRequired,
        blockImageTitle: PropTypes.string.isRequired,
        blockImageUrl: PropTypes.string.isRequired,
        blockButtonText: PropTypes.string.isRequired,
        blockButtonUrl: PropTypes.string.isRequired,
        firstCategoryImageSrc: PropTypes.string.isRequired,
        firstCategoryImageAlt: PropTypes.string.isRequired,
        firstCategoryImageTitle: PropTypes.string.isRequired,
        firstCategoryUrl: PropTypes.string.isRequired,
        firstCategoryCaption: PropTypes.string.isRequired,
        secondCategoryImageSrc: PropTypes.string.isRequired,
        secondCategoryImageAlt: PropTypes.string.isRequired,
        secondCategoryImageTitle: PropTypes.string.isRequired,
        secondCategoryUrl: PropTypes.string.isRequired,
        secondCategoryCaption: PropTypes.string.isRequired,
        thirdCategoryImageSrc: PropTypes.string.isRequired,
        thirdCategoryImageAlt: PropTypes.string.isRequired,
        thirdCategoryImageTitle: PropTypes.string.isRequired,
        thirdCategoryUrl: PropTypes.string.isRequired,
        thirdCategoryCaption: PropTypes.string.isRequired,
        fourthCategoryImageSrc: PropTypes.string.isRequired,
        fourthCategoryImageAlt: PropTypes.string.isRequired,
        fourthCategoryImageTitle: PropTypes.string.isRequired,
        fourthCategoryUrl: PropTypes.string.isRequired,
        fourthCategoryCaption: PropTypes.string.isRequired,
        shopButtonUrl: PropTypes.string.isRequired,
        shopButtonText: PropTypes.string.isRequired
    };

    renderBlockImage() {
        const {
            blockImageSrc,
            blockImageAlt,
            blockImageTitle,
            blockImageUrl,
            blockButtonText,
            blockButtonUrl
        } = this.props;

        return (
            <div block="CategoryBlock" elem="ColumnBanner">
                <figure block="CategoryBlock" elem="ImagePlaceholder">
                    <Link to={ blockImageUrl }>
                        <img
                          block="CategoryBlock"
                          elem="Image"
                          src={ blockImageSrc }
                          alt={ blockImageAlt }
                          title={ blockImageTitle }
                        />
                    </Link>
                </figure>
                <div block="CategoryBlock" elem="ButtonHolder">
                    <div block="CategoryBlock" elem="ButtonItem">
                        <Link to={ blockButtonUrl } block="CategoryBlock" elem="Button">
                            <span block="CategoryBlock" elem="ButtonText">{ blockButtonText }</span>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    renderBlockTitle() {
        const {
            blockTitle,
            blockSubtitle
        } = this.props;

        return (
            <div block="CategoryBlock" elem="ColumnGroup">
                <div block="CategoryBlock" elem="ColumnHidden">
                    <span block="CategoryBlock" elem="ColumnInv">a</span>
                </div>
                <div block="CategoryBlock" elem="ColumnVisible">
                    <div block="CategoryBlock" elem="TitleBlock">
                        <p block="CategoryBlock" elem="TitleP">
                            <span block="CategoryBlock" elem="Title">{ blockTitle }</span>
                        </p>
                        <p block="CategoryBlock" elem="SubtitleP">
                            <span block="CategoryBlock" elem="Subtitle">{ blockSubtitle }</span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    renderCategoriesFirstGrid() {
        const {
            firstCategoryImageSrc,
            firstCategoryImageAlt,
            firstCategoryImageTitle,
            firstCategoryUrl,
            firstCategoryCaption,
            secondCategoryImageSrc,
            secondCategoryImageAlt,
            secondCategoryImageTitle,
            secondCategoryUrl,
            secondCategoryCaption
        } = this.props;

        return (
            <div block="CategoryBlock" elem="ColumnFirstGrid">
                <div block="CategoryBlock" elem="CategoryHolder">
                    <Link
                      block="CategoryBlock"
                      elem="CategoryImageLink"
                      to={ firstCategoryUrl }
                    >
                        <img
                          block="CategoryBlock"
                          elem="CategoryImage"
                          src={ firstCategoryImageSrc }
                          alt={ firstCategoryImageAlt }
                          title={ firstCategoryImageTitle }
                        />
                        <figcaption
                          block="CategoryBlock"
                          elem="CategoryCaption"
                        >
                              { firstCategoryCaption }
                        </figcaption>
                    </Link>
                </div>
                <div block="CategoryBlock" elem="CategoryHolder">
                    <Link
                      block="CategoryBlock"
                      elem="CategoryImageLink"
                      to={ secondCategoryUrl }
                    >
                        <img
                          block="CategoryBlock"
                          elem="CategoryImage"
                          src={ secondCategoryImageSrc }
                          alt={ secondCategoryImageAlt }
                          title={ secondCategoryImageTitle }
                        />
                        <figcaption
                          block="CategoryBlock"
                          elem="CategoryCaption"
                        >
                              { secondCategoryCaption }
                        </figcaption>
                    </Link>
                </div>
            </div>
        );
    }

    renderCategoriesSecondGrid() {
        const {
            thirdCategoryImageSrc,
            thirdCategoryImageAlt,
            thirdCategoryImageTitle,
            thirdCategoryUrl,
            thirdCategoryCaption,
            fourthCategoryImageSrc,
            fourthCategoryImageAlt,
            fourthCategoryImageTitle,
            fourthCategoryUrl,
            fourthCategoryCaption
        } = this.props;

        return (
            <div block="CategoryBlock" elem="ColumnFirstGrid">
                <div block="CategoryBlock" elem="CategoryHolder">
                    <Link
                      block="CategoryBlock"
                      elem="CategoryImageLink"
                      to={ thirdCategoryUrl }
                    >
                        <img
                          block="CategoryBlock"
                          elem="CategoryImage"
                          src={ thirdCategoryImageSrc }
                          alt={ thirdCategoryImageAlt }
                          title={ thirdCategoryImageTitle }
                        />
                        <figcaption
                          block="CategoryBlock"
                          elem="CategoryCaption"
                        >
                              { thirdCategoryCaption }
                        </figcaption>
                    </Link>
                </div>
                <div block="CategoryBlock" elem="CategoryHolder">
                    <Link
                      block="CategoryBlock"
                      elem="CategoryImageLink"
                      to={ fourthCategoryUrl }
                    >
                        <img
                          block="CategoryBlock"
                          elem="CategoryImage"
                          src={ fourthCategoryImageSrc }
                          alt={ fourthCategoryImageAlt }
                          title={ fourthCategoryImageTitle }
                        />
                        <figcaption
                          block="CategoryBlock"
                          elem="CategoryCaption"
                        >
                              { fourthCategoryCaption }
                        </figcaption>
                    </Link>
                </div>
            </div>
        );
    }

    renderShopButton() {
        const {
            shopButtonUrl,
            shopButtonText
        } = this.props;

        return (
            <div block="CategoryBlock" elem="ShopButtonHolder">
                <div block="CategoryBlock" elem="ShopButtonItem">
                    <Link to={ shopButtonUrl } block="CategoryBlock" elem="ShopButton">
                        <span block="CategoryBlock" elem="ShopButtonText">{ shopButtonText }</span>
                    </Link>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div block="CategoryBlock">
                { this.renderBlockTitle() }
                <div block="CategoryBlock" elem="ColumnGroup">
                    { this.renderBlockImage() }
                    { this.renderCategoriesFirstGrid() }
                    { this.renderCategoriesSecondGrid() }
                </div>
                { this.renderShopButton() }
            </div>
        );
    }
}

export default CategoryBlockWidgetComponent;
