import { memo } from 'react';
import {
  VKShareButton,
  FacebookShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  VKIcon,
  FacebookIcon,
  WhatsappIcon,
  TelegramIcon,
} from 'react-share';
import './SocialShareWidget.css';

const socials = [
  { outlet: VKShareButton, icon: VKIcon },
  { outlet: FacebookShareButton, icon: FacebookIcon },
  { outlet: WhatsappShareButton, icon: WhatsappIcon },
  { outlet: TelegramShareButton, icon: TelegramIcon },
];

const SocialShareWidget = ({ url, title }) => {
  const renderSocialLink = (ButtonComponent, IconComponent) => {
    return (props) => (
      <ButtonComponent
        className="animation-card hover:translate-y-[-5px]"
        {...props}
      >
        <IconComponent
          size={30}
          round={true}
        />
      </ButtonComponent>
    );
  };

  const socialLinks = socials.map(({ outlet, icon }) =>
    renderSocialLink(outlet, icon)
  );

  return (
    <article className="socials">
      {socialLinks.map((SocialLink, i) => (
        <SocialLink
          key={i}
          url={url}
          title={title}
        />
      ))}
    </article>
  );
};

export default memo(SocialShareWidget);
