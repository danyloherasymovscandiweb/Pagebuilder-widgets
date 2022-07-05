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
        'block-title': PropTypes.string.isRequired,
        'block-slogan': PropTypes.string.isRequired,
        'facebook-title': PropTypes.string.isRequired,
        'facebook-link': PropTypes.string.isRequired,
        'tiktok-title': PropTypes.string.isRequired,
        'tiktok-link': PropTypes.string.isRequired,
        'instagram-title': PropTypes.string.isRequired,
        'instagram-link': PropTypes.string.isRequired,
        'youtube-title': PropTypes.string.isRequired,
        'youtube-link': PropTypes.string.isRequired,
        'twitter-title': PropTypes.string.isRequired,
        'twitter-link': PropTypes.string.isRequired
    };

    socialMedia = [
        {
            text: '',
            link: '',
            icon: '/media/wysiwyg/social_block/facebook-app-symbol.png'
        },
        {
            text: '',
            link: '',
            icon: '/media/wysiwyg/social_block/tik-tok.png'
        },
        {
            text: '',
            link: '',
            icon: '/media/wysiwyg/social_block/instagram.png'
        },
        {
            text: '',
            link: '',
            icon: '/media/wysiwyg/social_block/youtube.png'
        },
        {
            text: '',
            link: '',
            icon: '/media/wysiwyg/social_block/twitter-sign.png'
        }
    ];

    __construct(props) {
        super.__construct(props);

        const {
            'facebook-title': facebookText,
            'facebook-link': facebookLink,
            'tiktok-title': tiktokText,
            'tiktok-link': tiktokLink,
            'instagram-title': instagramText,
            'instagram-link': instagramLink,
            'youtube-title': youtubeText,
            'youtube-link': youtubeLink,
            'twitter-title': twitterText,
            'twitter-link': twitterLink
        } = this.props;

        this.socialMedia[0].text = facebookText;
        this.socialMedia[1].text = tiktokText;
        this.socialMedia[2].text = instagramText;
        this.socialMedia[3].text = youtubeText;
        this.socialMedia[4].text = twitterText;

        this.socialMedia[0].link = facebookLink;
        this.socialMedia[1].link = tiktokLink;
        this.socialMedia[2].link = instagramLink;
        this.socialMedia[3].link = youtubeLink;
        this.socialMedia[4].link = twitterLink;
    }

    render() {
        const {
            'block-title': blockTitle,
            'block-slogan': blockSlogan
        } = this.props;

        return (
            <SocialBlockWidget
              blockTitle={ blockTitle }
              blockSlogan={ blockSlogan }
              socialMedia={ this.socialMedia }
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SocialBlockWidgetContainer);
