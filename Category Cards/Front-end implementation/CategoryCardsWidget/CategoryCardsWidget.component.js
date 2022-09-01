/**
 * @author    Mariia Shulezhko <mariia.shulezhko@scandiweb.com | info@scandiweb.com>
 * @license   http://opensource.org/licenses/OSL-3.0 The Open Software License 3.0 (OSL-3.0)
 * @copyright Copyright (c) 2022 Scandiweb, Inc (https://scandiweb.com)
 */

import PropTypes from 'prop-types';
import { createRef, PureComponent } from 'react';

import Image from 'SourceComponent/Image';
import Link from 'SourceComponent/Link';

import SaleIcon from './img/Sale_icon.png';

import './CategoryCardsWidget.style';

/** @namespace Scandipwa/Component/CategoryCardsWidget/Component */
export class CategoryCardsWidgetComponent extends PureComponent {
    static propTypes = {
        categoryImage: PropTypes.number.isRequired,
        categoryName: PropTypes.string.isRequired,
        categoryCountry: PropTypes.number.isRequired,
        categoryTagline: PropTypes.number.isRequired,
        isSale: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired
    };

    widgetRef = createRef();

    renderImage() {
        const { categoryImage, category } = this.props;

        if (categoryImage && category) {
            return (
            <Link to={ category }>
                <Image
                  mix={ { block: 'CategoryCardsWidget', elem: 'WidgetImage' } }
                  src={ categoryImage }
                  alt={ categoryImage }
                />
            </Link>
            );
        }

        return null;
    }

    renderIsSale() {
        const { isSale } = this.props;

        if (isSale) {
            return (
                <Image
                  mix={ { block: 'CategoryCardsWidget', elem: 'WidgetImage' } }
                  src={ SaleIcon }
                  alt={ SaleIcon }
                />
            );
        }

        return null;
    }

    renderCategoryTagline() {
        const { categoryTagline } = this.props;

        if (categoryTagline) {
            return (
                <div
                  block="Content"
                  elem="ContentBlock"
                >
                   <p>{ categoryTagline }</p>
                </div>
            );
        }

        return null;
    }

    renderCategoryCountry() {
        const { categoryCountry } = this.props;

        if (categoryCountry) {
            return (
                <div
                  block="Content"
                  elem="ContentBlock"
                >
                 <p>
{ ' ' }
{ __('Country') }
:
{ ' ' }
{ categoryCountry }
                 </p>
                </div>
            );
        }

        return null;
    }

    renderTitle() {
        const { categoryName } = this.props;

        if (categoryName) {
            return (
                <h1>{ categoryName }</h1>
            );
        }

        return null;
    }

    render() {
        return (
            <div
              block="CategoryCardsWidget"
              ref={ this.widgetRef }
            >
                { this.renderImage() }
                { this.renderTitle() }
                { this.renderCategoryCountry() }
                { this.renderCategoryTagline() }
                { this.renderIsSale() }
            </div>
        );
    }
}

export default CategoryCardsWidgetComponent;
