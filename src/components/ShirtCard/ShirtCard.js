import React from "react";
import "./ShirtCard.css";
export default function ShirtCard() {
    var obj = {
        landingPageUrl:
            "Shirts/Arrow-New-York/Arrow-New-York-Men-Blue-Slim-Fit-Checked-Cotton-Formal-Shirt/17222852/buy",
        loyaltyPointsEnabled: false,
        adId: "",
        isPLA: false,
        productId: 17222852,
        product: "Arrow New York Men Blue Slim Fit Checked Cotton Formal Shirt",
        productName:
            "Arrow New York Men Blue Slim Fit Checked Cotton Formal Shirt",
        rating: 4.066666603088379,
        ratingCount: 15,
        isFastFashion: true,
        futureDiscountedPrice: 0,
        futureDiscountStartDate: "",
        discount: 1250,
        brand: "Arrow New York",
        searchImage:
            "http://assets.myntassets.com/assets/images/17222852/2022/2/23/a40934d0-6068-48e7-acd1-63a84126124c1645625086262ArrowNewYorkMenBlueSlimFitCheckedCottonFormalShirt1.jpg",
        effectiveDiscountPercentageAfterTax: 0,
        effectiveDiscountAmountAfterTax: 0,
        buyButtonWinnerSkuId: 53142022,
        buyButtonWinnerSellerPartnerId: 6262,
        relatedStylesCount: 0,
        relatedStylesType: "",
        productVideos: [],
        inventoryInfo: [
            {
                skuId: 53142022,
                label: "42",
                inventory: 1,
                available: true,
            },
        ],
        sizes: "38,39,40,42,44,46,48,50,52",
        images: [
            {
                view: "default",
                src: "http://assets.myntassets.com/assets/images/17222852/2022/2/23/a40934d0-6068-48e7-acd1-63a84126124c1645625086262ArrowNewYorkMenBlueSlimFitCheckedCottonFormalShirt1.jpg",
            },
            { view: "size_representation", src: "" },
            {
                view: "top",
                src: "http://assets.myntassets.com/assets/images/17222852/2022/2/23/f6392946-5d93-4046-88d4-e0f26e7edd8b1645625086307ArrowNewYorkMenBlueSlimFitCheckedCottonFormalShirt6.jpg",
            },
            {
                view: "front",
                src: "http://assets.myntassets.com/assets/images/17222852/2022/2/23/a3d52f2e-c911-4d55-9478-80d5c2fc9ede1645625086272ArrowNewYorkMenBlueSlimFitCheckedCottonFormalShirt2.jpg",
            },
            {
                view: "right",
                src: "http://assets.myntassets.com/assets/images/17222852/2022/2/23/778a1689-0b14-4fe8-8f3d-506e8c54cc5e1645625086290ArrowNewYorkMenBlueSlimFitCheckedCottonFormalShirt4.jpg",
            },
            {
                view: "left",
                src: "http://assets.myntassets.com/assets/images/17222852/2022/2/23/0e6e5ed7-1cff-4a02-be2f-873794c4f2821645625086299ArrowNewYorkMenBlueSlimFitCheckedCottonFormalShirt5.jpg",
            },
            {
                view: "bottom",
                src: "http://assets.myntassets.com/assets/images/17222852/2022/2/23/25be7898-418d-4906-9217-b41ac230b6461645625086316ArrowNewYorkMenBlueSlimFitCheckedCottonFormalShirt7.jpg",
            },
            {
                view: "back",
                src: "http://assets.myntassets.com/assets/images/17222852/2022/2/23/5d37ba47-8bda-4e6e-bed5-7d2cbe4572e31645625086281ArrowNewYorkMenBlueSlimFitCheckedCottonFormalShirt3.jpg",
            },
            {
                view: "search",
                src: "http://assets.myntassets.com/assets/images/17222852/2022/2/23/a40934d0-6068-48e7-acd1-63a84126124c1645625086262ArrowNewYorkMenBlueSlimFitCheckedCottonFormalShirt1.jpg",
            },
        ],
        gender: "Men",
        primaryColour: "Blue",
        discountLabel: "Flat_Search_Percent",
        discountDisplayLabel: "(50% OFF)",
        additionalInfo: "Slim Fit Formal Shirt",
        category: "Shirts",
        mrp: 2499,
        price: 1249,
        advanceOrderTag: "",
        colorVariantAvailable: false,
        productimagetag: "",
        listViews: 0,
        discountType: "1",
        tdBxGyText: "",
        catalogDate: "1645660800000",
        season: "Spring",
        year: "2022",
        isPersonalised: false,
        eorsPicksTag: "",
        personalizedCoupon: "",
        personalizedCouponValue: 0,
        productMeta: "",
        systemAttributes: [
            { attribute: "VTR_Available", value: "Yes", metaInfo: "" },
        ],
        attributeTagsPriorityList: [],
        preferredDeliveryTag: "",
        deliveryPromise: "",
        expressTags: [],
        couponData: {
            couponDiscount: 221,
            endDate: "1679855400000",
            tagLink: "https://www.myntra.com/online-fashion-store",
            couponDescription: {
                description: "{bestPriceText} {bestPrice} with coupon",
                couponCode: "MYNTRA300",
                bestPrice: 1028,
                bestPriceText: "Best Price",
                templateInfo: {
                    templateName: "template1",
                    attributes: {
                        couponDiscount: "",
                        couponCode: "identifier1",
                        bestPrice: "identifier1",
                        bestPriceText: "identifier1",
                    },
                },
            },
        },
        productMetaData: {
            plaSlot: false,
            plaReason: "",
            plaRank: 0,
        },
        mediaData: [],
    };

    return <div className="product-base">
      <img src={obj.images[0].src} alt=""/>
      <div className="product-details">
        <h4>{obj.brand}</h4>
        <h5>{obj.additionalInfo}</h5>
        <div className="price-part">
          <span>{}</span>
        </div>
      </div>
    </div>;
}
