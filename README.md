This library provides some methods to easilly scrape legislator videos from C-SPAN.

# Installation
`npm install -S cspanvideos`

# Usage

### Available Methods
`fetchVideoData`: Gathers a list of videos for a specific legislator.

Example:

```javascript
var cspanvideos = require('cspanvideos');

cspanvideos.fetchVideoData("Marco Rubio")
  .then((data) => {
    // Do something with data
  });

```

Where `data` results in the following being returned:

```javascript
[ { thumbnail: 'https://images.c-span.org/Files/e03/20170926170753010_hd.jpg/Thumbs/height.182.no_border.width.320.jpg',
    title: 'Senator Rubio News Conference on Puerto Rico Hurricane Relief',
    date: 'September 26, 2017',
    video_url: '//www.c-span.org/video/?434703-1/senator-rubio-holds-news-conference-puerto-rico-hurricane-relief',
    embed_url: '//www.c-span.org/video/?434703-1' },
  { thumbnail: 'https://images.c-span.org/Files/77f/20170711172531002_hd.jpg/Thumbs/height.182.no_border.width.320.jpg',
    title: 'Senate Session, Part 2',
    date: 'September 26, 2017',
    video_url: '//www.c-span.org/video/?434667-2/us-senate-meets-legislative-business',
    embed_url: '//www.c-span.org/video/?434667-2' },
  { thumbnail: 'https://images.c-span.org/Files/77f/20170711172531002_hd.jpg/Thumbs/height.182.no_border.width.320.jpg',
    title: 'Senate Session, Part 2',
    date: 'September 19, 2017',
    video_url: '//www.c-span.org/video/?434275-2/us-senate-debates-nlrb-nomination',
    embed_url: '//www.c-span.org/video/?434275-2' },
  { thumbnail: 'https://images.c-span.org/Files/297/20170911212213012_hd.jpg/Thumbs/height.182.no_border.width.320.jpg',
    title: 'Coast Guard Key West Flyover',
    date: 'September 11, 2017',
    video_url: '//www.c-span.org/video/?433944-1/coast-guard-key-west-flyover',
    embed_url: '//www.c-span.org/video/?433944-1' },
  { thumbnail: 'https://images.c-span.org/Files/77f/20170711172531002_hd.jpg/Thumbs/height.182.no_border.width.320.jpg',
    title: 'Senate Session',
    date: 'August 2, 2017',
    video_url: '//www.c-span.org/video/?432035-1/us-senate-takes-nlrb-nomination',
    embed_url: '//www.c-span.org/video/?432035-1' },
  { thumbnail: 'https://images.c-span.org/Files/ab3/20170720105706003_hd.jpg/Thumbs/height.182.no_border.width.320.jpg',
    title: 'Ambassador Confirmations',
    date: 'July 20, 2017',
    video_url: '//www.c-span.org/video/?431543-1/senate-foreign-relations-committee-takes-nato-canada-uk-nominations',
    embed_url: '//www.c-span.org/video/?431543-1' } ]
```