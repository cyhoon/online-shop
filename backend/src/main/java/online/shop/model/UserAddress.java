package online.shop.model;

import javax.persistence.*;

@Entity
@Table(name="user_address")
public class UserAddress {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long idx;

    //    @Column(name="user_id", nullable = false, length = 20)
//    private String user_id;
    @ManyToOne()
    private User user;

    @Column(name="mail_number", nullable = false, length = 45)
    private String mail_number;

    @Column(name="address", nullable = false, length = 120)
    private String address;


    public long getIdx() {
        return idx;
    }

    public void setIdx(long idx) {
        this.idx = idx;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getMail_number() {
        return mail_number;
    }

    public void setMail_number(String mail_number) {
        this.mail_number = mail_number;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}

