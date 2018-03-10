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
 * Handles requests for the application home page.
 */
@Controller
public class MainController {

	private static final Logger LOG = LoggerFactory
			.getLogger(MainController.class);

	@Autowired
	private UserService userService;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String index(Locale locale, Model model) {
		return "home";
	}

	@RequestMapping(value = "/shadows", method = RequestMethod.GET)
	public String game(Locale locale, Model model) {
		return "content/shadows";
	}

	@RequestMapping(value = "/graveyard", method = RequestMethod.GET)
	public String news(Locale locale, Model model) {
		return "content/graveyard";
	}

	@RequestMapping(value = "/tamnple", method = RequestMethod.GET)
	public String community(Locale locale, Model model) {
		return "content/tample";
	}

	@RequestMapping(value = "/tavern", method = RequestMethod.GET)
	public String forum(Locale locale, Model model) {
		return "content/tavern";
	}

	@RequestMapping(value = "/market", method = RequestMethod.GET)
	public String market(Locale locale, Model model) {
		return "content/market";
	}

	@RequestMapping(value = "/api", method = RequestMethod.GET)
	public String api() {
		return "api";
	}

}
