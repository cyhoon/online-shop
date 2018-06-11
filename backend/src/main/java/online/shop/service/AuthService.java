package online.shop.service;

import online.shop.model.User;
import online.shop.response.GeneralFormat;

public interface AuthService {
    public GeneralFormat login(User user);
    public GeneralFormat register(User user);
}
