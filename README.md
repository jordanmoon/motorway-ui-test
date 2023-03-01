# Set up

This repo is a slightly modified Create React App and an Express server which serves a JSON feed of images.

- Clone the repo and run `npm install`

- `npm run serve` will run the server

- in another terminal window `npm run start` will start CRA

After this, CRA will open a tab with the app running, usually `localhost:3000`. If you look in `src/App.js` you'll see the API call to the server is already made and will console log out the results.

# Jordan's notes
Hey there 👋

## Browser of choice
Chrome please!

## Tailwind

I appreciate that you may of had some candidates that are only capable of using TailwindCSS. I have tons of experience with vanilla CSS as well as SASS! I opted for TailwindCSS as I find it much faster to develop with. I'd be more than happy to share code that uses SASS if you'd like 😃

## Improvments

**Image sizes**
If this were a real world scenario, we'd absolutely have to have various image sizes. Apologies if i'm mistaken, but I don't believe S3 allows query parameters for sizing? It'd be much better to get this type of thing setup! For example we could render images like so:

```
<figure>
    <picture class="image__image">
    <img 
      sizes="(min-width: 1024px) 33.33vw, (min-width: 768px) 50vw, 100vw"
      alt="Some alt text" 
    srcset="https://motorway-ui-test.s3.eu-west-2.amazonaws.com/car-images/m3m-lnR90uM.jpg?width=600 600w, https://motorway-ui-test.s3.eu-west-2.amazonaws.com/car-images/m3m-lnR90uM.jpg?width=1000 1000w, https://motorway-ui-test.s3.eu-west-2.amazonaws.com/car-images/m3m-lnR90uM.jpg?width=1400 1400w, https://motorway-ui-test.s3.eu-west-2.amazonaws.com/car-images/m3m-lnR90uM.jpg?width=1800 1800w, https://motorway-ui-test.s3.eu-west-2.amazonaws.com/car-images/m3m-lnR90uM.jpg?width=2200 2200w">
  </picture>
</figure>
```

**Modal Query**
It'd be nice to set this up a query like `/cars?id=12332423' when you open an image in full size. Would be much nicer for sharing, refreshing etc.

**TypeScript**
I'd love to have used TypeScript here! It felt odd not being yelled at by linting 😂


