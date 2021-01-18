import { Asset } from "contentful"

import { IMediaItem, IMediaImage } from "@/types/media"

export default function mediaParser({ sys, fields }: Asset): IMediaItem {
  const mediaItem: IMediaItem = {
    id: sys.id,
    title: fields.title,
    fileName: fields.file.fileName,
    url: `https:${fields.file.url}`,
    mimeType: fields.file.contentType,
    description: fields.description ?? null,
  }

  switch (fields.file.contentType) {
    case "image/apng":
    case "image/avif":
    case "image/gif":
    case "image/jpeg":
    case "image/png":
    case "image/svg+xml":
    case "image/webp":
      return {
        ...mediaItem,
        dimensions: {
          width: fields.file.details.image.width,
          height: fields.file.details.image.height,
          aspectRatio: fields.file.details.image.width / fields.file.details.image.height,
          orientation:
            fields.file.details.image.width / fields.file.details.image.height > 1
              ? "LANDSCAPE"
              : fields.file.details.image.width / fields.file.details.image.height < 1
              ? "PORTRAIT"
              : "SQUARE",
        },
      } as IMediaImage
    default:
      return mediaItem
  }
}
