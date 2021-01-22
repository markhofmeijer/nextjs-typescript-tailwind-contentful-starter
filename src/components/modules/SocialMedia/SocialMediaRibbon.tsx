import React from "react"

import { IAppDataProps } from "@/types/app"

const SocialMediaRibbon: React.FC<IAppDataProps> = ({ data }) => {
  const { metaData } = data
  console.log(metaData)

  return (
    <div className="border border-red-400 flex">
      {metaData.clientSocialMediaFacebook ? <div>facebook</div> : null}
      {metaData.clientSocialMediaInstagram ? <div>insta</div> : null}
      {metaData.clientSocialMediaLinkedIn ? <div>linkedin</div> : null}
      {metaData.clientSocialMediaTwitter ? <div>twitter</div> : null}
      {metaData.clientSocialMediaYouTube ? <div>YT</div> : null}
      {metaData.clientWebshop ? <div>shop</div> : null}
    </div>
  )
}

export { SocialMediaRibbon }
