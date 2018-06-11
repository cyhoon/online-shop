package online.shop.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface AuthRepository extends JpaRepository<User, String> {
    User findAllByIdAndPw(String id, String pw);

    @Query(value = "SELECT * FROM User WHERE id = :id AND pw = :pw", nativeQuery = true)
    User findByAccount(@Param("id") String id, @Param("pw") String pw);
}
