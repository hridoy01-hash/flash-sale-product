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
        const flashProduct = getFlashProduct.flashItems
        console.log("flashProduct", flashProduct);

        for (let i = 0; i < flashProduct.length; i++) {
            const flashSinleProduct = flashProduct[i];

            const s0604_flash_single_product = elementMaker("div", ["s0604_flash_single_product"]);
            const s0604_product_top_area = elementMaker("div" , ["s0604_product_top_area"]);
            s0604_flash_single_product.appendChild(s0604_product_top_area);
            const s0604_product_bottom_area = elementMaker("div" , ["s0604_product_bottom_area"]);
            s0604_flash_single_product.appendChild(s0604_product_bottom_area);
            





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