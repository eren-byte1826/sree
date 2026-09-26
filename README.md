# Aishi Birthday Website ❤️

A small interactive birthday website made as a personal digital gift for Aishi (Sree).

## Folder structure

```text
aishi-birthday/
├── index.html
├── style.css
├── script.js
├── README.md
├── images/
│   ├── photo1.jpg
│   ├── photo2.jpg
│   ├── photo3.jpg
│   ├── photo4.jpg
│   ├── photo5.jpg
│   └── photo6.jpg
└── music/
    └── song.mp3
```

## Run locally

You do not need a server.

1. Put all the files in the structure above.
2. Put your photos inside `images/`.
3. Put your song inside `music/` and name it `song.mp3`.
4. Double-click `index.html`.
5. Open it in Chrome.

## Customize

Almost everything personal is controlled by the `CONFIG` object at the top of `script.js`.

You can change:

- Opening greeting
- Birthday heading
- Personal letter
- Signature
- Photo captions and filenames
- Six things you like about Sree
- Timeline entries
- Music filename
- Final surprise message
- Secret password
- Secret message

You normally do **not** need to edit the JavaScript below the CONFIG section.

## Photos

Use:

```text
images/photo1.jpg
images/photo2.jpg
images/photo3.jpg
...
```

The filenames must match the paths in `CONFIG.photos`.

For best results, use reasonably compressed JPG/WebP images. Large phone photos can make the site load slowly.

## Music

Put your audio file here:

```text
music/song.mp3
```

The browser will not autoplay it. Sree needs to press the play button.

## GitHub Pages

### 1. Create a repository

Go to GitHub and create a new repository, for example:

```text
aishi-birthday
```

### 2. Upload the files

Upload:

```text
index.html
style.css
script.js
README.md
images/
music/
```

Make sure `index.html` is in the repository root.

### 3. Enable GitHub Pages

Open:

**Repository → Settings → Pages**

Under **Build and deployment**:

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/ (root)`

Save.

GitHub will provide a URL similar to:

```text
https://YOUR-USERNAME.github.io/aishi-birthday/
```

Wait a little for the deployment to finish, then open the URL on your phone.

## Before sending it to Sree

Test these:

- [ ] Opening screen works
- [ ] Enter button works
- [ ] Letter appears correctly
- [ ] All photos load
- [ ] All six cards flip
- [ ] Timeline appears
- [ ] Music plays
- [ ] Final reveal opens
- [ ] Secret password works
- [ ] Website looks good on a phone
- [ ] GitHub Pages URL works in an incognito/private browser

## Important

Keep the folder names exactly as:

```text
images
music
```

And keep:

```text
index.html
style.css
script.js
```

in the same main folder.

Have fun with it. The whole point is that it feels like something you made for one person, not a generic birthday template.
