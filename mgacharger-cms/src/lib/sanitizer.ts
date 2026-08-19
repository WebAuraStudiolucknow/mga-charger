import sanitizeHtml from 'sanitize-html'

export function sanitizeBlogHtml(rawHtml: string): string {
  if (!rawHtml || typeof rawHtml !== 'string') {
    return ''
  }

  return sanitizeHtml(rawHtml, {
    allowedTags: [
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'blockquote', 'p', 'a', 'ul', 'ol', 'nl', 'li',
      'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br', 'div',
      'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre',
      'img', 'figure', 'figcaption', 'span', 'sub', 'sup', 'mark'
    ],
    allowedAttributes: {
      a: ['href', 'name', 'target', 'rel', 'title', 'class'],
      img: ['src', 'srcset', 'alt', 'title', 'width', 'height', 'loading', 'class'],
      table: ['colspan', 'rowspan', 'border', 'align', 'valign', 'class'],
      th: ['colspan', 'rowspan', 'align', 'valign', 'class'],
      td: ['colspan', 'rowspan', 'align', 'valign', 'class'],
      div: ['class', 'id'],
      p: ['class'],
      h1: ['class', 'id'],
      h2: ['class', 'id'],
      h3: ['class', 'id'],
      h4: ['class', 'id'],
      span: ['class'],
      code: ['class'],
      pre: ['class'],
    },
    allowedSchemes: ['http', 'https', 'data', 'mailto'],
    allowedSchemesByTag: {
      img: ['http', 'https', 'data'],
    },
    allowedClasses: {
      '*': ['*'],
    },
    transformTags: {
      a: (tagName, attribs) => {
        // Ensure external links open in new tab securely
        if (attribs.href && (attribs.href.startsWith('http://') || attribs.href.startsWith('https://'))) {
          return {
            tagName: 'a',
            attribs: {
              ...attribs,
              target: '_blank',
              rel: 'noopener noreferrer',
            },
          }
        }
        return { tagName, attribs }
      },
    },
    nonTextTags: ['script', 'style', 'textarea', 'option', 'noscript', 'iframe', 'object', 'embed', 'form'],
  }).trim()
}
