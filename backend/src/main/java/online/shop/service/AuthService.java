package online.shop.service;

import online.shop.model.database.User;
import online.shop.response.GeneralFormat;
import online.shop.response.auth.LoginFormat;

public interface AuthService {
    public LoginFormat login(User user);
    public GeneralFormat register(User user);
}
