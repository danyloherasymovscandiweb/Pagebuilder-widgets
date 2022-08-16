/* eslint-disable @scandipwa/scandipwa-guidelines/jsx-no-props-destruction */
/* eslint-disable no-magic-numbers */
import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import { connect } from 'react-redux';

import NewsletterBlockWidget from './NewsletterBlockWidget.component';

/** @namespace Scandipwa/Component/NewsletterBlockWidget/Container/mapStateToProps */
export const mapStateToProps = () => ({});

/** @namespace Scandipwa/Component/NewsletterBlockWidget/Container/mapDispatchToProps */
export const mapDispatchToProps = () => ({});

/** @namespace Scandipwa/Component/NewsletterBlockWidget/Container */
export class NewsletterBlockWidgetContainer extends PureComponent {
    static propTypes = {
        'data-block-title': PropTypes.string.isRequired,
        'data-block-subtitle': PropTypes.string.isRequired,
        'data-email-icon-src': PropTypes.string.isRequired,
        'data-email-icon-alt': PropTypes.string.isRequired,
        'data-email-icon-title': PropTypes.string.isRequired,
        'data-input-text': PropTypes.string.isRequired,
        'data-submit-button-text': PropTypes.string.isRequired,
        'data-rules-general-text': PropTypes.string.isRequired,
        'data-rules-first-url': PropTypes.string.isRequired,
        'data-rules-first-text': PropTypes.string.isRequired,
        'data-rules-second-url': PropTypes.string.isRequired,
        'data-rules-second-text': PropTypes.string.isRequired
    };

    __construct(props) {
        super.__construct(props);

        this.state = {
            // 0: Form is visible
            // 1: Success message is visible
            // 2: Error message is visible
            subscriptionStatus: 0
        };
    }

    containerProps = () => {
        const { subscriptionStatus } = this.state;

        return {
            subscriptionStatus
        };
    };

    containerFunctions = () => ({
        subscribeEmail: this.subscribeEmail.bind(this)
    });

    /**
     * Creates a specific request with given email to subscribe it to the
     * appropriate list on Klaviyo. Then calls a fetch function and waits
     * for a response. Appropriately updates 'subscriptionStatus' state.
     * @param {String} email email which will be subscribed to the newsletter
     */
    subscribeEmail = (email) => {
    /**
     * Here you can implement the query you need for your project specifically
     * */

        const request = new XMLHttpRequest();
        request.open('POST', 'https://scandiweb.com/');
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({
            query: `${ email }`
        }));
    };

    render() {
        const {
            'data-block-title': blockTitle,
            'data-block-subtitle': blockSubtitle,
            'data-email-icon-src': emailIconSrc,
            'data-email-icon-alt': emailIconAlt,
            'data-email-icon-title': emailIconTitle,
            'data-input-text': inputText,
            'data-submit-button-text': buttonText,
            'data-rules-general-text': rulesGeneralText,
            'data-rules-first-url': rulesFirstUrl,
            'data-rules-first-text': rulesFirstText,
            'data-rules-second-url': rulesSecondUrl,
            'data-rules-second-text': rulesSecondText
        } = this.props;

        return (
            <NewsletterBlockWidget
              blockTitle={ blockTitle }
              blockSubtitle={ blockSubtitle }
              inputText={ inputText }
              buttonText={ buttonText }
              rulesGeneralText={ rulesGeneralText }
              rulesFirstUrl={ rulesFirstUrl }
              rulesSecondUrl={ rulesSecondUrl }
              emailIconSrc={ emailIconSrc }
              emailIconAlt={ emailIconAlt }
              emailIconTitle={ emailIconTitle }
              rulesFirstText={ rulesFirstText }
              rulesSecondText={ rulesSecondText }
              { ...this.containerProps() }
              { ...this.containerFunctions() }
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsletterBlockWidgetContainer);
