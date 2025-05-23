package com.skilldistillery.sleep.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.sleep.entities.User;
import com.skilldistillery.sleep.repositories.SleepTrackerRepository;

@Service
public class SleepTrackerServiceImpl implements SleepTrackerService{
	
	@Autowired
	private SleepTrackerRepository sleepRepo;
	
	@Override
	public User findById(int id) {
		return sleepRepo.findById(id).orElse(null);
	}

}
