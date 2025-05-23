package com.skilldistillery.sleep.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.sleep.entities.User;
import com.skilldistillery.sleep.services.SleepTrackerService;

import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("api")
public class SleepTrackerController {
	
	@Autowired
	private SleepTrackerService sleepTrackService;
	
	@GetMapping("users/{userId}")
	public User findById(@PathVariable("userId") int userId, HttpServletResponse res) {
		User user = sleepTrackService.findById(userId);
		if(user == null) {
			res.setStatus(HttpServletResponse.SC_NOT_FOUND);
		}
		return user;
	}

}
