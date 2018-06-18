package online.shop.model.database;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="user_basket")
public class UserBasket {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idx;

    @Column(nullable = false, length = 20)
    private String user_id;

    private int product_idx;

    @Column(nullable = false, updatable = false)
    @CreationTimestamp
    private Date create_date;

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

    public int getProduct_idx() {
        return product_idx;
    }

    public void setProduct_idx(int product_idx) {
        this.product_idx = product_idx;
    }

    public Date getCreate_date() {
        return create_date;
    }

    public void setCreate_date(Date create_date) {
        this.create_date = create_date;
    }
}
