package com.ddi.brainwars.service.impl;

import java.util.List;

import com.ddi.brainwars.domain.entity.User;
import com.ddi.brainwars.service.FightPreparationService;
import com.ddi.brainwars.service.UsersSearchingForFight;


public class FightPreparationServiceImpl implements FightPreparationService {

	
	public void startSearchingForEnemy(User user) {
		List<User> users = UsersSearchingForFight.INSTANCE.getUsers();
		if (!users.isEmpty()) {
			
		}
		UsersSearchingForFight.INSTANCE.addUser(user);
	}
}
