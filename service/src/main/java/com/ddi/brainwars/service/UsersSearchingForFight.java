package com.ddi.brainwars.service;

import java.util.List;

import com.ddi.brainwars.domain.entity.User;

public enum UsersSearchingForFight {
	
	INSTANCE;
	
	private List<User> users;

	public List<User> getUsers() {
		return users;
	}
	
	public void addUser(User user) {
		users.add(user);
	}
}
