package com.ddi.brainwars.controller.api;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ddi.brainwars.controller.assembler.UserResourceAssembler;
import com.ddi.brainwars.domain.entity.User;
import com.ddi.brainwars.domain.resource.UserResource;
import com.ddi.brainwars.service.repository.UserService;

@RestController
@RequestMapping(value = "api/users")
public class UsersController {

	private static final Logger logger = LoggerFactory
			.getLogger(UsersController.class);

	@Autowired
	private UserService userService;

	@Autowired
	private UserResourceAssembler userResourceAssembler;
	
	@RequestMapping(method=RequestMethod.GET, value="/", produces = {MediaType.APPLICATION_JSON_VALUE})
	private List<UserResource> getUsers() {
		Iterable<User> users = userService.findAll();
		List<UserResource> resources = userResourceAssembler.toResources(users);
		return resources;
	}
	
	@RequestMapping(method=RequestMethod.GET, value="/{userId}", produces = {MediaType.APPLICATION_JSON_VALUE})
	private UserResource getUser(@PathVariable Long userId) {
		User user = userService.findOne(userId);
		UserResource resource = userResourceAssembler.toResource(user);
		return resource;
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/{userId}")
	private void deleteUser(@PathVariable Long userId) {
		userService.delete(userId);
	}
}
