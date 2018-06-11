package online.shop.service;

import online.shop.model.AuthRepository;
import online.shop.model.User;
import online.shop.response.GeneralFormat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private AuthRepository authRepository;

    @Override
    public GeneralFormat login(User user) {
        GeneralFormat generalFormat = new GeneralFormat();

        Optional<User> raw = authRepository.findById(user.getId());

        if (!raw.isPresent()) { // 로그인 실패
            generalFormat.setCode(10);
            generalFormat.setDescription("로그인 실패");
        } else {
            generalFormat.setCode(0);
            generalFormat.setDescription("로그인 성공");
        }

        return generalFormat;
    }

    @Override
    public GeneralFormat register(User user) {
        GeneralFormat generalFormat = new GeneralFormat();
        generalFormat.setCode(0);

        authRepository.save(user);

        return generalFormat;
    }
}
