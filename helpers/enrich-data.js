const upcMap = {
  "021130331215": {
    name: "Signature Kitchen Cut Green Beans",
    imgUrl: "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_53273c15-9f42-4aec-8464-d8234df298a8.jpg"
  },
  "631656702040": {
    name: "Six Star Elite Series Whey Isolate, Vanilla ‑ 1.5 lb canister",
    imgUrl: "https://pics.drugstore.com/prodimg/390888/450.jpg"
  },
  "021130280025": {
    name: "Safeway Kitchens Cereal Corn Flakes",
    imgUrl: "http://media.shopwell.com/gladson/00021130280025_full.jpg"
  },
  "038000219856": {
    name: "Kellogg's Apple Jack Single Serve",
    imgUrl: "http://ecx.images-amazon.com/images/I/512P635RCBL._SL160_.jpg"
  },
  "071429095236": {
    name: "Zatarain's Jambalaya Rice Mix",
    imgUrl: "https://www.riteaid.com/shop/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/0/7/071429095236.jpg"
  },
  "076808533606": {
    name: "Barilla Plus Multigrain Pasta, Penne ‑ 14.5 oz box",
    imgUrl: "https://images-na.ssl-images-amazon.com/images/I/71VsL6vavyL._SX522_.jpg"
  },
  "038000219634": {
    name: "Kellogg's Frosted Flakes Individuals, 1.2-Ounce",
    imgUrl: "http://i.ebayimg.com/00/s/NTAwWDUwMA==/z/uK4AAOSw-0xYk4z~/$_1.JPG?set_id=8800005007"
  },
  "038000219740": {
    name: "Froot Loops Cereal , 0.95 oz",
    imgUrl: "http://prod.shopwell.com/gladson/00038000219740_full.jpg"
  },
  "044000028299": {
    name: "Nabisco BelVita Breakfast Biscuits, Blueberry - 5 pack, 1.76 oz each",
    imgUrl: "https://pics.drugstore.com/prodimg/408343/450.jpg"
  },
  "016000412699": {
    name: "Nature Valley Protein Chewy Bars, Salted Caramel Nut - 5 pack, 1.42 oz bars",
    imgUrl: "http://valuepal.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/N/a/Nature_Valley_Protein_Chewy_Bars_Salted_Caramel_Nut_Pack_of_12_016000412699.jpg"
  },
  "030000012000": {
    name: "Quaker Oats - Quick 1 Minute 42.00 oz",
    imgUrl: "https://i5.walmartimages.com/asr/2cf57c16-15dc-42a5-93bf-6c30fce790e6_1.7488face2f731b96a60c7503fe142ba9.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff"
  },
  "027000490167": {
    name: "Orville Redenbacher's Gourmet Popping Corn, Movie Theater Butter - 3 pack, 8.7 oz total",
    imgUrl: "http://valuepal.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/C/2/C22463.jpg"
  },
  "021130308668": {
    name: "Safeway Bread Crumbs",
    imgUrl: "http://prod.shopwell.com/gladson/00021130308668_full.jpg"
  },
  "044000030377": {
    name: "Wheat Thins Original, 9.1-Ounce",
    imgUrl: "http://c.shld.net/rpx/i/s/i/spin/10127449/prod_ec_1566046302"
  },
  "038000635601": {
    name: "Kellogg's Corn Pops Cereal, 1.5-Ounce Single Serve Cup",
    imgUrl: "http://valuepal.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/u/bulk_kellogg_s_corn_pops_single_serve_cups_at_a_discount.jpg"
  },
  "021130283521": {
    name: "Safewat Sweet And Salty Chewy Granola Bars",
    imgUrl: "http://media.shopwell.com/gladson/00021130283521_full.jpg"
  },
  "030000041703": {
    name: "Quaker Quick Grits, Smooth & Creamy ‑ 24 oz canister",
    imgUrl: "http://target.scene7.com/is/image/Target/13331196?wid=400&hei=400"
  },
  "748927054712": {
    name: "Optimum Nutrition Gold Standard BCAA - 28 Servings Strawberry Kiwi",
    imgUrl: "https://www.a1supplements.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/g/o/gold-standard-bcaa.jpg"
  },
  "030000053003": {
    name: "Aunt Jemima Pancake And Waffle Mix",
    imgUrl: "https://www.meijer.com/assets/product_images/styles/xlarge/1001029_030000053003_A_400.jpg"
  },
  "038000219474": {
    name: "Corn Pops Cereal ‑ 0.95 oz",
    imgUrl: "http://i.ebayimg.com/00/s/NTAwWDUwMA==/z/hrQAAOSwU8hY8XTD/$_1.JPG?set_id=8800005007"
  },
}

const addProductData = (upc) => {
  if (typeof upcMap[upc] !== 'undefined') {
    return upcMap[upc];
  } else {
    return {};
  }
};

const enrichResultsResponse = (resultsObj) => {
  const enrichedResults = {};
  enrichedResults.results = resultsObj.results.map((result) => Object.assign({}, result, addProductData(result.upc)));
  return enrichedResults;
}

module.exports = {
  addProductData,
  enrichResultsResponse
}
