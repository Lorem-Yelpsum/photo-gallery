module.exports = (restaurantId) => `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <title>Lorem-yelpsum</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <div id="gallery">this should disappear</div>
        <script src="/bundle.js"></script>
        <script>
            ReactDOM.render(
            React.createElement(Gallery, {restaurantId: ${restaurantId}}, null),
            document.getElementById('gallery')
            );
        </script>
    </body>
    </html>
    `