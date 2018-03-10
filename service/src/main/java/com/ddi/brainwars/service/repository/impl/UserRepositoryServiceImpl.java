package com.ddi.brainwars.service.repository.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ddi.brainwars.dao.repository.UserRepository;
import com.ddi.brainwars.domain.entity.User;
import com.ddi.brainwars.service.repository.UserService;

@Service
public class UserRepositoryServiceImpl implements UserService {

	@Resource
	UserRepository userRepository;

	@Override
	@Transactional(readOnly = true)
	public Iterable<User> findAll() {
		return userRepository.findAll();
	}

	@Override
	@Transactional(readOnly = true)
	public List<User> findByLastName(String lastName) {
		return userRepository.findByLastName(lastName);
	}

	@Override
	@Transactional(readOnly = true)
	public User findOne(Long id) {
		return userRepository.findOne(id);
	}

	@Override
	@Transactional(readOnly = true)
	public User findByLogin(String login) {
		return userRepository.findByLogin(login);
	}

	@Override
	@Transactional
	public User save(User user) {
		return userRepository.save(user);
	}

	@Override
	@Transactional
	public void delete(Long userId) {
		userRepository.delete(userId);
	}

}
