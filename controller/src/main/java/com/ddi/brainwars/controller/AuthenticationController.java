package com.ddi.brainwars.controller;

import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.ddi.brainwars.service.repository.UserService;

/**
 * Handles authentication requests.
 */
@Controller
public class AuthenticationController {

	private static final Logger logger = LoggerFactory
			.getLogger(AuthenticationController.class);

	@RequestMapping(value = "/login")
	public String login(Locale locale, Model model) {

		return "login";
	}

}
