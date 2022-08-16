/* eslint-disable react/no-unused-state */
/* eslint-disable @scandipwa/scandipwa-guidelines/only-render-in-component */
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import Link from 'Component/Link';

import './NewsletterBlockWidget.style';

/** @namespace Scandipwa/Component/NewsletterBlockWidget/Component */
export class NewsletterBlockWidgetComponent extends PureComponent {
    static propTypes = {
        blockTitle: PropTypes.string.isRequired,
        blockSubtitle: PropTypes.string.isRequired,
        emailIconSrc: PropTypes.string.isRequired,
        emailIconAlt: PropTypes.string.isRequired,
        emailIconTitle: PropTypes.string.isRequired,
        inputText: PropTypes.string.isRequired,
        buttonText: PropTypes.string.isRequired,
        rulesGeneralText: PropTypes.string.isRequired,
        rulesFirstUrl: PropTypes.string.isRequired,
        rulesSecondUrl: PropTypes.string.isRequired,
        subscribeEmail: PropTypes.func.isRequired,
        rulesFirstText: PropTypes.string.isRequired,
        rulesSecondText: PropTypes.string.isRequired
    };

    __construct(props) {
        super.__construct(props);

        this.state = {
            email: '',
            tacChecked: false,
            formSubmitted: false
        };
    }

    onEmailChange = (email) => {
        this.setState({ email });
    };

    onCheckboxChange = () => {
        this.setState(({ tacChecked }) => (
            { tacChecked: !tacChecked }
        ));
    };

    onFormSubmit = () => {
        const { subscribeEmail } = this.props;
        const { email, tacChecked } = this.state;

        if (!tacChecked) {
            return;
        }

        this.setState({ formSubmitted: true });
        subscribeEmail(email);
    };

    renderTitle() {
        const {
            blockTitle
        } = this.props;

        return (
            <div block="Newsletter" elem="TitleWrapper">
                <span block="Newsletter" elem="Title">
                    { blockTitle }
                </span>
            </div>
        );
    }

    renderSubtitle() {
        const {
            blockSubtitle
        } = this.props;

        return (
            <div block="Newsletter" elem="SubtitleWrapper">
                <div block="Newsletter" elem="SubtitlePlaceholder">
                    <p block="Newsletter" elem="SubtitleText">
                        { blockSubtitle }
                    </p>
                </div>
            </div>
        );
    }

    renderNewsletterActions() {
        const {
            inputText,
            buttonText,
            rulesGeneralText,
            rulesFirstText,
            rulesSecondText,
            rulesFirstUrl,
            rulesSecondUrl,
            emailIconSrc,
            emailIconAlt,
            emailIconTitle
        } = this.props;

        const { email, tacChecked } = this.state;

        return (
            <div block="Newsletter" elem="ActionsWrapper">
                <div block="Newsletter" elem="Actions">
                    <form block="Newsletter" elem="Form">
                        <div block="Newsletter" elem="FormIcon">
                            <img
                              src={ emailIconSrc }
                              alt={ emailIconAlt }
                              title={ emailIconTitle }
                            />
                        </div>
                        <div block="Newsletter" elem="FormFieldEmail">
                            <input
                              id="email"
                              name="email"
                              type="text"
                              isRequired
                              validation={ ['notEmpty', 'email'] }
                              value={ email }
                              placeholder={ inputText }
                              onChange={ this.onEmailChange }
                              block="Newsletter"
                              elem="FormFieldInput"
                            />
                        </div>
                        <div block="Newsletter" elem="FormSubmit">
                            <button
                              disabled={ !tacChecked }
                              block="Newsletter"
                              elem="FormSubmitButton"
                              type="submit"
                              id="submitButton"
                              checked={ tacChecked }
                              onChange={ this.onCheckboxChange }
                            >
                                { buttonText }
                            </button>
                        </div>
                    </form>
                    <div block="Newsletter" elem="Line"> </div>
                    <div block="Newsletter" elem="TACWrapper">
                        <div block="Newsletter" elem="CheckboxField">
                            <label htmlFor="termsAndConditions" block="Newsletter" elem="Label">
                                <input
                                  id="termsAndConditions"
                                  name="termsAndConditions"
                                  type="checkbox"
                                  block="Newsletter"
                                  elem="Checkbox"
                                  onChange={ this.onCheckboxChange }
                                />
                                <span block="Newsletter" elem="Checkmark" />
                            </label>
                        </div>
                        <label htmlFor="email" block="Newsletter" elem="TACLabel">
                            <span block="Newsletter" elem="TACText">
                                { rulesGeneralText }
                                <Link to={ rulesFirstUrl } block="Newsletter" elem="TACLink">
                                    { rulesFirstText }
                                </Link>
                                <Link to={ rulesSecondUrl } block="Newsletter" elem="TACLink">
                                   { rulesSecondText }
                                </Link>
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div block="Newsletter">
                <div block="Newsletter" elem="Wrapper">
                    { this.renderTitle() }
                    { this.renderSubtitle() }
                    { this.renderNewsletterActions() }
                </div>
            </div>
        );
    }
}

export default NewsletterBlockWidgetComponent;
