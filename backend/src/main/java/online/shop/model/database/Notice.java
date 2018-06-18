package online.shop.model.database;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="notice")
public class Notice {
    @Id
    @Column(name="idx", nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long idx;

    @Column(name="user_id", nullable = false,  length = 20)
    private String user_id;

    @Column(name="title", nullable = false, length = 45)
    private String title;

    @Column(name="content", nullable = false, length = 255)
    private String content;

    @Column(name="create_date", nullable = false, updatable = false)
    @CreationTimestamp
    private Date create_date;

    public long getIdx() {
        return idx;
    }

    public void setIdx(long idx) {
        this.idx = idx;
    }

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getCreate_date() {
        return create_date;
    }

    public void setCreate_date(Date create_date) {
        this.create_date = create_date;
    }
}
