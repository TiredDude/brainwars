package com.ddi.brainwars.dao.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.ddi.brainwars.domain.entity.User;

public interface UserRepository extends CrudRepository<User, Long> {

	public List<User> findByLastName(String lastName);
	
	public User findByLogin(String login);

}
