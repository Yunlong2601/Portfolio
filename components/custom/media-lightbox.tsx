'use client'

import * as React from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Expand } from 'lucide-react'

type MediaLightboxProps = {
  /** Thumbnail media shown in the card */
  src: string
  /** Optional alternate media shown in popup (e.g. higher-res image/video) */
  popupSrc?: string
  /** "image" or "video" - auto-detect if omitted */
  type?: 'image' | 'video'
  /** Accessible label + popup title */
  title: string
  /** For <Image /> alt text */
  alt?: string
  /** Thumbnail size */
  thumbClassName?: string
  /** Popup size */
  contentClassName?: string
}

const isVideo = (url: string) => /\.(mp4|webm|ogg)$/i.test(url)

export default function MediaLightbox({
  src,
  popupSrc,
  type,
  title,
  alt,
  thumbClassName = 'relative w-full aspect-video overflow-hidden rounded-xl border bg-muted',
  contentClassName = 'max-w-4xl',
}: MediaLightboxProps) {
  const resolvedSrc = popupSrc || src
  const resolvedType: 'image' | 'video' = type ? type : isVideo(resolvedSrc) ? 'video' : 'image'

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className={`${thumbClassName} group text-left`}
          aria-label={`Open ${title} media preview`}
        >
          {/* Thumbnail */}
          {resolvedType === 'video' ? (
            <video
              src={src}
              className="h-full w-full object-cover"
              muted
              playsInline
              preload="metadata"
            />
          ) : (
            <Image
              src={src}
              alt={alt || title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={false}
            />
          )}

          {/* Hover overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 transition group-hover:opacity-100" />
          <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex items-center justify-between">
            <div className="text-white">
              <div className="text-sm font-semibold">{title}</div>
              <div className="text-xs opacity-90">Click to enlarge</div>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs text-white backdrop-blur">
              <Expand className="h-4 w-4" />
              View
            </div>
          </div>
        </button>
      </DialogTrigger>

      <DialogContent className={`${contentClassName} p-0 overflow-hidden`}>
        <DialogHeader className="px-6 pt-6">
          <DialogTitle className="text-lg">{title}</DialogTitle>
        </DialogHeader>

        <div className="relative w-full">
          {resolvedType === 'video' ? (
            <video
              src={resolvedSrc}
              className="h-[70vh] w-full bg-black object-contain"
              controls
              playsInline
              preload="metadata"
            />
          ) : (
            <div className="relative h-[70vh] w-full bg-black">
              <Image
                src={resolvedSrc}
                alt={alt || title}
                fill
                className="object-contain"
                sizes="100vw"
                priority={false}
              />
            </div>
          )}
        </div>

        <div className="flex justify-end px-6 pb-6">
          <Button variant="secondary" type="button">
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
