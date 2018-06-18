package online.shop.service;

import online.shop.response.shop.ProductFormat;
import org.springframework.stereotype.Service;

@Service
public class ShopServiceImpl implements ShopService{
    @Override
    public ProductFormat getBestProduct() {
        /**
         * 베스트 추천상품 조회 /shop/best/product
         * */
        ProductFormat productFormat = new ProductFormat();
        return productFormat;
    }

    @Override
    public ProductFormat getRecommendProduct() {
        return null;
    }

    @Override
    public ProductFormat getPopularProduct() {
        return null;
    }

    @Override
    public ProductFormat getSpecialProduct() {
        return null;
    }

    @Override
    public ProductFormat getGroupPurchaseProduct() {
        return null;
    }

    @Override
    public ProductFormat getEventProduct() {
        return null;
    }

    @Override
    public ProductFormat getLastMonthBestProduct() {
        return null;
    }
}
