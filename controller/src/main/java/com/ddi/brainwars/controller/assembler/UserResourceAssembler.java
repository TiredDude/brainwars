package com.ddi.brainwars.controller.assembler;

import org.springframework.hateoas.mvc.ResourceAssemblerSupport;
import org.springframework.stereotype.Component;

import com.ddi.brainwars.controller.api.UsersController;
import com.ddi.brainwars.domain.entity.User;
import com.ddi.brainwars.domain.resource.UserResource;

@Component
public class UserResourceAssembler extends ResourceAssemblerSupport<User, UserResource> {

	public UserResourceAssembler() {
	    super(UsersController.class, UserResource.class);
	  }
	
	@Override
	public UserResource toResource(User user) {
		UserResource resource = createResourceWithId(user.getUserId(), user);
		resource.setUserId(user.getUserId());
		resource.setLogin(user.getLogin());
		resource.setEmailAddress(user.getEmailAddress());
		resource.setFirstName(user.getFirstName());
		resource.setLastName(user.getLastName());
		return resource;
	}

	@Override
	protected UserResource instantiateResource(User entity) {
		return new UserResource();
	}
	
	
	
}
