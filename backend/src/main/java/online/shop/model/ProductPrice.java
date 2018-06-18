package online.shop.model;

import javax.persistence.*;

@Entity
@Table(name="product_price")
public class ProductPrice {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idx;

    private int product_idx;
    private int market_price;
    private int sale_price;
    private boolean sale;

    public int getIdx() {
        return idx;
    }

    public void setIdx(int idx) {
        this.idx = idx;
    }

    public int getProduct_idx() {
        return product_idx;
    }

    public void setProduct_idx(int product_idx) {
        this.product_idx = product_idx;
    }

    public int getMarket_price() {
        return market_price;
    }

    public void setMarket_price(int market_price) {
        this.market_price = market_price;
    }

    public int getSale_price() {
        return sale_price;
    }

    public void setSale_price(int sale_price) {
        this.sale_price = sale_price;
    }

    public boolean isSale() {
        return sale;
    }

    public void setSale(boolean sale) {
        this.sale = sale;
    }
}
