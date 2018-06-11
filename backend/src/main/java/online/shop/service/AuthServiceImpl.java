package online.shop.service;

import online.shop.model.AuthRepository;
import online.shop.model.User;
import online.shop.response.GeneralFormat;
import online.shop.response.auth.LoginFormat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private AuthRepository authRepository;

    @Override
    public LoginFormat login(User user) {
        LoginFormat loginFormat = new LoginFormat();

        User raw = authRepository.findByAccount(user.getId(), user.getPw());

        if (raw == null) { // 로그인 실패
            loginFormat.setCode(10);
            loginFormat.setDescription("로그인 실패");
        } else {
            loginFormat.setCode(0);
            loginFormat.setDescription("로그인 성공");
            loginFormat.setUser(raw);
        }

        return loginFormat;
    }

    @Override
    public GeneralFormat register(User user) {
        GeneralFormat generalFormat = new GeneralFormat();
        generalFormat.setCode(0);

        authRepository.save(user);

        return generalFormat;
    }
}
