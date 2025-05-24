package com.skilldistillery.sleep.services;

import com.skilldistillery.sleep.entities.User;

public interface UserService {
	
	User findById(int id);
	User findByUsername(String username);

}
