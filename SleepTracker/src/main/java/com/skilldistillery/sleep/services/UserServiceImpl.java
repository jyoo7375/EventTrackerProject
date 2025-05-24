package com.skilldistillery.sleep.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.sleep.entities.SleepLog;
import com.skilldistillery.sleep.entities.User;
import com.skilldistillery.sleep.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserRepository userRepo;
	
	@Override
	public User findById(int id) {
		return userRepo.findById(id).orElse(null);
	}

	@Override
	public User findByUsername(String username) {
		return userRepo.findByUsername(username);
	}

}
