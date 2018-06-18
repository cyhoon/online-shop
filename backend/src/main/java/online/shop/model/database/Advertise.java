package online.shop.model.database;

import javax.persistence.*;

@Entity
@Table(name="advertise")
public class Advertise {
    @Id
    @Column(name="idx", nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long idx;

    @Column(name="url", nullable = false, length=120)
    private String url;

    @Column(name="image_path", nullable = false, length=120)
    private String image_path;

    public long getIdx() {
        return idx;
    }

    public void setIdx(long idx) {
        this.idx = idx;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getImage_path() {
        return image_path;
    }

    public void setImage_path(String image_path) {
        this.image_path = image_path;
    }
}
