import React from "react"
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon,
} from "react-share"
import * as S from "./shared-buttons.style"

const ShareButtons = ({ title, url, twitterHandle, tags }) => {
  return (
    <S.Buttons>
      <FacebookShareButton url={url}>
        <FacebookIcon size={40} round={true} />
      </FacebookShareButton>

      <TwitterShareButton
        url={url}
        title={title}
        via={twitterHandle}
        hashtags={tags}
      >
        <TwitterIcon size={40} round={true} />
      </TwitterShareButton>

      <RedditShareButton url={url} title={title}>
        <RedditIcon size={40} round={true} />
      </RedditShareButton>

      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={40} round={true} />
      </WhatsappShareButton>
    </S.Buttons>
  )
}
export default ShareButtons
