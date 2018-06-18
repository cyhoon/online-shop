package online.shop.model.database;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="user")
public class User{
    @Id
    @Column(name="id", nullable = false, length = 20)
    private String id;

    @Column(name="pw", nullable = false, length=200)
    private String pw;

    @Column(name="name", nullable = false, length=45)
    private String name;

    @Column(name="home_number", nullable = false, length=30)
    private String home_number;

    @Column(name="phone_number", nullable = false, length=30)
    private String phone_number;

    @Column(name="email", nullable = false, length=45)
    private String email;

    @Column(nullable = true, columnDefinition="INT DEFAULT 0")
    private int mileage;

    @OneToMany(mappedBy = "user")
    private List<UserAddress> userAddresses;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPw() {
        return pw;
    }

    public void setPw(String pw) {
        this.pw = pw;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getHome_number() {
        return home_number;
    }

    public void setHome_number(String home_number) {
        this.home_number = home_number;
    }

    public String getPhone_number() {
        return phone_number;
    }

    public void setPhone_number(String phone_number) {
        this.phone_number = phone_number;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getMileage() {
        return mileage;
    }

    public void setMileage(int mileage) {
        this.mileage = mileage;
    }

    public List<UserAddress> getUserAddresses() {
        return userAddresses;
    }

    public void setUserAddresses(List<UserAddress> userAddresses) {
        this.userAddresses = userAddresses;
    }
}
