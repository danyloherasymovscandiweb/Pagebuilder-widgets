/* eslint-disable @scandipwa/scandipwa-guidelines/jsx-no-props-destruction */
/**
 * @author    Mariia Shulezhko <mariia.shulezhko@scandiweb.com | info@scandiweb.com>
 * @license   http://opensource.org/licenses/OSL-3.0 The Open Software License 3.0 (OSL-3.0)
 * @copyright Copyright (c) 2022 Scandiweb, Inc (https://scandiweb.com)
 */

import DataContainer from 'Util/Request/DataContainer';

import { CategoryCardsWidgetComponent as CategoryCardsWidget } from './CategoryCardsWidget.component';

/** @namespace Scandipwa/Component/CategoryCardsWidget/Container */
export class CategoryCardsWidgetContainer extends DataContainer {
    render() {
        return (
            <CategoryCardsWidget
              { ...this.props }
            />
        );
    }
}

export default CategoryCardsWidgetContainer;
