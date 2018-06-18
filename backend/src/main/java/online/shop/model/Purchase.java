package online.shop.model;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="purchase")
public class Purchase {
    @Id
    @Column(name="idx", nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idx;

    @Column(length = 20)
    private String user_id;

    private int user_address_idx;
    private int product_idx;
    private int money;

    @Column(nullable = false, updatable = false)
    @CreationTimestamp
    private Date purchase_date;

    public int getIdx() {
        return idx;
    }

    public void setIdx(int idx) {
        this.idx = idx;
    }

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public int getUser_address_idx() {
        return user_address_idx;
    }

    public void setUser_address_idx(int user_address_idx) {
        this.user_address_idx = user_address_idx;
    }

    public int getProduct_idx() {
        return product_idx;
    }

    public void setProduct_idx(int product_idx) {
        this.product_idx = product_idx;
    }

    public int getMoney() {
        return money;
    }

    public void setMoney(int money) {
        this.money = money;
    }

    public Date getPurchase_date() {
        return purchase_date;
    }

    public void setPurchase_date(Date purchase_date) {
        this.purchase_date = purchase_date;
    }
}
