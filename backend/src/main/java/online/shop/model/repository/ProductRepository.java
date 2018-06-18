package online.shop.model.repository;

import online.shop.model.join.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ProductRepository extends JpaRepository<Product, Integer> {
    String bestProductQuery = "SELECT * FROM ";

    Product findByBestProduct();
}
