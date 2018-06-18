package online.shop.service;

import online.shop.response.shop.ProductFormat;

public interface ShopService {
    public ProductFormat getBestProduct();
    public ProductFormat getRecommendProduct();
    public ProductFormat getPopularProduct();
    public ProductFormat getSpecialProduct();
    public ProductFormat getGroupPurchaseProduct();
    public ProductFormat getEventProduct();
    public ProductFormat getLastMonthBestProduct();
}
