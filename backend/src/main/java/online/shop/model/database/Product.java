package online.shop.model.database;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="product")
public class Product {
    @Id
    @Column(name="idx", nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idx;

    @Column(name="category_type", nullable=false, length = 50)
    private String category_type;

    @Column(name="name", nullable=false, length = 80)
    private String name;

    @Column(name="content", nullable=false, length = 250)
    private String content;

    @Column(name="company", nullable=false, length = 80)
    private String company;

    @Column(name="view", columnDefinition = "int default 0")
    private int view;

    @Column(name="purchase_count", columnDefinition = "int default 0")
    private int purchase_count;

    @Column(name="event", columnDefinition = "int default 0")
    private int event;

    @Column(name="create_date", nullable = false, updatable = false)
    @CreationTimestamp
    private Date create_date;

    public Long getIdx() {
        return idx;
    }

    public void setIdx(Long idx) {
        this.idx = idx;
    }

    public String getCategory_type() {
        return category_type;
    }

    public void setCategory_type(String category_type) {
        this.category_type = category_type;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public int getView() {
        return view;
    }

    public void setView(int view) {
        this.view = view;
    }

    public int getPurchase_count() {
        return purchase_count;
    }

    public void setPurchase_count(int purchase_count) {
        this.purchase_count = purchase_count;
    }

    public int getEvent() {
        return event;
    }

    public void setEvent(int event) {
        this.event = event;
    }

    public Date getCreate_date() {
        return create_date;
    }

    public void setCreate_date(Date create_date) {
        this.create_date = create_date;
    }
}