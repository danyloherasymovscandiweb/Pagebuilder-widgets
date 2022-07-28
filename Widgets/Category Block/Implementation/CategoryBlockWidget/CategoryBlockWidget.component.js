/* eslint-disable arrow-body-style */
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import Link from 'Component/Link';

import './CategoryBlockWidget.style';

/** @namespace Scandipwa/Component/CategoryBlockWidget/Component */
export class CategoryBlockWidgetComponent extends PureComponent {
    static propTypes = {
        blockImage: PropTypes.string.isRequired,
        blockImageUrl: PropTypes.string.isRequired,
        blockTitle: PropTypes.string.isRequired,
        blockSubtitle: PropTypes.string.isRequired,
        blockButtonText: PropTypes.string.isRequired,
        blockButtonUrl: PropTypes.string.isRequired,
        shopButtonUrl: PropTypes.string.isRequired,
        shopButtonText: PropTypes.string.isRequired,
        categoriesFirstColumn: PropTypes.arrayOf(
            PropTypes.shape({
                link: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                caption: PropTypes.string.isRequired
            }).isRequired
        ).isRequired,
        categoriesSecondColumn: PropTypes.arrayOf(
            PropTypes.shape({
                link: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                caption: PropTypes.string.isRequired
            }).isRequired
        ).isRequired
    };

    renderBlockImage() {
        const {
            blockImage,
            blockImageUrl,
            blockButtonText,
            blockButtonUrl
        } = this.props;

        return (
            <div block="CategoryBlock" elem="ColumnBanner">
                <figure block="CategoryBlock" elem="ImagePlaceholder">
                    <Link to={ blockImageUrl }>
                        <img block="CategoryBlock" elem="Image" src={ blockImage } alt={ blockImage } />
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
            categoriesFirstColumn
        } = this.props;

        return (
            <div block="CategoryBlock" elem="ColumnFirstGrid">
                { categoriesFirstColumn.map(({ link, image, caption }, index) => {
                    return (
                        <figure block="CategoryBlock" elem="CategoryHolder" key={ `${ index + 1 }.` }>
                            <Link block="CategoryBlock" elem="CategoryImageLink" to={ link }>
                                <img block="CategoryBlock" elem="CategoryImage" src={ image } alt={ image } />
                                <figcaption block="CategoryBlock" elem="CategoryCaption">{ caption }</figcaption>
                            </Link>
                        </figure>
                    );
                }) }
            </div>
        );
    }

    renderCategoriesSecondGrid() {
        const {
            categoriesSecondColumn
        } = this.props;

        return (
            <div block="CategoryBlock" elem="ColumnSecondGrid">
                { categoriesSecondColumn.map(({ link, image, caption }, index) => {
                    return (
                        <figure block="CategoryBlock" elem="CategoryHolder" key={ `${ index + 1 }.` }>
                            <Link block="CategoryBlock" elem="CategoryImageLink" to={ link }>
                                <img block="CategoryBlock" elem="CategoryImage" src={ image } alt={ image } />
                                <figcaption block="CategoryBlock" elem="CategoryCaption">{ caption }</figcaption>
                            </Link>
                        </figure>
                    );
                }) }
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
