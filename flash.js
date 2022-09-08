(async function () {
    const BUSINESS_ID = "6304aa113cb8eba9248eac8d";
    let CURRENCY = "BDT";
    const LoadDataFunction = async (url) => { try { let response = await fetch(url, { method: "get", headers: { "businessid": `${BUSINESS_ID}`, } }); response = await response.json(); if (response.Error) { return console.log(response.Error) }; return response; } catch (e) { return }; };

    const getFlashProduct = await LoadDataFunction(`https://api.soppiya.com/v2.1/widget/home/flash?limit=5`);

    // display flash name
    async function displayFlashName() {
        const s0604_flash_title = document.querySelector(".s0604_flash_title");
        s0604_flash_title.innerText = `${getFlashProduct.name}`;

    };
    await displayFlashName();

    async function showFlashProduct(getFlashProduct) {
        const flashProduct = getFlashProduct.flashItems;

        for (let i = 0; i < flashProduct.length; i++) {
            const flashSinleProduct = flashProduct[i];
            console.log("flashSinleProduct", flashSinleProduct);
            let FeatureImage = `https://www.soppiya.com/media/images/${BUSINESS_ID}/item/${flashSinleProduct?.itemId}/${flashSinleProduct?.image}`;
            const s0604_flash_single_product = elementMaker("div", ["s0604_flash_single_product"]);
            s0604_flash_single_product.style.cursor = "pointer"
            const s0604_product_top_area = elementMaker("div", ["s0604_product_top_area"]);
            s0604_flash_single_product.appendChild(s0604_product_top_area);
            const s0604_product_bottom_area = elementMaker("div", ["s0604_product_bottom_area"]);
            s0604_flash_single_product.appendChild(s0604_product_bottom_area);

            const s0604_product_img_main_wrapper = elementMaker("div", ["s0604_product_img_main_wrapper"]);
            s0604_product_top_area.appendChild(s0604_product_img_main_wrapper);
            const s0604_product_img_wrapper = elementMaker("div", ["s0604_product_img_wrapper"]);
            s0604_product_img_main_wrapper.appendChild(s0604_product_img_wrapper);
            const productImage = elementMaker("img", ["s0604_product_img"]);
            s0604_product_img_wrapper.appendChild(productImage);
            setAttributes(productImage, { "src": `${FeatureImage}` });

            const s0604_product_batch_wrapper = elementMaker("div", ["s0604_product_batch_wrapper"]);
            s0604_product_top_area.appendChild(s0604_product_batch_wrapper);
            const s0604_product_sale_bacth_text_wrapper = elementMaker("div", ["s0604_product_sale_bacth_text_wrapper"]);
            s0604_product_batch_wrapper.appendChild(s0604_product_sale_bacth_text_wrapper);
            const s0604_product_sale_bacth_text = elementMaker("span", ["s0604_product_sale_bacth_text"]);
            s0604_product_sale_bacth_text.innerText = `Sale`;
            s0604_product_sale_bacth_text_wrapper.appendChild(s0604_product_sale_bacth_text);

            const s0604_wishlist_cart_icon_container = elementMaker("div", ["s0604_wishlist_cart_icon_container"]);
            s0604_product_batch_wrapper.appendChild(s0604_wishlist_cart_icon_container);
            const s0604_wishlist_cart_icon_wrapper = elementMaker("div", ["s0604_wishlist_cart_icon_wrapper"]);
            s0604_wishlist_cart_icon_wrapper.style.cursor = "pointer";
            s0604_wishlist_cart_icon_container.appendChild(s0604_wishlist_cart_icon_wrapper);
            const s0604_icon_wrapper = elementMaker("div", ["s0604_icon_wrapper"]);
            s0604_wishlist_cart_icon_wrapper.appendChild(s0604_icon_wrapper);
            const cartIcon = elementMaker("span", ["s00604_cart_icon"]);
            cartIcon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8.393" viewBox="0 0 9 8.393">
                            <g id="heart_1_" data-name="heart (1)" transform="translate(0.005 -0.917)" fill="none">
                              <path d="M6.557.917A2.4,2.4,0,0,0,4.5,2.154,2.4,2.4,0,0,0,2.433.917,2.549,2.549,0,0,0,0,3.56C0,6.1,4.1,9.032,4.278,9.157L4.5,9.31l.217-.153c.175-.124,4.281-3.058,4.281-5.6A2.549,2.549,0,0,0,6.557.917Z" stroke="none" />
                              <path d="M 2.447035312652588 1.917638778686523 C 1.612874984741211 1.969823837280273 0.9645681381225586 2.683263778686523 0.996213436126709 3.52194881439209 L 0.9969234466552734 3.559659004211426 C 0.9969234466552734 4.938243865966797 2.972673416137695 6.912189960479736 4.495524883270264 8.074406623840332 C 5.979135036468506 6.942038536071777 7.993223190307617 4.93586254119873 7.993223190307617 3.559669017791748 L 7.993933200836182 3.521958827972412 C 8.025578498840332 2.683273792266846 7.37727165222168 1.969823837280273 6.543111324310303 1.917638778686523 C 6.054772853851318 1.935474395751953 5.607262134552002 2.20957088470459 5.370003223419189 2.638238906860352 L 4.495073318481445 4.219018936157227 L 3.620143413543701 2.638238906860352 C 3.382884502410889 2.20957088470459 2.935373783111572 1.935474395751953 2.447035312652588 1.917638778686523 M 2.433423519134521 0.9169988632202148 C 3.29257345199585 0.93035888671875 4.078973293304443 1.402198791503906 4.495073318481445 2.153988838195801 C 4.911173343658447 1.402198791503906 5.697573661804199 0.93035888671875 6.556723594665527 0.9169988632202148 C 7.957483291625977 0.9778585433959961 9.046092987060547 2.158588409423828 8.993223190307617 3.559669017791748 C 8.993223190307617 6.099248886108398 4.886413097381592 9.033168792724609 4.711733341217041 9.156868934631348 L 4.495073318481445 9.310178756713867 L 4.27841329574585 9.156868934631348 C 4.103733539581299 9.032419204711914 -0.003076553344726562 6.099248886108398 -0.003076553344726562 3.559659004211426 C -0.05594635009765625 2.158588409423828 1.032673358917236 0.9778585433959961 2.433423519134521 0.9169988632202148 Z" stroke="none" fill="#000" />
                            </g>
                          </svg>
            `
            s0604_icon_wrapper.appendChild(cartIcon);
            const wishlistIcon = elementMaker("div", ["s0604_icon_wrapper"]);
            wishlistIcon.style.cursor = "pointer";
            s0604_wishlist_cart_icon_wrapper.appendChild(wishlistIcon);
            const wishlistIconSvg = elementMaker("span", ["s0604_wishlist_icon"]);
            wishlistIconSvg.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9">
                            <g id="Union_1" data-name="Union 1" fill="none" stroke-linecap="square">
                              <path d="M5.625,8.25a.75.75,0,1,1,.75.75A.75.75,0,0,1,5.625,8.25Zm-3.75,0a.75.75,0,1,1,.75.75A.75.75,0,0,1,1.875,8.25Zm.667-1.125a1.125,1.125,0,0,1-1.117-.994L.831,1.081A.375.375,0,0,0,.458.75H0V0H.458A1.125,1.125,0,0,1,1.575.994l.015.132H9l-.812,4.5H2.12l.049.419a.375.375,0,0,0,.372.331H7.5v.75Z" stroke="none" />
                              <path d="M 7.352584838867188 4.625051498413086 L 7.803488731384277 2.125211477279663 L 1.960326433181763 2.125211477279663 L 2.254527807235718 4.625051498413086 L 7.352584838867188 4.625051498413086 M 6.375 9.000020980834961 C 5.960820198059082 9.000020980834961 5.625 8.664211273193359 5.625 8.25011157989502 C 5.625 7.836001396179199 5.960820198059082 7.500191211700439 6.375 7.500191211700439 C 6.788939952850342 7.500191211700439 7.124879837036133 7.836001396179199 7.124879837036133 8.25011157989502 C 7.124879837036133 8.664211273193359 6.788939952850342 9.000020980834961 6.375 9.000020980834961 Z M 2.625 9.000020980834961 C 2.210570096969604 9.000020980834961 1.875 8.664211273193359 1.875 8.25011157989502 C 1.875 7.836001396179199 2.210570096969604 7.500191211700439 2.625 7.500191211700439 C 3.039060115814209 7.500191211700439 3.375 7.836001396179199 3.375 8.25011157989502 C 3.375 8.664211273193359 3.039060115814209 9.000020980834961 2.625 9.000020980834961 Z M 7.499879837036133 7.125231266021729 L 2.541630029678345 7.125231266021729 C 1.971680045127869 7.12489128112793 1.491580009460449 6.697961330413818 1.424929976463318 6.131641387939453 L 0.8305699825286865 1.08134138584137 C 0.8082299828529358 0.8923414349555969 0.6483200192451477 0.7502514719963074 0.4582499861717224 0.7502514719963074 L 0 0.7502514719963074 L 0 1.444091822122573e-06 L 0.4582499861717224 1.444091822122573e-06 C 1.028319954872131 0.0003414441016502678 1.508299946784973 0.4272814393043518 1.575070023536682 0.9936014413833618 L 1.590450048446655 1.125211477279663 L 9 1.125211477279663 L 8.188349723815918 5.625051498413086 L 2.119999885559082 5.625051498413086 L 2.169430017471313 6.043551445007324 C 2.191410064697266 6.232551574707031 2.351320028305054 6.37498140335083 2.541630029678345 6.37498140335083 L 7.499879837036133 6.37498140335083 L 7.499879837036133 7.125231266021729 Z" stroke="none" fill="#000" />
                            </g>
                          </svg>
            `
            wishlistIcon.appendChild(wishlistIconSvg);

            // product bottom area
            const s0604_product_name_wrapper = elementMaker("div", ["s0604_product_name_wrapper"]);
            s0604_product_bottom_area.appendChild(s0604_product_name_wrapper);
            const s0604_product_name = elementMaker("span", ["s0604_product_name"]);
            s0604_product_name.innerText = `${flashSinleProduct.name}`;
            s0604_product_name_wrapper.appendChild(s0604_product_name);

            const s0604_product_variant_wrapper = elementMaker("div", ["s0604_product_variant_wrapper"]);
            s0604_product_bottom_area.appendChild(s0604_product_variant_wrapper);
            const s0604_product_variant = elementMaker("div", ["s0604_product_variant"]);
            if (flashSinleProduct.variationName) {
                s0604_product_variant.textContent = `${flashSinleProduct?.variationName}`;
                s0604_product_variant_wrapper.appendChild(s0604_product_variant);
            };

            const s0604_product_price_wrapper = elementMaker("div" , ["s0604_product_price_wrapper"]);
            s0604_product_bottom_area.appendChild(s0604_product_price_wrapper);
            const s0604_product_old_price_wrapper = elementMaker("div" , ["s0604_product_old_price_wrapper"]);
            s0604_product_price_wrapper.appendChild(s0604_product_old_price_wrapper);
            const s0604_product_old_price = elementMaker("div" , ["s0604_product_old_price","s0604_old_price_delete"]);
            s0604_product_old_price.textContent = ` ${CURRENCY} ${flashSinleProduct.price}`;
            s0604_product_old_price_wrapper.appendChild(s0604_product_old_price);
            const s0604_product_new_price_wrapper = elementMaker("div" , ["s0604_product_new_price_wrapper"]);
            s0604_product_price_wrapper.appendChild(s0604_product_new_price_wrapper);
            const s0604_product_new_price = elementMaker("span" , ["s0604_product_new_price"]);
            s0604_product_new_price.textContent = `${CURRENCY} ${flashSinleProduct.flashPrice}`
            s0604_product_new_price_wrapper.appendChild(s0604_product_new_price);





























            document.querySelector(".s0604_flash_product_wrapper").appendChild(s0604_flash_single_product)
        }

    }
    await showFlashProduct(getFlashProduct);

    function elementMaker(name, className, id) {
        try {
            let element = document.createElement(name);
            className && (element.className = className.join(" "));
            id && (element.id = id);
            return element;
        } catch (err) { };
    };
    function setAttributes(elementName, allAttributes) {
        for (let key in allAttributes) {
            elementName.setAttribute(key, allAttributes[key]);
        };
    };



})();