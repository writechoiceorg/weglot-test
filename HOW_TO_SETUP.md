# How to Set Up the Weglot Test Script

This guide shows you how to create and host a Weglot test script on GitHub Pages.

## What You Need

- A GitHub account
- Access to the `writechoiceorg/weglot-test` repository
- The test API key: `wg_d6ed8d202a37cf434ec7e7d7eb7ae1770`

## Step-by-Step Instructions

### Step 1: Create the Script File

1. Go to the `writechoiceorg/weglot-test` repository on GitHub
2. Click the "Add file" button
3. Select "Create new file"
4. Name the file: `weglot-test.js`
5. Add this code to the file:

```javascript
Weglot.initialize({
    api_key: 'wg_d6ed8d202a37cf434ec7e7d7eb7ae1770'
});
```

6. Scroll down and click "Commit new file"
7. Leave the commit message as is or add a description
8. Click "Commit new file" to save

### Step 2: Enable GitHub Pages

1. In the same repository, click on "Settings" (top menu)
2. Scroll down to "Pages" in the left sidebar
3. Under "Source", select "Deploy from a branch"
4. Choose "main" branch
5. Select "/ (root)" folder
6. Click "Save"

### Step 3: Wait for GitHub Pages to Publish

Wait 1-2 minutes for GitHub Pages to publish your file. The script will be available at:

`https://writechoiceorg.github.io/weglot-test/weglot-test.js`

## How to Use the Script

To use this script in a website, add these two lines to your HTML:

```html
<script type="text/javascript" src="https://cdn.weglot.com/weglot.min.js"></script>
<script type="text/javascript" src="https://writechoiceorg.github.io/weglot-test/weglot-test.js"></script>
```

Add both lines before the closing `</body>` tag of your HTML page.

## That's It!

The script is now ready to use. The Weglot translation service will work on any website where you add these script tags.

