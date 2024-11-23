package com.shop.Shop.repository;

import com.shop.Shop.models.Bike;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BikeRepository extends CrudRepository<Bike, Long> {
}
