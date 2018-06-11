package online.shop.response.auth;

import online.shop.model.User;
import online.shop.response.GeneralFormat;

public class LoginFormat extends GeneralFormat {
    User user;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
