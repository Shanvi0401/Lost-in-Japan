let image = ["https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/4:3/w_5332,h_3999,c_limit/tokyoGettyImages-1031467664.jpeg","https://d36tnp772eyphs.cloudfront.net/blogs/1/2018/08/Mount-Fuji.jpg","https://asset.japan.travel/image/upload/v1645000949/hiroshima/Hiroshima2202_main.jpg"];
        let n = 0;

        function display() {
            document.getElementById("image").src = image[n];
        }

        function previousPicture() {
            n--;

            if (n < 0) {
                n = image.length - 1;
            }

            display();
        }

        function nextPicture() {
            n++;

            if (n >= image.length) {
                n = 0;
            }

            display();
        }