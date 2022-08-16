/* eslint-disable no-magic-numbers */
import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import { connect } from 'react-redux';

import SocialBlockWidget from './SocialBlockWidget.component';

/** @namespace Scandipwa/Component/SocialBlockWidget/Container/mapStateToProps */
export const mapStateToProps = () => ({});

/** @namespace Scandipwa/Component/SocialBlockWidget/Container/mapDispatchToProps */
export const mapDispatchToProps = () => ({});

/** @namespace Scandipwa/Component/SocialBlockWidget/Container */
export class SocialBlockWidgetContainer extends PureComponent {
    static propTypes = {
        'data-block-title': PropTypes.string.isRequired,
        'data-block-slogan': PropTypes.string.isRequired,
        'data-first-icon-src': PropTypes.string.isRequired,
        'data-first-icon-alt': PropTypes.string.isRequired,
        'data-first-icon-title': PropTypes.string.isRequired,
        'data-first-url': PropTypes.string.isRequired,
        'data-first-caption': PropTypes.string.isRequired,
        'data-second-icon-src': PropTypes.string.isRequired,
        'data-second-icon-alt': PropTypes.string.isRequired,
        'data-second-icon-title': PropTypes.string.isRequired,
        'data-second-url': PropTypes.string.isRequired,
        'data-second-caption': PropTypes.string.isRequired,
        'data-third-icon-src': PropTypes.string.isRequired,
        'data-third-icon-alt': PropTypes.string.isRequired,
        'data-third-icon-title': PropTypes.string.isRequired,
        'data-third-url': PropTypes.string.isRequired,
        'data-third-caption': PropTypes.string.isRequired,
        'data-fourth-icon-src': PropTypes.string.isRequired,
        'data-fourth-icon-alt': PropTypes.string.isRequired,
        'data-fourth-icon-title': PropTypes.string.isRequired,
        'data-fourth-url': PropTypes.string.isRequired,
        'data-fourth-caption': PropTypes.string.isRequired,
        'data-fifth-icon-src': PropTypes.string.isRequired,
        'data-fifth-icon-alt': PropTypes.string.isRequired,
        'data-fifth-icon-title': PropTypes.string.isRequired,
        'data-fifth-url': PropTypes.string.isRequired,
        'data-fifth-caption': PropTypes.string.isRequired
    };

    render() {
        const {
            'data-block-title': blockTitle,
            'data-block-slogan': blockSlogan,
            'data-first-icon-src': firstIconSrc,
            'data-first-icon-alt': firstIconAlt,
            'data-first-icon-title': firstIconTitle,
            'data-first-url': firstUrl,
            'data-first-caption': firstCaption,
            'data-second-icon-src': secondIconSrc,
            'data-second-icon-alt': secondIconAlt,
            'data-second-icon-title': secondIconTitle,
            'data-second-url': secondUrl,
            'data-second-caption': secondCaption,
            'data-third-icon-src': thirdIconSrc,
            'data-third-icon-alt': thirdIconAlt,
            'data-third-icon-title': thirdIconTitle,
            'data-third-url': thirdUrl,
            'data-third-caption': thirdCaption,
            'data-fourth-icon-src': fourthIconSrc,
            'data-fourth-icon-alt': fourthIconAlt,
            'data-fourth-icon-title': fourthIconTitle,
            'data-fourth-url': fourthUrl,
            'data-fourth-caption': fourthCaption,
            'data-fifth-icon-src': fifthIconSrc,
            'data-fifth-icon-alt': fifthIconAlt,
            'data-fifth-icon-title': fifthIconTitle,
            'data-fifth-url': fifthUrl,
            'data-fifth-caption': fifthCaption
        } = this.props;

        return (
            <SocialBlockWidget
              blockTitle={ blockTitle }
              blockSlogan={ blockSlogan }
              firstIconSrc={ firstIconSrc }
              firstIconAlt={ firstIconAlt }
              firstIconTitle={ firstIconTitle }
              firstUrl={ firstUrl }
              firstCaption={ firstCaption }
              secondIconSrc={ secondIconSrc }
              secondIconAlt={ secondIconAlt }
              secondIconTitle={ secondIconTitle }
              secondUrl={ secondUrl }
              secondCaption={ secondCaption }
              thirdIconSrc={ thirdIconSrc }
              thirdIconAlt={ thirdIconAlt }
              thirdIconTitle={ thirdIconTitle }
              thirdUrl={ thirdUrl }
              thirdCaption={ thirdCaption }
              fourthIconSrc={ fourthIconSrc }
              fourthIconAlt={ fourthIconAlt }
              fourthIconTitle={ fourthIconTitle }
              fourthUrl={ fourthUrl }
              fourthCaption={ fourthCaption }
              fifthIconSrc={ fifthIconSrc }
              fifthIconAlt={ fifthIconAlt }
              fifthIconTitle={ fifthIconTitle }
              fifthUrl={ fifthUrl }
              fifthCaption={ fifthCaption }
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SocialBlockWidgetContainer);
