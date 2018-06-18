package online.shop.controller;

import online.shop.response.shop.ProductFormat;
import online.shop.service.ShopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class ShopController {

    /*
        API
        - 베스트 추천상품 조회 /shop/best/product
        - 추천상품 조회 /shop/recommend/product
        - 인기 상품 조회 /shop/popular/product
        - 특가 상품 조회 /shop/special/product
        - 공동구매 상품 조회 /shop/group/purchase/product
        - 이벤트 상품 /shop/event/product
        - 이 달의 Best 상품 /shop/best/last/month
        - 카테고리에 따른 신상품 조회 /shop/category/:category_name/product
        - 카테고리에 따른 MD 추천상품 조회 /shop/category/:category_name/recommend/product
        - 카테고리에 따른 인기상품 조회 /shop/category/:category_name/popular/product
        - 제품 상세보기 /shop/product/:{idx}
     */

    @Autowired
    ShopService shopService;

    // 베스트 추천상품 조회
    @GetMapping("/shop/best/product")
    public ProductFormat getBestProduct() { return shopService.getBestProduct(); }

}
