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
        'block-title': PropTypes.string.isRequired,
        'block-subtitle': PropTypes.string.isRequired,
        'input-text': PropTypes.string.isRequired,
        'submit-button-text': PropTypes.string.isRequired,
        'rules-text': PropTypes.string.isRequired,
        'rules-firts-url': PropTypes.string.isRequired,
        'rules-second-url': PropTypes.string.isRequired
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
            'block-title': blockTitle,
            'block-subtitle': blockSubtitle,
            'input-text': inputText,
            'submit-button-text': buttonText,
            'rules-text': rulesText,
            'rules-firts-url': rulesFirstUrl,
            'rules-second-url': rulesSecondUrl
        } = this.props;

        return (
            <NewsletterBlockWidget
              blockTitle={ blockTitle }
              blockSubtitle={ blockSubtitle }
              inputText={ inputText }
              buttonText={ buttonText }
              rulesText={ rulesText }
              rulesFirstUrl={ rulesFirstUrl }
              rulesSecondUrl={ rulesSecondUrl }
              { ...this.containerProps() }
              { ...this.containerFunctions() }
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsletterBlockWidgetContainer);
